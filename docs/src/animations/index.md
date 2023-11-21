# Basic Usage

In order to use animations provided by this preset, you need to add the `animate-in` or `animate-out` classname for enter or exit animations correspondingly, then add animations you need.

::: tip
Different animations ([`fade`](./fade), [`zoom`](./zoom), [`spin`](./spin) and [`slide`](./slide)) can be used together.

E.g. the below code will make the element fade in, zoom in and slide in from top at the same time.

```html
<button class="animate-in fade-in-50 zoom-in-80 slide-in-from-top-5">Button A</button>
```
:::

::: warning
Usage of the bracket `[]` syntax is dropped in this preset from **v1.0.0-beta.8**. 

This is **intentional** because
- UnoCSS is very flexible, and you don't need to use it at all in this preset.
- The syntax is error-prone and may destroy the whole animation with a single invalid value.

For anything you define in `[]` except specific syntax for CSS variables (e.g. `[--foo]`), it will always use the value inside as is, hence it's very easy to make mistakes.

E.g. the below code will destroy the whole animation since it's not a valid `rotate()` value.
```html
<button class="animate-in spin-in-[30]">Button A</button>
```
It will generate `--una-enter-rotate: 30;`, which lacks a unit and will make the whole `transform` property invalid.

Instead, just write `spin-in-30` or `spin-in-30deg` to make it work, which will generate `--una-enter-rotate: 30deg;`.
:::

## Enter Animations

To give an element enter animations, use the `animate-in` shortcut in combination with [`fade-in`](./fade#fade-in), [`zoom-in`](./zoom#zoom-in), [`spin-in`](./spin#spin-in) and [`slide-in`](./slide#slide-in) classnames.

```html
<button class="animate-in fade-in ...">Button A</button>
<button class="animate-in spin-in ...">Button B</button>
<button class="animate-in zoom-in ...">Button C</button>
<button class="animate-in slide-in-top ...">Button D</button>
```

## Exit Animations

To give an element exit animations, use the `animate-out` shortcut in combination with [`fade-out`](./fade#fade-out), [`zoom-out`](./zoom#zoom-out), [`spin-out`](./spin#spin-out) and [`slide-out`](./slide#slide-out) classnames.

```html
<button class="animate-out fade-out ...">Button A</button>
<button class="animate-out spin-out ...">Button B</button>
<button class="animate-out zoom-out ...">Button C</button>
<button class="animate-out slide-out-bottom ...">Button D</button>
```
