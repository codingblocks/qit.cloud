module.exports = function (context, myTimer) {
  const timeStamp = new Date().toISOString()

  if (myTimer.isPastDue) {
    context.log('JavaScript is running late!')
  }
  context.log('JavaScript timer trigger function ran!:', timeStamp)

  require('./multiUrlLoader').load(context)

  context.log('JavaScript timer trigger function done!:', timeStamp)

  context.done()
}
