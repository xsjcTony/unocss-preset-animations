---
outline: [2, 3]
---


# Getting Started


## Overview

This is a preset of [UnoCSS](https://unocss.dev/) for creating beautiful animations with simple classnames.

It adapts the [tailwindcss-animate](https://github.com/jamiebuilds/tailwindcss-animate) TailwindCSS plugin to be compatible with UnoCSS but more flexible and user-friendly.


## Installation

::: code-group
```bash [npm]
npm install -D unocss-preset-animations
```
```bash [yarn]
yarn add -D unocss-preset-animations
```
```bash [pnpm]
pnpm add -D unocss-preset-animations
```
```bash [bun]
bun add -D unocss-preset-animations
```
:::

::: danger
This preset requires `unocss` version of **v0.56.0+**
:::

::: warning
This preset is based on `@unocss/preset-wind3`, please make sure it is included in the `presets`, otherwise it won't work as expected.
:::


## Usage

In your UnoCSS config, add this preset to the `presets` option:

```ts
import { defineConfig, presetWind3 } from 'unocss' // v0.56.0 or above is required [!code focus:3]
import { presetAnimations } from 'unocss-preset-animations' // [!code ++]
import type { Theme } from '@unocss/preset-wind3'
// This can also be imported from '@unocss/preset-mini', or from 'unocss':
import type { PresetWind3Theme as Theme } from 'unocss'
// [!code focus:999]

export default defineConfig<Theme>({
  presets: [
    presetWind3(), // This must be defined before this preset
    presetAnimations(/* options */) // [!code ++]
  ]
})
```

::: warning
Note that `presetWind3` must be defined ***before*** this preset.
:::


## Options

All properties are optional.

### unit

- Type: `'ms' | 's'`
- Default: `'ms'`

The unit of time options (duration and delay).

### delay

- Type: `number`

Default delay time for animations.

### direction

- Type: `'normal' | 'reverse' | 'alternate' | 'alternate-reverse'`

Default direction of animations.

### duration

- Type: `number`
- Default: `theme.duration.DEFAULT` (`150ms` if unchanged)

Default duration time for animations.

### fillMode

- Type: `'none' | 'forwards' | 'backwards' | 'both'`

Default fill mode for animations. `both` is generally useful.

### iterationCount

- Type: `number | 'infinite'`

Default iteration count for animations.

### playState

- Type: `'running' | 'paused'`

Default play state for animations.

### timingFunction

- Type: `'linear' | 'ease' | 'ease-in' | 'ease-out' | 'ease-in-out' | string`

Default timing function for animations.
