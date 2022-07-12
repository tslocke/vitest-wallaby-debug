import { defineConfig } from 'vite'
import solid from 'vite-plugin-solid'
import tsconfigPaths from 'vite-tsconfig-paths'

export default defineConfig(({mode}) => ({
  plugins: [
    tsconfigPaths({loose: true}),
    solid()
  ],

  test: {
    environment: 'jsdom',
    transformMode: {
      web: [/\.[jt]sx?$/],
    },
    // solid needs to be inline to work around
    // a resolution issue in vitest:
    deps: {
      inline: [/solid-js/],
    },
    threads: false,
    isolate: false,
    globals: true
  },

  resolve: {
    conditions: ['development', 'browser'],
  },

}))
