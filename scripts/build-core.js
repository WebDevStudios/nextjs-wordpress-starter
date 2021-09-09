const esbuild = require('esbuild')

/**
 * Compile to CommonJS.
 */
esbuild
  .build({
    bundle: true,
    entryPoints: ['../../packages/headless-core/src/components/index.js'],
    minifyWhitespace: true,
    loader: {
      '.js': 'jsx'
    },
    outdir: 'dist/cjs/',
    platform: 'node',
    target: 'node14'
  })
  .catch(() => process.exit(1))
