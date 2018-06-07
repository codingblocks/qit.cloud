const urlParser = require('./urlParser')
const errorMonitoring = require('./errorMonitoring')
const feeds = require('../data/feeds').feeds

const defaultCallback = () => {}

let processFeeds = function (feedList, callback = defaultCallback) {
  let callbackList = callback
    ? Array.isArray(callback) ? callback : [callback]
    : []

  feedList.forEach(feed => {
    urlParser.parse(feed, function (feedResults) {
      if (feedResults.errors.length) {
        errorMonitoring.notify(
          `Errors parsing ${feed.url}`,
          'warning',
          feedResults.errors
        )
      }

      callbackList.forEach(c => {
        c(feedResults)
      })
    })
  })
}

exports.processFeeds = processFeeds

if (require.main === module) {
  try {
    // TODO This should be better
    if (process.env.SEARCH_PROVIDER === 'Azure') {
      console.log(`Found env variable for SEARCH_PROVIDER: ${process.env.SEARCH_PROVIDER}`)
      require('./updaters/azure/searchInitialize').initialize(() => {
        processFeeds(
          feeds,
          require('./updaters/azure/searchUpdater').callback
        )
      })
    } else {
      console.log('Note: this is a dry run, no search engine will be updated')
      processFeeds(
        feeds,
        require('./updaters/consoleUpdater').callback
      )
    }
  } catch (error) {
    require('./errorMonitoring').notify(error)
  }
}
