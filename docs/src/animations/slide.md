# Slide Animations

Use classname `slide-(in|out)-<direction>-<value>` to define animation's `translate`.

- The `-<value>` part is ***optional***.
- You can optionally use `slide-in-from` / `slide-out-to` instead of `slide-in` / `slide-out` to make it more readable

<br />

You can use either of below as the `<direction>` (alias / full):

- `t` / `top`
- `b` / `bottom`
- `l` / `left`
- `r` / `right`

::: tip
`top` / `bottom` and `left` / `right` can be used together.

| y-axis Direction | x-axis Direction | Result |
|------------------|------------------|--------|
| `t` / `top`      | `l` / `left`     | ↖️     |
| `t` / `top`      | `r` / `right`    | ↗️     |
| `b` / `bottom`   | `l` / `left`     | ↙️     |
| `b` / `bottom`   | `r` / `right`    | ↘️     |

E.g. the following combination will make the element slide in from `top-left` corner. [Playground](https://unocss.dev/play/?html=DwEwlgbgBAxgNgQwM5ILwCIAWBaJMBOApoQHZQDm%2BYIUADojIdmAC6EC2S2jJb%2B6APgBQUKMABGAVxYsA9mXjI06BCTDsEbZmSRxqTMCWwtsARgD0AJii7927HGwAWKADMEIA0YAMUVes0mT0QATzNvCL81DS0QSXxNMHlwyPFZfE98OmxrfFlJEk8QB3JBEVEoACFpOTIAQXLgcykZeWEm8AhhIA&config=JYWwDg9gTgLgBAbwFBzgEwKYDNgDsMDCEuOA5gDQpxhQYDOGMAgjDFMAEYCuMwWAnpVQ16jAJIBjYnSHVaDGAFVcESgF84WKBBBwA5FxUS6dPUlCRYiOaOa5QAQ17S4GrTv2GIxugFoRCr4O9iBOwNJmSEgYAB6W8JhYDlwANgnYeITEZAAUyMLyjHQAXHAA2lQFtsoQOQCUslUKTCFh0nmawCkpALIQmKV6HBAwABZ6rg1UALrqdUhAA&css=PQKgBA6gTglgLgUzAYwK4Gc4HsC2YDCAyoWABYJQIA0YAhgHYAmYcUD6AZllDhWOqgAOg7nAB0YAGLcwCAB60cggDYIAXGBDAAUKDBi0mXGADe2sGC704AWgDuCGAHNScDQFYADJ4Dc5sAACtMLKAJ5gggCMLPK2ABR2pPBIcsoAlH4WAEa0yADWTlBYqEw2yFjK3Bpw5LxxAOTllVDoYpSMYgAs3vUZ2gC%2BmsBAA&options=N4IgLgTghgdgzgMwPYQLYAkyoDYgFwJTZwCmAvkA)

```html
<button class="animate-in slide-in-t-1/2 slide-in-l-4">Button A</button>
```
:::

<br />

You can use either of below as the `<value>`:

- Any number including negative(⚠️) and decimals. E.g. `slide-in-t-50`
- Any percentage including negative(⚠️) and decimals. E.g. `slide-in-t-66.6%`
- Any fraction including negative(⚠️). E.g. `slide-in-t-1/2`
- `full` as `100%`. E.g. `slide-in-t-full`
- CSS variable. E.g. `slide-in-t-$my-css-var`

::: warning
Using ***NEGATIVE*** value is discouraged. Although it will work as expected, but can be misleading or hard to understand.

You can always switch to the opposite direction to avoid using negative values.

E.g.
```html
<button class="animate-in slide-in-top--4">Button A</button>
<button class="animate-in slide-in-bottom--8">Button B</button>
```
is equivalent to
```html
<button class="animate-in slide-in-bottom-4">Button A</button>
<button class="animate-in slide-in-top-8">Button B</button>
```
Note: `CSS variable` usages will be placed as is **WITHOUT** any direction or positive / negative check.
:::

## Slide In

Define enter animation's starting `translate`.

- The default **value** is `100%` if not specified.

```html
<button class="animate-in slide-in-t">Button A</button>
<button class="animate-in slide-in-top">Button B</button>
<button class="animate-in slide-in-from-t">Button C</button>
<button class="animate-in slide-in-from-top">Button D</button>
<button class="animate-in slide-in-t-4">Button E</button>
<button class="animate-in slide-in-t-50%">Button F</button>
<button class="animate-in slide-in-t-2/3">Button G</button>
<button class="animate-in slide-in-t-full">Button H</button>
<button class="animate-in slide-in-t-$my-css-var">Button I</button>
```

<table>
  <thead>
    <tr>
      <th>Classname</th>
      <th>Property</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><code>slide-in-t</code></td>
      <td rowspan="5"><code>--una-enter-translate-y: -100%;</code></td>
    </tr>
    <tr>
      <td><code>slide-in-top</code></td>
    </tr>
    <tr>
      <td><code>slide-in-from-t</code></td>
    </tr>
    <tr>
      <td><code>slide-in-from-top</code></td>
    </tr>
    <tr>
      <td><code>slide-in-t-full</code></td>
    </tr>
    <tr>
      <td><code>slide-in-b</code></td>
      <td><code>--una-enter-translate-y: 100%;</code></td>
    </tr>
    <tr>
      <td><code>slide-in-l</code></td>
      <td><code>--una-enter-translate-x: -100%;</code></td>
    </tr>
    <tr>
      <td><code>slide-in-r</code></td>
      <td><code>--una-enter-translate-x: 100%;</code></td>
    </tr>
    <tr>
      <td><code>slide-in-b-10</code></td>
      <td><code>--una-enter-translate-y: 2.5rem;</code></td>
    </tr>
    <tr>
      <td><code>slide-in-b-48%</code></td>
      <td><code>--una-enter-translate-y: 48%;</code></td>
    </tr>
    <tr>
      <td><code>slide-in-b-.8</code></td>
      <td><code>--una-enter-translate-y: 0.2rem;</code></td>
    </tr>
    <tr>
      <td><code>slide-in-b-52.1</code></td>
      <td><code>--una-enter-translate-y: 13.025rem;</code></td>
    </tr>
    <tr>
      <td><code>slide-in-b-66.6%</code></td>
      <td><code>--una-enter-translate-y: 66.6%;</code></td>
    </tr>
    <tr>
      <td><code>slide-in-b-100</code></td>
      <td><code>--una-enter-translate-y: 25rem;</code></td>
    </tr>
    <tr>
      <td><code>slide-in-b--20</code> ⚠️</td>
      <td><code>--una-enter-translate-y: -5rem;</code></td>
    </tr>
    <tr>
      <td><code>slide-in-b--48%</code> ⚠️</td>
      <td><code>--una-enter-translate-y: -48%;</code></td>
    </tr>
    <tr>
      <td><code>slide-in-b--66.66</code> ⚠️</td>
      <td><code>--una-enter-translate-y: -16.665rem;</code></td>
    </tr>
    <tr>
      <td><code>slide-in-t--20</code> ⚠️</td>
      <td><code>--una-enter-translate-y: 5rem;</code></td>
    </tr>
    <tr>
      <td><code>slide-in-t--48%</code> ⚠️</td>
      <td><code>--una-enter-translate-y: 48%;</code></td>
    </tr>
    <tr>
      <td><code>slide-in-t--66.66</code> ⚠️</td>
      <td><code>--una-enter-translate-y: 16.665rem;</code></td>
    </tr>
    <tr>
      <td><code>slide-in-b-1/3</code></td>
      <td><code>--una-enter-translate-y: 33.3333333333%;</code></td>
    </tr>
    <tr>
      <td><code>slide-in-b--2/3</code> ⚠️</td>
      <td><code>--una-enter-translate-y: -66.6666666667%;</code></td>
    </tr>
    <tr>
      <td><code>slide-in-t--2/3</code> ⚠️</td>
      <td><code>--una-enter-translate-y: 66.6666666667%;</code></td>
    </tr>
    <tr>
      <td><code>slide-in-b-full</code></td>
      <td><code>--una-enter-translate-y: 100%;</code></td>
    </tr>
    <tr>
      <td><code>slide-in-t-$my-css-var</code></td>
      <td rowspan="2"><code>--una-enter-translate-y: var(--my-css-var);</code></td>
    </tr>
    <tr>
      <td><code>slide-in-b-$my-css-var</code></td>
    </tr>
    <tr>
      <td><code>slide-in-l-$my-css-var</code></td>
      <td rowspan="2"><code>--una-enter-translate-x: var(--my-css-var);</code></td>
    </tr>
    <tr>
      <td><code>slide-in-r-$my-css-var</code></td>
    </tr>
  </tbody>
</table>

## Slide Out

Define exit animation's starting `translate`.

- The default **value** is `100%` if not specified.

```html
<button class="animate-out slide-out-t">Button A</button>
<button class="animate-out slide-out-top">Button B</button>
<button class="animate-out slide-out-from-t">Button C</button>
<button class="animate-out slide-out-from-top">Button D</button>
<button class="animate-out slide-out-t-4">Button E</button>
<button class="animate-out slide-out-t-50%">Button F</button>
<button class="animate-out slide-out-t-2/3">Button G</button>
<button class="animate-out slide-out-t-full">Button H</button>
<button class="animate-out slide-out-t-$my-css-var">Button I</button>
```

<table>
  <thead>
    <tr>
      <th>Classname</th>
      <th>Property</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><code>slide-out-t</code></td>
      <td rowspan="5"><code>--una-exit-translate-y: -100%;</code></td>
    </tr>
    <tr>
      <td><code>slide-out-top</code></td>
    </tr>
    <tr>
      <td><code>slide-out-to-t</code></td>
    </tr>
    <tr>
      <td><code>slide-out-to-top</code></td>
    </tr>
    <tr>
      <td><code>slide-out-t-full</code></td>
    </tr>
    <tr>
      <td><code>slide-out-b</code></td>
      <td><code>--una-exit-translate-y: 100%;</code></td>
    </tr>
    <tr>
      <td><code>slide-out-l</code></td>
      <td><code>--una-exit-translate-x: -100%;</code></td>
    </tr>
    <tr>
      <td><code>slide-out-r</code></td>
      <td><code>--una-exit-translate-x: 100%;</code></td>
    </tr>
    <tr>
      <td><code>slide-out-b-10</code></td>
      <td><code>--una-exit-translate-y: 2.5rem;</code></td>
    </tr>
    <tr>
      <td><code>slide-out-b-48%</code></td>
      <td><code>--una-exit-translate-y: 48%;</code></td>
    </tr>
    <tr>
      <td><code>slide-out-b-.8</code></td>
      <td><code>--una-exit-translate-y: 0.2rem;</code></td>
    </tr>
    <tr>
      <td><code>slide-out-b-52.1</code></td>
      <td><code>--una-exit-translate-y: 13.025rem;</code></td>
    </tr>
    <tr>
      <td><code>slide-out-b-66.6%</code></td>
      <td><code>--una-exit-translate-y: 66.6%;</code></td>
    </tr>
    <tr>
      <td><code>slide-out-b-100</code></td>
      <td><code>--una-exit-translate-y: 25rem;</code></td>
    </tr>
    <tr>
      <td><code>slide-out-b--20</code> ⚠️</td>
      <td><code>--una-exit-translate-y: -5rem;</code></td>
    </tr>
    <tr>
      <td><code>slide-out-b--48%</code> ⚠️</td>
      <td><code>--una-exit-translate-y: -48%;</code></td>
    </tr>
    <tr>
      <td><code>slide-out-b--66.66</code> ⚠️</td>
      <td><code>--una-exit-translate-y: -16.665rem;</code></td>
    </tr>
    <tr>
      <td><code>slide-out-t--20</code> ⚠️</td>
      <td><code>--una-exit-translate-y: 5rem;</code></td>
    </tr>
    <tr>
      <td><code>slide-out-t--48%</code> ⚠️</td>
      <td><code>--una-exit-translate-y: 48%;</code></td>
    </tr>
    <tr>
      <td><code>slide-out-t--66.66</code> ⚠️</td>
      <td><code>--una-exit-translate-y: 16.665rem;</code></td>
    </tr>
    <tr>
      <td><code>slide-out-b-1/3</code></td>
      <td><code>--una-exit-translate-y: 33.3333333333%;</code></td>
    </tr>
    <tr>
      <td><code>slide-out-b--2/3</code> ⚠️</td>
      <td><code>--una-exit-translate-y: -66.6666666667%;</code></td>
    </tr>
    <tr>
      <td><code>slide-out-t--2/3</code> ⚠️</td>
      <td><code>--una-exit-translate-y: 66.6666666667%;</code></td>
    </tr>
    <tr>
      <td><code>slide-out-b-full</code></td>
      <td><code>--una-exit-translate-y: 100%;</code></td>
    </tr>
    <tr>
      <td><code>slide-out-t-$my-css-var</code></td>
      <td rowspan="2"><code>--una-exit-translate-y: var(--my-css-var);</code></td>
    </tr>
    <tr>
      <td><code>slide-out-b-$my-css-var</code></td>
    </tr>
    <tr>
      <td><code>slide-out-l-$my-css-var</code></td>
      <td rowspan="2"><code>--una-exit-translate-x: var(--my-css-var);</code></td>
    </tr>
    <tr>
      <td><code>slide-out-r-$my-css-var</code></td>
    </tr>
  </tbody>
</table>
