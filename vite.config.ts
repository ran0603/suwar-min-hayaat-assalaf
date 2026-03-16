import { defineConfig } from 'vite'
import { VitePWA } from 'vite-plugin-pwa'
import { devtools } from '@tanstack/devtools-vite'
import tsconfigPaths from 'vite-tsconfig-paths'

import { tanstackStart } from '@tanstack/react-start/plugin/vite'

import viteReact from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

const config = defineConfig({
  plugins: [
    VitePWA({
      registerType: 'autoUpdate',
      includeAssets: ['favicon.ico', 'apple-touch-icon.png'],
      manifest: {
        name: 'Suwar min Hayaat Assalaf',
        short_name: 'Hayaat Assalaf',
        theme_color: '#1A1408',
        background_color: '#ffffff',
        display: 'standalone',
        description: 'Explore the life of Assalaf through a collection of cards and details.',
        icons: [
          {
            "src": "favicon.ico",
            "sizes": "64x64 32x32 24x24 16x16",
            "type": "image/x-icon"
          },
          {
            "src": "pwa-192x192.png",
            "type": "image/png",
            "sizes": "192x192"
          },
          {
            "src": "pwa-512x512.png",
            "type": "image/png",
            "sizes": "512x512"
          }
        ],
        start_url: '.',
      }
    }),
    devtools(),
    tsconfigPaths({ projects: ['./tsconfig.json'] }),
    tailwindcss(),
    tanstackStart(),
    viteReact(),
  ],
  base: '/suwar-min-hayaat-assalaf/',
})

export default config
