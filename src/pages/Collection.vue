<template>
  <main class="collection">

    <!-- =========================================
         HEADER
    ========================================== -->
    <header class="header">

      <button
        class="back-button"
        type="button"
        @click="goHome"
        aria-label="Back to home"
      >
        <span class="back-line"></span>
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
         PRODUCTS
    ========================================== -->
    <section class="products">


      <!-- =======================================
           01
      ======================================== -->
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

          <div class="product-name">

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


        <button
          class="buy-button"
          type="button"
          @click="
            buyFlower(
              'Rosée d’Amour',
              'Soft Pink',
              'Rp 60.000'
            )
          "
        >
          <span>
            BUY THIS FLOWER
          </span>

          <span class="buy-arrow">
            →
          </span>
        </button>

      </article>



      <!-- =======================================
           02
      ======================================== -->
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

          <div class="product-name">

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


        <button
          class="buy-button"
          type="button"
          @click="
            buyFlower(
              'Célestine Azure',
              'Baby Blue',
              'Rp 40.000'
            )
          "
        >
          <span>
            BUY THIS FLOWER
          </span>

          <span class="buy-arrow">
            →
          </span>
        </button>

      </article>



      <!-- =======================================
           03
      ======================================== -->
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

          <div class="product-name">

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


        <button
          class="buy-button"
          type="button"
          @click="
            buyFlower(
              'Fuchsia Éclat',
              'Pink Magenta',
              'Rp 75.000'
            )
          "
        >
          <span>
            BUY THIS FLOWER
          </span>

          <span class="buy-arrow">
            →
          </span>
        </button>

      </article>



      <!-- =======================================
           04
      ======================================== -->
      <article class="product-card">

        <div class="product-image">

          <img
            src="/images/flower-04.jpg"
            alt="Soft Lilas"
          />

          <span class="product-number">
            04
          </span>

        </div>


        <div class="product-info">

          <div class="product-name">

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


        <button
          class="buy-button"
          type="button"
          @click="
            buyFlower(
              'Soft Lilas',
              'Lilac Pastel',
              'Rp 50.000'
            )
          "
        >
          <span>
            BUY THIS FLOWER
          </span>

          <span class="buy-arrow">
            →
          </span>
        </button>

      </article>

    </section>



    <!-- =========================================
         CUSTOM ORDER
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
          type="button"
          @click="goToCustomOrder"
        >
          <span>
            CUSTOM ORDER
          </span>

          <span class="custom-arrow">
            →
          </span>
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


/* =========================================
   ROUTER
========================================= */

const router = useRouter()



/* =========================================
   WHATSAPP BUY
========================================= */

function buyFlower(
  flowerName,
  color,
  price
) {

  const whatsappNumber =
    '6283172536705'


  const message = `Hello Avelune! ♡

I'd like to order one of your ready-made flowers.

Flower:
${flowerName}

Color:
${color}

Price:
${price}

I'd like to know more about the availability and ordering process.

Thank you! ♡`


  const whatsappUrl =
    `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`


  window.open(
    whatsappUrl,
    '_blank'
  )

}



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

@import url(
  'https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,500;0,600;1,300;1,400;1,500&family=DM+Sans:wght@300;400;500&family=Parisienne&display=swap'
);


/* =========================================
   ROOT
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
      #fff8f6 50%,
      #f8eee9 100%
    );

  color: var(--dark);

  font-family:
    'DM Sans',
    sans-serif;

}


.collection *,
.collection *::before,
.collection *::after {

  box-sizing: border-box;

}


button {

  font: inherit;

  -webkit-tap-highlight-color:
    transparent;

}



/* =========================================
   HEADER
========================================= */

.header {

  width: 100%;

  min-height: 96px;

  padding:
    15px
    clamp(16px, 5vw, 70px);

  display: grid;

  grid-template-columns:
    1fr
    auto
    1fr;

  align-items: center;

  border-bottom:
    1px solid
    rgba(111, 87, 84, 0.12);

}



/* =========================================
   BACK
========================================= */

.back-button {

  justify-self: start;

  display: inline-flex;

  align-items: center;

  gap: 9px;

  padding: 8px 0;

  border: none;

  background: transparent;

  color: var(--brown);

  font-size: 8px;

  letter-spacing: 1.7px;

  cursor: pointer;

  touch-action: manipulation;

}


.back-button:active {

  transform: scale(0.97);

}


.back-line {

  position: relative;

  display: block;

  width: 22px;

  height: 1px;

  background:
    var(--brown);

}


.back-line::before {

  content: '';

  position: absolute;

  left: 0;

  top: -4px;

  width: 13px;

  height: 1px;

  background:
    var(--brown);

}



/* =========================================
   BRAND
========================================= */

.brand {

  display: flex;

  flex-direction: column;

  align-items: center;

  min-width: 0;

}


.brand-name {

  font-family:
    'Parisienne',
    cursive;

  font-size:
    clamp(
      31px,
      7vw,
      50px
    );

  line-height:
    0.9;

  color:
    var(--deep-rose);

  white-space:
    nowrap;

}


.brand-subtitle {

  margin-top: 8px;

  font-size: 6px;

  letter-spacing: 2.3px;

  color:
    var(--brown);

  white-space:
    nowrap;

}



/* =========================================
   PAGE NUMBER
========================================= */

.page-number {

  justify-self:
    end;

  font-size: 8px;

  letter-spacing: 1.8px;

  color:
    var(--brown);

}



/* =========================================
   INTRO
========================================= */

.collection-intro {

  width: 100%;

  max-width: 850px;

  margin: 0 auto;

  padding:
    clamp(48px, 9vw, 95px)
    18px
    clamp(42px, 7vw, 70px);

  text-align: center;

}


.eyebrow {

  margin:
    0 0 17px;

  font-size: 7px;

  letter-spacing: 2.5px;

  color:
    var(--rose);

}


.collection-intro h1 {

  margin: 0;

  font-family:
    'Cormorant Garamond',
    serif;

  font-size:
    clamp(
      3.1rem,
      10vw,
      6.5rem
    );

  font-weight:
    400;

  line-height:
    0.83;

  color:
    var(--brown);

}


.collection-intro h1 em {

  display: block;

  margin-top: 7px;

  color:
    var(--rose);

  font-weight:
    400;

}


.intro-description {

  max-width: 430px;

  margin:
    27px auto 0;

  font-size:
    clamp(
      9px,
      2vw,
      12px
    );

  line-height:
    1.8;

  color:
    #806c68;

}



/* =========================================
   PRODUCTS
========================================= */

.products {

  width: 100%;

  max-width: 1180px;

  margin: 0 auto;

  padding:
    0
    clamp(16px, 5vw, 55px)
    75px;

  display: grid;

  grid-template-columns:
    repeat(2, minmax(0, 1fr));

  column-gap:
    clamp(
      10px,
      3vw,
      34px
    );

  row-gap:
    clamp(
      42px,
      7vw,
      65px
    );

}



/* =========================================
   CARD
========================================= */

.product-card {

  min-width: 0;

  display: flex;

  flex-direction: column;

}



/* =========================================
   IMAGE
========================================= */

.product-image {

  position: relative;

  width: 100%;

  aspect-ratio: 0.78;

  overflow: hidden;

  background:
    var(--soft-pink);

}


.product-image img {

  display: block;

  width: 100%;

  height: 100%;

  object-fit: cover;

}


.product-number {

  position: absolute;

  top: 10px;

  left: 11px;

  font-family:
    'DM Sans',
    sans-serif;

  font-size: 7px;

  letter-spacing: 1px;

  color: white;

  text-shadow:
    0 1px 5px
    rgba(0, 0, 0, 0.22);

}



/* =========================================
   PRODUCT INFO
========================================= */

.product-info {

  width: 100%;

  min-height: 66px;

  padding-top: 13px;

  display: grid;

  grid-template-columns:
    minmax(0, 1fr)
    auto;

  align-items: start;

  column-gap: 8px;

}


.product-name {

  min-width: 0;

}


.product-info h2 {

  margin: 0;

  font-family:
    'Cormorant Garamond',
    serif;

  font-size:
    clamp(
      18px,
      4vw,
      28px
    );

  font-weight:
    500;

  line-height:
    0.95;

  color:
    var(--brown);

  overflow-wrap:
    break-word;

}


.product-info p {

  margin:
    6px 0 0;

  font-size:
    clamp(
      6.5px,
      1.5vw,
      9px
    );

  line-height:
    1.3;

  letter-spacing:
    0.5px;

  color:
    #927b77;

}


.price {

  padding-top:
    3px;

  white-space:
    nowrap;

  font-size:
    clamp(
      6.5px,
      1.4vw,
      9px
    );

  line-height:
    1.2;

  letter-spacing:
    0.2px;

  color:
    var(--deep-rose);

}



/* =========================================
   BUY BUTTON
========================================= */

.buy-button {

  width: 100%;

  min-width: 0;

  min-height: 44px;

  margin-top: 5px;

  padding:
    0 13px;

  display: flex;

  align-items: center;

  justify-content: space-between;

  gap: 8px;

  border:
    1px solid
    var(--rose);

  border-radius: 4px;

  background:
    rgba(255, 250, 247, 0.9);

  color:
    var(--deep-rose);

  font-size:
    clamp(
      6px,
      1.35vw,
      8px
    );

  font-weight: 500;

  letter-spacing:
    clamp(
      0.8px,
      0.25vw,
      1.5px
    );

  cursor: pointer;

  touch-action:
    manipulation;

  transition:
    background 0.2s ease,
    color 0.2s ease,
    transform 0.2s ease,
    box-shadow 0.2s ease;

}


.buy-button:hover {

  background:
    var(--rose);

  color: white;

  transform:
    translateY(-2px);

  box-shadow:
    0 7px 16px
    rgba(168, 111, 120, 0.16);

}


.buy-button:active {

  background:
    var(--deep-rose);

  color: white;

  transform:
    scale(0.985);

  box-shadow: none;

}


.buy-arrow {

  flex-shrink: 0;

  font-family:
    Arial,
    sans-serif;

  font-size:
    16px;

  font-weight:
    300;

  line-height:
    1;

  transition:
    transform 0.2s ease;

}


.buy-button:hover .buy-arrow {

  transform:
    translateX(3px);

}



/* =========================================
   CUSTOM ORDER
========================================= */

.custom-section {

  width: 100%;

  padding:
    75px 18px;

  display: flex;

  justify-content: center;

  background:
    var(--soft-pink);

  border-top:
    1px solid
    rgba(201, 143, 152, 0.15);

  border-bottom:
    1px solid
    rgba(201, 143, 152, 0.15);

}


.custom-content {

  width: 100%;

  max-width: 650px;

  text-align: center;

}


.custom-label {

  font-size: 6.5px;

  letter-spacing: 2.2px;

  color:
    var(--deep-rose);

}


.custom-content h2 {

  margin:
    17px 0 12px;

  font-family:
    'Cormorant Garamond',
    serif;

  font-size:
    clamp(
      2.9rem,
      9vw,
      5.5rem
    );

  font-weight:
    400;

  line-height:
    0.85;

  color:
    var(--brown);

}


.custom-content h2 em {

  color:
    var(--rose);

  font-weight:
    400;

}


.custom-content p {

  max-width:
    430px;

  margin:
    0 auto;

  font-size: 9px;

  line-height:
    1.8;

  color:
    #806c68;

}


.custom-button {

  width:
    min(100%, 230px);

  min-height:
    47px;

  margin-top:
    26px;

  padding:
    0 18px;

  display:
    inline-flex;

  align-items:
    center;

  justify-content:
    space-between;

  gap:
    20px;

  border:
    none;

  border-radius:
    30px;

  background:
    var(--rose);

  color:
    white;

  font-size:
    7px;

  letter-spacing:
    1.4px;

  cursor:
    pointer;

  touch-action:
    manipulation;

  transition:
    transform 0.2s ease,
    background 0.2s ease;

}


.custom-button:hover {

  background:
    var(--deep-rose);

  transform:
    translateY(-2px);

}


.custom-button:active {

  transform:
    scale(0.98);

}


.custom-arrow {

  font-size:
    16px;

  line-height:
    1;

}



/* =========================================
   FOOTER
========================================= */

.footer {

  width: 100%;

  padding:
    50px
    clamp(16px, 5vw, 60px)
    22px;

  text-align:
    center;

  background:
    var(--ivory);

}


.footer-brand {

  font-family:
    'Parisienne',
    cursive;

  font-size:
    36px;

  color:
    var(--deep-rose);

}


.footer > p {

  margin:
    7px 0 35px;

  font-size:
    5.5px;

  letter-spacing:
    2.2px;

  color:
    var(--brown);

}


.footer-bottom {

  padding-top:
    16px;

  display:
    flex;

  justify-content:
    space-between;

  gap:
    15px;

  border-top:
    1px solid
    rgba(111, 87, 84, 0.12);

  font-size:
    5.5px;

  letter-spacing:
    1.2px;

  color:
    #927b77;

}



/* =========================================
   360px AND BELOW
========================================= */

@media (max-width: 360px) {

  .header {

    min-height:
      86px;

    padding:
      13px
      14px;

  }


  .brand-name {

    font-size:
      29px;

  }


  .brand-subtitle {

    font-size:
      4.5px;

    letter-spacing:
      1.8px;

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
      6.5px;

  }


  .collection-intro {

    padding:
      43px
      14px
      38px;

  }


  .eyebrow {

    margin-bottom:
      14px;

    font-size:
      5.5px;

    letter-spacing:
      1.8px;

  }


  .collection-intro h1 {

    font-size:
      2.7rem;

  }


  .intro-description {

    max-width:
      285px;

    margin-top:
      22px;

    font-size:
      8px;

  }


  .products {

    padding:
      0
      10px
      58px;

    column-gap:
      10px;

    row-gap:
      43px;

  }


  .product-image {

    aspect-ratio:
      0.77;

  }


  .product-number {

    top:
      8px;

    left:
      8px;

    font-size:
      6px;

  }


  .product-info {

    min-height:
      64px;

    padding-top:
      10px;

    column-gap:
      5px;

  }


  .product-info h2 {

    font-size:
      18px;

    line-height:
      0.92;

  }


  .product-info p {

    margin-top:
      5px;

    font-size:
      6px;

  }


  .price {

    padding-top:
      2px;

    font-size:
      6px;

  }


  .buy-button {

    min-height:
      41px;

    margin-top:
      3px;

    padding:
      0 10px;

    font-size:
      5.6px;

    letter-spacing:
      0.8px;

  }


  .buy-arrow {

    font-size:
      14px;

  }


  .custom-section {

    padding:
      62px
      15px;

  }


  .custom-label {

    font-size:
      5.5px;

  }


  .custom-content h2 {

    font-size:
      2.7rem;

  }


  .custom-content p {

    font-size:
      8px;

  }


  .custom-button {

    max-width:
      215px;

    min-height:
      44px;

    font-size:
      6px;

  }


  .footer {

    padding-top:
      43px;

  }


  .footer-brand {

    font-size:
      33px;

  }


  .footer-bottom {

    font-size:
      5px;

  }

}



/* =========================================
   320px AND BELOW
========================================= */

@media (max-width: 320px) {

  .header {

    padding-left:
      11px;

    padding-right:
      11px;

  }


  .brand-name {

    font-size:
      26px;

  }


  .brand-subtitle {

    font-size:
      4px;

    letter-spacing:
      1.4px;

  }


  .collection-intro {

    padding:
      38px
      11px
      34px;

  }


  .collection-intro h1 {

    font-size:
      2.45rem;

  }


  .intro-description {

    font-size:
      7.5px;

  }


  .products {

    padding-left:
      9px;

    padding-right:
      9px;

    column-gap:
      8px;

  }


  .product-info {

    min-height:
      61px;

  }


  .product-info h2 {

    font-size:
      16.5px;

  }


  .product-info p {

    font-size:
      5.5px;

  }


  .price {

    font-size:
      5.5px;

  }


  .buy-button {

    min-height:
      39px;

    padding:
      0 8px;

    font-size:
      5px;

    letter-spacing:
      0.55px;

  }


  .buy-arrow {

    font-size:
      13px;

  }

}



/* =========================================
   TABLET
========================================= */

@media (min-width: 600px) {

  .products {

    column-gap:
      24px;

  }


  .product-info {

    min-height:
      78px;

  }


  .buy-button {

    min-height:
      48px;

  }

}



/* =========================================
   DESKTOP
========================================= */

@media (min-width: 1024px) {

  .header {

    min-height:
      105px;

  }


  .products {

    grid-template-columns:
      repeat(4, minmax(0, 1fr));

    column-gap:
      25px;

    row-gap:
      45px;

  }


  .product-info {

    min-height:
      85px;

  }


  .product-info h2 {

    font-size:
      27px;

  }


  .product-info p {

    font-size:
      8px;

  }


  .price {

    font-size:
      9px;

  }


  .buy-button {

    min-height:
      47px;

  }


  .custom-section {

    padding:
      105px 25px;

  }


  .footer {

    padding-top:
      65px;

  }

}



/* =========================================
   LARGE DESKTOP
========================================= */

@media (min-width: 1400px) {

  .products {

    max-width:
      1300px;

    column-gap:
      32px;

  }


  .product-info h2 {

    font-size:
      30px;

  }

}

</style>
