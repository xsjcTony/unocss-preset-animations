# Interactive Documentation

UnoCSS comes up with a Playground and an Interactive Documentation.

This tutorial will guide you how to set it up and take advantage of them.


## Playground

There is a playground that has already been set up for you to play with.

You can access it [here](https://unocss.dev/play/?html=DwEwlgbgBAxgNgQwM5ILwCIAWBaJMBOApoQHZQDm%2BYIUADojIdmAC6EC2S2jJb%2B6APgBQUKKEixEKDAhJh2CNszJI41JmBLYW2AGYBXOHCi6EIDVoAMUWfMVMQ%2B-IrAB7LQEZL3m3IVLzRABPbABWHzYADx0ADki4QRFRKAAZV1cAaxsWKHZCJOAAenAIYSKS4SA&config=JYWwDg9gTgLgBAbwFBzgEwKYDNgDsMDCEuOA5gDQpxhQYDOGMAgjDFMAEYCuMwWAnpVQ16jAJIBjYnSHVaDGAFVcESgF84WKBBBwA5FxUS6dPUlCRYiOaOa5QAQ17S4GrTv2GIxugFoRCr4O9iBOwNJmSEgYAB6W8JhYDlwANgnYeITEZAAUyMLyjHQAXHAA2lQFtsoQOQCUslUKTCFh0nmawCkpALIQmKV6HBAwABZ6rg1UALrqdUhAA&css=PQKgBA6gTglgLgUzAYwK4Gc4HsC2YDCAyoWABYJQIA0YAhgHYAmYcUD6AZllDhWOqgAOg7nAB0YAGLcwCAB60cggDYIAXGBDAAUKDBi0mXGADe2sGC704AWgDuCGAHNScDQFYADJ4Dc5sAACtMLKAJ5gggCMLPK2ABR2pPBIcsoAlH4WAEa0yADWTlBYqEw2yFjK3Bpw5LxxAOTllVDoYpSMYgAs3vUZ2gC%2BmsBAA&options=N4IgLgTghgdgzgMwPYQLYAkyoDYgFwJTZwCmAvkA).


## Setup

To set up the interactive documentation, follow these steps:

- Copy the below code

```ts
import { defineConfig, presetUno } from 'unocss'
import { presetAnimations } from 'unocss-preset-animations'


export default defineConfig({
  presets: [
    presetUno(),
    presetAnimations({
      fillMode: 'both', // or whatever options you want
    }),
  ],
})

```

- Head to the official [Interactive Documentation](https://unocss.dev/interactive/)
- Click the <span class="inline-block text-20px align-top i-carbon-settings" /> icon in the top-right corner
- Paste the above code into the editor and click `OK`
- Enjoy 🥰
