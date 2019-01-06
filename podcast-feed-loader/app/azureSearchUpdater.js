const settings = require('./azureSettings').settings
const client = require('./azureClient').client

exports.callback = function (feedResults, context = console) {
  context.log(`Min date: ${settings.minDate}`)
  const latestResults = settings.minDate
    ? feedResults.updateFeed.filter(e => {
      return new Date(e.published) > new Date(settings.minDate)
    })
    : feedResults.updateFeed
  if (!latestResults.length) {
    context.log(`Warning: skipping ${feedResults.feedUrl} because no updates`)
  }
  client.addDocuments(settings.index, latestResults, function (err, results) {
    // optional error, or confirmation of each document being added
    if (err) {
      context.error(`Error loading ${feedResults.feedUrl}`)
      context.error(err)
    } else {
      context.log(
        `${latestResults.length} documents loaded for ${feedResults.feedUrl}`
      )
    }
  })
}
