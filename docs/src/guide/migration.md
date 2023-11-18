---
outline: [2, 3]
next: Animations
---

# Migration Guide

## tailwindcss-animate

Animations part remains as is, but way more powerful thanks to UnoCSS's [dynamic rules](https://unocss.dev/config/rules#dynamic-rules). Please refer to [Animations](/animations/).

Animation property modifiers are already supported by `@unocss/preset-wind` or `@unocss/preset-uno`, but with slightly different syntax.

### `animation-delay`

| tailwindcss-animate | unocss-preset-animations |
|---------------------|--------------------------|
| `delay-<number>`    | `animate-delay-<number>` |

```html
<button class="animate-bounce animate-delay-150">Button A</button>
<button class="animate-bounce animate-delay-300">Button B</button>
<button class="animate-bounce animate-delay-700">Button C</button>
```

### `animation-direction`

<table>
  <tr>
    <td>tailwindcss-animate</td>
    <td>unocss-preset-animations</td>
  </tr>
  <tr>
    <td rowspan="2"><code>direction-&lt;keyword&gt;</code></td>
    <td><code>animate-&lt;keyword&gt;</code></td>
  </tr>
  <tr>
    <td><code>animate-direction-&lt;keyword&gt;</code></td>
  </tr>
</table>

```html
<button class="animate-bounce animate-normal">Button A</button>
<button class="animate-bounce animate-reverse">Button B</button>
<button class="animate-bounce animate-alternate">Button C</button>
<button class="animate-bounce animate-alternate-reverse">Button D</button>

<button class="animate-bounce animate-direction-normal">Button E</button>
```

### `animation-duration`

| tailwindcss-animate | unocss-preset-animations    |
|---------------------|-----------------------------|
| `duration-<number>` | `animate-duration-<number>` |

```html
<button class="animate-bounce animate-duration-150">Button A</button>
<button class="animate-bounce animate-duration-300">Button B</button>
<button class="animate-bounce animate-duration-700">Button C</button>
```

::: tip
If no `animation-duration` is defined, it will fall back to `theme.duration.DEFAULT`.

The value `150ms` by default if unchanged, see [unocss/packages/preset-mini/src/_theme/misc.ts at main · unocss/unocss](https://github.com/unocss/unocss/blob/efdc358897a308323e1d943dd0f7c13e344e1495/packages/preset-mini/src/_theme/misc.ts#L37)
:::

### `animation-fill-mode`

<table>
  <tr>
    <td>tailwindcss-animate</td>
    <td>unocss-preset-animations</td>
  </tr>
  <tr>
    <td rowspan="4"><code>fill-mode-&lt;keyword&gt;</code></td>
    <td><code>animate-&lt;keyword&gt;</code></td>
  </tr>
  <tr>
    <td><code>animate-fill-&lt;keyword&gt;</code></td>
  </tr>
  <tr>
    <td><code>animate-mode-&lt;keyword&gt;</code></td>
  </tr>
  <tr>
    <td><code>animate-fill-mode-&lt;keyword&gt;</code></td>
  </tr>
</table>

```html
<button class="animate-bounce animate-none">Button A</button>
<button class="animate-bounce animate-forwards">Button B</button>
<button class="animate-bounce animate-backwards">Button C</button>
<button class="animate-bounce animate-both">Button D</button>

<button class="animate-bounce animate-fill-none">Button E</button>
<button class="animate-bounce animate-mode-none">Button F</button>
<button class="animate-bounce animate-fill-mode-none">Button G</button>
```

### `animation-iteration-count`

<table>
  <tr>
    <td>tailwindcss-animate</td>
    <td>unocss-preset-animations</td>
  </tr>
  <tr>
    <td rowspan="3"><code>repeat-&lt;number|keyword&gt;</code></td>
    <td><code>animate-iteration-&lt;number|keyword&gt;</code></td>
  </tr>
  <tr>
    <td><code>animate-count-&lt;number|keyword&gt;</code></td>
  </tr>
  <tr>
    <td><code>animate-iteration-count-&lt;number|keyword&gt;</code></td>
  </tr>
</table>

```html
<button class="animate-bounce animate-iteration-0">Button A</button>
<button class="animate-bounce animate-iteration-1">Button B</button>
<button class="animate-bounce animate-iteration-infinite">Button C</button>

<button class="animate-bounce animate-count-0">Button D</button>
<button class="animate-bounce animate-iteration-count-0">Button E</button>
```

### `animation-play-state`

<table>
  <tr>
    <td>tailwindcss-animate</td>
    <td>unocss-preset-animations</td>
  </tr>
  <tr>
    <td rowspan="4"><code>running</code> / <code>paused</code></td>
    <td><code>animate-&lt;keyword&gt;</code></td>
  </tr>
  <tr>
    <td><code>animate-play-&lt;keyword&gt;</code></td>
  </tr>
  <tr>
    <td><code>animate-state-&lt;keyword&gt;</code></td>
  </tr>
  <tr>
    <td><code>animate-play-state-&lt;keyword&gt;</code></td>
  </tr>
</table>

```html
<button class="animate-bounce animate-paused">Button A</button>
<button class="animate-bounce animate-running">Button B</button>-play

<button class="animate-bounce animate-play-paused">Button C</button>
<button class="animate-bounce animate-state-paused">Button D</button>
<button class="animate-bounce animate-play-state-paused">Button E</button>
```

### `animation-timing-function`

| tailwindcss-animate | unocss-preset-animations |
|---------------------|--------------------------|
| `ease-<easing>`     | `animate-ease-<easing>`  |

```html
<button class="animate-bounce animate-ease-linear">Button A</button>
<button class="animate-bounce animate-ease-in">Button B</button>
<button class="animate-bounce animate-ease-out">Button C</button>
<button class="animate-bounce animate-ease-in-out">Button D</button>
```

### Prefers reduced motion

Usage is the same as in TailwindCSS.

```html
<button class="motion-reduce:...">Button A</button>
<button class="motion-safe:...">Button B</button>
```
