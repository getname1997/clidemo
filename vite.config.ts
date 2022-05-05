import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import styleImport, { VantResolve } from 'vite-plugin-style-import';
import Components from 'unplugin-vue-components/vite'
import { VantResolver } from 'unplugin-vue-components/resolvers'
export default defineConfig({
  resolve: {
    extensions:['.ts','.js','.tsx'],
    alias: {
      '@': '/src'
    }
  },
  server: {
    https: false,
    // Listening on all local IPs
    host: true,
    port: 3000,
    // Load proxy configuration from .env
    // proxy: createProxy(VITE_PROXY),
  },
  plugins: [
    vue(),
    Components({
      resolvers: [
        VantResolver(),
      ]
    }),
      // 初始化样式
    styleImport({
      resolves: [VantResolve()],
    }),
  ]
})
