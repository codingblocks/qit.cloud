import React from 'react'
import PropTypes from 'prop-types'

export const PodcastReleaseDate = ({releaseDate}) => {
  if (releaseDate) {
    return <span>({releaseDate.substring(0, releaseDate.indexOf('T'))})</span>
  } else {
    return <span>(Date unknown)</span>
  }
}

PodcastReleaseDate.propTypes = {
  releaseDate: PropTypes.string
}

export default PodcastReleaseDate
