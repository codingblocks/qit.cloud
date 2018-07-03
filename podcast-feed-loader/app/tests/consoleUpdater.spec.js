/* eslint-env mocha */

'use strict'

const logger = require('../consoleUpdater')
const context = {error: function () {}, log: function () {}}

// TODO Better testing!

describe('Console Updater', () => {
  describe('callback', () => {
    it('should write to console without error', () => {
      logger.callback({ value: [] }, context)
    })
  })
})
