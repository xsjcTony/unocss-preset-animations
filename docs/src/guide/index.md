# Getting Started

## Overview

This is a preset of [UnoCSS](https://unocss.dev/), which adapts the [tailwindcss-animate](https://github.com/jamiebuilds/tailwindcss-animate) TailwindCSS plugin to be compatible with UnoCSS.

The original `tailwindcss-animate` plugin are consist with 2 parts, the core animations and classnames to adjust animation properties.

- The animation property classnames are included in `@unocss/preset-wind` (or `@unocss/preset-uno`), so they are removed from this preset.
- The core animations part remains as is, please refer to # TODO: link to the animations' documentation.

# TODO: link to the animations' documentation.

## Installation

::: code-group
```bash [npm]
npm install -D unocss-preset-tailwind-animate
```
```bash [yarn]
yarn add -D unocss-preset-tailwind-animate
```
```bash [pnpm]
pnpm add -D unocss-preset-tailwind-animate
```
```bash [bun]
bun add -D unocss-preset-tailwind-animate
```
:::

::: warning
This preset is based on is based on `@unocss/preset-wind` (or `@unocss/preset-uno`), please make sure they are included in the `presets`, otherwise they won't work as expected.
:::

## Usage

In your UnoCSS config, add this preset to the `presets` option:

```ts
import { defineConfig } from 'unocss'
import presetTailwindAnimate from 'unocss-preset-tailwind-animate' // [!code ++]
import type { Theme } from '@unocss/preset-uno'

export default defineConfig<Theme>({
  presets: [
    presetUno(), // This must be defined before this preset
    presetTailwindAnimate() // [!code ++]
  ]
})
```

::: warning
Note that either `presetUno` or `presetWind` must be defined before this preset.
:::
