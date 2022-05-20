<template>
  <section class="price">
    <div class="price__container">
      <div class="price__content"></div>
    </div>
  </section>
</template>

<script></script>

<style lang="scss" scoped>
.price {
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
