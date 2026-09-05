<template>
  <div class="site-navigation">
    <nav class="navbar" aria-label="Menu główne">
      <div class="navbar__inner">
        <nuxt-link to="/" class="navbar__logo" aria-label="CLEANWWA – strona główna" @click.native="closeMenu">
          <img src="/assets/img/logo-sm-alt.png" alt="" width="58" height="66" />
          <span>CLEAN-WWA</span>
        </nuxt-link>
        <button v-if="menuOpen" class="navbar__backdrop" tabindex="-1" aria-label="Zamknij menu" @click="closeMenuAndFocus"></button>
        <div id="main-menu" ref="menu" class="navbar__panel" :class="{ 'is-open': menuOpen }">
          <p class="navbar__menu-label">Poznaj CLEANWWA</p>
          <ul class="navbar__links">
            <li v-for="link in links" :key="link.to" :class="{ 'navbar__home': link.to === '/' }">
              <nuxt-link :to="link.to" exact @click.native="closeMenu"><span>{{ link.label }}</span><span class="navbar__arrow" aria-hidden="true">↗</span></nuxt-link>
            </li>
          </ul>
          <div class="navbar__menu-contact">
            <span>Masz pytanie? Napisz do nas</span>
            <a href="mailto:cleanwwa@gmail.com">cleanwwa@gmail.com <span aria-hidden="true">↗</span></a>
          </div>
        </div>
        <a class="navbar__phone" href="tel:+48733740112">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" aria-hidden="true"><path d="M7 3H4a1 1 0 0 0-1 1c0 9.4 7.6 17 17 17a1 1 0 0 0 1-1v-3l-5-2-2 2a14 14 0 0 1-7-7l2-2-2-5Z" /></svg>
          <span><span class="navbar__call-label">Zadzwoń: </span><strong>733 740 112</strong><small>Codziennie 7:00–23:00</small></span>
        </a>
        <button ref="menuToggle" class="navbar__toggle" :class="{ 'is-open': menuOpen }" type="button" :aria-expanded="String(menuOpen)" aria-controls="main-menu" :aria-label="menuOpen ? 'Zamknij menu' : 'Otwórz menu'" @click="toggleMenu">
          <span class="navbar__hamburger" aria-hidden="true"><i></i><i></i><i></i></span>
        </button>
      </div>
    </nav>
  </div>
</template>

<script>
export default {
  data() {
    return {
      menuOpen: false,
      links: [
        { to: '/', label: 'Strona główna' },
        { to: '/cennik/', label: 'Cennik' },
        { to: '/galeria/', label: 'Galeria' },
        { to: '/uslugi/', label: 'Usługi' },
        { to: '/dla-firm/', label: 'Dla firm' },
        { to: '/gdzie-dzialamy/', label: 'Gdzie działamy' },
        { to: '/pytania-klientow/', label: 'Pytania klientów' },
        { to: '/kontakt/', label: 'Kontakt' },
      ],
    };
  },
  watch: {
    '$route.path'() { this.closeMenu(); },
    menuOpen(open) {
      document.documentElement.classList.toggle('navigation-open', open);
      if (open) this.$nextTick(() => this.$refs.menu.querySelector('a').focus());
    },
  },
  mounted() { window.addEventListener('resize', this.onResize); document.addEventListener('keydown', this.onKeydown); },
  beforeDestroy() {
    window.removeEventListener('resize', this.onResize);
    document.removeEventListener('keydown', this.onKeydown);
    document.documentElement.classList.remove('navigation-open');
  },
  methods: {
    toggleMenu() { this.menuOpen ? this.closeMenuAndFocus() : this.menuOpen = true; },
    closeMenu() { this.menuOpen = false; },
    closeMenuAndFocus() { this.closeMenu(); this.$refs.menuToggle.focus(); },
    onResize() { if (window.innerWidth > 1250) this.closeMenu(); },
    onKeydown(event) {
      if (!this.menuOpen) return;
      if (event.key === 'Escape') { event.preventDefault(); this.closeMenuAndFocus(); }
      if (event.key !== 'Tab') return;
      const items = [...this.$el.querySelectorAll('a, button:not([tabindex="-1"])')].filter(el => el.getClientRects().length);
      const first = items[0], last = items[items.length - 1];
      if (event.shiftKey && document.activeElement === first) { event.preventDefault(); last.focus(); }
      else if (!event.shiftKey && document.activeElement === last) { event.preventDefault(); first.focus(); }
    },
  },
};
</script>

<style lang="scss" scoped>
.site-navigation { position: sticky; top: 0; z-index: 100; }
.navbar { background: #212121; color: #fff; border-bottom: 1px solid #ffffff12; }
.navbar__inner { max-width: 1440px; height: var(--nav-height); margin: auto; padding: 0 4%; display: flex; gap: 24px; align-items: center; justify-content: space-between; }
.navbar__logo { display: flex; align-items: center; gap: 10px; color: #fff; text-decoration: none; flex-shrink: 0; font-size: 28px; font-weight: 700; }
.navbar__logo img { object-fit: contain; }
.navbar__links { display: flex; align-items: center; gap: 20px; list-style: none; }
.navbar__links a { display: block; padding: 12px 0; color: #e9eeee; text-decoration: none; font-size: 20px; white-space: nowrap; border-bottom: 2px solid transparent; transition: color .18s, border-color .18s; }
.navbar__links a:hover, .navbar__links .nuxt-link-exact-active { color: #75e5e8; border-color: #75e5e8; }
.navbar__phone { display: flex; gap: 10px; align-items: center; padding: 10px 17px; border-radius: 30px; background: #037b80; color: #fff; text-align: left; text-decoration: none; flex-shrink: 0; line-height: 1.2; font-size: 20px; }
.navbar__phone svg { width: 21px; height: 21px; }
.navbar__phone small { display: block; font-size: 14px; margin-top: 4px; }
.navbar__phone:hover { background: #025f63; }
.navbar__toggle, .navbar__menu-label, .navbar__menu-contact, .navbar__arrow, .navbar__home, .navbar__backdrop { display: none; }
a:focus-visible, button:focus-visible { outline: 3px solid #75e5e8; outline-offset: 4px; }
@media (max-width: 1250px) {
  .navbar__inner { gap: 16px; }
  .navbar__phone { margin-left: auto; }
  .navbar__toggle { display: grid; place-items: center; background: #ffffff08; border: 1px solid #ffffff40; color: white; border-radius: 12px; width: 48px; height: 48px; flex: none; cursor: pointer; }
  .navbar__hamburger { width: 21px; display: grid; gap: 5px; }
  .navbar__hamburger i { display: block; height: 2px; background: currentColor; border-radius: 2px; transition: transform .2s, opacity .2s; }
  .navbar__toggle.is-open { background: #037b80; border-color: #037b80; }
  .navbar__toggle.is-open i:first-child { transform: translateY(7px) rotate(45deg); }
  .navbar__toggle.is-open i:nth-child(2) { opacity: 0; }
  .navbar__toggle.is-open i:last-child { transform: translateY(-7px) rotate(-45deg); }
  .navbar__backdrop { display: block; position: fixed; inset: var(--nav-height) 0 0; background: #10222380; border: 0; backdrop-filter: blur(4px); cursor: default; }
  .navbar__panel { display: none; position: absolute; top: calc(100% + 10px); right: 4%; width: min(440px, 92%); max-height: calc(100dvh - var(--nav-height) - 24px); overflow-y: auto; overscroll-behavior: contain; border: 1px solid #d4e3e3; border-radius: 16px; padding: 24px; background: #fff; color: #212121; box-shadow: 0 18px 60px #10222335; }
  .navbar__panel.is-open { display: block; animation: menu-enter .18s ease-out; }
  .navbar__menu-label { display: block; color: #607575; font-size: 14px; text-transform: uppercase; letter-spacing: 2px; font-weight: 700; margin: 0 12px 12px; }
  .navbar__links { display: grid; gap: 4px; }
  .navbar__links li, .navbar__arrow { display: block; }
  .navbar__links a { display: flex; align-items: center; justify-content: space-between; gap: 16px; padding: 10px 14px; border: 0; border-radius: 8px; color: #212121; font-size: 22px; min-height: 46px; }
  .navbar__arrow { color: #879b9b; font-size: 20px; }
  .navbar__links a:hover, .navbar__links .nuxt-link-exact-active { color: #02686d; background: #edf7f7; }
  .navbar__links .nuxt-link-exact-active .navbar__arrow { color: #037b80; }
  .navbar__menu-contact { display: grid; gap: 4px; margin: 20px 12px 0; padding-top: 18px; border-top: 1px solid #d4e3e3; font-size: 16px; color: #607575; }
  .navbar__menu-contact a { color: #037b80; font-size: 20px; text-decoration: none; }
}
@media (max-width: 540px) {
  .navbar__inner { gap: 12px; }
  .navbar__logo span { display: none; }
  .navbar__logo img { width: 46px; height: 54px; }
  .navbar__phone { padding: 9px 14px; font-size: 19px; }
  .navbar__phone svg, .navbar__call-label { display: none; }
  .navbar__panel { padding: 18px 14px; }
}
@media (prefers-reduced-motion: reduce) { .navbar__panel.is-open { animation: none; } .navbar__hamburger i { transition: none; } }
@keyframes menu-enter { from { opacity: 0; transform: translateY(-6px); } to { opacity: 1; transform: translateY(0); } }
</style>
