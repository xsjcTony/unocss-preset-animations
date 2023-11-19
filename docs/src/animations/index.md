# Basic Usage

In order to use animations provided by this preset, you need to add the `animate-in` or `animate-out` classname for enter or exit animations correspondingly.

## Enter Animations

To give an element enter animations, use the `animate-in` shortcut in combination with [`fade-in`](/animations/fade#fade-in), [`zoom-in`](/animations/zoom#zoom-in), [`spin-in`](/animations/spin#spin-in) and [`slide-in`](/animations/slide#slide-in) classnames.

```html
<button class="animate-in fade-in ...">Button A</button>
<button class="animate-in spin-in ...">Button B</button>
<button class="animate-in zoom-in ...">Button C</button>
<button class="animate-in slide-in-from-top ...">Button D</button>
```

## Exit Animations

To give an element exit animations, use the `animate-out` shortcut in combination with [`fade-out`](/animations/fade#fade-out), [`zoom-out`](/animations/zoom#zoom-out), [`spin-out`](/animations/spin#spin-out) and [`slide-out`](/animations/slide#slide-out) classnames.

```html
<button class="animate-out fade-out ...">Button A</button>
<button class="animate-out spin-out ...">Button B</button>
<button class="animate-out zoom-out ...">Button C</button>
<button class="animate-out slide-out-to-bottom ...">Button D</button>
```
