import mirror from 'mirrorx'

export const eventTracking = mirror.hook((action, getState) => {
  const playlist = getState().player.playlist

  if (action.type.startsWith('player') && playlist.length > 0) {
    window.localStorage.setItem('playlist', JSON.stringify(playlist))
  }
})
