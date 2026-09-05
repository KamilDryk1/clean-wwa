<template>
  <header class="page-intro">
    <OptimizedImage v-if="image" class="page-intro__image" :src="image" alt="" loading="eager" sizes="100vw" fetchpriority="high" />
    <video v-if="playVideo" class="page-intro__video" :src="video" autoplay loop muted playsinline aria-hidden="true" tabindex="-1"></video>
    <div class="content-wrap page-intro__content">
      <nav v-if="breadcrumb" class="breadcrumbs" aria-label="Ścieżka nawigacji"><ol><li><nuxt-link to="/">Strona główna</nuxt-link></li><li aria-current="page">{{ breadcrumb }}</li></ol></nav>
      <p v-reveal class="page-intro__eyebrow">{{ eyebrow }}</p>
      <h1>{{ title }}</h1>
      <p class="page-intro__lead">{{ description }}</p>
      <slot />
    </div>
  </header>
</template>

<script>
import { pageLabels, normalizePath } from '~/data/site';
import images from '~/data/images.json';
export default {
  props: { image: String, video: String, eyebrow: String, title: String, description: String },
  data() { return { playVideo: false }; },
  computed: { breadcrumb() { const path = normalizePath(this.$route.path); return path === '/' ? '' : pageLabels[path]; } },
  head() {
    const asset = images[this.image];
    return { link: asset ? [{ hid: 'hero-preload', rel: 'preload', as: 'image', href: asset.src, imagesrcset: asset.srcset, imagesizes: '100vw', fetchpriority: 'high' }] : [] };
  },
  mounted() {
    if (!this.video) return;
    this.motionQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    this.screenQuery = window.matchMedia('(min-width: 768px)');
    this.updateVideo = () => { this.playVideo = !this.motionQuery.matches && this.screenQuery.matches && !(navigator.connection && navigator.connection.saveData); };
    this.startVideo = () => {
      this.videoTimer = window.setTimeout(() => {
        this.updateVideo();
        this.motionQuery.addEventListener('change', this.updateVideo);
        this.screenQuery.addEventListener('change', this.updateVideo);
      }, 1200);
    };
    if (document.readyState === 'complete') this.startVideo();
    else window.addEventListener('load', this.startVideo, { once: true });
  },
  beforeDestroy() {
    window.clearTimeout(this.videoTimer);
    if (this.startVideo) window.removeEventListener('load', this.startVideo);
    if (this.motionQuery) this.motionQuery.removeEventListener('change', this.updateVideo);
    if (this.screenQuery) this.screenQuery.removeEventListener('change', this.updateVideo);
  },
};
</script>
