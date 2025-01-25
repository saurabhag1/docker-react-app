import { defineConfig } from 'vite';

export default defineConfig({
  server: {
    host: '0.0.0.0',  // This tells Vite to listen on all network interfaces
    port: 3000,        // Optional: specify the port if needed
  },
});
