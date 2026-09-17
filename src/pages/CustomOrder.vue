<template>
  <main class="custom-page">

    <!-- =========================================
         HEADER
    ========================================== -->
    <header class="header">

      <button
        class="back-button"
        @click="goHome"
        aria-label="Back to home"
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
        03
      </div>

    </header>


    <!-- =========================================
         HERO / INTRO
    ========================================== -->
    <section class="custom-hero">

      <p class="eyebrow">
        CUSTOM FLOWER STUDIO
      </p>

      <h1>
        make it
        <em>yours.</em>
      </h1>

      <p class="hero-description">
        Some feelings are too personal for
        something ordinary. Tell us your story,
        and we'll create flowers around it.
      </p>

      <div class="hero-symbol">
        ✦
      </div>

    </section>


    <!-- =========================================
         FORM AREA
    ========================================== -->
    <section class="order-section">

      <div class="order-layout">

        <!-- =====================================
             FORM
        ====================================== -->
        <div class="form-wrapper">

          <div class="section-heading">

            <span>
              01
            </span>

            <h2>
              your flower story
            </h2>

          </div>


          <form
            class="order-form"
            @submit.prevent="submitOrder"
          >

            <!-- =================================
                 OCCASION
            ================================== -->
            <div class="form-group">

              <label>
                OCCASION
              </label>

              <div class="option-grid">

                <button
                  v-for="item in occasions"
                  :key="item"
                  type="button"
                  class="option"
                  :class="{
                    active: form.occasion === item
                  }"
                  @click="form.occasion = item"
                >
                  {{ item }}
                </button>

              </div>

            </div>


            <!-- =================================
                 FLOWER
            ================================== -->
            <div class="form-group">

              <label>
                FLOWER PREFERENCE
              </label>

              <select
                v-model="form.flower"
                required
              >
                <option
                  disabled
                  value=""
                >
                  Choose a flower
                </option>

                <option
                  v-for="item in flowers"
                  :key="item"
                  :value="item"
                >
                  {{ item }}
                </option>

              </select>

            </div>


            <!-- =================================
                 COLOR
            ================================== -->
            <div class="form-group">

              <label>
                COLOR PALETTE
              </label>

              <div class="color-grid">

                <button
                  v-for="item in colors"
                  :key="item.name"
                  type="button"
                  class="color-option"
                  :class="{
                    active: form.color === item.name
                  }"
                  @click="form.color = item.name"
                >

                  <span
                    class="color-circle"
                    :style="{
                      background: item.color
                    }"
                  ></span>

                  <span>
                    {{ item.name }}
                  </span>

                </button>

              </div>

            </div>


            <!-- =================================
                 BUDGET
            ================================== -->
            <div class="form-group">

              <label>
                BUDGET RANGE
              </label>

              <div class="budget-list">

                <button
                  v-for="item in budgets"
                  :key="item.value"
                  type="button"
                  class="budget-option"
                  :class="{
                    active: form.budget === item.value
                  }"
                  @click="form.budget = item.value"
                >

                  <span>
                    {{ item.label }}
                  </span>

                  <small>
                    {{ item.price }}
                  </small>

                </button>

              </div>

            </div>


            <!-- =================================
                 MESSAGE
            ================================== -->
            <div class="form-group">

              <label for="message">
                TELL US ABOUT IT
              </label>

              <textarea
                id="message"
                v-model="form.message"
                rows="5"
                placeholder="Tell us who the flowers are for, the feeling you want, or anything you'd like us to know..."
                required
              ></textarea>

            </div>


            <!-- =================================
                 NAME
            ================================== -->
            <div class="form-group">

              <label for="name">
                YOUR NAME
              </label>

              <input
                id="name"
                v-model="form.name"
                type="text"
                placeholder="Your name"
                required
              />

            </div>


            <!-- =================================
                 SUBMIT
            ================================== -->
            <button
              type="submit"
              class="submit-button"
            >

              <span>
                SEND MY REQUEST
              </span>

              <span class="submit-arrow">
                ↗
              </span>

            </button>


            <p class="form-note">
              Your request will open WhatsApp,
              where we can discuss the details together.
            </p>

          </form>

        </div>


        <!-- =====================================
             PREVIEW
        ====================================== -->
        <aside class="preview-wrapper">

          <div class="preview-card">

            <div class="preview-top">

              <span>
                AVELUNE
              </span>

              <span>
                CUSTOM
              </span>

            </div>


            <div class="preview-center">

              <span class="preview-small">
                YOUR FLOWER STORY
              </span>

              <div class="preview-title">
                made
                <em>for you.</em>
              </div>

              <div class="preview-flower">
                ✿
              </div>

            </div>


            <div class="preview-details">

              <div class="preview-row">

                <span>
                  OCCASION
                </span>

                <strong>
                  {{ form.occasion || '—' }}
                </strong>

              </div>


              <div class="preview-row">

                <span>
                  FLOWER
                </span>

                <strong>
                  {{ form.flower || '—' }}
                </strong>

              </div>


              <div class="preview-row">

                <span>
                  COLOR
                </span>

                <strong>
                  {{ form.color || '—' }}
                </strong>

              </div>


              <div class="preview-row">

                <span>
                  BUDGET
                </span>

                <strong>
                  {{ selectedBudgetLabel }}
                </strong>

              </div>

            </div>


            <div class="preview-bottom">

              <span>
                EST. 2026
              </span>

              <span>
                FLOWERS & MOMENTS
              </span>

            </div>

          </div>


          <!-- SIDE NOTE -->
          <div class="preview-note">

            <span class="note-number">
              03
            </span>

            <p>
              Every custom arrangement starts
              with a conversation.
            </p>

          </div>

        </aside>

      </div>

    </section>


    <!-- =========================================
         BOTTOM MESSAGE
    ========================================== -->
    <section class="closing">

      <p class="closing-label">
        SOMETHING IN MIND?
      </p>

      <h2>
        let's make
        <em>something beautiful.</em>
      </h2>

      <button
        class="closing-button"
        @click="goHome"
      >
        BACK TO AVELUNE
        <span>↗</span>
      </button>

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
          CUSTOM FLOWERS
        </span>

      </div>

    </footer>

  </main>
</template>


<script setup>

import {
  reactive,
  computed
} from 'vue'


/* =========================================
   DATA
========================================= */

const occasions = [
  'Birthday',
  'Anniversary',
  'Graduation',
  'Thank You',
  'Just Because',
  'Other'
]


const flowers = [
  'Roses',
  'Tulips',
  "Baby's Breath",
  'Peonies',
  'Mixed Flowers',
  'Surprise Me'
]


const colors = [
  {
    name: 'Soft Pink',
    color: '#e8b8bd'
  },
  {
    name: 'Cream',
    color: '#f4e8df'
  },
  {
    name: 'Dusty Rose',
    color: '#c98f98'
  },
  {
    name: 'White',
    color: '#ffffff'
  },
  {
    name: 'Pastel',
    color: '#d8c8d0'
  },
  {
    name: 'Surprise Me',
    color: '#9e6870'
  }
]


const budgets = [
  {
    value: 'Little',
    label: 'Little',
    price: 'Rp 150K — 200K'
  },
  {
    value: 'Sweet',
    label: 'Sweet',
    price: 'Rp 200K — 300K'
  },
  {
    value: 'Special',
    label: 'Special',
    price: 'Rp 300K — 500K'
  },
  {
    value: 'Something More',
    label: 'Something More',
    price: 'Rp 500K+'
  }
]


/* =========================================
   FORM
========================================= */

const form = reactive({

  occasion: '',

  flower: '',

  color: '',

  budget: '',

  message: '',

  name: ''

})


/* =========================================
   SELECTED BUDGET
========================================= */

const selectedBudgetLabel = computed(() => {

  const selected = budgets.find(
    item => item.value === form.budget
  )

  return selected
    ? selected.price
    : '—'

})


/* =========================================
   SUBMIT TO WHATSAPP
========================================= */

function submitOrder() {

  const whatsappNumber =
    '6281234567890'


  const message = `
Hello Avelune! ♡

I'd like to make a custom flower order.

Name:
${form.name}

Occasion:
${form.occasion}

Flower:
${form.flower}

Color:
${form.color}

Budget:
${selectedBudgetLabel.value}

My story / request:
${form.message}

Thank you!
  `.trim()


  const url =
    `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`


  window.open(
    url,
    '_blank'
  )

}


/* =========================================
   NAVIGATION
========================================= */

function goHome() {

  window.location.href = '/'

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

.custom-page {

  --ivory: #fffaf7;
  --cream: #f8eee9;

  --soft-pink: #f3dfe1;
  --blush: #e8b8bd;

  --rose: #c98f98;
  --deep-rose: #a86f78;

  --brown: #6f5754;
  --dark: #423838;

  min-height: 100dvh;

  width: 100%;

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


button,
input,
textarea,
select {
  font: inherit;
}


/* =========================================
   HEADER
========================================= */

.header {

  min-height: 100px;

  width: 100%;

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

  border: none;

  background: transparent;

  padding: 8px 0;

  display: flex;

  align-items: center;

  gap: 9px;

  color:
    var(--brown);

  font-size: 8px;

  letter-spacing: 1.8px;

  cursor: pointer;

}


.back-arrow {

  font-size: 16px;

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

.custom-hero {

  width: 100%;

  max-width: 900px;

  margin: 0 auto;

  padding:
    clamp(65px, 9vw, 110px)
    20px
    clamp(50px, 7vw, 80px);

  text-align: center;

}


.eyebrow {

  margin: 0 0 20px;

  font-size: 8px;

  letter-spacing: 3px;

  color:
    var(--rose);

}


.custom-hero h1 {

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

  font-weight: 400;

  line-height: 0.8;

  color:
    var(--brown);

}


.custom-hero h1 em {

  display: block;

  color:
    var(--rose);

  font-weight: 400;

}


.hero-description {

  max-width: 500px;

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

  color:
    #806c68;

}


.hero-symbol {

  margin-top: 32px;

  font-family:
    'Cormorant Garamond',
    serif;

  font-size: 20px;

  color:
    var(--rose);

}


/* =========================================
   ORDER SECTION
========================================= */

.order-section {

  width: 100%;

  padding:
    0
    clamp(18px, 5vw, 70px)
    100px;

}


.order-layout {

  width: 100%;

  max-width: 1200px;

  margin: 0 auto;

  display: grid;

  grid-template-columns:
    minmax(0, 1.1fr)
    minmax(300px, 0.9fr);

  gap:
    clamp(
      40px,
      7vw,
      100px
    );

  align-items: start;

}


/* =========================================
   SECTION HEADING
========================================= */

.section-heading {

  display: flex;

  align-items: baseline;

  gap: 18px;

  padding-bottom:
    20px;

  margin-bottom:
    35px;

  border-bottom:
    1px solid
    rgba(
      111,
      87,
      84,
      0.13
    );

}


.section-heading span {

  font-size: 7px;

  letter-spacing: 2px;

  color:
    var(--rose);

}


.section-heading h2 {

  margin: 0;

  font-family:
    'Cormorant Garamond',
    serif;

  font-size:
    clamp(
      28px,
      4vw,
      40px
    );

  font-weight: 400;

  color:
    var(--brown);

}


/* =========================================
   FORM
========================================= */

.order-form {

  width: 100%;

}


.form-group {

  margin-bottom:
    32px;

}


.form-group > label {

  display: block;

  margin-bottom:
    12px;

  font-size: 7px;

  letter-spacing: 2px;

  color:
    var(--brown);

}


/* =========================================
   OPTION GRID
========================================= */

.option-grid {

  display: grid;

  grid-template-columns:
    repeat(
      3,
      minmax(0, 1fr)
    );

  gap: 8px;

}


.option {

  min-height: 43px;

  padding:
    8px;

  border:
    1px solid
    rgba(
      201,
      143,
      152,
      0.35
    );

  border-radius: 3px;

  background:
    rgba(
      255,
      250,
      247,
      0.6
    );

  color:
    var(--brown);

  font-size: 8px;

  cursor: pointer;

  transition:
    0.25s ease;

}


.option:hover {

  border-color:
    var(--rose);

}


.option.active {

  background:
    var(--rose);

  border-color:
    var(--rose);

  color: white;

}


/* =========================================
   SELECT
========================================= */

select,
input,
textarea {

  width: 100%;

  border:
    1px solid
    rgba(
      111,
      87,
      84,
      0.2
    );

  border-radius: 3px;

  background:
    rgba(
      255,
      250,
      247,
      0.7
    );

  color:
    var(--brown);

  outline: none;

  transition:
    border-color 0.25s ease,
    background 0.25s ease;

}


select {

  height: 50px;

  padding:
    0
    14px;

  appearance: auto;

  font-size: 10px;

}


input {

  height: 50px;

  padding:
    0
    14px;

  font-size: 10px;

}


textarea {

  min-height: 125px;

  padding:
    14px;

  resize: vertical;

  font-size: 10px;

  line-height: 1.7;

}


select:focus,
input:focus,
textarea:focus {

  border-color:
    var(--rose);

  background:
    #fffaf7;

}


input::placeholder,
textarea::placeholder {

  color:
    #a28e89;

}


/* =========================================
   COLOR GRID
========================================= */

.color-grid {

  display: grid;

  grid-template-columns:
    repeat(
      3,
      minmax(0, 1fr)
    );

  gap: 8px;

}


.color-option {

  min-height: 55px;

  padding:
    8px;

  display: flex;

  align-items: center;

  justify-content: center;

  gap: 7px;

  border:
    1px solid
    rgba(
      201,
      143,
      152,
      0.3
    );

  border-radius: 3px;

  background:
    rgba(
      255,
      250,
      247,
      0.6
    );

  color:
    var(--brown);

  font-size: 7px;

  cursor: pointer;

}


.color-option.active {

  border-color:
    var(--rose);

  background:
    rgba(
      243,
      223,
      225,
      0.65
    );

}


.color-circle {

  width: 18px;

  height: 18px;

  flex-shrink: 0;

  border-radius: 50%;

  border:
    1px solid
    rgba(
      111,
      87,
      84,
      0.15
    );

}


/* =========================================
   BUDGET
========================================= */

.budget-list {

  display: flex;

  flex-direction:
    column;

  gap: 8px;

}


.budget-option {

  width: 100%;

  min-height: 52px;

  padding:
    0
    15px;

  display: flex;

  align-items: center;

  justify-content: space-between;

  border:
    1px solid
    rgba(
      111,
      87,
      84,
      0.17
    );

  border-radius: 3px;

  background:
    rgba(
      255,
      250,
      247,
      0.6
    );

  color:
    var(--brown);

  cursor: pointer;

}


.budget-option span {

  font-family:
    'Cormorant Garamond',
    serif;

  font-size:
    17px;

}


.budget-option small {

  font-size:
    7px;

  letter-spacing:
    0.5px;

  color:
    #927b77;

}


.budget-option.active {

  border-color:
    var(--rose);

  background:
    var(--soft-pink);

}


.budget-option.active small {

  color:
    var(--deep-rose);

}


/* =========================================
   SUBMIT
========================================= */

.submit-button {

  width: 100%;

  min-height: 58px;

  margin-top: 8px;

  padding:
    0
    25px;

  display: flex;

  align-items: center;

  justify-content: space-between;

  border: none;

  border-radius: 3px;

  background:
    var(--rose);

  color: white;

  font-size: 9px;

  letter-spacing: 1.5px;

  cursor: pointer;

  transition:
    background 0.25s ease,
    transform 0.25s ease;

}


.submit-button:hover {

  background:
    var(--deep-rose);

  transform:
    translateY(-2px);

}


.submit-arrow {

  font-size: 20px;

}


.form-note {

  margin:
    13px
    0
    0;

  font-size: 7px;

  line-height: 1.6;

  text-align: center;

  color:
    #927b77;

}


/* =========================================
   PREVIEW
========================================= */

.preview-wrapper {

  position: sticky;

  top: 30px;

}


.preview-card {

  width: 100%;

  min-height: 560px;

  padding:
    25px;

  display: flex;

  flex-direction:
    column;

  justify-content:
    space-between;

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

}


.preview-top {

  display: flex;

  justify-content:
    space-between;

  font-size: 6px;

  letter-spacing:
    2px;

  color:
    var(--deep-rose);

}


.preview-center {

  text-align:
    center;

}


.preview-small {

  font-size: 7px;

  letter-spacing:
    2px;

  color:
    var(--deep-rose);

}


.preview-title {

  margin:
    18px
    0
    10px;

  font-family:
    'Cormorant Garamond',
    serif;

  font-size:
    clamp(
      40px,
      5vw,
      62px
    );

  line-height:
    0.78;

  color:
    var(--brown);

}


.preview-title em {

  display: block;

  color:
    var(--rose);

  font-weight: 400;

}


.preview-flower {

  margin-top:
    28px;

  font-family:
    'Cormorant Garamond',
    serif;

  font-size:
    65px;

  color:
    var(--rose);

}


/* =========================================
   PREVIEW DETAILS
========================================= */

.preview-details {

  padding:
    20px
    0;

  border-top:
    1px solid
    rgba(
     111,
      87,
      84,
      0.15
    );

  border-bottom:
    1px solid
    rgba(
      111,
      87,
      84,
      0.15
    );

}


.preview-row {

  min-height: 34px;

  display: flex;

  align-items: center;

  justify-content: space-between;

  gap: 15px;

}


.preview-row span {

  font-size: 6px;

  letter-spacing:
    1.5px;

  color:
    #927b77;

}


.preview-row strong {

  max-width: 60%;

  text-align: right;

  font-size: 8px;

  font-weight: 400;

  color:
    var(--brown);

}


.preview-bottom {

  display: flex;

  justify-content:
    space-between;

  font-size: 6px;

  letter-spacing:
    1.5px;

  color:
    #927b77;

}


/* =========================================
   PREVIEW NOTE
========================================= */

.preview-note {

  margin-top:
    18px;

  padding:
    16px;

  display: flex;

  gap: 14px;

  border-left:
    1px solid
    var(--rose);

}


.note-number {

  font-size: 7px;

  letter-spacing: 1px;

  color:
    var(--rose);

}


.preview-note p {

  margin: 0;

  font-family:
    'Cormorant Garamond',
    serif;

  font-size: 17px;

  line-height: 1.1;

  color:
    var(--brown);

}


/* =========================================
   CLOSING
========================================= */

.closing {

  padding:
    100px
    20px;

  text-align:
    center;

  background:
    var(--cream);

  border-top:
    1px solid
    rgba(
      201,
      143,
      152,
      0.18
    );

}


.closing-label {

  margin: 0;

  font-size: 7px;

  letter-spacing:
    2.5px;

  color:
    var(--rose);

}


.closing h2 {

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


.closing h2 em {

  display: block;

  color:
    var(--rose);

  font-weight:
    400;

}


.closing-button {

  min-height:
    48px;

  padding:
    0
    24px;

  display:
    inline-flex;

  align-items:
    center;

  gap: 25px;

  border:
    1px solid
    var(--rose);

  border-radius:
    30px;

  background:
    transparent;

  color:
    var(--deep-rose);

  font-size:
    8px;

  letter-spacing:
    1.5px;

  cursor:
    pointer;

}


.closing-button span {

  font-size:
    16px;

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
    900px;

  height: 1px;

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

  max-width:
    900px;

  margin:
    0
    auto;

  display:
    flex;

  justify-content:
    space-between;

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

    gap:
      6px;

  }


  .page-number {

    font-size:
      7px;

  }


  .custom-hero {

    padding:
      55px
      18px
      45px;

  }


  .eyebrow {

    font-size:
      6px;

    letter-spacing:
      2px;

  }


  .custom-hero h1 {

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


  .order-section {

    padding:
      0
      15px
      70px;

  }


  .order-layout {

    display:
      flex;

    flex-direction:
      column;

    gap:
      50px;

  }


  .form-wrapper {

    width:
      100%;

  }


  .section-heading {

    margin-bottom:
      28px;

  }


  .section-heading h2 {

    font-size:
      30px;

  }


  .option-grid {

    grid-template-columns:
      repeat(
        2,
        minmax(0, 1fr)
      );

  }


  .color-grid {

    grid-template-columns:
      repeat(
        2,
        minmax(0, 1fr)
      );

  }


  .preview-wrapper {

    position:
      static;

    width:
      100%;

  }


  .preview-card {

    min-height:
      500px;

    padding:
      20px;

  }


  .preview-title {

    font-size:
      50px;

  }


  .closing {

    padding:
      75px
      18px;

  }


  .closing h2 {

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

  .header {

    grid-template-columns:
      1fr
      auto
      1fr;

  }


  .brand-name {

    font-size:
      29px;

  }


  .brand-subtitle {

    font-size:
      4px;

    letter-spacing:
      1.5px;

  }


  .custom-hero {

    padding-top:
      45px;

  }


  .custom-hero h1 {

    font-size:
      3rem;

  }


  .hero-description {

    font-size:
      8.5px;

  }


  .section-heading {

    gap:
      12px;

  }


  .section-heading h2 {

    font-size:
      27px;

  }


  .form-group {

    margin-bottom:
      27px;

  }


  .option {

    min-height:
      42px;

    font-size:
      7px;

  }


  .color-option {

    font-size:
      6.5px;

  }


  .budget-option span {

    font-size:
      16px;

  }


  .budget-option small {

    font-size:
      6px;

  }


  .submit-button {

    min-height:
      54px;

    font-size:
      8px;

  }


  .preview-card {

    min-height:
      460px;

  }


  .preview-title {

    font-size:
      44px;

  }


  .preview-flower {

    font-size:
      55px;

  }


  .preview-row span {

    font-size:
      5.5px;

  }


  .preview-row strong {

    font-size:
      7px;

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


  .custom-hero h1 {

    font-size:
      2.7rem;

  }


  .custom-hero {

    padding-left:
      12px;

    padding-right:
      12px;

  }


  .order-section {

    padding-left:
      12px;

    padding-right:
      12px;

  }


  .option-grid {

    gap:
      6px;

  }


  .color-grid {

    gap:
      6px;

  }


  .option {

    font-size:
      6.5px;

  }


  .color-option {

    min-height:
      50px;

    font-size:
      6px;

  }


  .budget-option {

    padding:
      0
      11px;

  }


  .budget-option span {

    font-size:
      15px;

  }


  .budget-option small {

    font-size:
      5.5px;

  }


  .preview-card {

    min-height:
      430px;

    padding:
      16px;

  }


  .preview-title {

    font-size:
      40px;

  }


  .preview-flower {

    font-size:
      48px;

  }


  .closing h2 {

    font-size:
      2.8rem;

  }

}


/* =========================================
   DESKTOP
========================================= */

@media (min-width: 1024px) {

  .custom-hero {

    padding-top:
      95px;

  }


  .order-section {

    padding-bottom:
      120px;

  }


  .preview-card {

    min-height:
      600px;

  }

}

</style>