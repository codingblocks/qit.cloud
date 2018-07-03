/* eslint-env mocha */

'use strict'

const errorMonitoring = require('../errorMonitoring')

// TODO Better tests!

describe('Error Monitoring', () => {
  describe('callback', () => {
    it('should do its thing without error', () => {
      errorMonitoring.notify('Testing error reporting')
    })
  })
})
