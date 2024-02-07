import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import basicSsl from '@vitejs/plugin-basic-ssl'

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    host: "local.autify.com",
  },
  plugins: [
    react(),
    basicSsl({
      name: 'test',
      domains: ['local.autify.com'],
    })
  ],
})
