<template>
  <main class="content-wrap content-section gallery-page">
    <h2 v-reveal>Nasze realizacje</h2>
    <p class="section-lead">Zobacz, jak zmieniają się meble i wnętrza po profesjonalnym czyszczeniu.</p>
    <ul class="gallery-grid">
      <li v-reveal v-for="(item, index) in galleryContent" :key="item.src">
        <figure><OptimizedImage :src="item.src" sizes="(max-width: 580px) 88vw, 550px" :alt="item.alt" loading="lazy" /><figcaption><span>Realizacja {{ String(index + 1).padStart(2, '0') }}</span><span>CLEANWWA</span></figcaption></figure>
      </li>
    </ul>
  </main>
</template>

<script>
import { gallery } from "~/data/gallery";
export default {
  layout: "gallery",

  data() {
    return {
      galleryContent: gallery,
    };
  },
};
</script>

<style lang="scss" scoped>
.gallery-grid { columns: 2; column-gap: 26px; list-style: none; }
.gallery-grid li { break-inside: avoid; margin-bottom: 26px; border: 1px solid var(--line); border-radius: 12px; overflow: hidden; background: var(--surface); }
.gallery-grid img { display: block; width: 100%; height: auto; }
.gallery-grid figcaption { display: flex; justify-content: space-between; gap: 12px; padding: 14px 20px; font-size: 17px; color: var(--muted); }
.gallery-grid figcaption span:last-child { color: var(--brand); font-weight: 700; font-size: 15px; letter-spacing: 1px; }
@media (max-width: 580px) { .gallery-grid { columns: 1; } }
</style>
