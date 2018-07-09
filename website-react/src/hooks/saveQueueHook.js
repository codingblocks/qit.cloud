import mirror from 'mirrorx'

export const eventTracking = mirror.hook((action, getState) => {
  const queue = getState().player.queue

  if (action.type.startsWith('player')) {
    if (action.type === 'player/removeFromQueue' && queue.length === 0) {
      return window.localStorage.setItem('queue', '[]')
    }
    window.localStorage.setItem('queue', JSON.stringify(queue))
  }
})
