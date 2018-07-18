const urlParser = require('./urlParser')
const errorMonitoring = require('./errorMonitoring')
const feeds = require('./feeds.json').feeds

const defaultCallback = () => {}

const processFeeds = function (feedList, callback = defaultCallback) {
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

const load = function (context) {
  context.log('starting...')
  try {
    // TODO This should be better
    if (process.env.SEARCH_PROVIDER === 'Azure') {
      context.log(`Found env variable for SEARCH_PROVIDER: ${process.env.SEARCH_PROVIDER}`)
      require('./azureSearchInitialize').initialize(() => {
        processFeeds(
          feeds,
          require('./azureSearchUpdater').callback
        )
      })
    } else {
      context.log('Note: this is a dry run, no search engine will be updated')
      processFeeds(
        feeds,
        require('./consoleUpdater').callback
      )
    }
  } catch (error) {
    context.log('error')
    context.log(error)
    require('./errorMonitoring').notify(error)
  }
}

exports.processFeeds = processFeeds
exports.load = load

if (require.main === module) {
  load(console)
}
