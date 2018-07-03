const eol = require('os').EOL

exports.callback = function (feedResults, context = console) {
  if (!(feedResults && feedResults.updateFeed && feedResults.updateFeed && feedResults.errors)) {
    context.error('Invalid format specified')
    return
  }

  context.log(`${feedResults.feedUrl}`)
  context.log(`* ${feedResults.updateFeed.length} episodes successfully parsed`)
  if (feedResults.errors.length) {
    context.log(`* ${feedResults.errors.length} error(s):`)
    let formattedErrors = feedResults.errors.map(function (errorMessage) {
      return '* ' + errorMessage
    }).join(eol)
    context.log(formattedErrors)
  } else {
    context.log(`* No errors`)
  }
  context.log(eol)
}
