import React from 'react'

export default class TimeSlider extends React.Component {
    time = () => {
      let time = this.sliderPosition() / this.props.width * this.props.duration
      if (time < 0 || time > this.props.duration) time = 0
      return time
    }

    sliderPosition = () => {
      return this.state.scrubbing ? this.state.scrubPosition : this.props.duration ? this.props.width * this.props.currentTime / this.props.duration : 0
    }

    constructor (props) {
      super(props)
      this.state = {
        scrubbing: false,
        scrubPosition: 0
      }
    }

    componentDidMount () {
      this.classes = `scrubber${this.state.scrubbing ? ' scrubbing' : ''}`
    }

    onGrabScrubber = (initialEvent) => {
      initialEvent.preventDefault()

      const getEventPosition = event => {
        return typeof event.clientX === 'number'
          ? event.clientX - this.props.leftEdge
          : event.targetTouches.length
            ? event.targetTouches[0].clientX - this.props.leftEdge
            : event.changedTouches.length
              ? event.changedTouches[0].clientX - this.props.leftEdge
              : event.touches.length
                ? event.touches[0].clientX - this.props.leftEdge
                : 0
      }

      let newPosition = getEventPosition(initialEvent)

      this.setState({ scrubbing: true, scrubPosition: newPosition })

      const onScrub = (event) => {
        event.preventDefault()

        newPosition = getEventPosition(event)

        this.setState({ scrubPosition: newPosition })
      }

      const onScrubEnd = (event) => {
        event.preventDefault()
        this.setState({ scrubbing: false })

        newPosition = getEventPosition(event)

        if (newPosition <= this.props.width && newPosition >= 0) {
          this.props.onTimeChanged(this.props.duration * newPosition / this.props.width)
        }

        removeListeners()
      }

      const onScrubDisrupted = (event) => {
        event.preventDefault()
        this.setState({ scrubbing: false })

        removeListeners()
      }

      if (initialEvent.type === 'mousedown') {
        addMouseListeners()
      } else if (initialEvent.type === 'touchstart') {
        addTouchListeners()
      }

      function addMouseListeners () {
        window.addEventListener('mousemove', onScrub, { passive: false })
        window.addEventListener('mouseup', onScrubEnd, { once: true, passive: false })
      }

      function addTouchListeners () {
        window.addEventListener('touchmove', onScrub, { passive: false })
        window.addEventListener('touchend', onScrubEnd, { once: true, passive: false })
        window.addEventListener('touchcancel', onScrubDisrupted, { once: true })
      }

      function removeListeners () {
        window.removeEventListener('mousemove', onScrub, { passive: false })
        window.removeEventListener('mouseup', onScrubEnd, { once: true, passive: false })
        window.removeEventListener('touchmove', onScrub, { passive: false })
        window.removeEventListener('touchend', onScrubEnd, { once: true, passive: false })
        window.removeEventListener('touchcancel', onScrubDisrupted, { once: true })
      }
    }

    render () {
      return (
        <div>
          <svg
            xmlns='http://www.w3.org/2000/svg'
            viewBox={`0 0 70 40`}
            width={70}
            height={40}
            style={{
              position: 'absolute',
              top: '-40px',
              left: '0',
              visibility: this.state.scrubbing ? 'visible' : 'hidden',
              transform: `translateX(${this.sliderPosition() > this.props.width - 35 ? this.props.width - 70 : Math.max(0, this.sliderPosition() - 35)}px)`
            }}
          >
            <polygon
              points='0,0 0,30 30,30 35,36 40,30 70,30 70,0'
              fill='#7799bb'
              stroke='#222222'
            />
            <text
              fill='white'
              y='50%'
              x='50%'
              textAnchor='middle'
            >
              {this.props.formatTime(this.time())}
            </text>
          </svg>
          <svg
            className={this.classes}
            style={{
              position: 'absolute',
              top: '-8px',
              left: '0'
            }}
            xmlns='http://www.w3.org/2000/svg'
            width={this.props.width}
            height={20}
            viewBox={`0 0 ${this.props.width} 20`}
          >

            <defs>
              <radialGradient id='gradient'>
                <stop offset='0%' stopColor='lightblue' />
                <stop offset='100%' stopColor='#6f04d4' />
              </radialGradient>
            </defs>
            <g
              onMouseDown={this.onGrabScrubber}
              onTouchStart={this.onGrabScrubber}
            >
              <rect
                x={0}
                y={0}
                width={this.props.width}
                height={20}
                opacity='0'
              />
              <rect
                x={0}
                y={8}
                rx={2}
                ry={2}
                width={this.props.width}
                height={4}
                fill='#E0E0E0'
              />
              <rect
                x={0}
                y={8}
                rx={2}
                ry={2}
                width={`${this.sliderPosition() >= 0 ? this.sliderPosition() : 0}`}
                height={4}
                fill='#a756f5'
              />
            </g>
            <g
              className='scrub-handle'
              onMouseDown={this.onGrabScrubber}
              onTouchStart={this.onGrabScrubber}
            >
              <circle
                cx={0}
                cy={10}
                r={7}
                style={{
                  transform: `translate(${this.sliderPosition()}px)`,
                  fill: 'url(#gradient)'
                }}
              />
            </g>
          </svg>
        </div>
      )
    }
}
