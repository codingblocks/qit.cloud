import styled from 'styled-components'
import React from 'react'
import { actions } from 'mirrorx'
import Mousetrap from 'mousetrap'

import Speed from './Speed'
import { formatTrackTime } from '../../helpers'

import playImg from '../../assets/play.png'
import pauseImg from '../../assets/pause.png'
import back10Img from '../../assets/backwards.png'
import forward30Img from '../../assets/forwards.png'
import TimeSlider from './TimeSlider'
import Loader from '../Loader'
import VolumeSlider from './VolumeSlider'

const ControlIcon = styled.img`
  width: 100%;
`

const TimeSliderContainer = styled.div`
  width: 100%;
  position: absolute;
  top: 0;
`

const LeftContainer = styled.div`
  flex: 1 0;
  margin-left: 15px;
  display: flex;
  justify-content: flex-start;
`

const RightContainer = styled.div`
  flex: 1 0;
  margin-right: 15px;
  display: flex;
  align-items: center;
  justify-content: space-between;

  @media screen and (max-width: 560px) {
    justify-content: flex-end;
  }
`
const VolumeSliderContainer = styled.div`
  width: 150px;
  @media screen and (max-width: 680px) {
    width: 100px;
  }
  @media screen and (max-width: 560px) {
    display: none;
  }
`

const TrackTime = styled.div`
`

const ButtonContainer = styled.div`
  flex: 1 1;
  display: flex;
  justify-content: center;
  align-items: center;

  .bigButton, .smallButton {
    margin: 0 10px;
  }

  .bigButton {
    width: 75px;
  }

  .smallButton {
    width: 50px;
  }

  @media screen and (max-width: 360px) {
    .smallButton {
      width: 40px;
      margin: 0 5px;
    }
    .bigButton {
      width: 70px;
      margin: 0 5px;
    }
  }

`

const AudioControlsContainer = styled.div`
  display: flex;
  align-items: center;

  audio {
    display:none;
  }
`

export default class AudioPlayer extends React.Component {
  constructor (props) {
    super(props)
    this.audioRef = React.createRef()
    this.state = {
      playing: true,
      duration: 0,
      currentTime: 0,
      seeking: false,
      volume: 0,
      muted: false,
      userChangedVolume: false
    }
  }

  componentDidMount () {
    this.resume()
    Mousetrap.bind('space', this.spaceBarHotkey)
  }

  componentWillUnmount () {
    Mousetrap.unbind('space', this.spaceBarHotkey)
  }

  spaceBarHotkey = (e) => {
    if (e.preventDefault) {
      e.preventDefault()
    } else {
      // internet explorer
      e.returnValue = false
    }
    this.playPause()
  }

  playPause = () => {
    if (this.state.playing) {
      this.audioRef.current.pause()
    } else {
      this.audioRef.current.play()
    }
    this.setState({ playing: !this.state.playing })
  }

  loadStarted = () => {
    this.props.onLoadStart()
    this.setState({ duration: 0, currentTime: 0 })
    if (this.state.userChangedVolume) {
      this.setVolume(this.state.volume)
    } else {
      this.setVolume(0.5)
    }
  }

  ended = () => {
    this.props.onEnded()
  }

  durationChanged = () => {
    this.setState({ duration: this.audioRef.current.duration || 0 })
  }

  playing = () => {
    this.setState({ playing: true })
  }

  timeUpdated = () => {
    const currentTime = this.audioRef.current.currentTime
    window.localStorage.setItem('currentTime', currentTime)
    this.setState({ currentTime })
  }

  jumpToTime = time => {
    this.audioRef.current.currentTime = time
  }

  jumpForward = () => {
    this.jumpToTime(this.state.currentTime + 30)
  }

  jumpBackward = () => {
    this.jumpToTime(this.state.currentTime - 10)
  }

  volumeChanged = () => {
    this.setState({volume: this.audioRef.current.volume})
    this.setState({userChangedVolume: true})
  }

  setVolume = desiredVolume => {
    this.audioRef.current.volume = desiredVolume
    this.setState({volume: desiredVolume})
  }

  toggleMute = () => {
    this.audioRef.current.muted = !this.audioRef.current.muted
    this.setState({muted: this.audioRef.current.muted})
  }

  resume = () => {
    const currentTime = window.localStorage.getItem('currentTime')
    if (currentTime) {
      console.log('Resuming to time: ', currentTime)
      this.jumpToTime(parseFloat(currentTime))
      this.audioRef.current.pause()
      this.setState({ playing: false })
    }
  }

  seeking = () => {
    this.setState({ seeking: true })
  }

  seeked = () => {
    this.setState({ seeking: false })
  }

  render () {
    return (
      <AudioControlsContainer>
        <TimeSliderContainer>
          <TimeSlider
            currentTime={this.state.currentTime}
            duration={this.state.duration}
            onTimeChanged={this.jumpToTime}
          />
        </TimeSliderContainer>
        <LeftContainer>
          <Speed onClick={actions.player.nextPlaybackRate}>
            {this.props.playbackrate}x
          </Speed>
        </LeftContainer>
        <ButtonContainer>
          <div
            onClick={event => {
              event.preventDefault()
              this.jumpBackward()
            }}
            className='smallButton'
          >
            <ControlIcon
              src={back10Img}
              alt='Skip backward 10 seconds control button'
            />
          </div>
          <div
            onClick={event => {
              event.preventDefault()
              this.playPause()
            }}
            className='bigButton'
          >
            <ControlIcon
              src={this.state.playing ? pauseImg : playImg}
              alt={this.state.playing ? 'Pause podcast control button' : 'Play podcast control button'}
            />
          </div>
          <div
            onClick={event => {
              event.preventDefault()
              this.jumpForward()
            }}
            className='smallButton'
          >
            <ControlIcon
              src={forward30Img}
              alt='Skip forward 30 seconds control button'
            />
          </div>
        </ButtonContainer>
        <RightContainer>
          <VolumeSliderContainer>
            <VolumeSlider
              currentVolume={this.state.muted ? 0 : this.state.volume}
              onVolumeChanged={this.setVolume}
              onMute={this.toggleMute}
              muted={this.state.muted}
            />
          </VolumeSliderContainer>
          <TrackTime>
            {formatTrackTime(this.state.currentTime)}
            <br />
            {
              this.state.duration !== Infinity &&
              formatTrackTime(this.state.duration)
            }
          </TrackTime>
        </RightContainer>
        <audio
          ref={this.audioRef} {...this.props}
          onLoadStart={this.loadStarted}
          onDurationChange={this.durationChanged}
          onPlaying={this.playing}
          onTimeUpdate={this.timeUpdated}
          onSeeking={this.seeking}
          onSeeked={this.seeked}
          autoPlay
          onVolumeChange={this.volumeChanged}
          onEnded={this.ended}
          src={this.props.src}
        />
        {
          this.state.seeking &&
          <Loader />
        }
      </AudioControlsContainer>
    )
  }
}
