<template>
  <main class="collection">

    <!-- =========================================
         HEADER
    ========================================== -->
    <header class="header">

      <!-- BACK -->
      <button
        class="back-button"
        @click="goHome"
        aria-label="Back to home"
        type="button"
      >
        <span class="back-line"></span>

        <span>
          BACK
        </span>
      </button>


      <!-- BRAND -->
      <div class="brand">

        <div class="brand-name">
          Avelune
        </div>

        <div class="brand-subtitle">
          FLOWERS & MOMENTS
        </div>

      </div>


      <!-- PAGE NUMBER -->
      <div class="page-number">
        02
      </div>

    </header>


    <!-- =========================================
         INTRO
    ========================================== -->
    <section class="collection-intro">

      <p class="eyebrow">
        AVELUNE FLOWER STUDIO
      </p>

      <h1>
        flowers for
        <em>every moment.</em>
      </h1>

      <p class="intro-description">
        A little collection of flowers,
        thoughtfully arranged to make
        ordinary moments feel special.
      </p>

    </section>


    <!-- =========================================
         COLLECTION GRID
    ========================================== -->
    <section class="products">

      <!-- PRODUCT 01 -->
      <article class="product-card">

        <div class="product-image">

          <img
            src="/images/flower-01.jpg"
            alt="Rosée d'Amour"
          />

          <span class="product-number">
            01
          </span>

        </div>

        <div class="product-info">

          <div>

            <h2>
              Rosée d'Amour
            </h2>

            <p>
              Soft Pink
            </p>

          </div>

          <span class="price">
            Rp 60.000
          </span>

        </div>

      </article>


      <!-- PRODUCT 02 -->
      <article class="product-card">

        <div class="product-image">

          <img
            src="/images/flower-02.jpg"
            alt="Célestine Azure"
          />

          <span class="product-number">
            02
          </span>

        </div>

        <div class="product-info">

          <div>

            <h2>
              Célestine Azure
            </h2>

            <p>
              Baby Blue
            </p>

          </div>

          <span class="price">
            Rp 40.000
          </span>

        </div>

      </article>


      <!-- PRODUCT 03 -->
      <article class="product-card">

        <div class="product-image">

          <img
            src="/images/flower-03.jpg"
            alt="Fuchsia Éclat"
          />

          <span class="product-number">
            03
          </span>

        </div>

        <div class="product-info">

          <div>

            <h2>
              Fuchsia Éclat
            </h2>

            <p>
              Pink Magenta
            </p>

          </div>

          <span class="price">
            Rp 75.000
          </span>

        </div>

      </article>


      <!-- PRODUCT 04 -->
      <article class="product-card">

        <div class="product-image">

          <img
            src="/images/flower-04.jpg"
            alt="Lilas Étoile"
          />

          <span class="product-number">
            04
          </span>

        </div>

        <div class="product-info">

          <div>

            <h2>
              Soft Lilas
            </h2>

            <p>
              Lilac Pastel
            </p>

          </div>

          <span class="price">
            Rp 50.000
          </span>

        </div>

      </article>

    </section>


    <!-- =========================================
         CUSTOM ORDER CTA
    ========================================== -->
    <section class="custom-section">

      <div class="custom-content">

        <span class="custom-label">
          CAN'T FIND WHAT YOU'RE LOOKING FOR?
        </span>

        <h2>
          make it
          <em>your own.</em>
        </h2>

        <p>
          Tell us the feeling, occasion,
          colors, and flowers you have in mind.
        </p>


        <button
          class="custom-button"
          @click="goToCustomOrder"
          type="button"
        >

          <span>
            CUSTOM ORDER
          </span>

          <!-- GANTI PANAH ↗ MENJADI GARIS -->
          <span class="button-line"></span>

        </button>

      </div>

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

      <div class="footer-bottom">

        <span>
          EST. 2026
        </span>

        <span>
          BENGKULU, INDONESIA
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


function goToCustomOrder() {
  router.push('/custom-order')
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

.collection {

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
  width: 100%;
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


/* =========================================
   BACK BUTTON
========================================= */

.back-button {

  justify-self: start;

  display: flex;

  align-items: center;

  gap: 10px;

  padding: 8px 0;

  border: none;

  background: transparent;

  color: var(--brown);

  font-size: 8px;

  letter-spacing: 1.8px;

  cursor: pointer;

}


.back-line {

  width: 23px;

  height: 1px;

  position: relative;

  display: block;

  background: var(--brown);

}


.back-line::before {

  content: '';

  position: absolute;

  left: 0;

  top: -5px;

  width: 14px;

  height: 1px;

  background: var(--brown);

}


/* =========================================
   BRAND
========================================= */

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

  color: var(--deep-rose);

  white-space: nowrap;

}


.brand-subtitle {

  margin-top: 9px;

  font-size: 6px;

  letter-spacing: 2.5px;

  color: var(--brown);

}


/* =========================================
   PAGE NUMBER
========================================= */

.page-number {

  justify-self: end;

  font-size: 9px;

  letter-spacing: 2px;

  color: var(--brown);

}


/* =========================================
   INTRO
========================================= */

.collection-intro {

  width: 100%;

  max-width: 850px;

  margin: 0 auto;

  padding:
    clamp(55px, 9vw, 100px)
    20px
    clamp(45px, 7vw, 75px);

  text-align: center;

}


.eyebrow {

  margin: 0 0 18px;

  font-size: 8px;

  letter-spacing: 3px;

  color: var(--rose);

}


.collection-intro h1 {

  margin: 0;

  font-family:
    'Cormorant Garamond',
    serif;

  font-size:
    clamp(
      3.3rem,
      9vw,
      6.5rem
    );

  font-weight: 400;

  line-height: 0.82;

  color: var(--brown);

}


.collection-intro h1 em {

  display: block;

  margin-top: 8px;

  color: var(--rose);

  font-weight: 400;

}


.intro-description {

  max-width: 450px;

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

  line-height: 1.8;

  color: #806c68;

}


/* =========================================
   PRODUCTS
========================================= */

.products {

  width: 100%;

  max-width: 1250px;

  margin: 0 auto;

  padding:
    0
    clamp(18px, 5vw, 60px)
    80px;

  display: grid;

  grid-template-columns:
    repeat(
      2,
      minmax(0, 1fr)
    );

  column-gap:
    clamp(
      12px,
      3vw,
      40px
    );

  row-gap:
    55px;

}


/* =========================================
   PRODUCT CARD
========================================= */

.product-card {

  min-width: 0;

}


/* =========================================
   PRODUCT IMAGE
========================================= */

.product-image {

  position: relative;

  width: 100%;

  aspect-ratio:
    0.78;

  overflow: hidden;

  background:
    var(--soft-pink);

}


.product-image img {

  width: 100%;

  height: 100%;

  object-fit: cover;

  transition:
    transform 0.6s ease;

}


.product-card:hover
.product-image img {

  transform:
    scale(1.04);

}


/* =========================================
   PRODUCT NUMBER
========================================= */

.product-number {

  position: absolute;

  top: 12px;

  left: 12px;

  font-size: 7px;

  letter-spacing: 1.5px;

  color: white;

  text-shadow:
    0 1px 5px
    rgba(0,0,0,0.2);

}


/* =========================================
   PRODUCT INFO
========================================= */

.product-info {

  padding-top:
    15px;

  display: flex;

  align-items:
    flex-start;

  justify-content:
    space-between;

  gap: 10px;

}


.product-info h2 {

  margin: 0;

  font-family:
    'Cormorant Garamond',
    serif;

  font-size:
    clamp(
      19px,
      4vw,
      29px
    );

  font-weight: 500;

  line-height: 1;

  color: var(--brown);

}


.product-info p {

  margin:
    7px
    0
    0;

  font-size:
    clamp(
      7px,
      1.5vw,
      9px
    );

  letter-spacing:
    0.7px;

  color:
    #927b77;

}


.price {

  flex-shrink: 0;

  padding-top: 3px;

  font-size:
    clamp(
      7px,
      1.5vw,
      10px
    );

  letter-spacing:
    0.4px;

  color:
    var(--deep-rose);

}


/* =========================================
   CUSTOM SECTION
========================================= */

.custom-section {

  width: 100%;

  padding:
    85px
    20px;

  display: flex;

  justify-content: center;

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


.custom-content {

  width: 100%;

  max-width:
    650px;

  text-align: center;

}


.custom-label {

  font-size: 7px;

  letter-spacing: 2.5px;

  color: var(--deep-rose);

}


.custom-content h2 {

  margin:
    18px
    0
    12px;

  font-family:
    'Cormorant Garamond',
    serif;

  font-size:
    clamp(
      3rem,
      8vw,
      5.5rem
    );

  font-weight: 400;

  line-height: 0.85;

  color: var(--brown);

}


.custom-content h2 em {

  color: var(--rose);

  font-weight: 400;

}


.custom-content p {

  max-width:
    450px;

  margin:
    0
    auto;

  font-size:
    10px;

  line-height:
    1.8;

  color:
    #806c68;

}


/* =========================================
   CUSTOM BUTTON
========================================= */

.custom-button {

  margin-top:
    28px;

  min-height:
    50px;

  min-width:
    210px;

  padding:
    0
    22px;

  display:
    inline-flex;

  align-items:
    center;

  justify-content:
    space-between;

  gap: 25px;

  border: none;

  border-radius:
    30px;

  background:
    var(--rose);

  color: white;

  font-size: 8px;

  letter-spacing: 1.5px;

  cursor: pointer;

  transition:
    transform 0.25s ease,
    background 0.25s ease;

}


.custom-button:hover {

  transform:
    translateY(-2px);

  background:
    var(--deep-rose);

}


/* =========================================
   BUTTON LINE
   Menggantikan simbol ↗
========================================= */

.button-line {

  width:
    22px;

  height:
    1px;

  display:
    block;

  flex-shrink: 0;

  background:
    rgba(
      255,
      255,
      255,
      0.9
    );

}


/* =========================================
   FOOTER
========================================= */

.footer {

  padding:
    55px
    clamp(18px, 5vw, 60px)
    25px;

  text-align: center;

  background:
    #fffaf7;

}


.footer-brand {

  font-family:
    'Parisienne',
    cursive;

  font-size:
    38px;

  color:
    var(--deep-rose);

}


.footer > p {

  margin:
    8px
    0
    40px;

  font-size:
    6px;

  letter-spacing:
    2.5px;

  color:
    var(--brown);

}


.footer-bottom {

  padding-top:
    18px;

  display:
    flex;

  justify-content:
    space-between;

  border-top:
    1px solid
    rgba(
      111,
      87,
      84,
      0.12
    );

  font-size:
    6px;

  letter-spacing:
    1.5px;

  color:
    #927b77;

}


/* =========================================
   SMALL PHONES
========================================= */

@media (max-width: 380px) {

  .header {

    min-height:
      88px;

    padding:
      14px
      15px;

  }


  .brand-name {

    font-size:
      31px;

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

    gap:
      7px;

    font-size:
      6px;

  }


  .back-line {

    width:
      18px;

  }


  .page-number {

    font-size:
      7px;

  }


  .collection-intro {

    padding:
      48px
      15px
      40px;

  }


  .eyebrow {

    font-size:
      6px;

    letter-spacing:
      2px;

  }


  .collection-intro h1 {

    font-size:
      2.9rem;

  }


  .intro-description {

    max-width:
      290px;

    margin-top:
      23px;

    font-size:
      9px;

  }


  .products {

    padding:
      0
      12px
      60px;

    column-gap:
      10px;

    row-gap:
      38px;

  }


  .product-info {

    padding-top:
      10px;

    display:
      block;

  }


  .product-info h2 {

    font-size:
      20px;

  }


  .product-info p {

    margin-top:
      5px;

    font-size:
      7px;

  }


  .price {

    display:
      block;

    margin-top:
      7px;

    font-size:
      8px;

  }


  .product-number {

    top:
      8px;

    left:
      8px;

  }


  .custom-section {

    padding:
      65px
      18px;

  }


  .custom-content h2 {

    font-size:
      3rem;

  }


  .custom-content p {

    font-size:
      9px;

  }


  .custom-button {

    width:
      100%;

    max-width:
      230px;

  }


  .button-line {

    width:
      20px;

  }


  .footer {

    padding-top:
      45px;

  }


  .footer-brand {

    font-size:
      34px;

  }


  .footer-bottom {

    font-size:
      5px;

  }

}


/* =========================================
   VERY SMALL PHONES
========================================= */

@media (max-width: 330px) {

  .header {

    grid-template-columns:
      1fr
      auto
      1fr;

  }


  .brand-name {

    font-size:
      28px;

  }


  .brand-subtitle {

    font-size:
      4px;

  }


  .collection-intro h1 {

    font-size:
      2.55rem;

  }


  .intro-description {

    font-size:
      8.5px;

  }


  .products {

    column-gap:
      7px;

  }


  .product-info h2 {

    font-size:
      18px;

  }


  .product-info p {

    font-size:
      6px;

  }


  .price {

    font-size:
      7px;

  }


  .custom-content h2 {

    font-size:
      2.7rem;

  }


  .button-line {

    width:
      18px;

  }


  .footer-bottom {

    flex-direction:
      column;

    gap:
      8px;

  }

}


/* =========================================
   TABLET
========================================= */

@media (min-width: 600px) {

  .products {

    grid-template-columns:
      repeat(
        2,
        minmax(0, 1fr)
      );

  }


  .collection-intro {

    padding-top:
      75px;

  }

}


/* =========================================
   DESKTOP
========================================= */

@media (min-width: 1024px) {

  .header {

    min-height:
      110px;

  }


  .products {

    grid-template-columns:
      repeat(
        4,
        minmax(0, 1fr)
      );

    column-gap:
      24px;

    row-gap:
      40px;

  }


  .collection-intro {

    padding-top:
      90px;

    padding-bottom:
      70px;

  }


  .product-info {

    display:
      block;

  }


  .price {

    display:
      block;

    margin-top:
      8px;

  }


  .custom-section {

    padding:
      110px
      30px;

  }


  .footer {

    padding-top:
      70px;

  }

}


/* =========================================
   LARGE DESKTOP
========================================= */

@media (min-width: 1400px) {

  .products {

    max-width:
      1350px;

    column-gap:
      32px;

  }


  .product-info h2 {

    font-size:
      30px;

  }


  .product-info p {

    font-size:
      9px;

  }


  .price {

    font-size:
      10px;

  }

}

</style>