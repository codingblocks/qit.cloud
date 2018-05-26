const settings = require('./settings').settings,
  AzureSearch = require('azure-search');

exports.client = AzureSearch({
  url: settings.searchEndpoint,
  key: settings.apiKey,
  version: settings.version
});