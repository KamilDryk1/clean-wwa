<template>
  <div>
    <section class="header">
      <div class="header__container">
        <div class="header__content">
          <div class="header__content-video">
            <video
              class="vid"
              autoplay
              loop
              muted
              src="assets/video/HomePage/background-video.mp4"
            ></video>
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
    <section class="description">
      <div class="description__container">
        <div class="description__content">
          <div class="description__content-text"></div>
          <div class="description__content-photo">
            <img
              src="assets/img/HomePage/description-img.jpg"
              alt="Pranie tapicerki bagażnika"
            />
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: "IndexPage",
};
</script>

<style lang="scss" scoped>
.header {
  width: 100%;
  position: relative;
  top: 0;
  left: 0;
  background-color: black;

  &__container {
    max-width: 1440px;
    width: 100%;
    margin: 0 auto;
  }

  &__content {
    height: 700px;
    margin: 0 8%;

    &-video {
      position: relative;
      top: 0;
      left: 0;
      width: 100%;
      height: 700px;

      .vid {
        position: absolute;
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
          black 0% 3%,
          rgba(0, 0, 0, 0.4),
          black 97% 100%
        );
        z-index: 3;
      }
    }

    &-text {
      position: absolute;
      top: 25%;
      z-index: 4;
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

.description {
  height: 500px;

  &__container {
    max-width: 1440px;
    margin: 0 auto;
  }

  &__content {
    margin: 0 8%;
    display: flex;
    justify-content: space-around;
    padding-top: 150px;

    &-text {
      width: 40%;
    }

    &-photo {
      width: 40%;

      img {
        width: 100%;
      }
    }
  }
}
</style>
