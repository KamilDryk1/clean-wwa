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
    width: 100%;

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
        background-color: rgba(0, 0, 0, 0.5);
        z-index: 3;
      }
    }
  }
}
</style>
