'use strict'

const errorMonitoring = require('../src/errorMonitoring'),
  expect = require('chai').expect,
  context = {error: function(){}, log: function() {}};

// TODO Better tests!

describe('Error Monitoring', () => {
  describe('callback', () => {
    it('should do its thing without error', () => {
        errorMonitoring.notify('Testing error reporting');
    });
  })
})