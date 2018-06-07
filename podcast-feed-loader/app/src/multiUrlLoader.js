const fs = require('fs')
const readline = require('readline')
const urlParser = require('./urlParser')
const errorMonitoring = require('./errorMonitoring')

const defaultCallback = () => {}

let processFeeds = function (urlListFile, callback = defaultCallback) {
  let rd = readline.createInterface({
    input: fs.createReadStream(urlListFile),
    console: false
  })

  let callbackList = callback
    ? Array.isArray(callback) ? callback : [callback]
    : []

  let parseLine = (feedLine) => {
    let parts = feedLine.split(',')

    if (parts.length === 2) {
      return {
        url: parts[1],
        title: parts[0]
      }
    }
    return {
      url: feedLine
    }
  }

  rd.on('line', function (feedLine) {
    const urlData = parseLine(feedLine)
    urlParser.parse(urlData, function (feedResults) {
      if (feedResults.errors.length) {
        errorMonitoring.notify(
          `Errors parsing ${urlData.url}`,
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
          './data/feeds.txt',
          require('./updaters/azure/searchUpdater').callback
        )
      })
    } else {
      console.log('Note: this is a dry run, no search engine will be updated')
      processFeeds(
        './data/feeds.txt',
        require('./updaters/consoleUpdater').callback
      )
    }
  } catch (error) {
    require('./errorMonitoring').notify(error)
  }
}
