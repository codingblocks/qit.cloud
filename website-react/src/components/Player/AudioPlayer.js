import styled from 'styled-components'
import React from 'react'
import playImg from '../../assets/play.svg'
import pauseImg from '../../assets/pause.svg'
import back10Img from '../../assets/back10.svg'
import forward30Img from '../../assets/forward30.svg'

const ControlIcon = styled.img`
    width: 40px;
    height: 40px;
`

const AudioControlsContainer = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    margin-bottom: 10px;
    * {
    flex: 1;
    display:flex;
    justify-content: center;
    align-items: center;
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
      currentTime: 0
    }
    this.playPause = this.playPause.bind(this)
    this.loadStarted = this.loadStarted.bind(this)
    this.durationChanged = this.durationChanged.bind(this)
    this.playing = this.playing.bind(this)
    this.timeUpdated = this.timeUpdated.bind(this)
    this.ended = this.ended.bind(this)
    this.jumpForward = this.jumpForward.bind(this)
    this.jumpBackward = this.jumpBackward.bind(this)
    this.jumpToTime = this.jumpToTime.bind(this)
  }

  playPause () {
    if (this.state.playing) {
      this.audioRef.current.pause()
    } else {
      this.audioRef.current.play()
    }
    this.setState({playing: !this.state.playing})
    console.log('playPause')
  }

  loadStarted () {
    this.props.onLoadStart()
    this.setState({duration: 0, currentTime: 0})
  }

  ended () {
    this.props.onEnded()
  }

  durationChanged () {
    this.setState({duration: this.audioRef.current.duration || 0})
  }

  playing () {
    this.setState({playing: true})
  }
  timeUpdated () {
    this.setState({currentTime: this.audioRef.current.currentTime})
  }

  jumpToTime (time) {
    this.audioRef.current.currentTime = time
  }

  jumpForward () {
    this.jumpToTime(this.state.currentTime + 30)
  }

  jumpBackward () {
    this.jumpToTime(this.state.currentTime - 10)
  }

  formatTrackTime (time) {
    if (!time) {
      return '--:--'
    } else {
      let hours = Math.floor(time / 3600)
      let minutes = Math.floor(time % 3600 / 60)
      let seconds = Math.floor(time % 60)
      return hours
        ? `${hours}:${padTime(minutes)}:${padTime(seconds)}`
        : `${padTime(minutes)}:${padTime(seconds)}`
    }

    function padTime (input) {
      let padded = `00${input}`
      return padded.substr(padded.length - 2)
    }
  }

  render () {
    return (
      <AudioControlsContainer>
        <div />
        <div>
          <span onClick={this.jumpBackward}><ControlIcon src={back10Img} /></span>
          <span onClick={this.playPause}>
            <ControlIcon src={this.state.playing ? pauseImg : playImg} />
          </span>
          <span onClick={this.jumpForward}><ControlIcon src={forward30Img} /></span>
        </div>
        <span>{this.formatTrackTime(this.state.currentTime)}/{this.formatTrackTime(this.state.duration)}</span>

        <audio
          ref={this.audioRef} {...this.props}
          onLoadStart={this.loadStarted}
          onDurationChange={this.durationChanged}
          onPlaying={this.playing}
          onTimeUpdate={this.timeUpdated}
          autoPlay
          onEnded={this.ended}
          src={this.props.src}
        />
      </AudioControlsContainer>
    )
  }
}
