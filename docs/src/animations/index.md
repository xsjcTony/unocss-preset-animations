# Basic Usage

In order to use animations provided by this preset, you need to add the `animate-in` or `animate-out` classname for enter or exit animations correspondingly, then add animations you need.

::: tip
Different animations ([`fade`](./fade), [`zoom`](./zoom), [`spin`](./spin) and [`slide`](./slide)) can be used together.

E.g. the below code will make the element fade in, zoom in and slide in from top animation at the same time.

```html
<button class="animate-in fade-in-50 zoom-in-80 slide-in-from-top-5">Button A</button>
```
:::

## Enter Animations

To give an element enter animations, use the `animate-in` shortcut in combination with [`fade-in`](./fade#fade-in), [`zoom-in`](./zoom#zoom-in), [`spin-in`](./spin#spin-in) and [`slide-in`](./slide#slide-in) classnames.

```html
<button class="animate-in fade-in ...">Button A</button>
<button class="animate-in spin-in ...">Button B</button>
<button class="animate-in zoom-in ...">Button C</button>
<button class="animate-in slide-in-from-top ...">Button D</button>
```

## Exit Animations

To give an element exit animations, use the `animate-out` shortcut in combination with [`fade-out`](./fade#fade-out), [`zoom-out`](./zoom#zoom-out), [`spin-out`](./spin#spin-out) and [`slide-out`](./slide#slide-out) classnames.

```html
<button class="animate-out fade-out ...">Button A</button>
<button class="animate-out spin-out ...">Button B</button>
<button class="animate-out zoom-out ...">Button C</button>
<button class="animate-out slide-out-to-bottom ...">Button D</button>
```
