# Fade Animations

Use classname `fade-(in|out)-<value>` to define animation's `opacity`.

The `-<value>` part is ***optional***.

You can use either any of below as the `<value>`:
- Any number between `0` and `100` including decimals, e.g. `fade-in-50`.
- Any raw value within brackets, e.g. `fade-in-[0.5]`.
- Css variable with either `$foo`, `[--foo]` or `[var(--foo)]`, e.g. `fade-in-$my-css-var`.

## Fade In

Define enter animation's starting `opacity`.

The default is `0` if no value is specified.

```html
<button class="animate-in fade-in">Button A</button>
<button class="animate-in fade-in-50">Button B</button>
<button class="animate-in fade-in-[0.5]">Button C</button>
<button class="animate-in fade-in-$my-css-var">Button D</button>
```

| Classname                      | Property                                  |
|--------------------------------|-------------------------------------------|
| `fade-in`                      | `--una-enter-opacity: 0;`                 |
| `fade-in-0`                    | `--una-enter-opacity: 0;`                 |
| `fade-in-10`                   | `--una-enter-opacity: 0.1;`               |
| `fade-in-52.1`                 | `--una-enter-opacity: 0.521;`             |
| `fade-in-66.66`                | `--una-enter-opacity: 0.6666;`            |
| `fade-in-100`                  | `--una-enter-opacity: 1;`                 |
| `fade-in-[.8]`                 | `--una-enter-opacity: .8;`                |
| `fade-in-$my-css-var`          | `--una-enter-opacity: var(--my-css-var);` |
| `fade-in-[--my-css-var]`       | `--una-enter-opacity: var(--my-css-var);` |
| `fade-in-[var(--$my-css-var)]` | `--una-enter-opacity: var(--my-css-var);` |

## Fade out

Define exit animation's ending `opacity`.

The default value is `0` if no value is specified.

```html
<button class="animate-in fade-out">Button A</button>
<button class="animate-in fade-out-50">Button B</button>
<button class="animate-in fade-out-[0.5]">Button C</button>
<button class="animate-in fade-out-$my-css-var">Button D</button>
```

| Classname                       | Property                                 |
|---------------------------------|------------------------------------------|
| `fade-out`                      | `--una-exit-opacity: 0;`                 |
| `fade-out-0`                    | `--una-exit-opacity: 0;`                 |
| `fade-out-10`                   | `--una-exit-opacity: 0.1;`               |
| `fade-out-52.1`                 | `--una-exit-opacity: 0.521;`             |
| `fade-out-66.66`                | `--una-exit-opacity: 0.6666;`            |
| `fade-out-100`                  | `--una-exit-opacity: 1;`                 |
| `fade-out-[.8]`                 | `--una-exit-opacity: .8;`                |
| `fade-out-$my-css-var`          | `--una-exit-opacity: var(--my-css-var);` |
| `fade-out-[--my-css-var]`       | `--una-exit-opacity: var(--my-css-var);` |
| `fade-out-[var(--$my-css-var)]` | `--una-exit-opacity: var(--my-css-var);` |
