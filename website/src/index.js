import React from 'react'
import { render } from 'mirrorx'

import './models/SearchModel'
import './models/UserModel'
import './models/AudioPlayerModel'
import './hooks/eventTrackingHook'
import './hooks/saveQueueHook'
import './hooks/offlineEpisodeHook'

import './index.css'
import App from './RoutedApp'
import registerServiceWorker from './registerServiceWorker'
import registerErrorReporting from './registerErrorReporting'

render(<App />, document.getElementById('root'))
registerServiceWorker()
window.errorReporting = registerErrorReporting()
