
import { defineConfig } from 'vite'

// https://vitejs.dev/config/
export default defineConfig({
    resolve: { alias: { '@': '/src' } },
    plugins: [],
    server: {
        host: true,
        port: 8080
    }
})
