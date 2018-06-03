const fs = require('fs'),
  readline = require('readline'),
  urlParser = require('./urlParser'),
  errorMonitoring = require('./errorMonitoring');

let processFeeds = function (urlListFile, callback = defaultCallback) {
  let rd = readline.createInterface({
    input: fs.createReadStream(urlListFile),
    console: false
  });

  let callbackList = callback ?
    Array.isArray(callback) ? callback : [callback]
    : [];

  rd.on('line', function (url) {
    urlParser.parse(url, function (feedResults) {

      if(feedResults.errors.length) {
        errorMonitoring.notify(
          `Errors parsing ${url}`,
          'warning',
          feedResults.errors
        );
      }

      callbackList.forEach(c => {
        c(feedResults);
      });

    });
  });
}

exports.processFeeds = processFeeds;

if (require.main === module) {
  
  try {
    // TODO This should be better
    if(process.env.SEARCH_PROVIDER == 'Azure') {
      console.log(`Found env variable for SEARCH_PROVIDER: ${process.env.SEARCH_PROVIDER}`)
      require('./updaters/azure/searchInitialize').initialize(() => {
        processFeeds(
          './data/feeds.txt',
          require('./updaters/azure/searchUpdater').callback
        );
      });
    } else {
      processFeeds(
        './data/feeds.txt',
        require('./updaters/consoleUpdater').callback
      );
    }
  } catch(error) {
    require('./errorMonitoring').notify(error);
  }
}