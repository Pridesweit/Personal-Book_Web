import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'

import { svgBuilder } from './src/plugins/svgBuilder';


// https://vitejs.dev/config/
export default defineConfig({
  plugins: 
    [vue(), vueJsx(),[svgBuilder('./src/icons/svg/')]],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  },
  server:{
    host: '0.0.0.0',
 }
})
