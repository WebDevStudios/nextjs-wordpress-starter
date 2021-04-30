const { getDefaultConfig } = require('@expo/metro-config')
const path = require( 'path' )
const defaultConfig = getDefaultConfig(__dirname)

defaultConfig.resolver.extraNodeModules = {
  '@/functions': path.resolve( __dirname, 'functions'),
  '@/lib': path.resolve( __dirname, 'lib'),
  '@/components': path.resolve( __dirname, 'components'),
  '@/styles': path.resolve( __dirname, 'styles'),
}

console.log('mico')
console.log( defaultConfig.resolver.extraNodeModules )

module.exports = defaultConfig
