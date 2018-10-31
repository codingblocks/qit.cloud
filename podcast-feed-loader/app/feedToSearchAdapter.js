// Parses feed content and returns an array of errors, and an array of formatted episode data
;(function () {
  const requiredFields = ['guid', 'title', 'published']
  const dateTimeFormat = 'YYYY-MM-DD[T]HH:mm:ss.SSSZ'

  let getValidationErrors = function (episode, index) {
    let errors = []

    if (!(episode.enclosure && episode.enclosure.url)) {
      errors.push(
        `[${index}]: enclosure or enclosure url not found for episode`
      )
    }

    for (let i = 0; i < requiredFields.length; i++) {
      let field = requiredFields[i]

      if (!episode[field]) {
        errors.push(`[${index}]: ${field} not found`)
      }
    }

    return errors
  }

  let convert = function (
    data,
    feedUrl,
    overrideTitle,
    titleCleanser,
    forceHttps
  ) {
    let result = {
      feedUrl: feedUrl,
      title: overrideTitle || (data ? data.title : null),
      updated: data ? data.updated : null,
      explicit: data ? data.explicit : null,
      errors: [],
      updateFeed: []
    }

    if (!data) {
      result.errors.push(`Error: invalid data to convert to search format`)
      return result
    }

    if (!(data.episodes && Array.isArray(data.episodes))) {
      result.errors.push(`Warning: no episodes to convert to search format`)
      return result
    }

    for (let i = 0; i < data.episodes.length; i++) {
      let episode = data.episodes[i]
      let errors = getValidationErrors(episode, i)
      result.errors = result.errors.concat(errors)
      if (!errors.length) {
        result.updateFeed.push({
          id: episode.guid.replace(/[^a-zA-Z0-9]+/g, '_'),
          podcastTitle: overrideTitle || data.title,
          episodeTitle: cleanseTitle(episode.title, titleCleanser),
          description: episode.description,
          published: require('moment')(episode.published).format(
            dateTimeFormat
          ),
          audioUrl: forceHttps
            ? episode.enclosure.url.replace(/^http:\/\//, 'https://')
            : episode.enclosure.url,
          episode: episode.episode,
          season: episode.season,
          episodeType: episode.episodeType,
          feed: feedUrl
        })
      }
    }

    return result
  }

  let cleanseTitle = function (title, cleanser) {
    if (!cleanser) {
      return title
    }
    const regex = new RegExp(cleanser, 'g')
    return title.replace(regex, '')
  }

  module.exports.convert = convert
  module.exports.dateTimeFormat = dateTimeFormat
})()
