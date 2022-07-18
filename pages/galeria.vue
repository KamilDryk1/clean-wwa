<template>
  <section class="gallery">
    <div class="gallery__container">
      <div class="gallery__content"></div>
    </div>
  </section>
</template>

<script>
export default {
  layout: "gallery",
};
</script>

<style lang="scss" scoped>
.gallery {
	position: relative;
	z-index: 15;
	background-color: #fff;

  &__container {
    max-width: 1440px;
    margin: 0 auto;
  }

  &__content {
    height: 400px;
    margin: 0 4%;
    padding: 0 4%;
    position: relative;
    background-color: #fff;
    // transform: translateY(-100px);
    z-index: 5;
  }
}
</style>
