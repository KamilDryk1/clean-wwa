<template>
  <PageIntro :image="img" :video="video" eyebrow="CLEANWWA" :title="title" :description="subtitle">
    <div v-if="tel || mail" class="contact-actions">
      <a v-if="tel" class="content-button" :href="tel">Zamów z rabatem −10%</a>
      <button v-if="mail" class="content-button content-button--outline" @click="$emit('openForm')">Napisz do nas</button>
    </div>
  </PageIntro>
</template>

<script>
// Compatibility wrapper: all headers use the same PageIntro presentation.
export default { props: ['video', 'img', 'title', 'subtitle', 'tel', 'mail'] };
</script>
