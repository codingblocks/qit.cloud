module.exports = function (context, myTimer) {
  var timeStamp = new Date().toISOString()

  if (myTimer.isPastDue) {
    context.log('JavaScript is running late!')
  }
  context.log('JavaScript timer trigger function ran!:', timeStamp)

  var urlParser = require('./urlParser')
  context.log('trying http://feeds.podtrac.com/tBPkjrcL0_m0')
  urlParser.parse('http://feeds.podtrac.com/tBPkjrcL0_m0')

  context.log('JavaScript timer trigger function done!:', timeStamp)

  context.done()
}
