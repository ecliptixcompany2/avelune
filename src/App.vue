<template>
  <div class="app-wrapper">

    <!-- ============================= -->
    <!-- WEBSITE -->
    <!-- ============================= -->

    <router-view />


    <!-- ============================= -->
    <!-- MUSIC PLAYER -->
    <!-- ============================= -->

    <div class="music-player">

      <button
        class="music-button"
        type="button"
        :aria-label="isPlaying ? 'Matikan musik' : 'Nyalakan musik'"
        :title="isPlaying ? 'Matikan musik' : 'Nyalakan musik'"
        @click="toggleMusic"
      >
        <span
          v-if="isPlaying"
          class="music-icon playing"
        >
          ♫
        </span>

        <span
          v-else
          class="music-icon"
        >
          ♪
        </span>
      </button>

      <div class="music-info">
        <span class="music-status">
          {{ isPlaying ? 'PLAYING' : 'MUSIC OFF' }}
        </span>

        <span class="music-name">
          our little song
        </span>
      </div>

    </div>


    <!-- ============================= -->
    <!-- AUDIO -->
    <!-- ============================= -->

    <audio
      ref="audio"
      src="/music/our-song.mp3"
      loop
      preload="auto"
    ></audio>

  </div>
</template>


<script setup>

import {
  ref,
  onMounted,
  onBeforeUnmount
} from 'vue'


/* =========================================
   AUDIO
========================================= */

const audio = ref(null)

const isPlaying = ref(false)

let interactionHandler = null


/* =========================================
   START MUSIC
========================================= */

async function startMusic() {

  if (!audio.value) return

  try {

    await audio.value.play()

    isPlaying.value = true

  } catch (error) {

    /*
      Browser mungkin memblokir autoplay.
      Musik akan dicoba kembali ketika
      user melakukan interaksi pertama.
    */

    isPlaying.value = false

  }

}


/* =========================================
   TOGGLE MUSIC
========================================= */

async function toggleMusic() {

  if (!audio.value) return


  if (audio.value.paused) {

    try {

      await audio.value.play()

      isPlaying.value = true

    } catch (error) {

      isPlaying.value = false

    }

  } else {

    audio.value.pause()

    isPlaying.value = false

  }

}


/* =========================================
   FIRST USER INTERACTION
========================================= */

function handleFirstInteraction() {

  if (!audio.value) return

  if (audio.value.paused) {
    startMusic()
  }

  removeInteractionListeners()
}


/* =========================================
   REMOVE LISTENERS
========================================= */

function removeInteractionListeners() {

  if (!interactionHandler) return

  window.removeEventListener(
    'click',
    interactionHandler
  )

  window.removeEventListener(
    'touchstart',
    interactionHandler
  )

  window.removeEventListener(
    'keydown',
    interactionHandler
  )

  interactionHandler = null

}


/* =========================================
   MOUNT
========================================= */

onMounted(() => {

  /*
    Coba langsung menjalankan musik
  */

  startMusic()


  /*
    Jika autoplay diblokir browser,
    tunggu interaksi pertama user.
  */

  interactionHandler = handleFirstInteraction

  window.addEventListener(
    'click',
    interactionHandler,
    { once: false }
  )

  window.addEventListener(
    'touchstart',
    interactionHandler,
    { once: false }
  )

  window.addEventListener(
    'keydown',
    interactionHandler,
    { once: false }
  )

})


/* =========================================
   BEFORE UNMOUNT
========================================= */

onBeforeUnmount(() => {

  removeInteractionListeners()

  if (audio.value) {
    audio.value.pause()
  }

})

</script>


<style>

/* =========================================
   RESET
========================================= */

* {
  box-sizing: border-box;
}


/* =========================================
   APP WRAPPER
========================================= */

.app-wrapper {
  min-height: 100vh;
  min-height: 100dvh;

  width: 100%;

  position: relative;

  background: #fffaf7;
}


/* =========================================
   MUSIC PLAYER
========================================= */

.music-player {

  position: fixed;

  right: 18px;
  bottom: calc(18px + env(safe-area-inset-bottom));

  z-index: 9999;

  display: flex;
  align-items: center;

  gap: 9px;

  padding: 7px 10px 7px 7px;

  background: rgba(255, 250, 247, 0.92);

  border: 1px solid rgba(158, 104, 112, 0.18);

  border-radius: 999px;

  box-shadow:
    0 8px 25px rgba(111, 87, 84, 0.10);

  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);

}


/* =========================================
   MUSIC BUTTON
========================================= */

.music-button {

  width: 34px;
  height: 34px;

  flex-shrink: 0;

  display: flex;
  align-items: center;
  justify-content: center;

  padding: 0;

  border: none;

  border-radius: 50%;

  background: #9e6870;

  color: #fffaf7;

  cursor: pointer;

  transition:
    transform 0.25s ease,
    background 0.25s ease;

}


.music-button:hover {

  transform: scale(1.05);

  background: #8f5c65;

}


.music-button:active {

  transform: scale(0.94);

}


/* =========================================
   MUSIC ICON
========================================= */

.music-icon {

  display: block;

  font-family: Georgia, serif;

  font-size: 17px;

  line-height: 1;

}


.music-icon.playing {

  animation:
    musicPulse 1.2s ease-in-out infinite;

}


/* =========================================
   MUSIC TEXT
========================================= */

.music-info {

  display: flex;

  flex-direction: column;

  justify-content: center;

  min-width: 76px;

}


.music-status {

  font-family: 'DM Sans', sans-serif;

  font-size: 7px;

  font-weight: 600;

  letter-spacing: 1.5px;

  line-height: 1.2;

  color: #9e6870;

}


.music-name {

  margin-top: 2px;

  font-family: 'Cormorant Garamond', serif;

  font-size: 12px;

  font-style: italic;

  line-height: 1.1;

  color: #6f5754;

}


/* =========================================
   MUSIC ANIMATION
========================================= */

@keyframes musicPulse {

  0%,
  100% {
    transform: translateY(0);
  }

  50% {
    transform: translateY(-2px);
  }

}


/* =========================================
   TABLET
========================================= */

@media (min-width: 600px) {

  .music-player {

    right: 24px;

    bottom: calc(
      24px + env(safe-area-inset-bottom)
    );

  }


  .music-button {

    width: 36px;
    height: 36px;

  }


  .music-info {

    min-width: 88px;

  }

}


/* =========================================
   MOBILE
========================================= */

@media (max-width: 480px) {

  .music-player {

    right: 12px;

    bottom: calc(
      12px + env(safe-area-inset-bottom)
    );

    padding: 6px 9px 6px 6px;

    gap: 7px;

  }


  .music-button {

    width: 32px;
    height: 32px;

  }


  .music-info {

    min-width: 70px;

  }


  .music-status {

    font-size: 6px;

    letter-spacing: 1.2px;

  }


  .music-name {

    font-size: 11px;

  }

}


/* =========================================
   VERY SMALL PHONE
========================================= */

@media (max-width: 360px) {

  .music-player {

    right: 10px;

    bottom: calc(
      10px + env(safe-area-inset-bottom)
    );

  }


  .music-info {

    min-width: 62px;

  }

}

</style>