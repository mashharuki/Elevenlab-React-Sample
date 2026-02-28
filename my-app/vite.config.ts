import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import { VitePWA } from 'vite-plugin-pwa'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    VitePWA({
      strategies: 'injectManifest',
      srcDir: 'src',
      filename: 'sw.ts',
      registerType: 'autoUpdate',
      includeAssets: ['vite.svg'],
      manifest: {
        name: 'ElevenLabs React SDK Sample',
        short_name: 'ElevenLabs Sample',
        description: 'ElevenLabs React SDK sample app with voice conversation',
        theme_color: '#f5f7fb',
        background_color: '#f5f7fb',
        display: 'standalone',
        start_url: '/',
        scope: '/',
        icons: [
          {
            src: '/pwa-icon.svg',
            sizes: 'any',
            type: 'image/svg+xml',
            purpose: 'any',
          },
          {
            src: '/pwa-icon.svg',
            sizes: 'any',
            type: 'image/svg+xml',
            purpose: 'maskable',
          },
        ],
      },
      injectManifest: {
        injectionPoint: 'self.__WB_MANIFEST',
      },
      devOptions: {
        enabled: true,
        type: 'module',
      },
    }),
  ],
})
