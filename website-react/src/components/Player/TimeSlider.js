import React from 'react'

const TimeSlider = ({
  width,
  sliderPosition,
  onGrabScrubber,
  scrubbing,
  duration,
  formatTime
}) => {
  const classes = `scrubber${scrubbing ? ' scrubbing' : ''}`
  let time = sliderPosition / width * duration
  if (time < 0 || time > duration) time = 0

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
          visibility: scrubbing ? 'visible' : 'hidden',
          transform: `translateX(${sliderPosition > width - 35 ? width - 70 : Math.max(0, sliderPosition - 35)}px)`
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
          {formatTime(time)}
        </text>
      </svg>
      <svg
        className={classes}
        style={{
          position: 'absolute',
          top: '-8px',
          left: '0'
        }}
        xmlns='http://www.w3.org/2000/svg'
        width={width}
        height={20}
        viewBox={`0 0 ${width} 20`}
      >

        <defs>
          <radialGradient id='gradient'>
            <stop offset='0%' stopColor='lightblue' />
            <stop offset='100%' stopColor='#6f04d4' />
          </radialGradient>
        </defs>
        <g
          onMouseDown={onGrabScrubber}
          onTouchStart={onGrabScrubber}
        >
          <rect
            x={0}
            y={0}
            width={width}
            height={20}
            opacity='0'
          />
          <rect
            x={0}
            y={8}
            rx={2}
            ry={2}
            width={width}
            height={4}
            fill='#E0E0E0'
          />
          <rect
            x={0}
            y={8}
            rx={2}
            ry={2}
            width={`${sliderPosition}`}
            height={4}
            fill='#a756f5'
          />
        </g>
        <g
          className='scrub-handle'
          onMouseDown={onGrabScrubber}
          onTouchStart={onGrabScrubber}
        >
          <circle
            cx={0}
            cy={10}
            r={7}
            style={{
              transform: `translate(${sliderPosition}px)`,
              fill: 'url(#gradient)'
            }}
          />
        </g>
      </svg>
    </div>
  )
}

export default TimeSlider
