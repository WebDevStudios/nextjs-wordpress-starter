const esbuild = require('esbuild')

esbuild
  .build({
    entryPoints: ['../../packages/headless-core/src/index.js'],
    outdir: 'dist',
    bundle: true,
    sourcemap: false,
    minify: true,
    splitting: false,
    format: 'esm',
    target: ['esnext'],
    loader: {
      '.js': 'jsx'
    }
  })
  .catch(() => process.exit(1))
