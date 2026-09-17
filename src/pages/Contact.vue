<template>
  <main class="contact-page">

    <!-- =========================================
         HEADER
    ========================================== -->
    <header class="header">

      <button
        class="back-button"
        @click="goHome"
        aria-label="Back to home"
        type="button"
      >
        <span class="back-arrow">←</span>
        <span>BACK</span>
      </button>


      <div class="brand">

        <div class="brand-name">
          Avelune
        </div>

        <div class="brand-subtitle">
          FLOWERS & MOMENTS
        </div>

      </div>


      <div class="page-number">
        04
      </div>

    </header>


    <!-- =========================================
         HERO
    ========================================== -->
    <section class="contact-hero">

      <p class="eyebrow">
        GET IN TOUCH
      </p>

      <h1>
        let's keep
        <em>in touch.</em>
      </h1>

      <p class="hero-description">
        Whether you have a question, want to
        order flowers, or simply want to say hello,
        we'd love to hear from you.
      </p>

      <div class="hero-flower">
        ✿
      </div>

    </section>


    <!-- =========================================
         CONTACT METHODS
    ========================================== -->
    <section class="contact-section">

      <div class="section-title">

        <span>
          01
        </span>

        <h2>
          find us here
        </h2>

      </div>


      <div class="contact-list">

        <!-- WHATSAPP -->
        <a
          class="contact-card"
          href="https://wa.me/6282280805075"
          target="_blank"
          rel="noopener noreferrer"
        >

          <div class="contact-number">
            01
          </div>

          <div class="contact-icon">
            ↗
          </div>

          <div class="contact-content">

            <span class="contact-label">
              WHATSAPP
            </span>

            <h3>
              Let's talk flowers.
            </h3>

            <p>
              For orders, questions,
              and custom arrangements.
            </p>

          </div>

          <span class="contact-arrow">
            →
          </span>

        </a>


        <!-- INSTAGRAM -->
        <a
          class="contact-card"
          href="https://instagram.com/avelune.fleur"
          target="_blank"
          rel="noopener noreferrer"
        >

          <div class="contact-number">
            02
          </div>

          <div class="contact-icon">
            ◎
          </div>

          <div class="contact-content">

            <span class="contact-label">
              INSTAGRAM
            </span>

            <h3>
              @avelune.fleur
            </h3>

            <p>
              See our latest flowers,
              moments, and little stories.
            </p>

          </div>

          <span class="contact-arrow">
            →
          </span>

        </a>

      </div>

    </section>


    <!-- =========================================
         INFORMATION
    ========================================== -->
    <section class="information-section">

      <div class="information-grid">

        <!-- LOCATION -->
        <div class="info-block">

          <span class="info-label">
            LOCATION
          </span>

          <h3>
            Bengkulu,
            <em>Indonesia.</em>
          </h3>

          <p>
            Avelune Flower Studio
          </p>

        </div>


        <!-- HOURS -->
        <div class="info-block">

          <span class="info-label">
            RESPONSE HOURS
          </span>

          <h3>
            09:00 — 20:00
          </h3>

          <p>
            Monday — Saturday
          </p>

        </div>


        <!-- SERVICE -->
        <div class="info-block">

          <span class="info-label">
            WHAT WE DO
          </span>

          <h3>
            Ready-made &
            <em>Custom Flowers.</em>
          </h3>

          <p>
            Made thoughtfully for
            meaningful moments.
          </p>

        </div>

      </div>

    </section>


    <!-- =========================================
         NOTE
    ========================================== -->
    <section class="note-section">

      <div class="note-card">

        <div class="note-mark">
          “
        </div>

        <p>
          Every flower has a story.
          We'd love to help you tell yours.
        </p>

        <span>
          — AVELUNE
        </span>

      </div>

    </section>


    <!-- =========================================
         FINAL CTA
    ========================================== -->
    <section class="cta-section">

      <p class="cta-label">
        READY WHEN YOU ARE
      </p>

      <h2>
        say hello,
        <em>let's create.</em>
      </h2>

      <a
        class="cta-button"
        href="https://wa.me/6281234567890"
        target="_blank"
        rel="noopener noreferrer"
      >

        <span>
          CHAT WITH AVELUNE
        </span>

        <span>
          ↗
        </span>

      </a>

    </section>


    <!-- =========================================
         FOOTER
    ========================================== -->
    <footer class="footer">

      <div class="footer-brand">
        Avelune
      </div>

      <p>
        FLOWERS & MOMENTS
      </p>

      <div class="footer-line"></div>

      <div class="footer-bottom">

        <span>
          EST. 2026
        </span>

        <span>
          BENGKULU, INDONESIA
        </span>

        <span>
          MADE FOR MOMENTS
        </span>

      </div>

    </footer>

  </main>
</template>


<script setup>
import { useRouter } from 'vue-router'

const router = useRouter()

/* =========================================
   NAVIGATION
========================================= */

function goHome() {
  router.push('/')
}
</script>


<style scoped>

/* =========================================
   FONTS
========================================= */

@import url(
  'https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,500;0,600;1,300;1,400;1,500&family=DM+Sans:wght@300;400;500&family=Parisienne&display=swap'
);


/* =========================================
   VARIABLES
========================================= */

.contact-page {

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
    linear-gradient(
      180deg,
      #fffaf7 0%,
      #fff8f6 50%,
      #f8eee9 100%
    );

  color:
    var(--dark);

  font-family:
    'DM Sans',
    sans-serif;

}


* {
  box-sizing: border-box;
}


button {
  font: inherit;
}


/* =========================================
   HEADER
========================================= */

.header {

  width: 100%;

  min-height: 100px;

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


.back-button {

  justify-self: start;

  display: flex;

  align-items: center;

  gap: 8px;

  padding: 8px 0;

  border: none;

  background: transparent;

  color:
    var(--brown);

  font-size: 8px;

  letter-spacing: 1.8px;

  cursor: pointer;

}


.back-arrow {

  font-size: 15px;

  line-height: 1;

}


.brand {

  display: flex;

  flex-direction: column;

  align-items: center;

}


.brand-name {

  font-family:
    'Parisienne',
    cursive;

  font-size:
    clamp(
      34px,
      7vw,
      50px
    );

  line-height: 0.9;

  color:
    var(--deep-rose);

  white-space: nowrap;

}


.brand-subtitle {

  margin-top: 9px;

  font-size: 6px;

  letter-spacing: 2.5px;

  color:
    var(--brown);

}


.page-number {

  justify-self: end;

  font-size: 8px;

  letter-spacing: 2px;

  color:
    var(--brown);

}


/* =========================================
   HERO
========================================= */

.contact-hero {

  width: 100%;

  max-width: 900px;

  margin: 0 auto;

  padding:
    clamp(65px, 9vw, 110px)
    20px
    clamp(50px, 7vw, 80px);

  text-align:
    center;

}


.eyebrow {

  margin:
    0
    0
    20px;

  font-size: 8px;

  letter-spacing: 3px;

  color:
    var(--rose);

}


.contact-hero h1 {

  margin: 0;

  font-family:
    'Cormorant Garamond',
    serif;

  font-size:
    clamp(
      4rem,
      10vw,
      7rem
    );

  font-weight:
    400;

  line-height:
    0.8;

  color:
    var(--brown);

}


.contact-hero h1 em {

  display:
    block;

  color:
    var(--rose);

  font-weight:
    400;

}


.hero-description {

  max-width:
    500px;

  margin:
    30px
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


.hero-flower {

  margin-top:
    30px;

  font-family:
    'Cormorant Garamond',
    serif;

  font-size:
    22px;

  color:
    var(--rose);

}


/* =========================================
   CONTACT SECTION
========================================= */

.contact-section {

  width: 100%;

  max-width:
    1100px;

  margin:
    0
    auto;

  padding:
    0
    clamp(18px, 5vw, 60px)
    100px;

}


.section-title {

  display:
    flex;

  align-items:
    baseline;

  gap:
    18px;

  padding-bottom:
    20px;

  margin-bottom:
    30px;

  border-bottom:
    1px solid
    rgba(
      111,
      87,
      84,
      0.13
    );

}


.section-title span {

  font-size:
    7px;

  letter-spacing:
    2px;

  color:
    var(--rose);

}


.section-title h2 {

  margin: 0;

  font-family:
    'Cormorant Garamond',
    serif;

  font-size:
    clamp(
      30px,
      5vw,
      45px
    );

  font-weight:
    400;

  color:
    var(--brown);

}


/* =========================================
   CONTACT LIST
========================================= */

.contact-list {

  display:
    flex;

  flex-direction:
    column;

  gap:
    12px;

}


.contact-card {

  position:
    relative;

  min-height:
    150px;

  padding:
    25px
    50px
    25px
    65px;

  display:
    flex;

  align-items:
    center;

  text-decoration:
    none;

  background:
    rgba(
      255,
      250,
      247,
      0.65
    );

  border:
    1px solid
    rgba(
      201,
      143,
      152,
      0.2
    );

  transition:
    transform 0.3s ease,
    background 0.3s ease,
    border-color 0.3s ease;

}


.contact-card:hover {

  transform:
    translateX(5px);

  background:
    var(--soft-pink);

  border-color:
    rgba(
      201,
      143,
      152,
      0.45
    );

}


.contact-number {

  position:
    absolute;

  top:
    22px;

  left:
    20px;

  font-size:
    7px;

  letter-spacing:
    1.5px;

  color:
    var(--rose);

}


.contact-icon {

  width:
    48px;

  height:
    48px;

  margin-right:
    22px;

  flex-shrink: 0;

  display:
    flex;

  align-items:
    center;

  justify-content:
    center;

  border-radius:
    50%;

  background:
    var(--soft-pink);

  color:
    var(--deep-rose);

  font-family:
    'Cormorant Garamond',
    serif;

  font-size:
    22px;

}


.contact-content {

  min-width:
    0;

}


.contact-label {

  display:
    block;

  margin-bottom:
    6px;

  font-size:
    7px;

  letter-spacing:
    2px;

  color:
    var(--rose);

}


.contact-content h3 {

  margin:
    0;

  font-family:
    'Cormorant Garamond',
    serif;

  font-size:
    clamp(
      22px,
      4vw,
      32px
    );

  font-weight:
    400;

  color:
    var(--brown);

}


.contact-content p {

  max-width:
    430px;

  margin:
    6px
    0
    0;

  font-size:
    9px;

  line-height:
    1.7;

  color:
    #927b77;

}


.contact-arrow {

  position:
    absolute;

  right:
    25px;

  font-size:
    20px;

  color:
    var(--rose);

}


/* =========================================
   INFORMATION
========================================= */

.information-section {

  width:
    100%;

  padding:
    80px
    clamp(18px, 5vw, 70px);

  background:
    var(--soft-pink);

  border-top:
    1px solid
    rgba(
      201,
      143,
      152,
      0.18
    );

  border-bottom:
    1px solid
    rgba(
      201,
      143,
      152,
      0.18
    );

}


.information-grid {

  width:
    100%;

  max-width:
    1100px;

  margin:
    0
    auto;

  display:
    grid;

  grid-template-columns:
    repeat(
      3,
      minmax(0, 1fr)
    );

  gap:
    40px;

}


.info-block {

  padding-right:
    20px;

  border-right:
    1px solid
    rgba(
      111,
      87,
      84,
      0.12
    );

}


.info-block:last-child {

  border-right:
    none;

}


.info-label {

  display:
    block;

  margin-bottom:
    18px;

  font-size:
    7px;

  letter-spacing:
    2px;

  color:
    var(--deep-rose);

}


.info-block h3 {

  margin:
    0;

  font-family:
    'Cormorant Garamond',
    serif;

  font-size:
    clamp(
      25px,
      3vw,
      34px
    );

  font-weight:
    400;

  line-height:
    0.95;

  color:
    var(--brown);

}


.info-block h3 em {

  color:
    var(--rose);

  font-weight:
    400;

}


.info-block p {

  margin:
    14px
    0
    0;

  font-size:
    8px;

  line-height:
    1.6;

  color:
    #806c68;

}


/* =========================================
   NOTE
========================================= */

.note-section {

  width:
    100%;

  padding:
    80px
    20px;

  background:
    var(--ivory);

}


.note-card {

  width:
    100%;

  max-width:
    650px;

  margin:
    0
    auto;

  text-align:
    center;

}


.note-mark {

  font-family:
    'Cormorant Garamond',
    serif;

  font-size:
    65px;

  line-height:
    0.5;

  color:
    var(--rose);

}


.note-card p {

  margin:
    20px
    auto;

  font-family:
    'Cormorant Garamond',
    serif;

  font-size:
    clamp(
      25px,
      4vw,
      40px
    );

  font-style:
    italic;

  line-height:
    1;

  color:
    var(--brown);

}


.note-card span {

  font-size:
    7px;

  letter-spacing:
    2px;

  color:
    var(--rose);

}


/* =========================================
   CTA
========================================= */

.cta-section {

  padding:
    100px
    20px;

  text-align:
    center;

  background:
    var(--cream);

}


.cta-label {

  margin:
    0;

  font-size:
    7px;

  letter-spacing:
    2.5px;

  color:
    var(--rose);

}


.cta-section h2 {

  margin:
    20px
    auto
    30px;

  max-width:
    700px;

  font-family:
    'Cormorant Garamond',
    serif;

  font-size:
    clamp(
      3rem,
      7vw,
      5.5rem
    );

  font-weight:
    400;

  line-height:
    0.82;

  color:
    var(--brown);

}


.cta-section h2 em {

  display:
    block;

  color:
    var(--rose);

  font-weight:
    400;

}


.cta-button {

  min-height:
    50px;

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
    25px;

  border-radius:
    30px;

  background:
    var(--rose);

  color:
    white;

  text-decoration:
    none;

  font-size:
    8px;

  letter-spacing:
    1.5px;

  transition:
    background 0.25s ease,
    transform 0.25s ease;

}


.cta-button:hover {

  background:
    var(--deep-rose);

  transform:
    translateY(-2px);

}


.cta-button span:last-child {

  font-size:
    17px;

}


/* =========================================
   FOOTER
========================================= */

.footer {

  padding:
    60px
    clamp(18px, 5vw, 60px)
    25px;

  text-align:
    center;

  background:
    #fffaf7;

}


.footer-brand {

  font-family:
    'Parisienne',
    cursive;

  font-size:
    40px;

  color:
    var(--deep-rose);

}


.footer > p {

  margin:
    8px
    0
    35px;

  font-size:
    6px;

  letter-spacing:
    2.5px;

  color:
    var(--brown);

}


.footer-line {

  width:
    100%;

  max-width:
    1000px;

  height:
    1px;

  margin:
    0
    auto
    20px;

  background:
    rgba(
      111,
      87,
      84,
      0.12
    );

}


.footer-bottom {

  width:
    100%;

  max-width:
    1000px;

  margin:
    0
    auto;

  display:
    flex;

  justify-content:
    space-between;

  gap:
    15px;

  font-size:
    6px;

  letter-spacing:
    1.5px;

  color:
    #927b77;

}


/* =========================================
   MOBILE
========================================= */

@media (max-width: 700px) {

  .header {

    min-height:
      88px;

    padding:
      14px
      15px;

  }


  .brand-name {

    font-size:
      32px;

  }


  .brand-subtitle {

    margin-top:
      7px;

    font-size:
      5px;

    letter-spacing:
      2px;

  }


  .back-button {

    font-size:
      6px;

  }


  .page-number {

    font-size:
      7px;

  }


  .contact-hero {

    padding:
      55px
      18px
      50px;

  }


  .eyebrow {

    font-size:
      6px;

    letter-spacing:
      2px;

  }


  .contact-hero h1 {

    font-size:
      3.5rem;

  }


  .hero-description {

    max-width:
      310px;

    margin-top:
      25px;

    font-size:
      9px;

  }


  .contact-section {

    padding:
      0
      15px
      70px;

  }


  .section-title {

    gap:
      12px;

    margin-bottom:
      22px;

  }


  .section-title h2 {

    font-size:
      30px;

  }


  .contact-card {

    min-height:
      135px;

    padding:
      24px
      42px
      24px
      58px;

  }


  .contact-number {

    left:
      15px;

    top:
      18px;

  }


  .contact-icon {

    width:
      42px;

    height:
      42px;

    margin-right:
      15px;

    font-size:
      19px;

  }


  .contact-label {

    font-size:
      6px;

  }


  .contact-content h3 {

    font-size:
      22px;

  }


  .contact-content p {

    font-size:
      8px;

    line-height:
      1.6;

  }


  .contact-arrow {

    right:
      16px;

    font-size:
      17px;

  }


  .information-section {

    padding:
      65px
      18px;

  }


  .information-grid {

    grid-template-columns:
      1fr;

    gap:
      35px;

  }


  .info-block {

    padding:
      0
      0
      30px;

    border-right:
      none;

    border-bottom:
      1px solid
      rgba(
        111,
        87,
        84,
        0.12
      );

  }


  .info-block:last-child {

    padding-bottom:
      0;

    border-bottom:
      none;

  }


  .info-block h3 {

    font-size:
      29px;

  }


  .note-section {

    padding:
      70px
      18px;

  }


  .note-card p {

    font-size:
      27px;

  }


  .cta-section {

    padding:
      75px
      18px;

  }


  .cta-section h2 {

    font-size:
      3.2rem;

  }


  .footer {

    padding:
      50px
      15px
      25px;

  }


  .footer-bottom {

    flex-direction:
      column;

    gap:
      9px;

  }

}


/* =========================================
   SMALL PHONES
========================================= */

@media (max-width: 380px) {

  .brand-name {

    font-size:
      29px;

  }


  .brand-subtitle {

    font-size:
      4px;

  }


  .contact-hero {

    padding-top:
      45px;

  }


  .contact-hero h1 {

    font-size:
      3rem;

  }


  .hero-description {

    font-size:
      8.5px;

  }


  .contact-card {

    min-height:
      130px;

    padding:
      20px
      35px
      20px
      52px;

  }


  .contact-icon {

    width:
      37px;

    height:
      37px;

    margin-right:
      11px;

    font-size:
      17px;

  }


  .contact-content h3 {

    font-size:
      19px;

  }


  .contact-content p {

    font-size:
      7px;

  }


  .contact-arrow {

    right:
      11px;

    font-size:
      15px;

  }


  .info-block h3 {

    font-size:
      26px;

  }


  .note-card p {

    font-size:
      24px;

  }


  .cta-section h2 {

    font-size:
      2.8rem;

  }


  .cta-button {

    width:
      100%;

    max-width:
      250px;

  }

}


/* =========================================
   VERY SMALL PHONES
========================================= */

@media (max-width: 330px) {

  .brand-name {

    font-size:
      27px;

  }


  .contact-hero h1 {

    font-size:
      2.7rem;

  }


  .contact-card {

    padding-left:
      48px;

  }


  .contact-content h3 {

    font-size:
      17px;

  }


  .contact-content p {

    font-size:
      6.5px;

  }


  .contact-icon {

    width:
      34px;

    height:
      34px;

  }


  .note-card p {

    font-size:
      22px;

  }


  .cta-section h2 {

    font-size:
      2.6rem;

  }

}


/* =========================================
   DESKTOP
========================================= */

@media (min-width: 1024px) {

  .contact-hero {

    padding-top:
      95px;

  }


  .contact-section {

    padding-bottom:
      120px;

  }


  .contact-card {

    min-height:
      170px;

  }


  .information-section {

    padding-top:
      100px;

    padding-bottom:
      100px;

  }

}

</style>