var AudioManager = {

  playbackStateTracker: {
    get: function() {
      return JSON.parse(localStorage.getItem("playbackState"));
    },
    saveState: function() {
      localStorage.setItem("playbackState", JSON.stringify({
        currentSrc: mainAudio.currentSrc,
        currentTime: mainAudio.currentTime
      }));
    },
    handle: null,
    start: function() {
      // Could use onTimeUpdate on the audio player, but this should be
      // less of a hit on performance.
      AudioManager.playbackStateTracker.saveState(); // Initial save without delay
      AudioManager.playbackStateTracker.handle = setInterval(AudioManager.playbackStateTracker.saveState, 5000);
    },
    stop: function() {
      if (AudioManager.playbackStateTracker.handle) {
        clearInterval(AudioManager.playbackStateTracker.handle);
      }
      AudioManager.playbackStateTracker.saveState(); // One last save
    }
  },
  load: function(src, currentTime) {
    var source = document.getElementById('audioSource');
    source.src = src;
    mainAudio.load();
    if (currentTime) {
      mainAudio.currentTime = currentTime
    }
  },
  play: function(src, currentTime) {
    AudioManager.load(src, currentTime);
    mainAudio.play();
    AudioManager.playbackStateTracker.start();
  },
  pause: function() {
    if (!mainAudio.paused) {
      mainAudio.pause();
    }
    AudioManager.playbackStateTracker.stop();
  },
  resume: function() {
    if (mainAudio.paused) {
      const playbackState = AudioManager.playbackStateTracker.get();
      if (playbackState === null) {
        return;
      }
      AudioManager.load(playbackState.currentSrc, playbackState.currentTime);
    }
  }
};

mainAudio.onpause = function() {
  AudioManager.pause();
};

mainAudio.onplay = function() {
  AudioManager.playbackStateTracker.start();
};

AudioManager.resume();
