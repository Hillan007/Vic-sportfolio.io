import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  base: 'https://github.com/Hillan007/Hillan007.github.io', // replace with your actual repo name
  plugins: [react()],
})