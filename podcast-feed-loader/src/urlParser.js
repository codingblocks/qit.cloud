// Parses feed content and returns an array of errors, and an array of formatted episode data
(function () {

    const request = require('request'),
        parsePodcast = require('node-podcast-parser'),
        feedToSearchAdapter = require('./feedToSearchAdapter'),
        eol = require('os').EOL;

    let parse = function (feedUrl) {
        request(feedUrl, (err, res, data) => {
            console.log(`Attempting to read ${feedUrl}`);

            if (err) {
                console.error('Network error', err);
                return;
            }

            parsePodcast(data, (err, data) => {
                if (err) {
                    console.error('Parsing error', err);
                    return;
                }

                const result = feedToSearchAdapter.convert(data);

                console.log(`${result.updateFeed.value.length} episodes parsed`);
                console.log(`${result.errors.length} errors found`);
                if (result.errors) {
                    console.log(result.errors.join(eol));
                }

            });
        });
    }

    module.exports.parse = parse;

}());