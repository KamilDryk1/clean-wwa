<template>
  <img :src="asset ? asset.src : src" :srcset="asset ? asset.srcset : null" :sizes="asset ? sizes : null" :width="asset ? asset.width : null" :height="asset ? asset.height : null" :alt="alt" :loading="loading" decoding="async" />
</template>

<script>
import images from '~/data/images.json';
export default {
  props: { src: { type: String, required: true }, alt: { type: String, required: true }, sizes: { type: String, default: '(max-width: 750px) 88vw, 550px' }, loading: { type: String, default: 'lazy' } },
  computed: { asset() { return images[this.src]; } },
};
</script>
