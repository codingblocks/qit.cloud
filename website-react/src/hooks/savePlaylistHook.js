import mirror from 'mirrorx'

export const eventTracking = mirror.hook((action, getState) => {
  const playlist = getState().player.playlist

  if (action.type.startsWith('player')) {
    if (action.type === 'player/removeFromPlaylist' && playlist.length === 0) {
      return window.localStorage.setItem('playlist', '[]')
    }
    window.localStorage.setItem('playlist', JSON.stringify(playlist))
  }
})
