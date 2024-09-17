import { defineConfig } from 'vite'
import { resolve } from 'path'

export default defineConfig({
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        games: resolve(__dirname, 'games/index.html'),
        about: resolve(__dirname, 'about/index.html'),

      }
    }
  },
  server: {
    port: 3000,
    host: true, // This allows connections from network
    open: '/index.html'
  },
  plugins: [
    {
      name: 'custom-routing',
      configureServer(server) {
        server.middlewares.use((req, res, next) => {
          if (req.url.startsWith('/games')) {
            req.url = '/games/index.html'
          }
          else if(req.url.startsWith('/about')) {
            req.url = '/about/index.html'
          }
          next()
        })
      }
    }
  ]
})
