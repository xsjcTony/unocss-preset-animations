# Fade Animations

Use classname `fade-(in|out)-<value>` to define animation's `opacity`.

- The `-<value>` part is ***optional***.

<br />

You can use either of below as the `<value>`:

- Any number between `0` and `100` including decimals. E.g. `fade-in-50`
- Any percentage between `0%` and `100%` including decimals, E.g. `fade-in-66.6%`
- CSS variable. E.g. `fade-in-$my-css-var`

## Fade In

Define enter animation's starting `opacity`.

- The default **value** is `0` if not specified.

```html
<button class="animate-in fade-in">Button A</button>
<button class="animate-in fade-in-50">Button B</button>
<button class="animate-in fade-in-66.6%">Button C</button>
<button class="animate-in fade-in-$my-css-var">Button D</button>
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
      <td><code>fade-in</code></td>
      <td rowspan="3"><code>--una-enter-opacity: 0;</code></td>
    </tr>
    <tr>
      <td><code>fade-in-0</code></td>
    </tr>
    <tr>
      <td><code>fade-in-0%</code></td>
    </tr>
    <tr>
      <td><code>fade-in-10</code></td>
      <td rowspan="2"><code>--una-enter-opacity: 0.1;</code></td>
    </tr>
    <tr>
      <td><code>fade-in-10%</code></td>
    </tr>
    <tr>
      <td><code>fade-in-.8</code></td>
      <td rowspan="3"><code>--una-enter-opacity: 0.008;</code></td>
    </tr>
    <tr>
      <td><code>fade-in-0.8</code></td>
    </tr>
    <tr>
      <td><code>fade-in-.8%</code></td>
    </tr>
    <tr>
      <td><code>fade-in-52.1</code></td>
      <td><code>--una-enter-opacity: 0.521;</code></td>
    </tr>
    <tr>
      <td><code>fade-in-66.66</code></td>
      <td><code>--una-enter-opacity: 0.6666;</code></td>
    </tr>
    <tr>
      <td><code>fade-in-100</code></td>
      <td><code>--una-enter-opacity: 1;</code></td>
    </tr>
    <tr>
      <td><code>fade-in-$my-css-var</code></td>
      <td><code>--una-enter-opacity: var(--my-css-var);</code></td>
    </tr>
  </tbody>
</table>

## Fade Out

Define exit animation's ending `opacity`.

- The default **value** is `0` if not specified.

```html
<button class="animate-out fade-out">Button A</button>
<button class="animate-out fade-out-50">Button B</button>
<button class="animate-out fade-out-66.6%">Button C</button>
<button class="animate-out fade-out-$my-css-var">Button D</button>
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
      <td><code>fade-out</code></td>
      <td rowspan="3"><code>--una-exit-opacity: 0;</code></td>
    </tr>
    <tr>
      <td><code>fade-out-0</code></td>
    </tr>
    <tr>
      <td><code>fade-out-0%</code></td>
    </tr>
    <tr>
      <td><code>fade-out-10</code></td>
      <td rowspan="2"><code>--una-exit-opacity: 0.1;</code></td>
    </tr>
    <tr>
      <td><code>fade-out-10%</code></td>
    </tr>
    <tr>
      <td><code>fade-out-.8</code></td>
      <td rowspan="3"><code>--una-exit-opacity: 0.008;</code></td>
    </tr>
    <tr>
      <td><code>fade-out-0.8</code></td>
    </tr>
    <tr>
      <td><code>fade-out-.8%</code></td>
    </tr>
    <tr>
      <td><code>fade-out-52.1</code></td>
      <td><code>--una-exit-opacity: 0.521;</code></td>
    </tr>
    <tr>
      <td><code>fade-out-66.66</code></td>
      <td><code>--una-exit-opacity: 0.6666;</code></td>
    </tr>
    <tr>
      <td><code>fade-out-100</code></td>
      <td><code>--una-exit-opacity: 1;</code></td>
    </tr>
    <tr>
      <td><code>fade-out-$my-css-var</code></td>
      <td><code>--una-exit-opacity: var(--my-css-var);</code></td>
    </tr>
  </tbody>
</table>
