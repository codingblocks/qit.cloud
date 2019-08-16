/* eslint-env serviceworker */

const makeServiceWorkerEnv = require('service-worker-mock')
const makeFetchMock = require('service-worker-mock/fetch')

describe('Service worker', () => {
  beforeEach(() => {
    Object.assign(
      global,
      makeServiceWorkerEnv(),
      makeFetchMock()
      // If you're using sinon or similar you'd probably use below instead of makeFetchMock
      // fetch: sinon.stub().returns(Promise.resolve())
    )
    jest.resetModules()
  })
  it('should add listeners', () => {
    require('../sw.js')
    expect(self.listeners['install']).toBeDefined()
    expect(self.listeners['activate']).toBeDefined()
    expect(self.listeners['fetch']).toBeDefined()
  })
})
