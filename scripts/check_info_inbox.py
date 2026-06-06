#!/usr/bin/env python3
import json
import re
import subprocess
from datetime import datetime
from pathlib import Path

ROOT = Path('/opt/data/projects/income-streams/solarladegeraet-test')
CONFIG = Path('/opt/data/.config/himalaya/config.toml')
ACCOUNT = 'akku_test'
STATE_PATH = ROOT / 'mailbox' / 'inbox_state.json'
MAIL_DIR = ROOT / 'mailbox' / 'messages'
TRIAGE_PATH = ROOT / 'mailbox' / 'triage-latest.md'
HIMALAYA = '/opt/data/.local/bin/himalaya'

MAIL_DIR.mkdir(parents=True, exist_ok=True)
STATE_PATH.parent.mkdir(parents=True, exist_ok=True)


def run(*args):
    result = subprocess.run(args, capture_output=True, text=True, check=True)
    return result.stdout


def load_state():
    if STATE_PATH.exists():
        return json.loads(STATE_PATH.read_text(encoding='utf-8'))
    return {'processed_ids': [], 'last_run': None}


def save_state(state):
    STATE_PATH.write_text(json.dumps(state, ensure_ascii=False, indent=2), encoding='utf-8')


def slugify(text):
    text = text.lower()
    text = re.sub(r'[^a-z0-9]+', '-', text)
    return text.strip('-')[:60] or 'mail'


def strip_headers_body(raw):
    parts = raw.split('\n\n', 1)
    return parts[1].strip() if len(parts) > 1 else raw.strip()


def excerpt(text, limit=500):
    compact = re.sub(r'\s+', ' ', text).strip()
    return compact[:limit] + ('…' if len(compact) > limit else '')


def classify(sender, subject, body):
    hay = f"{sender} {subject} {body}".lower()
    if 'stefan' in hay or 'web.de' in hay:
        return 'owner', 'Direkt vom Owner — zeitnah lesen und ggf. beantworten.'
    if 'ionos' in hay or 'support@' in hay:
        return 'provider', 'Provider-/Systemmail — prüfen, dokumentieren und nur bei Relevanz reagieren.'
    if any(k in hay for k in ['press', 'presse', 'pr ', 'media', 'review', 'teststellung', 'kooperation', 'partner']):
        return 'press_or_partner', 'Kooperations- oder Medienbezug — Potenzial prüfen und Antwort vorbereiten.'
    if any(k in hay for k in ['noreply', 'no-reply', 'newsletter', 'unsubscribe']):
        return 'newsletter', 'Informationsmail — nur relevant, wenn sie echte Markt-/Produktinfos enthält.'
    return 'general', 'Normale Inbox-Mail — kurz priorisieren und bei Bedarf manuell nachfassen.'


def main():
    state = load_state()
    data = json.loads(run(HIMALAYA, '--config', str(CONFIG), '-o', 'json', 'envelope', 'list', '-a', ACCOUNT, '-s', '20'))
    processed = set(state.get('processed_ids', []))
    new_items = [item for item in data if item['id'] not in processed]
    # oldest first for processing
    new_items.sort(key=lambda item: item['date'])

    triage_lines = ['# Inbox-Triage akku-test.de', '']
    triage_lines.append(f'- Lauf: {datetime.now().strftime("%Y-%m-%d %H:%M:%S")}')
    triage_lines.append(f'- Neue Mails: {len(new_items)}')
    triage_lines.append('')

    out_lines = []
    for item in new_items:
        raw = run(HIMALAYA, '--config', str(CONFIG), 'message', 'read', '-a', ACCOUNT, item['id'])
        body = strip_headers_body(raw)
        sender = item.get('from', {}).get('addr') or ''
        subject = item.get('subject') or '(ohne Betreff)'
        category, action = classify(sender, subject, body)
        stamp = item['date'].replace(':', '').replace(' ', '_').replace('+', '_plus_')
        fname = f"{stamp}_{item['id']}_{slugify(subject)}.md"
        path = MAIL_DIR / fname
        content = f"# {subject}\n\n- ID: {item['id']}\n- Datum: {item['date']}\n- Von: {sender}\n- Kategorie: {category}\n- Empfohlene Aktion: {action}\n\n## Auszug\n\n{excerpt(body, 2000)}\n"
        path.write_text(content, encoding='utf-8')
        triage_lines.extend([
            f"## {subject}",
            f"- Von: {sender}",
            f"- Datum: {item['date']}",
            f"- Kategorie: {category}",
            f"- Aktion: {action}",
            f"- Datei: {path}",
            f"- Auszug: {excerpt(body, 280)}",
            ''
        ])
        out_lines.extend([
            f"• {subject}",
            f"  Von: {sender}",
            f"  Kategorie: {category}",
            f"  Aktion: {action}",
            f"  Datei: {path}",
        ])
        processed.add(item['id'])

    TRIAGE_PATH.write_text('\n'.join(triage_lines).strip() + '\n', encoding='utf-8')
    state['processed_ids'] = sorted(processed, key=lambda x: int(x) if str(x).isdigit() else str(x))[-500:]
    state['last_run'] = datetime.now().isoformat(timespec='seconds')
    save_state(state)

    if not new_items:
        return

    print('Neue Mails für info@akku-test.de erkannt und triagiert:\n')
    print('\n'.join(out_lines))
    print(f"\nTriage-Übersicht: {TRIAGE_PATH}")


if __name__ == '__main__':
    main()
