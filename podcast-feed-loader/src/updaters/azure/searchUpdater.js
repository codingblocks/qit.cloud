let settings = require('./settings').settings,
  client = require('./client').client;

exports.callback = function(feedResults, context = console) {
  if(!feedResults.updateFeed.length) {
    console.log('Warning: skipping ${feedResults.updateFeed} because no updates');
  }
  client.addDocuments(settings.index, feedResults.updateFeed, function(err, results) {
      // optional error, or confirmation of each document being added
      if(err) {
        console.error(`Error loading ${feedResults.feedUrl}`);
        console.error(err);
      } else {
        context.log(`${feedResults.updateFeed.length} documents loaded for ${feedResults.feedUrl}`);
      }
  });
}