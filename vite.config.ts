import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vitejs.dev/config/
export default defineConfig({
  base: "https://riyuze.github.io/portfolio/",
  plugins: [react()],
})
