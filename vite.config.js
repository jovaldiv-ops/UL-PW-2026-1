import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { resolve } from 'path'

export default defineConfig({
  plugins: [react()],
  build: {
    emptyOutDir: false,
    outDir: 'public/dist', // Todo el build sale hacia la carpeta public
    rollupOptions: {
      // Aquí defines cada sub-aplicación que tengas en src/entries
      input: {
        'web': resolve(__dirname, 'src/entries/web.jsx'),
        //'sub-app-2': resolve(__dirname, 'src/entries/sub-app-2.jsx'),
        // Puedes agregar todas las sub-aplicaciones que necesites aquí
      },
      output: {
        // Genera una carpeta o nombres limpios por cada sub-app
        entryFileNames: 'js/[name].js',
        chunkFileNames: 'js/[name].js',
        assetFileNames: (assetInfo) => {
          if (assetInfo.name && assetInfo.name.endsWith('.css')) {
            return 'css/[name][extname]'; // Exporta el CSS limpio a public/css/
          }
          return 'assets/[name]-[hash][extname]';
        },
      },
    },
  },
})