<template>
  <section class="header">
    <div class="header__container">
      <div class="header__content">
        <div v-if="video" class="header__content-video">
          <video class="vid" autoplay loop muted :src="video"></video>
        </div>
        <div v-else class="header__content-img">
          <img class="img" :src="img" alt="" />
        </div>
        <div class="header__content-text">
          <!-- <h1 class="title">CLEAN-WWA</h1> -->
          <h2 class="subtitle">
            Pranie tapicerki meblowej i samochodowej na terenie Warszawy i
            okolic.
          </h2>
          <p>Poznaj naszą ofertę!</p>
        </div>
      </div>
    </div>
    <div class="overlay"></div>
  </section>
</template>

<script>
export default {
  props: ["video", "img"],
  data() {
    return {};
  },
};
</script>

<style lang="scss" scoped>
.header {
  width: 100%;
  position: relative;
  top: 0;
  left: 0;
  background-color: black;
  z-index: 1;

  .overlay {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 700px;
    background: linear-gradient(
      to right,
      black 0% 1%,
      rgba(0, 0, 0, 0.3),
      black 99% 100%
    );
    z-index: 3;
    animation: fadeIn 0.7s ease-in-out forwards;
  }

  @media (max-width: 1440px) {
    .overlay {
      background: rgba(0, 0, 0, 0.4);
    }
  }

  &__container {
    max-width: 1920px;
    width: 100%;
    margin: 0 auto;
  }

  &__content {
    height: 700px;
    max-width: 1440px;
    margin: 0 auto;

    &-video {
      position: relative;
      top: 0;
      left: 0;
      width: 100%;
      height: 700px;

      .vid {
        position: fixed;
        top: 0;
        left: 0;
        height: 700px;
        width: 100%;
        z-index: 1;
        object-fit: cover;
      }
    }

    &-img {
      position: relative;
      top: 0;
      left: 0;
      width: 100%;
      height: 700px;

      .img {
        position: fixed;
        top: 0;
        left: 0;
        height: 700px;
        width: 100%;
        z-index: 1;
        object-fit: cover;
      }

      @media (max-width: 1440px) {
        .overlay {
          background: rgba(0, 0, 0, 0.6);
        }
      }
    }

    &-text {
      position: absolute;
      top: 35%;
      left: 50%;
      transform: translateX(-50%);
      z-index: 4;
      // margin: 0 4%;
      color: white;

      h1 {
        font-size: 64px;
      }

      h2 {
        font-weight: 700;
        font-size: 38px;
        margin-top: 30px;
        text-align: center;
      }

      p {
        font-weight: 200;
        margin-top: 30px;
        font-size: 26px;
        text-align: center;
      }
    }

    @media (max-width: 700px) {
      &-text {
        top: 20%;
      }
    }

    @media (max-width: 500px) {
      &-text {
        top: 15%;
      }
    }
  }
}
@keyframes fadeIn {
  from {
    backdrop-filter: brightness(13%);
  }
  to {
    backdrop-filter: brightness(70%);
  }
}
</style>
