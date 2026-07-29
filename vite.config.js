import { defineConfig, loadEnv } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import { resolve } from 'path'

export default defineConfig(({ mode }) => {
  // Carga las variables de entorno según el modo actual
  const env = loadEnv(mode, process.cwd(), '')
  
  // Evaluamos si VITE_MINIFY es 'true' (convirtiéndolo a booleano o string para terser/esbuild)
  const shouldMinify = env.VITE_MINIFY === 'true'
  
  // Definimos el sufijo dinámico: si minifica será '.min', de lo contrario vacío
  const minSuffix = shouldMinify ? '.min' : ''

  return {
    plugins: [
      react(),
      tailwindcss()
    ],
    build: {
      emptyOutDir: false,
      outDir: 'public/dist',
      minify: shouldMinify, // Aplica true o false según el .env
      rollupOptions: {
        input: {
          'web': resolve(__dirname, 'src/entries/web.jsx'),
        },
        output: {
          // Si shouldMinify es true -> js/web.min.js | si es false -> js/web.js
          entryFileNames: `js/[name]${minSuffix}.js`,
          chunkFileNames: `js/[name]${minSuffix}.js`,
          assetFileNames: (assetInfo) => {
            if (assetInfo.name && assetInfo.name.endsWith('.css')) {
              // Si shouldMinify es true -> css/web.min.css | si es false -> css/web.css
              return `css/[name]${minSuffix}[extname]`;
            }
            return `assets/[name]-[hash][extname]`;
          },
        },
      },
    },
  }
})