---
title: Choose AnyKernel3 or Boot Image
description: Pick the package you need and, for generic builds, match the right format.
---

## Choose AnyKernel3 or boot image

### AnyKernel3

Recommended if you already have root or custom recovery.

- Download the `-AnyKernel3.zip`.
- Example:
  `ESK-5.10.247-VNL-AnyKernel3.zip`

### Boot image

Use this if you are flashing with fastboot.

- For xaga, download `-boot.img`.
- For generic, download `-boot-<format>.img`.

Examples:

- Xaga:
  `ESK-5.10.247-VNL-boot.img`
- Generic:
  `ESK-5.10.247-VNL-boot-gz.img`

## Choose the correct kernel format for Generic Kernel

:::note[Match the stock kernel format]
You may see multiple boot image formats: `gz`, `lz4`, or `raw`.
This must match your stock boot image's kernel format.
:::

Example release assets:

```text
ESK-5.10.247-VNL-boot-gz.img
ESK-5.10.247-VNL-boot-lz4.img
ESK-5.10.247-VNL-boot-raw.img
```

## How to check your kernel format

1. Open Termux.
2. Optional: allow storage access.

```bash
termux-setup-storage
```

3. Download the script.

```bash
curl -fsSL https://raw.githubusercontent.com/ESK-Project/gki-releases/refs/heads/main/scripts/check_fmt.sh -o check_fmt.sh
```

4. Make it executable.

```bash
chmod +x check_fmt.sh
```

5. Copy your stock boot image into Termux.
6. Run:

```bash
./check_fmt.sh <path_to_stock_boot.img>
```

## Pick the matching file

- `gzip` -> `-boot-gz.img`
- `lz4` -> `-boot-lz4.img`
- `raw` -> `-boot-raw.img`
