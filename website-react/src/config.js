export default {
  baseUrl: 'https://podcasts.search.windows.net/indexes/podcasts/docs?api-version=2017-11-11&$count=true&$top=200&queryType=full&search={searchTerm}', // note, appending a ~1 to the search term will enable fuzzy searching...but I don't recommend it
  apiKey: 'C7AC76C4D8E4FE369B5608D13A98468F',
  corsProxy: 'https://cors-anywhere.herokuapp.com/',
  playbackRates: [1, 1.5, 1.75, 2]
}
