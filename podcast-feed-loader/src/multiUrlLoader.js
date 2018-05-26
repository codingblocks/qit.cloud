const fs = require('fs'),
readline = require('readline'),
urlParser = require('./urlParser'),
defaultCallback = require('./updaters/consoleUpdater').callback;

let process = function (urlListFile, callback = defaultCallback) {
  let rd = readline.createInterface({
    input: fs.createReadStream(urlListFile),
    console: false
  });

  rd.on('line', function (url) {
    urlParser.parse(url, function (feedResults) {

      if (callback) {
        callback(feedResults);
      }

    });
  });
}

exports.process = process;

if (require.main === module) {
  process('./data/feeds.txt');
}