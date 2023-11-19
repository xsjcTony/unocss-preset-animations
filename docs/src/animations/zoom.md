# Zoom Animations

Use classname `zoom-(in|out)-<value>` to define animation's `scale`.

The `-<value>` part is ***optional***.

You can use either any of below as the `<value>`:
- Any number including negative and decimals, e.g. `zoom-in-50`.
- Any fraction including negative, e.g. `zoom-in-1/2`.
- `full` as `100%`, e.g. `zoom-in-full`.
- Any raw value within brackets, e.g. `zoom-in-[0.5]`.
- Css variable with either `$foo`, `[--foo]` or `[var(--foo)]`, e.g. `zoom-in-$my-css-var`.

## Zoom In

Define enter animation's starting `scale`.

The default is `0` if no value is specified.

```html
<button class="animate-in zoom-in">Button A</button>
<button class="animate-in zoom-in-50">Button B</button>
<button class="animate-in zoom-in-2/3">Button C</button>
<button class="animate-in zoom-in-full">Button D</button>
<button class="animate-in zoom-in-[0.5]">Button E</button>
<button class="animate-in zoom-in-$my-css-var">Button F</button>
```

| Classname                      | Property                                |
|--------------------------------|-----------------------------------------|
| `zoom-in`                      | `--una-enter-scale: 0;`                 |
| `zoom-in-0`                    | `--una-enter-scale: 0;`                 |
| `zoom-in-10`                   | `--una-enter-scale: 0.1;`               |
| `zoom-in-52.1`                 | `--una-enter-scale: 0.521;`             |
| `zoom-in-100`                  | `--una-enter-scale: 1;`                 |
| `zoom-in--20`                  | `--una-enter-scale: -0.2;`              |
| `zoom-in--66.66`               | `--una-enter-scale: -0.6666;`           |
| `zoom-in-2/3`                  | `--una-enter-scale: 66.6666666667%;`    |
| `zoom-in--2/3`                 | `--una-enter-scale: -66.6666666667%;`   |
| `zoom-in-full`                 | `--una-enter-scale: 100%;`              |
| `zoom-in-[.8]`                 | `--una-enter-scale: .8;`                |
| `zoom-in-[-60%]`               | `--una-enter-scale: -60%;`              |
| `zoom-in-$my-css-var`          | `--una-enter-scale: var(--my-css-var);` |
| `zoom-in-[--my-css-var]`       | `--una-enter-scale: var(--my-css-var);` |
| `zoom-in-[var(--$my-css-var)]` | `--una-enter-scale: var(--my-css-var);` |

## Zoom out

Define exit animation's ending `scale`.

The default is `0` if no value is specified.

```html
<button class="animate-in zoom-out">Button A</button>
<button class="animate-in zoom-out-50">Button B</button>
<button class="animate-in zoom-out-2/3">Button C</button>
<button class="animate-in zoom-out-full">Button D</button>
<button class="animate-in zoom-out-[0.5]">Button E</button>
<button class="animate-in zoom-out-$my-css-var">Button F</button>
```

| Classname                       | Property                               |
|---------------------------------|----------------------------------------|
| `zoom-out`                      | `--una-exit-scale: 0;`                 |
| `zoom-out-0`                    | `--una-exit-scale: 0;`                 |
| `zoom-out-10`                   | `--una-exit-scale: 0.1;`               |
| `zoom-out-52.1`                 | `--una-exit-scale: 0.521;`             |
| `zoom-out-100`                  | `--una-exit-scale: 1;`                 |
| `zoom-out--20`                  | `--una-exit-scale: -0.2;`              |
| `zoom-out--66.66`               | `--una-exit-scale: -0.6666;`           |
| `zoom-out-2/3`                  | `--una-exit-scale: 66.6666666667%;`    |
| `zoom-out--2/3`                 | `--una-exit-scale: -66.6666666667%;`   |
| `zoom-out-full`                 | `--una-exit-scale: 100%;`              |
| `zoom-out-[.8]`                 | `--una-exit-scale: .8;`                |
| `zoom-out-[-60%]`               | `--una-exit-scale: -60%;`              |
| `zoom-out-$my-css-var`          | `--una-exit-scale: var(--my-css-var);` |
| `zoom-out-[--my-css-var]`       | `--una-exit-scale: var(--my-css-var);` |
| `zoom-out-[var(--$my-css-var)]` | `--una-exit-scale: var(--my-css-var);` |
