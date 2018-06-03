const request = require('request'),
	parsePodcast = require('node-podcast-parser'),
	feedToSearchAdapter = require('./feedToSearchAdapter'),
	http = require("http");

// Fetches feed content for a url, adapts it to a search engine friendly format
exports.parse = function (feedUrl, onLoadCallback) {
	request(feedUrl, (err, res, data) => {

		if (err) {
			return {
				errors: ['Network error' + err],
				updateFeed: { value: [] }
			};
		}

		parsePodcast(data, (err, data) => {
			if (err) {
				return {
					errors: ['Parsing error' + err],
					updateFeed: { value: [] }
				};
			}

			const result = feedToSearchAdapter.convert(data, feedUrl);

			if (onLoadCallback) {
				onLoadCallback(result);
			}

		});
	});
}