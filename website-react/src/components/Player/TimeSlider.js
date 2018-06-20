import React from 'react'

export default class TimeSlider extends React.Component {
    time = () => {
      let time = this.props.sliderPosition / this.props.width * this.props.duration
      if (time < 0 || time > this.props.duration) time = 0
      return time
    }

    constructor (props) {
      super(props)
      this.classes = `scrubber${this.props.scrubbing ? ' scrubbing' : ''}`
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
              visibility: this.props.scrubbing ? 'visible' : 'hidden',
              transform: `translateX(${this.props.sliderPosition > this.props.width - 35 ? this.props.width - 70 : Math.max(0, this.props.sliderPosition - 35)}px)`
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
              onMouseDown={this.props.onGrabScrubber}
              onTouchStart={this.props.onGrabScrubber}
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
                width={`${this.props.sliderPosition >= 0 ? this.props.sliderPosition : 0}`}
                height={4}
                fill='#a756f5'
              />
            </g>
            <g
              className='scrub-handle'
              onMouseDown={this.props.onGrabScrubber}
              onTouchStart={this.props.onGrabScrubber}
            >
              <circle
                cx={0}
                cy={10}
                r={7}
                style={{
                  transform: `translate(${this.props.sliderPosition}px)`,
                  fill: 'url(#gradient)'
                }}
              />
            </g>
          </svg>
        </div>
      )
    }
}
