/**
 * @flow
 */

const Linter = require('blyss-engine').linter
const opts = require('./options.js')

const linter = new Linter(opts)

module.exports = linter
