# Fade Animations

Use classname `fade-(in|out)-<number>` to define animation's `opacity`.

The `<number>` is *optional* and can be any number between `0` and `100` including decimals.

## Fade In

Define enter animation's starting `opacity`.

The default value is `0` if no number is specified.

```html
<button class="animate-in fade-in">Button A</button>
<button class="animate-in fade-in-0">Button B</button>
<button class="animate-in fade-in-50">Button C</button>
<button class="animate-in fade-in-100">Button D</button>
```

| Classname       | Property                       |
|-----------------|--------------------------------|
| `fade-in`       | `--una-enter-opacity: 0;`      |
| `fade-in-0`     | `--una-enter-opacity: 0;`      |
| `fade-in-5`     | `--una-enter-opacity: 0.05;`   |
| `fade-in-10`    | `--una-enter-opacity: 0.1;`    |
| `fade-in-52.1`  | `--una-enter-opacity: 0.521;`  |
| `fade-in-66.66` | `--una-enter-opacity: 0.6666;` |
| ...             | ...                            |
| `fade-in-95`    | `--una-enter-opacity: 0.95;`   |
| `fade-in-100`   | `--una-enter-opacity: 1;`      |

## Fade out

Define exit animation's ending `opacity`.

The default value is `0` if no number is specified.

```html
<button class="animate-out fade-out">Button A</button>
<button class="animate-out fade-out-0">Button B</button>
<button class="animate-out fade-out-50">Button C</button>
<button class="animate-out fade-out-100">Button D</button>
```

| Classname        | Property                      |
|------------------|-------------------------------|
| `fade-out`       | `--una-exit-opacity: 0;`      |
| `fade-out-0`     | `--una-exit-opacity: 0;`      |
| `fade-out-5`     | `--una-exit-opacity: 0.05;`   |
| `fade-out-10`    | `--una-exit-opacity: 0.1;`    |
| `fade-out-52.1`  | `--una-exit-opacity: 0.521;`  |
| `fade-out-66.66` | `--una-exit-opacity: 0.6666;` |
| ...              | ...                           |
| `fade-out-95`    | `--una-exit-opacity: 0.95;`   |
| `fade-out-100`   | `--una-exit-opacity: 1;`      |
