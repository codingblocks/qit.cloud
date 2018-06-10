const request = require('request')
const parsePodcast = require('node-podcast-parser')
const feedToSearchAdapter = require('./feedToSearchAdapter')

// Fetches feed content for a url, adapts it to a search engine friendly format
exports.parse = function (feed, onLoadCallback) {
  let feedUrl = feed.url // This is required
  let overrideTitle = feed.title || null
  let titleCleanser = feed.titleCleanser || null
  let forceHttps = feed.forceHttps || null

  request(feedUrl, (err, res, data) => {
    if (err) {
      return {
        errors: ['Network error' + err],
        updateFeed: { value: [] }
      }
    }

    parsePodcast(data, (err, data) => {
      if (err) {
        return {
          errors: ['Parsing error' + err],
          updateFeed: { value: [] }
        }
      }

      const result = feedToSearchAdapter.convert(data, feedUrl, overrideTitle, titleCleanser, forceHttps)

      if (onLoadCallback) {
        onLoadCallback(result)
      }
    })
  })
}
