// vite.config.js
import { resolve } from 'path'
import { defineConfig } from 'vite'

export default defineConfig({
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        contacts: resolve(__dirname, 'contacts.html'),
        services: resolve(__dirname, 'services.html'),
        about_us: resolve(__dirname, 'about-us.html')
      }
    }
  }
})
