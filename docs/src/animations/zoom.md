# Zoom Animations

Use classname `zoom-(in|out)-<value>` to define animation's `scale`.

- The `-<value>` part is ***optional***.

<br />

You can use either of below as the `<value>`:

- Any number including negative and decimals. E.g. `zoom-in-50`
- Any percentage including negative and decimals. E.g. `zoom-in-66.6%`
- Any fraction including negative. E.g. `zoom-in-1/2`
- `full` as `100%`. E.g. `zoom-in-full`
- CSS variable. E.g. `zoom-in-$my-css-var`

## Zoom In

Define enter animation's starting `scale`.

- The default **value** is `0` if not specified.

```html
<button class="animate-in zoom-in">Button A</button>
<button class="animate-in zoom-in-50">Button B</button>
<button class="animate-in zoom-in-66.6%">Button C</button>
<button class="animate-in zoom-in-2/3">Button D</button>
<button class="animate-in zoom-in-full">Button E</button>
<button class="animate-in zoom-in-$my-css-var">Button F</button>
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
      <td><code>zoom-in</code></td>
      <td rowspan="3"><code>--una-enter-scale: 0;</code></td>
    </tr>
    <tr>
      <td><code>zoom-in-0</code></td>
    </tr>
    <tr>
      <td><code>zoom-in-0%</code></td>
    </tr>
    <tr>
      <td><code>zoom-in-10</code></td>
      <td rowspan="2"><code>--una-enter-scale: 0.1;</code></td>
    </tr>
    <tr>
      <td><code>zoom-in-10%</code></td>
    </tr>
    <tr>
      <td><code>zoom-in-.8</code></td>
      <td rowspan="3"><code>--una-enter-scale: 0.008;</code></td>
    </tr>
    <tr>
      <td><code>zoom-in-0.8</code></td>
    </tr>
    <tr>
      <td><code>zoom-in-.8%</code></td>
    </tr>
    <tr>
      <td><code>zoom-in-52.1</code></td>
      <td><code>--una-enter-scale: 0.521;</code></td>
    </tr>
    <tr>
      <td><code>zoom-in-100</code></td>
      <td><code>--una-enter-scale: 1;</code></td>
    </tr>
    <tr>
      <td><code>zoom-in--20</code></td>
      <td rowspan="2"><code>--una-enter-scale: -0.2;</code></td>
    </tr>
    <tr>
      <td><code>zoom-in--20%</code></td>
    </tr>
    <tr>
      <td><code>zoom-in--66.66</code></td>
      <td><code>--una-enter-scale: -0.6666;</code></td>
    </tr>
    <tr>
      <td><code>zoom-in-1/3</code></td>
      <td><code>--una-enter-scale: 33.3333333333%;</code></td>
    </tr>
    <tr>
      <td><code>zoom-in--2/3</code></td>
      <td><code>--una-enter-scale: -66.6666666667%;</code></td>
    </tr>
    <tr>
      <td><code>zoom-in-full</code></td>
      <td><code>--una-enter-scale: 100%;</code></td>
    </tr>
    <tr>
      <td><code>zoom-in-$my-css-var</code></td>
      <td><code>--una-enter-scale: var(--my-css-var);</code></td>
    </tr>
  </tbody>
</table>

## Zoom Out

Define exit animation's ending `scale`.

- The default **value** is `0` if not specified.

```html
<button class="animate-out zoom-out">Button A</button>
<button class="animate-out zoom-out-50">Button B</button>
<button class="animate-out zoom-out-66.6%">Button C</button>
<button class="animate-out zoom-out-2/3">Button D</button>
<button class="animate-out zoom-out-full">Button E</button>
<button class="animate-out zoom-out-$my-css-var">Button F</button>
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
      <td><code>zoom-out</code></td>
      <td rowspan="3"><code>--una-exit-scale: 0;</code></td>
    </tr>
    <tr>
      <td><code>zoom-out-0</code></td>
    </tr>
    <tr>
      <td><code>zoom-out-0%</code></td>
    </tr>
    <tr>
      <td><code>zoom-out-10</code></td>
      <td rowspan="2"><code>--una-exit-scale: 0.1;</code></td>
    </tr>
    <tr>
      <td><code>zoom-out-10%</code></td>
    </tr>
    <tr>
      <td><code>zoom-out-.8</code></td>
      <td rowspan="3"><code>--una-exit-scale: 0.008;</code></td>
    </tr>
    <tr>
      <td><code>zoom-out-0.8</code></td>
    </tr>
    <tr>
      <td><code>zoom-out-.8%</code></td>
    </tr>
    <tr>
      <td><code>zoom-out-52.1</code></td>
      <td><code>--una-exit-scale: 0.521;</code></td>
    </tr>
    <tr>
      <td><code>zoom-out-100</code></td>
      <td><code>--una-exit-scale: 1;</code></td>
    </tr>
    <tr>
      <td><code>zoom-out--20</code></td>
      <td rowspan="2"><code>--una-exit-scale: -0.2;</code></td>
    </tr>
    <tr>
      <td><code>zoom-out--20%</code></td>
    </tr>
    <tr>
      <td><code>zoom-out--66.66</code></td>
      <td><code>--una-exit-scale: -0.6666;</code></td>
    </tr>
    <tr>
      <td><code>zoom-out-1/3</code></td>
      <td><code>--una-exit-scale: 33.3333333333%;</code></td>
    </tr>
    <tr>
      <td><code>zoom-out--2/3</code></td>
      <td><code>--una-exit-scale: -66.6666666667%;</code></td>
    </tr>
    <tr>
      <td><code>zoom-out-full</code></td>
      <td><code>--una-exit-scale: 100%;</code></td>
    </tr>
    <tr>
      <td><code>zoom-out-$my-css-var</code></td>
      <td><code>--una-exit-scale: var(--my-css-var);</code></td>
    </tr>
  </tbody>
</table>
