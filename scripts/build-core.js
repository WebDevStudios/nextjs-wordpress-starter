const esbuild = require('esbuild')

esbuild
  .build({
    entryPoints: ['../../packages/headless-core/src/index.js'],
    outdir: 'dist',
    bundle: true,
    sourcemap: false,
    minify: false,
    minifyWhitespace: true,
    splitting: false,
    platform: 'node',
    target: 'node14',
    loader: {
      '.js': 'jsx'
    }
  })
  .catch(() => process.exit(1))
