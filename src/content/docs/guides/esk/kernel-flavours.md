---
title: Choose Kernel Flavour
description: Pick the suffix you want before flashing.
---

## Kernel flavour suffix table

| Suffix | Description |
| ------ | ----------- |
| `-VNL` | No KernelSU |
| `-KSU` | KernelSU |
| `-SUSFS` | SUSFS support |
| `-LXC` | LXC support |

## Rules

- The same flavour suffixes work for both xaga and generic builds.
- They also apply to both boot images and AnyKernel3 packages.

## Examples

- KernelSU only:
  `ESK-5.10.247-KSU-AnyKernel3.zip`
- KernelSU + SUSFS:
  `ESK-5.10.247-KSU-SUSFS-AnyKernel3.zip`
- KernelSU + LXC:
  `ESK-5.10.247-KSU-LXC-AnyKernel3.zip`
- No KernelSU:
  `ESK-5.10.247-VNL-boot.img`
