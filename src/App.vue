<template>
  <div class="app-wrapper">

    <!-- =====================================
         SEMUA HALAMAN VUE ROUTER
    ====================================== -->
    <router-view />

    <!-- =====================================
         GLOBAL MUSIC PLAYER
         Audio hanya dibuat SATU KALI
    ====================================== -->
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

    <!-- =====================================
         SATU AUDIO UNTUK SELURUH WEBSITE
    ====================================== -->
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
   AUDIO
========================================= */

const audio = ref(null)

const isPlaying = ref(false)

/*
  Menandai apakah user sengaja mematikan musik.

  Ini penting.

  Kalau autoplay gagal karena browser,
  kita masih boleh mencoba play ketika user
  pertama kali menyentuh halaman.

  Tetapi kalau user memang menekan OFF,
  kita TIDAK boleh menyalakan musik lagi
  hanya karena user pindah halaman.
*/
const userTurnedOff = ref(false)


/* =========================================
   PLAY MUSIC
========================================= */

async function playMusic() {
  if (!audio.value) return

  /*
    Kalau user sebelumnya sengaja OFF,
    jangan hidupkan otomatis.
  */
  if (userTurnedOff.value) return

  try {
    await audio.value.play()

    isPlaying.value = true

  } catch (error) {

    /*
      Browser mungkin memblokir autoplay.

      Ini normal untuk audio dengan suara.
      Kita akan mencoba lagi ketika user
      melakukan klik/tap pertama.
    */

    isPlaying.value = false
  }
}


/* =========================================
   TOGGLE MUSIC
========================================= */

async function toggleMusic() {
  if (!audio.value) return


  /* ================================
     JIKA SEDANG BERMAIN
  ================================= */

  if (!audio.value.paused) {

    audio.value.pause()

    /*
      User benar-benar memilih OFF.
    */
    userTurnedOff.value = true

    isPlaying.value = false

    return
  }


  /* ================================
     JIKA SEDANG OFF
  ================================= */

  try {

    /*
      User sendiri menekan tombol ON,
      jadi kita izinkan play.
    */
    userTurnedOff.value = false

    await audio.value.play()

    isPlaying.value = true

  } catch (error) {

    isPlaying.value = false
  }
}


/* =========================================
   AUDIO PLAY EVENT
========================================= */

function handleAudioPlay() {
  isPlaying.value = true
}


/* =========================================
   AUDIO PAUSE EVENT
========================================= */

function handleAudioPause() {
  isPlaying.value = false
}


/* =========================================
   FIRST USER INTERACTION
========================================= */

function handleFirstInteraction() {

  /*
    Kalau user memang sengaja OFF,
    jangan hidupkan lagi.
  */
  if (userTurnedOff.value) {
    return
  }


  /*
    Kalau audio belum bermain,
    coba mulai.
  */
  if (
    audio.value &&
    audio.value.paused
  ) {
    playMusic()
  }


  /*
    Tidak perlu listener ini terus-menerus.
    Setelah user berinteraksi, autoplay
    sudah mendapatkan user gesture.
  */
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
   APP MOUNT
========================================= */

onMounted(() => {

  /*
    1. Coba autoplay saat website dibuka.
  */
  playMusic()


  /*
    2. Kalau browser memblokir autoplay,
    user interaction pertama akan mencoba
    menjalankan musik.
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
   APP UNMOUNT
========================================= */

onBeforeUnmount(() => {

  removeInteractionListeners()

  /*
    App biasanya tidak di-unmount ketika
    hanya berpindah route.

    Jadi audio tetap berjalan ketika:
    Home → Collection → Custom Order → Contact
  */

})
</script>


<style>
/* =========================================
   GLOBAL
========================================= */

* {
  box-sizing: border-box;
}

html,
body,
#app {
  margin: 0;
  min-height: 100%;
  width: 100%;
}

body {
  background: #fffaf7;
}


/* =========================================
   APP
========================================= */

.app-wrapper {
  position: relative;

  width: 100%;
  min-height: 100vh;
  min-height: 100dvh;

  background: #fffaf7;
}


/* =========================================
   MUSIC PLAYER
========================================= */

.music-player {
  position: fixed;

  right: 18px;
  bottom: calc(
    18px + env(safe-area-inset-bottom)
  );

  z-index: 99999;

  display: flex;
  align-items: center;

  gap: 9px;

  padding: 7px 10px 7px 7px;

  background: rgba(
    255,
    250,
    247,
    0.94
  );

  border: 1px solid rgba(
    158,
    104,
    112,
    0.18
  );

  border-radius: 999px;

  box-shadow:
    0 8px 25px rgba(
      111,
      87,
      84,
      0.10
    );

  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);
}


/* =========================================
   BUTTON
========================================= */

.music-button {
  width: 35px;
  height: 35px;

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
    transform 0.2s ease,
    background 0.2s ease;
}

.music-button:hover {
  transform: scale(1.05);

  background: #8f5c65;
}

.music-button:active {
  transform: scale(0.94);
}


/* =========================================
   ICON
========================================= */

.music-icon {
  font-family: Georgia, serif;

  font-size: 17px;

  line-height: 1;
}

.music-icon.playing {
  animation:
    musicPulse
    1.2s ease-in-out infinite;
}


/* =========================================
   INFO
========================================= */

.music-info {
  display: flex;
  flex-direction: column;
  justify-content: center;

  min-width: 78px;
}

.music-status {
  font-family:
    'DM Sans',
    sans-serif;

  font-size: 7px;

  font-weight: 600;

  letter-spacing: 1.5px;

  line-height: 1.2;

  color: #9e6870;
}

.music-name {
  margin-top: 2px;

  font-family:
    'Cormorant Garamond',
    serif;

  font-size: 12px;

  font-style: italic;

  line-height: 1.1;

  color: #6f5754;
}


/* =========================================
   ANIMATION
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
      24px +
      env(safe-area-inset-bottom)
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
      12px +
      env(safe-area-inset-bottom)
    );

    gap: 7px;

    padding:
      6px
      9px
      6px
      6px;
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
      10px +
      env(safe-area-inset-bottom)
    );
  }

  .music-info {
    min-width: 62px;
  }

}
</style>