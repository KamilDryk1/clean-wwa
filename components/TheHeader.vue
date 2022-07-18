<template>
  <section class="header">
    <div class="header__container">
      <div class="header__content">
        <div v-if="video" class="header__content-video">
          <video class="vid" autoplay loop muted :src="video"></video>
          <div class="overlay"></div>
        </div>
        <div v-else class="header__content-img">
          <img class="img" :src="img" alt="" />
          <div class="overlay"></div>
        </div>
        <div class="header__content-text">
          <h1 class="title">CLEAN-WWA</h1>
          <h2 class="subtitle">
            Pranie tapicerki meblowej i samochodowej na terenie Warszawy i
            okolic.
          </h2>
          <p>Poznaj naszą ofertę!</p>
        </div>
      </div>
    </div>
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
      }

      @media (max-width: 1440px) {
        .overlay {
          background: rgba(0, 0, 0, 0.6);
        }
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
      }

      @media (max-width: 1440px) {
        .overlay {
          background: rgba(0, 0, 0, 0.6);
        }
      }
    }

    &-text {
      position: absolute;
      top: 25%;
      z-index: 4;
      margin: 0 4%;
      color: white;
      max-width: 65%;

      h1 {
        font-size: 64px;
      }

      h2 {
        font-weight: 400;
        font-size: 30px;
        margin-top: 30px;
      }

      p {
        font-weight: 200;
        margin-top: 30px;
        font-size: 20px;
      }
    }
  }
}
</style>
