---
title: Downloads and Naming
description: Download links and simple file naming examples.
---

## Downloads and naming

### For Poco X4 GT / Redmi K50i / Redmi Note 11T Pro(+) (xaga)

- Download link: [Xaga kernel releases](https://github.com/ESK-Project/esk-releases/releases/latest)
- Kernel naming format:
  `ESK-<kernel version>-<flavour>-<boot/AnyKernel3>.<img/zip>`

### For other devices (generic 5.10)

- Download link: [Generic kernel releases](https://github.com/ESK-Project/gki-releases/releases/latest)
- Kernel naming format:
  `ESK-<kernel version>-<flavour>-<boot/AnyKernel3>-<kernel format>.<img/zip>`

## Naming examples

- Xaga boot image:
  `ESK-5.10.247-VNL-boot.img`
- Xaga AnyKernel3:
  `ESK-5.10.247-VNL-AnyKernel3.zip`
- Generic gzip boot image:
  `ESK-5.10.247-VNL-boot-gz.img`
- Generic AnyKernel3:
  `ESK-5.10.247-KSU-AnyKernel3.zip`

## Notes

- Xaga releases provide gzip boot images only.
- Generic releases provide `gz`, `lz4`, and `raw` boot image variants.
