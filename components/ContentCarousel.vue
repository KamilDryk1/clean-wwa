<template>
  <div class="content-carousel" role="region" :aria-label="label">
    <div ref="track" class="content-carousel__track" tabindex="0" :aria-label="`${label} – przewijaj poziomo`"><slot /></div>
    <div class="content-carousel__controls"><button type="button" :aria-label="`${label} – poprzednie`" @click="move(-1)">←</button><button type="button" :aria-label="`${label} – następne`" @click="move(1)">→</button></div>
  </div>
</template>
<script>
export default {
  props: { label: { type: String, required: true } },
  methods: {
    move(direction) {
      const track = this.$refs.track;
      const first = track.firstElementChild;
      if (first) track.scrollBy({ left: direction * (first.getBoundingClientRect().width + 26), behavior: window.matchMedia('(prefers-reduced-motion: reduce)').matches ? 'auto' : 'smooth' });
    },
  },
};
</script>
<style lang="scss" scoped>
.content-carousel__track { display: flex; align-items: stretch; gap: 26px; overflow-x: auto; scroll-snap-type: x mandatory; scrollbar-width: thin; padding: 4px 0 16px; }
.content-carousel__track ::v-deep > * { flex: 0 0 calc((100% - 52px) / 3); min-width: 0; scroll-snap-align: start; }
.content-carousel__controls { display: flex; justify-content: flex-end; gap: 10px; margin-top: 14px; }
.content-carousel__controls button { width: 44px; height: 44px; border: 1px solid currentColor; border-radius: 50%; background: transparent; color: inherit; cursor: pointer; font-size: 24px; line-height: 1; }
.content-carousel__controls button:hover { background: var(--brand); color: #fff; border-color: var(--brand); }
@media (max-width: 999px) { .content-carousel__track ::v-deep > * { flex-basis: calc((100% - 26px) / 2); } }
@media (max-width: 599px) { .content-carousel__track ::v-deep > * { flex-basis: 90%; } }
</style>
