<script setup lang="ts">
import Navbar from '../components/Navbar.vue'
</script>

<template>
  <div class="home">
    <Navbar />
    <section class="font-mono">
      <div class="font-text container">
        <h4>Record the good moment in my life </h4>
        <hr />
        <h2>
          Yaki's <br />
          Gallery
        </h2>
        <hr />
      </div>
    </section>
  </div>
</template>

<style lang="scss" scoped>
.font-mono {
  background-image: url("../assets/bg.png");
  background-attachment: fixed;
  position: relative;
  height: 100vh;
  background-size: cover;
  -webkit-background-size: cover;
  -o-background-size: cover;

  img {
    object-fit: cover;
    height: 100%;
    width: 100%;
  }

  .font-text {
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    color: #fff;

    h4 {
      text-transform: uppercase;
      font-size: 22px;
      padding-bottom: 4px;
    }

    h2 {
      font-size: 50px;

      @media (min-width: 550px) {
        font-size: 80px;
      }
    }

    hr:nth-child(2) {
      max-width: 365px;
      margin-bottom: 16px;
    }

    hr:nth-child(4) {
      height: 6px;
      background-color: #fff;
      border: none;
      max-width: 85px;
      margin-top: 16px;
    }
  }
}
</style>
