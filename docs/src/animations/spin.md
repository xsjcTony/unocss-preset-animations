# Spin Animations

Use classname `spin-(in|out)-<value>` to define animation's `rotate`.

- The `-<value>` part is ***optional***.

<br />

You can use either of below as the `<value>`:

- Any number including negative and decimals. E.g. `spin-in-50`
- Number followed by one of the unit: `deg`, `rad`, `grad` or `turn`. E.g. `spin-in-3.1416rad`
- CSS variable. E.g. `spin-in-$my-css-var`

## Spin In

Define enter animation's starting `rotate`.

- The default **value** is `30deg` if not specified.
- The default **unit** is `deg` if not specified.

```html
<button class="animate-in spin-in">Button A</button>
<button class="animate-in spin-in-50">Button B</button>
<button class="animate-in spin-in-180grad">Button C</button>
<button class="animate-in spin-in-$my-css-var">Button D</button>
```

| Classname             | Property                                 |
|-----------------------|------------------------------------------|
| `spin-in`             | `--una-enter-rotate: 30deg;`             |
| `spin-in-0`           | `--una-enter-rotate: 0;`                 |
| `spin-in-10`          | `--una-enter-rotate: 10deg;`             |
| `spin-in-.8`          | `--una-enter-rotate: 0.8deg;`            |
| `spin-in-52.1`        | `--una-enter-rotate: 52.1deg;`           |
| `spin-in--20`         | `--una-enter-rotate: -20deg;`            |
| `spin-in--66.66`      | `--una-enter-rotate: -66.66deg;`         |
| `spin-in-3.1416rad`   | `--una-enter-rotate: 3.1416rad;`         |
| `spin-in--170grad`    | `--una-enter-rotate: -170grad;`          |
| `spin-in-0.6turn`     | `--una-enter-rotate: 0.6turn;`           |
| `spin-in-$my-css-var` | `--una-enter-rotate: var(--my-css-var);` |

## Spin Out

Define exit animation's ending `rotate`.

- The default **value** is `30deg` if not specified.
- The default **unit** is `deg` if not specified.

```html
<button class="animate-out spin-out">Button A</button>
<button class="animate-out spin-out-50">Button B</button>
<button class="animate-out spin-out-180grad">Button C</button>
<button class="animate-out spin-out-$my-css-var">Button D</button>
```

| Classname              | Property                                |
|------------------------|-----------------------------------------|
| `spin-out`             | `--una-exit-rotate: 30deg;`             |
| `spin-out-0`           | `--una-exit-rotate: 0;`                 |
| `spin-out-10`          | `--una-exit-rotate: 10deg;`             |
| `spin-out-.8`          | `--una-exit-rotate: 0.8deg;`            |
| `spin-out-52.1`        | `--una-exit-rotate: 52.1deg;`           |
| `spin-out--20`         | `--una-exit-rotate: -20deg;`            |
| `spin-out--66.66`      | `--una-exit-rotate: -66.66deg;`         |
| `spin-out-3.1416rad`   | `--una-exit-rotate: 3.1416rad;`         |
| `spin-out--170grad`    | `--una-exit-rotate: -170grad;`          |
| `spin-out-0.6turn`     | `--una-exit-rotate: 0.6turn;`           |
| `spin-out-$my-css-var` | `--una-exit-rotate: var(--my-css-var);` |
