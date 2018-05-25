// Fetches feed content for a url, adapts it to a search engine friendly format
(function () {

    const request = require('request'),
        parsePodcast = require('node-podcast-parser'),
        feedToSearchAdapter = require('./feedToSearchAdapter'),
        eol = require('os').EOL,
        http = require("http");

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
                // TODO write to search engine
                // https://www.eliostruyf.com/create-azure-function-to-update-your-azure-search-index/
                // The next step is to do a POST request to the Azure Search index endpoint to add the
                // article to the index. This is the endpoint which is used for this:
                // POST https://[service name].search.windows.net/indexes/[index name]/docs/search?api-version=[api-version]  

                request.post(
                    '',
                    {
                        json: {
                            'api-key': '',
                            'value': result.updateFeed.value
                        }
                    },
                    function (error, response, body) {
                        //console.log(`Posting ${feedUrl}: ${response.statusCode}`);
                    }
                );
            });
        });
    }

    module.exports.parse = parse;

}());