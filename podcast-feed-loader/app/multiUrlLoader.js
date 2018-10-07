const envFile = require('dotenv').config()
const urlParser = require('./urlParser')
const errorMonitoring = require('./errorMonitoring')
const feeds = require('./feeds.json').feeds
const { SEARCH_PROVIDER } = require('./helpers/app.constants')

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
  if (envFile) {
    context.log('.env file, populating environment variables')
  }
  try {
    if (SEARCH_PROVIDER === 'Azure') {
      context.log(`Found env variable for SEARCH_PROVIDER: ${SEARCH_PROVIDER}`)
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
