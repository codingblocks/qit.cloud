import React from 'react'
import { render } from 'mirrorx'

import './models/SearchModel'
import './models/AudioPlayerModel'
import './hooks/eventTrackingHook'

import './index.css'
import App from './RoutedApp'
import registerServiceWorker from './registerServiceWorker'

render(
  <App />,
  document.getElementById('root')
)
registerServiceWorker()
