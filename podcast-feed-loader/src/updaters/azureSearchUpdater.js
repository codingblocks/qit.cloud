const request = require('request');
// TODO write to search engine
// https://www.eliostruyf.com/create-azure-function-to-update-your-azure-search-index/
// The next step is to do a POST request to the Azure Search index endpoint to add the
// article to the index. This is the endpoint which is used for this:
// POST https://[service name].search.windows.net/indexes/[index name]/docs/search?api-version=[api-version]  

exports.callback = function(feedResults, context = console) {
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
}