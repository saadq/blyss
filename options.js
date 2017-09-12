const eslint = require('eslint')
const path = require('path')
const pkg = require('./package.json')

module.exports = {
  cmd: 'blyss',
  version: pkg.version,
  homepage: pkg.homepage,
  bugs: pkg.bugs.url,
  tagline: 'Blyss Style',
  eslint: eslint,
  eslintConfig: {
    configFile: path.join(__dirname, '.eslintrc.json')
  }
}
