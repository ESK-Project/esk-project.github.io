---
title: Flashing Instructions
description: Flash ESK with AnyKernel3 or with a boot image.
---

## Flashing the kernel

### AnyKernel3

**From Android (kernel flasher apps):**

- [Kernel Flasher (fork)](https://github.com/fatalcoder524/KernelFlasher)
- [Horizon Kernel Flasher](https://github.com/libxzr/HorizonKernelFlasher)
- [Franco Kernel Manager](https://play.google.com/store/apps/details?id=com.franco.kernel)
- Or any other compatible tool

**Or by using recovery:**

1. Reboot the device into recovery mode.
2. Flash the package using ADB sideload or through flasher in custom recovery.

### Boot image

1. Reboot the device into fastboot mode.
2. Flash the package:

```bash
fastboot flash boot <boot image>
```

If `fastboot` can't determine the slot, or `fastboot flash boot ...` does not work, check the active slot and flash the matching one:

```bash
fastboot flash boot_a boot.img   # if slot is a
fastboot flash boot_b boot.img   # if slot is b
```

:::tip[Flash the active slot only]
Only flash the slot that matches your currently active slot.
:::
