import styled from 'styled-components'
import React from 'react'
import { actions } from 'mirrorx'

import Speed from './Speed'

import playImg from '../../assets/play.png'
import pauseImg from '../../assets/pause.png'
import back10Img from '../../assets/backwards.png'
import forward30Img from '../../assets/forwards.png'
import TimeSlider from './TimeSlider'
import Loader from '../Loader'

const ControlIcon = styled.img`
  width: 100%;
`

const AudioControlsContainer = styled.div`
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

  #trackTime {
    position: absolute;
    right: 15px;
  }

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
      containerWidth: 800,
      leftEdge: 0,
      scrubbing: false,
      scrubPosition: 0,
      seeking: false
    }
    this.container = React.createRef()
  }

  componentDidMount () {
    this.setState({
      containerWidth: this.container.current.offsetWidth,
      leftEdge: this.container.current.getBoundingClientRect().left
    })
    window.addEventListener('resize', this.resizeTimeSlider)
  }

  componentWillUnmount () {
    window.removeEventListener('resize', this.resizeTimeSlider)
  }

  resizeTimeSlider = () => {
    this.setState({
      containerWidth: this.container.current.offsetWidth,
      leftEdge: this.container.current.getBoundingClientRect().left
    })
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
    this.setState({ currentTime: this.audioRef.current.currentTime })
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

  formatTrackTime = time => {
    if (!time) return '--:--'

    const hours = Math.floor(time / 3600)
    const minutes = Math.floor(time % 3600 / 60)
    const seconds = Math.floor(time % 60)
    return hours
      ? `${hours}:${padTime(minutes)}:${padTime(seconds)}`
      : `${padTime(minutes)}:${padTime(seconds)}`

    function padTime (input) {
      const padded = `00${input}`
      return padded.substr(padded.length - 2)
    }
  }

  onGrabScrubber = (initialEvent) => {
    initialEvent.preventDefault()

    let newPosition = typeof initialEvent.screenX === 'number'
      ? initialEvent.screenX - this.state.leftEdge
      : initialEvent.targetTouches[0].screenX - this.state.leftEdge

    this.setState({ scrubbing: true, scrubPosition: newPosition })

    const onScrub = (event) => {
      event.preventDefault()

      newPosition = typeof event.screenX === 'number'
        ? event.screenX - this.state.leftEdge
        : event.targetTouches[0].screenX - this.state.leftEdge

      this.setState({ scrubPosition: newPosition })
    }

    const onScrubEnd = (event) => {
      event.preventDefault()
      this.setState({ scrubbing: false })

      newPosition = typeof event.screenX === 'number'
        ? event.screenX - this.state.leftEdge
        : event.changedTouches[0].screenX - this.state.leftEdge

      if (newPosition <= this.state.containerWidth && newPosition >= 0) {
        this.jumpToTime(this.state.duration * newPosition / this.state.containerWidth)
      }

      window.removeEventListener('mousemove', onScrub, { passive: false })
      window.removeEventListener('mouseup', onScrubEnd, { once: true, passive: false })
      window.removeEventListener('touchmove', onScrub, { passive: false })
      window.removeEventListener('touchend', onScrubEnd, { once: true, passive: false })
      window.removeEventListener('touchcancel', onScrubDisrupted, { once: true })
    }

    const onScrubDisrupted = (event) => {
      event.preventDefault()
      this.setState({ scrubbing: false })

      window.removeEventListener('mousemove', onScrub, { passive: false })
      window.removeEventListener('mouseup', onScrubEnd, { once: true, passive: false })
      window.removeEventListener('touchmove', onScrub, { passive: false })
      window.removeEventListener('touchend', onScrubEnd, { once: true, passive: false })
      window.removeEventListener('touchcancel', onScrubDisrupted, { once: true })
    }

    if (initialEvent.type === 'mousedown') {
      window.addEventListener('mousemove', onScrub, { passive: false })
      window.addEventListener('mouseup', onScrubEnd, { once: true, passive: false })
    } else if (initialEvent.type === 'touchstart') {
      window.addEventListener('touchmove', onScrub, { passive: false })
      window.addEventListener('touchend', onScrubEnd, { once: true, passive: false })
      window.addEventListener('touchcancel', onScrubDisrupted, { once: true })
    }
  }

  seeking = () => {
    this.setState({ seeking: true })
  }

  seeked = () => {
    this.setState({ seeking: false })
  }

  render () {
    const sliderPosition = this.state.scrubbing ? this.state.scrubPosition : this.state.duration ? this.state.containerWidth * this.state.currentTime / this.state.duration : 0

    return (
      <AudioControlsContainer innerRef={this.container}>
        <TimeSlider
          scrubbing={this.state.scrubbing}
          onGrabScrubber={this.onGrabScrubber}
          width={this.state.containerWidth}
          sliderPosition={sliderPosition}
          duration={this.state.duration}
          formatTime={this.formatTrackTime}
        />
        <Speed onClick={actions.player.nextPlaybackRate}>
          {this.props.playbackRate}x
        </Speed>
        <div
          onClick={event => {
            event.preventDefault()
            this.jumpBackward()
          }}
          className='smallButton'
        >
          <ControlIcon src={back10Img} />
        </div>
        <div
          onClick={event => {
            event.preventDefault()
            this.playPause()
          }}
          className='bigButton'
        >
          <ControlIcon src={this.state.playing ? pauseImg : playImg} />
        </div>
        <div
          onClick={event => {
            event.preventDefault()
            this.jumpForward()
          }}
          className='smallButton'
        >
          <ControlIcon src={forward30Img} />
        </div>
        <span id='trackTime'>
          {this.formatTrackTime(this.state.currentTime)}
          <br />
          {
            this.state.duration !== Infinity &&
            this.formatTrackTime(this.state.duration)
          }
        </span>

        <audio
          ref={this.audioRef} {...this.props}
          onLoadStart={this.loadStarted}
          onDurationChange={this.durationChanged}
          onPlaying={this.playing}
          onTimeUpdate={this.timeUpdated}
          onSeeking={this.seeking}
          onSeeked={this.seeked}
          autoPlay
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
