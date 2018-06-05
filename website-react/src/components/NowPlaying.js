import React from 'react'
import styled from 'styled-components'

export const NowPlaying = ({className, nowPlaying}) => (
    <div className={className}>
        <h2>Now playing:</h2>
        <p id="episodeTitle">{nowPlaying.episodeTitle}</p>
        <p id="podcastTitle">{nowPlaying.podcastTitle}</p>
    </div>
)

export default styled(NowPlaying)`
    background: #359189;
    position: fixed;
    bottom: 0;
    height: 180px;
    width: 100vw;
    border: solid 2px rgba(0, 0, 0, 0.3);
    border-radius: 3px;

    display: flex;
    flex-wrap: wrap;
    padding: 10px;

    color: rgba(255, 255, 255, 0.9);

    h2, p {
        text-align: center;
        margin: 0;
        width: 100%;
    }

    p {
        font-size: 1.2rem;
    }

    #podcastTitle {
        color: rgba(0, 0, 0, 0.6);
    }
`


// @search.score:
// 0.3551399

// audioUrl:
// "https://aphid.fireside.fm/d/1437767933/b44de5fa-47c1-4e94-bf9e-c72f8d1c8f5d/0dba1f52-f433-47b6-9a31-f1a1fa5b4380.mp3"

// description:
// "<p>Mike may have cracked the testing pitch, the harsh reason the Junior Developer is dying & a nice batch of audience questions and follow up.</p>↵↵<p><p>This week’s Coder Radio is just like mom’s cookin&#39;, but with a taste of Kotlin.</p><img src="http://feeds.feedburner.com/~r/coderradiomp3/~4/4wm8patYirM" height="1" width="1" alt=""/></p>"

// episodeTitle:
// "Lunch Break Coder | CR 297"

// id:
// "125523CE_C660_49C5_81A8_24A8F17172A7"

// podcastTitle:
// "Coder Radio"

// published:
// "2018-02-20T00:00:00.000Z"