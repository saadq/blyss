/**
 * @flow
 */

const Linter = require('standard-engine').linter
const opts = require('./options.js')

const linter = new Linter(opts)

module.exports = linter
