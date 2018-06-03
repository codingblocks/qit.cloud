import mirror from 'mirrorx'
import config from '../config'

export default mirror.model({
  name: 'player',
  initialState: {
    source: '',
  },
  reducers: {
    updateSource (state, audioUrl) {
      let source = audioUrl;

      if(audioUrl.includes("http://")) {
        source = config.sslProxyUrl + audioUrl;
        console.log('Proxying audio url: ' + source);
      }
      
      return {...state, source}
    }
  }
})
