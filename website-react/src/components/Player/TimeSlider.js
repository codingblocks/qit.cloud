import React from 'react'

const TimeSlider = ({
  width,
  sliderPosition,
  onGrabSlider
}) => {
  return (
    <svg
      style={{
        position: 'absolute',
        top: '-4px',
        left: '0'
      }}
      xmlns='http://www.w3.org/2000/svg'
      width={width}
      height={12}
      viewBox={`0 0 ${width} 12`}
    >
      <g
        onMouseDown={onGrabSlider}
      >
        <rect
          x={0}
          y={0}
          width={width}
          height={12}
          opacity='0'
        />
        <rect
          x={0}
          y={4}
          rx={2}
          ry={2}
          width={width}
          height={4}
          fill='#E0E0E0'
        />
        <rect
          x={0}
          y={4}
          rx={2}
          ry={2}
          width={`${sliderPosition}`}
          height={4}
          fill='#0000ff'
        />
      </g>
    </svg>
  )
}

export default TimeSlider
