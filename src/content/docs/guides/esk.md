---
title: ESK Kernel Flash Guide
description: Simple guide for downloading, choosing, and flashing ESK kernels.
---

:::note[Differences between xaga kernel and generic kernel]
- Xaga releases provide gzip boot images only.
- Generic builds provide multiple boot image variants for different kernel compression formats.
- Both xaga and generic builds include stock config spoof.
:::

## Guide map

If this is your first time, read these in order:

1. [Downloads and naming](./downloads-and-naming/)
2. [Prerequisites](./prerequisites/)
3. [Choose AnyKernel3 or boot image](./choose-package/)
4. [Choose kernel flavour](./kernel-flavours/)
5. [Flashing instructions](./flashing/)
6. [Reporting issues and risk notes](./reporting-and-risk/)

## Quick path

If you already know what you need:

- Have root or custom recovery: use [AnyKernel3](./choose-package/).
- Using fastboot: use a [boot image](./choose-package/).
- Using a generic build: check the kernel compression format first.

## Downloads

- Xaga devices: [ESK xaga releases](https://github.com/ESK-Project/esk-releases/releases/latest)
- Other devices on generic 5.10: [ESK generic releases](https://github.com/ESK-Project/gki-releases/releases/latest)

## Safety reminder

Back up your stock boot image first so you can restore it if something goes wrong.
