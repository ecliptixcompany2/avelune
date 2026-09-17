<template>
  <main class="home">

    <!-- =========================================
         HEADER
    ========================================== -->
    <header class="header">

      <div class="header-left">
        <span class="header-line"></span>
        <span class="header-line short"></span>
      </div>

      <div class="brand">
        <div class="brand-name">
          Avelune
        </div>

        <div class="brand-subtitle">
          FLOWERS & MOMENTS
        </div>
      </div>

      <button
        type="button"
        class="header-contact"
        @click="goToContact"
      >
        CONTACT
      </button>

    </header>


    <!-- =========================================
         HERO
    ========================================== -->
    <section class="hero">

      <!-- Top information -->
      <div class="hero-meta">
        <span>EST. 2026</span>
        <span class="meta-symbol">✦</span>
        <span>FLOWER STUDIO</span>
      </div>


      <!-- Main hero content -->
      <div class="hero-content">

        <p class="hero-eyebrow">
          FLOWERS FOR EVERY FEELING
        </p>

        <h1 class="hero-title">
          <span>little flowers,</span>

          <em>
            big feelings.
          </em>
        </h1>


        <p class="hero-description">
          Thoughtfully arranged flowers for birthdays,
          anniversaries, celebrations, and all the little
          moments worth remembering.
        </p>


        <!-- =====================================
             SMALL FLOWER IMAGE
        ====================================== -->
        <div class="hero-flower">

          <div class="flower-side flower-left">
            <span>⌁</span>
            <span>✿</span>
          </div>

          <div class="flower-image">

            <img
              src="/images/hero-flower.jpg"
              alt="Avelune flower arrangement"
            />

          </div>

          <div class="flower-side flower-right">
            <span>✿</span>
            <span>⌁</span>
          </div>

        </div>


        <!-- =====================================
             CTA
        ====================================== -->
        <button
          type="button"
          class="explore-button"
          @click="goToCollection"
        >

          <span>
            EXPLORE FLOWERS
          </span>

          <!--
            Hanya garis.
            Tidak menggunakan karakter panah
            supaya aman di iPhone.
          -->
          <span
            class="button-line"
            aria-hidden="true"
          ></span>

        </button>

      </div>


      <!-- =====================================
           DECORATIVE DIVIDER
      ====================================== -->
      <div class="hero-divider">

        <span></span>

        <b>✦</b>

        <span></span>

      </div>


      <!-- =====================================
           BOTTOM NAVIGATION
      ====================================== -->
      <nav class="home-navigation">

        <!-- COLLECTION -->
        <button
          type="button"
          class="nav-card"
          @click="goToCollection"
        >

          <div class="nav-icon flower-icon">
            ✿
          </div>

          <div class="nav-card-title">
            COLLECTION
          </div>

          <!-- Tetap menggunakan arrow awal -->
          <div class="nav-card-arrow">
            →
          </div>

        </button>


        <!-- CUSTOM ORDER -->
        <button
          type="button"
          class="nav-card"
          @click="goToCustomOrder"
        >

          <div class="nav-icon custom-icon">
            ♡
          </div>

          <div class="nav-card-title">
            CUSTOM ORDER
          </div>

          <!-- Tetap menggunakan arrow awal -->
          <div class="nav-card-arrow">
            →
          </div>

        </button>


        <!-- CONTACT -->
        <button
          type="button"
          class="nav-card"
          @click="goToContact"
        >

          <div class="nav-icon contact-icon">
            ✉
          </div>

          <div class="nav-card-title">
            CONTACT
          </div>

          <!-- Tetap menggunakan arrow awal -->
          <div class="nav-card-arrow">
            →
          </div>

        </button>

      </nav>


      <!-- =====================================
           SMALL FOOTER NOTE
      ====================================== -->
      <div class="hero-footer">

        <span>
          FLOWERS
        </span>

        <span class="footer-dot">
          •
        </span>

        <span>
          LOVE
        </span>

        <span class="footer-dot">
          •
        </span>

        <span>
          MOMENTS
        </span>

      </div>

    </section>

  </main>
</template>


<script setup>

/* =========================================
   NAVIGATION
========================================= */

import { useRouter } from 'vue-router'

const router = useRouter()


function goToCollection() {
  router.push('/collection')
}


function goToCustomOrder() {
  router.push('/custom-order')
}


function goToContact() {
  router.push('/contact')
}

</script>


<style scoped>

/* =========================================
   GOOGLE FONTS
========================================= */

@import url(
  'https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,500;0,600;1,300;1,400;1,500&family=DM+Sans:wght@300;400;500&family=Parisienne&display=swap'
);


/* =========================================
   COLOR SYSTEM
========================================= */

.home {

  --ivory: #fffaf7;
  --cream: #f8eee9;

  --soft-pink: #f3dfe1;
  --blush: #e8b8bd;

  --rose: #c98f98;
  --deep-rose: #a86f78;

  --brown: #6f5754;
  --dark: #423838;

  width: 100%;
  min-height: 100dvh;

  overflow-x: hidden;

  background:
    radial-gradient(
      circle at 50% 45%,
      rgba(243, 223, 225, 0.48),
      transparent 38%
    ),
    linear-gradient(
      180deg,
      #fffaf7 0%,
      #fff8f6 45%,
      #f8eee9 100%
    );

  color: var(--dark);

  font-family:
    'DM Sans',
    sans-serif;

}


/* =========================================
   RESET
========================================= */

* {
  box-sizing: border-box;
}


button {
  font: inherit;
}


img {
  display: block;
  max-width: 100%;
}


/* =========================================
   HEADER
========================================= */

.header {

  width: 100%;

  min-height: 98px;

  padding:
    18px
    clamp(18px, 5vw, 70px);

  display: grid;

  grid-template-columns:
    1fr
    auto
    1fr;

  align-items: center;

  border-bottom:
    1px solid
    rgba(
      111,
      87,
      84,
      0.12
    );

}


/* =========================================
   LEFT DECORATION
========================================= */

.header-left {

  width: 28px;

  display: flex;

  flex-direction:
    column;

  gap: 7px;

}


.header-line {

  width: 28px;

  height: 1px;

  display: block;

  background:
    var(--brown);

}


.header-line.short {

  width: 19px;

}


/* =========================================
   BRAND
========================================= */

.brand {

  display: flex;

  flex-direction:
    column;

  align-items:
    center;

  justify-content:
    center;

}


.brand-name {

  font-family:
    'Parisienne',
    cursive;

  font-size:
    clamp(
      34px,
      8vw,
      54px
    );

  line-height: 0.9;

  color:
    var(--deep-rose);

  white-space:
    nowrap;

}


.brand-subtitle {

  margin-top: 9px;

  font-size:
    clamp(
      5px,
      1.5vw,
      7px
    );

  letter-spacing:
    2.5px;

  color:
    var(--brown);

}


/* =========================================
   CONTACT HEADER
========================================= */

.header-contact {

  justify-self:
    end;

  padding: 8px 0;

  border: none;

  background:
    transparent;

  color:
    var(--brown);

  font-size:
    clamp(
      7px,
      1.7vw,
      9px
    );

  letter-spacing:
    1.8px;

  cursor:
    pointer;

  transition:
    color 0.25s ease;

}


.header-contact:hover {

  color:
    var(--rose);

}


/* =========================================
   HERO
========================================= */

.hero {

  position: relative;

  width: 100%;

  min-height:
    calc(100dvh - 98px);

  padding:
    clamp(48px, 8vh, 85px)
    clamp(18px, 5vw, 70px)
    28px;

  display: flex;

  flex-direction:
    column;

  align-items:
    center;

}


/* =========================================
   HERO META
========================================= */

.hero-meta {

  width: 100%;

  max-width:
    1100px;

  display: flex;

  align-items:
    center;

  gap: 12px;

  font-size:
    clamp(
      6px,
      1.5vw,
      8px
    );

  letter-spacing:
    2px;

  color:
    var(--brown);

}


.meta-symbol {

  color:
    var(--rose);

  font-size:
    10px;

}


/* =========================================
   HERO CONTENT
========================================= */

.hero-content {

  width: 100%;

  max-width:
    950px;

  margin:
    auto
    0;

  display: flex;

  flex-direction:
    column;

  align-items:
    center;

  text-align:
    center;

}


/* =========================================
   EYEBROW
========================================= */

.hero-eyebrow {

  margin:
    20px
    0
    14px;

  font-size:
    clamp(
      9px,
      2vw,
      13px
    );

  letter-spacing:
    3px;

  color:
    var(--rose);

}


/* =========================================
   TITLE
========================================= */

.hero-title {

  margin: 0;

  display: flex;

  flex-direction:
    column;

  align-items:
    center;

  font-family:
    'Cormorant Garamond',
    serif;

  font-size:
    clamp(
      3.1rem,
      11vw,
      7rem
    );

  font-weight:
    400;

  line-height:
    0.8;

  letter-spacing:
    clamp(
      -2px,
      -0.2vw,
      -1px
    );

  color:
    var(--brown);

}


.hero-title span {

  display:
    block;

}


.hero-title em {

  display:
    block;

  margin-top:
    8px;

  font-weight:
    400;

  color:
    var(--rose);

}


/* =========================================
   DESCRIPTION
========================================= */

.hero-description {

  width: 100%;

  max-width:
    540px;

  margin:
    clamp(28px, 4vw, 38px)
    auto
    0;

  font-size:
    clamp(
      10px,
      2vw,
      13px
    );

  line-height:
    1.8;

  color:
    #806c68;

}


/* =========================================
   FLOWER IMAGE AREA
========================================= */

.hero-flower {

  margin-top:
    clamp(
      28px,
      4vh,
      40px
    );

  display:
    flex;

  align-items:
    center;

  justify-content:
    center;

  gap:
    clamp(
      10px,
      3vw,
      35px
    );

}


/* =========================================
   FLOWER IMAGE
========================================= */

.flower-image {

  width:
    clamp(
      125px,
      26vw,
      190px
    );

  aspect-ratio:
    0.78;

  overflow:
    hidden;

  border-radius:
    50%
    50%
    8px
    8px;

  background:
    var(--soft-pink);

  border:
    1px solid
    rgba(
      201,
      143,
      152,
      0.25
    );

  box-shadow:
    0 15px 40px
    rgba(
      111,
      87,
      84,
      0.10
    );

}


.flower-image img {

  width: 100%;

  height: 100%;

  object-fit:
    cover;

  object-position:
    center;

  transition:
    transform 0.6s ease;

}


.flower-image:hover img {

  transform:
    scale(1.04);

}


/* =========================================
   FLOWER DECORATIONS
========================================= */

.flower-side {

  display:
    flex;

  flex-direction:
    column;

  align-items:
    center;

  gap:
    3px;

  font-family:
    'Cormorant Garamond',
    serif;

  color:
    var(--rose);

}


.flower-side span:first-child {

  font-size:
    34px;

  line-height:
    0.5;

}


.flower-side span:last-child {

  font-size:
    18px;

}


.flower-left {

  transform:
    rotate(-18deg);

}


.flower-right {

  transform:
    rotate(18deg);

}


/* =========================================
   EXPLORE BUTTON
========================================= */

.explore-button {

  margin-top:
    clamp(
      26px,
      4vh,
      38px
    );

  min-height:
    54px;

  min-width:
    clamp(
      210px,
      45vw,
      300px
    );

  padding:
    0
    25px;

  display:
    inline-flex;

  align-items:
    center;

  justify-content:
    center;

  gap:
    30px;

  border:
    none;

  border-radius:
    40px;

  background:
    var(--rose);

  color:
    white;

  font-size:
    clamp(
      9px,
      1.8vw,
      11px
    );

  letter-spacing:
    1px;

  cursor:
    pointer;

  transition:
    transform 0.25s ease,
    background 0.25s ease;

}


.explore-button:hover {

  transform:
    translateY(-2px);

  background:
    var(--deep-rose);

}


/* =========================================
   EXPLORE BUTTON LINE
   HANYA GARIS
========================================= */

.button-line {

  width:
    28px;

  height:
    1px;

  display:
    block;

  flex-shrink:
    0;

  background:
    currentColor;

}


/* =========================================
   DIVIDER
========================================= */

.hero-divider {

  width:
    min(
      360px,
      70%
    );

  margin:
    clamp(35px, 5vh, 55px)
    auto
    24px;

  display:
    flex;

  align-items:
    center;

  justify-content:
    center;

  gap:
    22px;

}


.hero-divider span {

  width:
    80px;

  max-width:
    25vw;

  height:
    1px;

  background:
    var(--blush);

}


.hero-divider b {

  font-family:
    'Cormorant Garamond',
    serif;

  font-size:
    17px;

  font-weight:
    400;

  color:
    var(--deep-rose);

}


/* =========================================
   BOTTOM NAVIGATION
========================================= */

.home-navigation {

  width: 100%;

  max-width:
    1100px;

  display:
    grid;

  grid-template-columns:
    repeat(
      3,
      minmax(0, 1fr)
    );

  gap:
    clamp(
      8px,
      2vw,
      24px
    );

}


/* =========================================
   NAV CARD
========================================= */

.nav-card {

  min-height:
    clamp(
      145px,
      18vw,
      200px
    );

  padding:
    20px
    10px;

  display:
    flex;

  flex-direction:
    column;

  align-items:
    center;

  justify-content:
    center;

  border:
    1px solid
    rgba(
      201,
      143,
      152,
      0.55
    );

  border-radius:
    clamp(
      22px,
      4vw,
      38px
    );

  background:
    rgba(
      255,
      250,
      247,
      0.52
    );

  color:
    var(--brown);

  cursor:
    pointer;

  transition:
    background 0.3s ease,
    transform 0.3s ease,
    border-color 0.3s ease;

}


.nav-card:hover {

  transform:
    translateY(-4px);

  background:
    rgba(
      243,
      223,
      225,
      0.5
    );

  border-color:
    var(--rose);

}


/* =========================================
   NAV ICON
========================================= */

.nav-icon {

  width:
    38px;

  height:
    38px;

  display:
    flex;

  align-items:
    center;

  justify-content:
    center;

  margin-bottom:
    15px;

  font-family:
    'Cormorant Garamond',
    serif;

  font-size:
    29px;

  color:
    var(--deep-rose);

}


.custom-icon {

  font-size:
    33px;

}


.contact-icon {

  font-family:
    'DM Sans',
    sans-serif;

  font-size:
    25px;

}


/* =========================================
   NAV CARD TITLE
========================================= */

.nav-card-title {

  text-align:
    center;

  font-size:
    clamp(
      7px,
      1.7vw,
      10px
    );

  letter-spacing:
    clamp(
      1px,
      0.3vw,
      2.5px
    );

  color:
    var(--brown);

}


/* =========================================
   NAV CARD ARROW
   KEMBALI KE VERSI AWAL
========================================= */

.nav-card-arrow {

  margin-top:
    14px;

  font-size:
    20px;

  line-height:
    1;

  color:
    var(--deep-rose);

}


/* =========================================
   FOOTER
========================================= */

.hero-footer {

  width:
    100%;

  max-width:
    1100px;

  margin-top:
    24px;

  padding-top:
    18px;

  display:
    flex;

  align-items:
    center;

  justify-content:
    center;

  gap:
    8px;

  font-size:
    6px;

  letter-spacing:
    2px;

  color:
    #927b77;

}


.footer-dot {

  color:
    var(--rose);

}


/* =========================================
   SMALL PHONES
   <= 380px
========================================= */

@media (max-width: 380px) {

  .header {

    min-height:
      86px;

    padding:
      15px
      15px;

  }


  .brand-name {

    font-size:
      32px;

  }


  .brand-subtitle {

    margin-top:
      7px;

    letter-spacing:
      2px;

  }


  .hero {

    min-height:
      auto;

    padding:
      38px
      15px
      22px;

  }


  .hero-meta {

    gap:
      8px;

    letter-spacing:
      1.5px;

  }


  .hero-eyebrow {

    margin-top:
      28px;

    margin-bottom:
      12px;

    font-size:
      8px;

    letter-spacing:
      2px;

  }


  .hero-title {

    font-size:
      clamp(
        2.7rem,
        14vw,
        3.3rem
      );

    line-height:
      0.84;

  }


  .hero-description {

    max-width:
      295px;

    margin-top:
      24px;

    font-size:
      9px;

    line-height:
      1.75;

  }


  .hero-flower {

    margin-top:
      27px;

    gap:
      5px;

  }


  .flower-image {

    width:
      120px;

  }


  .flower-side span:first-child {

    font-size:
      27px;

  }


  .flower-side span:last-child {

    font-size:
      15px;

  }


  .explore-button {

    min-width:
      205px;

    min-height:
      50px;

    gap:
      20px;

  }


  .button-line {

    width:
      24px;

  }


  .hero-divider {

    margin-top:
      35px;

    margin-bottom:
      18px;

  }


  .home-navigation {

    gap:
      7px;

  }


  .nav-card {

    min-height:
      132px;

    padding:
      13px
      5px;

    border-radius:
      22px;

  }


  .nav-icon {

    margin-bottom:
      10px;

    font-size:
      24px;

  }


  .custom-icon {

    font-size:
      28px;

  }


  .contact-icon {

    font-size:
      21px;

  }


  .nav-card-title {

    font-size:
      6px;

    letter-spacing:
      0.8px;

  }


  .nav-card-arrow {

    margin-top:
      10px;

    font-size:
      17px;

  }


  .hero-footer {

    margin-top:
      20px;

  }

}


/* =========================================
   VERY SMALL PHONES
   <= 330px
========================================= */

@media (max-width: 330px) {

  .header {

    grid-template-columns:
      30px
      1fr
      auto;

  }


  .header-contact {

    font-size:
      6px;

    letter-spacing:
      1.2px;

  }


  .brand-name {

    font-size:
      29px;

  }


  .brand-subtitle {

    font-size:
      4.5px;

    letter-spacing:
      1.5px;

  }


  .hero {

    padding-left:
      12px;

    padding-right:
      12px;

  }


  .hero-title {

    font-size:
      2.45rem;

  }


  .hero-description {

    max-width:
      270px;

    font-size:
      8.5px;

  }


  .flower-image {

    width:
      105px;

  }


  .flower-side {

    display:
      none;

  }


  .explore-button {

    min-width:
      190px;

    min-height:
      47px;

    font-size:
      8px;

  }


  .button-line {

    width:
      22px;

  }


  .nav-card {

    min-height:
      120px;

    border-radius:
      18px;

  }


  .nav-card-title {

    font-size:
      5.5px;

    letter-spacing:
      0.5px;

  }


  .nav-icon {

    margin-bottom:
      7px;

    font-size:
      21px;

  }


  .custom-icon {

    font-size:
      24px;

  }


  .contact-icon {

    font-size:
      19px;

  }


  .nav-card-arrow {

    margin-top:
      8px;

    font-size:
      15px;

  }

}


/* =========================================
   TABLET
   >= 600px
========================================= */

@media (min-width: 600px) {

  .header {

    min-height:
      105px;

  }


  .hero {

    padding-top:
      55px;

  }


  .hero-content {

    margin-top:
      25px;

  }


  .hero-flower {

    margin-top:
      35px;

  }


  .flower-image {

    width:
      165px;

  }


  .nav-card {

    min-height:
      170px;

  }

}


/* =========================================
   DESKTOP
   >= 1024px
========================================= */

@media (min-width: 1024px) {

  .header {

    min-height:
      112px;

  }


  .hero {

    min-height:
      calc(100dvh - 112px);

    padding-top:
      60px;

    padding-bottom:
      35px;

  }


  .hero-content {

    margin-top:
      25px;

  }


  .hero-eyebrow {

    margin-top:
      15px;

  }


  .hero-title {

    font-size:
      clamp(
        5rem,
        7vw,
        7rem
      );

  }


  .hero-description {

    max-width:
      620px;

    font-size:
      12px;

  }


  .hero-flower {

    margin-top:
      32px;

  }


  .flower-image {

    width:
      165px;

  }


  .explore-button {

    min-width:
      280px;

  }


  .home-navigation {

    margin-top:
      5px;

  }


  .nav-card {

    min-height:
      185px;

  }

}


/* =========================================
   LARGE DESKTOP
   >= 1400px
========================================= */

@media (min-width: 1400px) {

  .hero {

    padding-top:
      70px;

  }


  .hero-title {

    font-size:
      7rem;

  }


  .hero-description {

    font-size:
      13px;

  }


  .flower-image {

    width:
      180px;

  }


  .nav-card {

    min-height:
      195px;

  }

}

</style>