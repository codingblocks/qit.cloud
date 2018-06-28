import React from 'react'

import Slider from './Slider'
import { formatTrackTime } from '../../helpers'

const TimeSlider = props => <Slider
  className={props.className}
  value={props.currentTime}
  max={props.duration}
  onValueChanged={props.onTimeChanged}
  formatter={formatTrackTime}
/>

export default TimeSlider
