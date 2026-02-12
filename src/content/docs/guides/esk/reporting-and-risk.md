---
title: Reporting Issues and Risk
description: What to include when reporting issues, plus a quick risk note.
---

## When reporting issues

Please include:

- Device + ROM + Android version
- Build tag or exact filename flashed
- Logs

## Useful logs

- `dmesg`
- `/sys/fs/pstore/` (`console-ramoops`, `pmsg-ramoops`, etc. if present)

## Risk note

:::caution[Flashing always has risk]
Most kernel flash problems are recoverable (bootloop -> flash stock boot), but there is always some risk. Keep stock images handy.
:::
