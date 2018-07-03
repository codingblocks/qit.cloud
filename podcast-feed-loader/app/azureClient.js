const settings = require('./azureSettings').settings
const AzureSearch = require('azure-search')

exports.client = AzureSearch({
  url: settings.searchEndpoint,
  key: settings.apiKey,
  version: settings.version
})
