import { defineConfig } from 'vite';

export default defineConfig({
  root: '.',
  publicDir: 'public',
  build: {
    outDir: 'dist',
    target: 'es2020',
    minify: 'esbuild',
    rollupOptions: {
      input: {
        main: 'index.html',
      },
      output: {
        // Code-split by feature area
        manualChunks(id): string | undefined {
          if (id.includes('/data/chapters')) return 'data-chapters';
          if (id.includes('/data/')) return 'data';
          if (id.includes('/ui/graph')) return 'graphs';
          return undefined;
        },
      },
    },
    sourcemap: true,
  },
  resolve: {
    alias: {
      '@': '/src',
    },
  },
  server: {
    port: 3000,
    open: true,
    hmr: true,
    // Shared `assets/js/portal-core/...` lives one level above `mikro1/`
    fs: {
      allow: ['..'],
    },
  },
});
