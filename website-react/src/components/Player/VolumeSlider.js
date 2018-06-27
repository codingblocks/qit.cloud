import React from 'react'

import Slider from './Slider'

const formatVolume = volumeProportion => {
  return Math.round(volumeProportion * 100)
}

const VolumeSlider = props => <Slider
  className={props.className}
  value={props.currentVolume}
  max={1}
  onValueChanged={props.onVolumeChanged}
  formatter={formatVolume()}
  hideLabel
/>

export default VolumeSlider
