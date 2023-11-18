# Getting Started

## Overview

This is a preset of [UnoCSS](https://unocss.dev/), which adapts the [tailwindcss-animate](https://github.com/jamiebuilds/tailwindcss-animate) TailwindCSS plugin to be compatible with UnoCSS.

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
This preset is based on is based on `@unocss/preset-wind` or `@unocss/preset-uno`, please make sure they are included in the `presets`, otherwise it won't work as expected.
:::

## Usage

In your UnoCSS config, add this preset to the `presets` option:

```ts
import { defineConfig } from 'unocss' // v0.56.0 and above required
import presetAnimations from 'unocss-preset-animations' // [!code ++]
import type { Theme } from '@unocss/preset-uno'

export default defineConfig<Theme>({
  presets: [
    presetUno(), // This must be defined before this preset
    presetAnimations() // [!code ++]
  ]
})
```

::: warning
Note that either `presetUno` or `presetWind` must be defined **before** this preset.
:::
