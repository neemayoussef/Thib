import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
    // resolve: { alias: { '@': '/src' } },
    plugins: [react()],
    build: {
        rollupOptions: {
            cache: false
        }
    },
    server: {
        host: true, 
        port: 8127,
        hmr: false
    }
})
