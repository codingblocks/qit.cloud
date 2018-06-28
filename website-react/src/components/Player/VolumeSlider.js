import React from 'react'
import styled from 'styled-components'

import Slider from './Slider'
import audioLogo from '../../assets/audio.svg'
import mutedAudioLogo from '../../assets/audio_muted.svg'

const formatVolume = volumeProportion => {
  return Math.round(volumeProportion * 100)
}

const VolumeSliderWrapper = styled.div`
  display: flex;
  align-items: center;
  &>div{
    flex: 1;
  }
`

const AudioLogo = styled.img`
  width: 24px;
  height: 24px;
  margin-right: 5px;
  cursor: pointer
`

const VolumeSlider = props => {
  return <VolumeSliderWrapper>
    <AudioLogo src={props.muted ? mutedAudioLogo : audioLogo} onClick={props.onMute} alt={'Adjust audio'} />
    <Slider
      value={props.currentVolume}
      max={1}
      onValueChanged={props.onVolumeChanged}
      formatter={formatVolume()}
      hideLabel
    />
  </VolumeSliderWrapper>
}

export default VolumeSlider
