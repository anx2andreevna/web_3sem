import react from '@vitejs/plugin-react';
import { defineConfig } from 'vitest/config';
import { VitePWA } from "vite-plugin-pwa";

// https://vitejs.dev/config/
export default defineConfig({
      plugins: [
            react(),
            VitePWA({
               registerType: "prompt",
               includeAssets: ["logo.ico", "apple-touch-icon.png", "masked-icon.svg"],
               manifest: {
                  name: "web_project",
                  short_name: "web_project",
                  description: "web_project react",
                  theme_color: "#ffffff",
                  start_url: "/",
                  icons: [
                        {
                        src: 'logo192.png',
                        sizes: '192x192',
                        type: 'image/png'
                        },
                        {
                        src: 'logo512.png',
                        sizes: '512x512',
                        type: 'image/png'
                        },
                        {
                        src: 'logo512.png',
                        sizes: '512x512',
                        type: 'image/png',
                        purpose: 'any maskable'
                        }
                  ],
               },
            }),
         ],
      test: {
            globals: true,
            environment: 'jsdom',
            setupFiles: 'tests/setup.tsx',
            css: true,
      },
});
