<template>
  <div class="app-wrapper">

    <!-- =========================================
         WEBSITE
    ========================================== -->
    <router-view />


    <!-- =========================================
         MUSIC PLAYER
    ========================================== -->
    <div class="music-player">

      <button
        type="button"
        class="music-button"
        :aria-label="
          isPlaying
            ? 'Matikan musik'
            : 'Nyalakan musik'
        "
        :title="
          isPlaying
            ? 'Matikan musik'
            : 'Nyalakan musik'
        "
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


    <!-- =========================================
         GLOBAL AUDIO
    ========================================== -->
    <audio
      ref="audio"
      src="/music/our-song.mp3"
      preload="auto"
      loop
      @play="handleAudioPlay"
      @pause="handleAudioPause"
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
   AUDIO STATE
========================================= */

const audio = ref(null)

const isPlaying = ref(false)

/*
 * Menyimpan apakah user sengaja
 * mematikan musik.
 */
const userTurnedOff = ref(false)


/* =========================================
   PLAY MUSIC
========================================= */

async function playMusic() {

  if (!audio.value) {
    return
  }

  /*
   * Jangan otomatis menyalakan musik
   * jika user sebelumnya sudah mematikannya.
   */
  if (userTurnedOff.value) {
    return
  }

  try {

    await audio.value.play()

    isPlaying.value = true

  } catch (error) {

    /*
     * Browser memblokir autoplay.
     *
     * Tidak perlu menampilkan halaman
     * atau popup apa pun.
     *
     * Musik cukup tetap OFF sampai
     * user menekan tombol musik atau
     * melakukan interaksi pertama.
     */

    isPlaying.value = false

  }

}


/* =========================================
   TOGGLE MUSIC
========================================= */

async function toggleMusic() {

  if (!audio.value) {
    return
  }


  /* -----------------------------------------
     MATIKAN
  ----------------------------------------- */

  if (!audio.value.paused) {

    audio.value.pause()

    userTurnedOff.value = true

    isPlaying.value = false

    return

  }


  /* -----------------------------------------
     NYALAKAN
  ----------------------------------------- */

  try {

    userTurnedOff.value = false

    await audio.value.play()

    isPlaying.value = true

  } catch (error) {

    isPlaying.value = false

  }

}


/* =========================================
   AUDIO EVENTS
========================================= */

function handleAudioPlay() {

  isPlaying.value = true

}


function handleAudioPause() {

  isPlaying.value = false

}


/* =========================================
   FIRST USER INTERACTION
========================================= */

function handleFirstInteraction() {

  if (userTurnedOff.value) {
    return
  }

  if (
    audio.value &&
    audio.value.paused
  ) {

    playMusic()

  }

  removeInteractionListeners()

}


/* =========================================
   REMOVE INTERACTION LISTENERS
========================================= */

function removeInteractionListeners() {

  window.removeEventListener(
    'click',
    handleFirstInteraction
  )

  window.removeEventListener(
    'touchstart',
    handleFirstInteraction
  )

  window.removeEventListener(
    'keydown',
    handleFirstInteraction
  )

}


/* =========================================
   INITIALIZE
========================================= */

onMounted(() => {

  /*
   * Saat link pertama kali dibuka,
   * langsung coba autoplay.
   */
  playMusic()


  /*
   * Jika browser memblokir autoplay,
   * interaksi pertama user akan mencoba
   * memutar musik lagi.
   */
  window.addEventListener(
    'click',
    handleFirstInteraction
  )

  window.addEventListener(
    'touchstart',
    handleFirstInteraction
  )

  window.addEventListener(
    'keydown',
    handleFirstInteraction
  )

})


/* =========================================
   CLEANUP
========================================= */

onBeforeUnmount(() => {

  removeInteractionListeners()

})

</script>


<style scoped>

/* =========================================
   APP
========================================= */

.app-wrapper {
  min-height: 100dvh;
  width: 100%;
  position: relative;
}


/* =========================================
   MUSIC PLAYER
========================================= */

.music-player {
  position: fixed;

  right: 22px;
  bottom: 22px;

  z-index: 900;

  display: flex;
  align-items: center;

  gap: 10px;

  padding: 8px 12px 8px 8px;

  border:
    1px solid
    rgba(158, 104, 112, 0.18);

  border-radius: 999px;

  background:
    rgba(255, 250, 247, 0.88);

  backdrop-filter: blur(12px);

  -webkit-backdrop-filter: blur(12px);

  box-shadow:
    0 8px 30px
    rgba(111, 87, 84, 0.08);
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

  border: none;

  border-radius: 50%;

  background: #f3dfe1;

  color: #9e6870;

  cursor: pointer;

  transition:
    transform 0.2s ease,
    background 0.2s ease;
}


.music-button:hover {
  transform: scale(1.06);

  background: #e8b8bd;
}


.music-button:active {
  transform: scale(0.94);
}


/* =========================================
   MUSIC ICON
========================================= */

.music-icon {
  font-size: 16px;

  line-height: 1;
}


.music-icon.playing {
  animation:
    musicPulse 1.2s ease-in-out infinite;
}


/* =========================================
   MUSIC INFO
========================================= */

.music-info {
  display: flex;
  flex-direction: column;

  gap: 2px;

  padding-right: 3px;
}


.music-status {
  font-family:
    "DM Sans",
    sans-serif;

  font-size: 8px;

  letter-spacing: 0.18em;

  color: #9e6870;
}


.music-name {
  font-family:
    "Cormorant Garamond",
    serif;

  font-size: 13px;

  line-height: 1;

  color: #6f5754;
}


/* =========================================
   MUSIC ANIMATION
========================================= */

@keyframes musicPulse {

  0%,
  100% {
    transform:
      translateY(0)
      rotate(0deg);
  }

  50% {
    transform:
      translateY(-2px)
      rotate(5deg);
  }

}


/* =========================================
   MOBILE
========================================= */

@media (max-width: 600px) {

  .music-player {
    right: 14px;
    bottom: 14px;

    gap: 8px;

    padding:
      7px 10px 7px 7px;
  }


  .music-button {
    width: 32px;
    height: 32px;
  }


  .music-status {
    font-size: 7px;
  }


  .music-name {
    font-size: 12px;
  }

}


/* =========================================
   SMALL MOBILE
========================================= */

@media (max-width: 380px) {

  .music-info {
    display: none;
  }


  .music-player {
    padding: 6px;
  }

}

</style>