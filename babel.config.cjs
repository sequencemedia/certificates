const debug = require('debug')

const log = debug('@sequencemedia/certificates')

log('`localhost` is awake')

module.exports = {
  presets: [
    [
      '@babel/env',
      {
        targets: {
          node: 'current'
        },
        useBuiltIns: 'usage',
        corejs: 3
      }
    ]
  ]
}
