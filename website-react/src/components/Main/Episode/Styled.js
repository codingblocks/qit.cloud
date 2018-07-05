import styled from 'styled-components'

import Episode from './index'
import EpisodeTitle from './EpisodeTitle'
import PodcastTitle from './PodcastTitle'

const StyledEpisode = styled(Episode)`
    display: flex;
    flex-direction: column;
    margin-bottom: 0.3rem;
`

const StyledEpisodeTitle = styled(EpisodeTitle)`
    padding: 1.5rem 0.5rem 0 1rem;
`

const StyledPodcastTitle = styled(PodcastTitle)`
    padding: 0.3rem 0 0 1rem;
    display: flex;
    flex-wrap: wrap;
`

const StyledEpisodeBody = styled.section`
    display: flex;
    justify-content: space-between;
`

const StyledControls = styled.div`
    display: flex;
`

export {StyledEpisode, StyledEpisodeTitle, StyledPodcastTitle, StyledEpisodeBody, StyledControls}
