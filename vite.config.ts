import {defineConfig} from 'vite';
import {resolve} from 'node:path';

export default defineConfig({
  build: {
    lib: {
      entry: resolve(__dirname, 'lib/main.ts'),
      name: 'celebrationjs',
      fileName: 'celebrationjs',
    },
  },
});
