import React from 'react'

import styled from 'styled-components'

import { formatTrackTime } from '../../helpers'

const ScrubberHandle = styled.g`
  visibility: ${props => props.scrubbing ? 'visible' : 'hidden'};
`

const Scrubber = styled.svg`
  ${props => props.scrubbing ? `
    cursor: -webkit-grabbing;
    cursor: grabbing;
  ` : `
    cursor: grab;
  `}

  position: absolute;
  top: -8px;
  left: 0
  
  &:hover ${ScrubberHandle} {
    visibility: visible
  }
`

const ScrubberLabel = styled.svg`
  position: absolute;
  top: -40px;
  left: 0;
  visibility: ${props => props.scrubbing ? 'visible' : 'hidden'}
`

export default class TimeSlider extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      scrubbing: false,
      scrubPosition: 0,
      containerWidth: 0,
      leftEdge: 0
    }
    this.sliderRef = React.createRef()
  }

  componentDidMount () {
    this.resizeTimeSlider()
    window.addEventListener('resize', this.resizeTimeSlider)
  }

  componentWillUnmount () {
    window.removeEventListener('resize', this.resizeTimeSlider)
  }

  resizeTimeSlider = () => {
    this.setState({
      containerWidth: this.sliderRef.current.offsetWidth,
      leftEdge: this.sliderRef.current.getBoundingClientRect().left
    })
  }

  time = () => {
    let time = this.sliderPosition() / this.state.containerWidth * this.props.duration
    if (time < 0 || time > this.props.duration) time = 0
    return time
  }

  sliderPosition = () => {
    return this.state.scrubbing ? this.state.scrubPosition : this.props.duration ? this.state.containerWidth * this.props.currentTime / this.props.duration : 0
  }

  getEventHorizontalPosition = event => {
    if (typeof event.clientX === 'number') {
      return event.clientX - this.state.leftEdge
    }
    if (event.targetTouches.length) {
      return event.targetTouches[0].clientX - this.state.leftEdge
    }
    if (event.changedTouches.length) {
      return event.changedTouches[0].clientX - this.state.leftEdge
    }
    if (event.touches.length) {
      return event.touches[0].clientX - this.state.leftEdge
    }
    return 0
  }

  onGrabScrubber = (initialEvent) => {
    initialEvent.preventDefault()

    this.setState({
      scrubbing: true,
      scrubPosition: this.getEventHorizontalPosition(initialEvent)
    })

    if (initialEvent.type === 'mousedown') {
      this.addMouseListeners()
    } else if (initialEvent.type === 'touchstart') {
      this.addTouchListeners()
    }
  }

  onScrub = (event) => {
    event.preventDefault()
    this.setState({scrubPosition: this.getEventHorizontalPosition(event)})
  }

  onScrubDisrupted = (event) => {
    event.preventDefault()
    this.setState({scrubbing: false})
    this.removeListeners()
  }

  onScrubEnd = (event) => {
    event.preventDefault()
    this.setState({scrubbing: false})

    let newPosition = this.getEventHorizontalPosition(event)

    if (newPosition <= this.state.containerWidth && newPosition >= 0) {
      this.props.onTimeChanged(this.props.duration * newPosition / this.state.containerWidth)
    }

    this.removeListeners()
  }

  addTouchListeners = () => {
    window.addEventListener('touchmove', this.onScrub, {passive: false})
    window.addEventListener('touchend', this.onScrubEnd, {passive: false})
    window.addEventListener('touchcancel', this.onScrubDisrupted)
  }

  addMouseListeners = () => {
    window.addEventListener('mousemove', this.onScrub, {passive: false})
    window.addEventListener('mouseup', this.onScrubEnd, {passive: false})
  }

  removeListeners = () => {
    window.removeEventListener('mousemove', this.onScrub)
    window.removeEventListener('mouseup', this.onScrubEnd)
    window.removeEventListener('touchmove', this.onScrub)
    window.removeEventListener('touchend', this.onScrubEnd)
    window.removeEventListener('touchcancel', this.onScrubDisrupted)
  }

  render () {
    return (
      <div ref={this.sliderRef} style={{width: '100%', position: 'absolute', top: '0'}}>
        <ScrubberLabel xmlns='http://www.w3.org/2000/svg' viewBox={`0 0 70 40`} width={70} height={40} scrubbing={this.state.scrubbing}
          style={{
            transform: `translateX(${this.sliderPosition() > this.state.containerWidth - 35 ? this.state.containerWidth - 70 : Math.max(0, this.sliderPosition() - 35)}px)`
          }}
        >
          <polygon points='0,0 0,30 30,30 35,36 40,30 70,30 70,0' fill='#359189' stroke='#ffffff' />
          <text fill='white' y='50%' x='50%' textAnchor='middle'>
            {formatTrackTime(this.time())}
          </text>
        </ScrubberLabel>
        <Scrubber
          scrubbing={this.state.scrubbing}
          xmlns='http://www.w3.org/2000/svg'
          width={this.state.containerWidth} height={20}
          viewBox={`0 0 ${this.state.containerWidth} 20`}
        >
          <defs>
            <radialGradient id='gradient'>
              <stop offset='0%' stopColor='#a756f5' />
              <stop offset='100%' stopColor='#6f04d4' />
            </radialGradient>
          </defs>
          <g onMouseDown={this.onGrabScrubber} onTouchStart={this.onGrabScrubber}>
            <rect x={0} y={0} width={this.state.containerWidth} height={20} opacity='0' />
            <rect x={0} y={8} width={this.state.containerWidth} height={4} fill='#E0E0E0' />
            <rect x={0} y={8} height={4} fill='#a756f5'
              width={`${this.sliderPosition() >= 0 ? this.sliderPosition() : 0}`}
            />
          </g>
          <ScrubberHandle onMouseDown={this.onGrabScrubber} onTouchStart={this.onGrabScrubber} scrubbing={this.state.scrubbing}>
            <circle cx={0} cy={10} r={7}
              style={{
                transform: `translate(${this.sliderPosition()}px)`,
                fill: 'url(#gradient)'
              }}
            />
          </ScrubberHandle>
        </Scrubber>
      </div>
    )
  }
}
