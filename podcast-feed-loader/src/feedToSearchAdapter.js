// Parses feed content and returns an array of errors, and an array of formatted episode data
(function () {

    const requiredFields = ['guid', 'title', 'published'];

    let getValidationErrors = function (episode, index) {
        let errors = [];

        if (!(episode.enclosure && episode.enclosure.url)) {
            errors.push(`[${index}]: enclosure or enclosure url not found for episode`);
        }

        for (let i = 0; i < requiredFields.length; i++) {
            let field = requiredFields[i];

            if (!episode[field]) {
                errors.push(`[${index}]: ${field} not found`);
            }
        }

        return errors;
    }

    let logErrors = function (errors) {
        for (let i = 0; i < errors.length; i++) {
            console.log(errors);
        }
    }

    let convert = function (data) {
        let result = {
            errors: [],
            updateFeed: { value: [] }
        };

        if (!data) {
            result.errors.push(`Error: invalid data to convert to search format`);
            return result;
        }

        if (!(data.episodes && Array.isArray(data.episodes))) {
            result.errors.push(`Warning: no episodes to convert to search format`);
            return result;
        }

        for (let i = 0; i < data.episodes.length; i++) {
            let episode = data.episodes[i];
            let errors = getValidationErrors(episode, i);
            result.errors = result.errors.concat(errors);
            if (!errors.length) {
                result.updateFeed.value.push({
                    '@search.action': 'upload',
                    id: episode.guid,
                    podcastTitle: data.title,
                    episodeTitle: episode.title,
                    episodeImage: episode.image,
                    description: episode.description,
                    published: episode.published,
                    audioUrl: episode.enclosure.url
                });
            }
        }

        return result;
    }

    module.exports.convert = convert;

}());