<template>
  <footer class="footer" id="footer">
    <div class="content-wrap">
      <div class="footer__grid">
        <div class="footer__brand">
          <nuxt-link class="footer__logo" to="/"><img src="/assets/img/logo-sm-alt.png" alt="" width="54" height="60" /><span>CLEAN-WWA</span></nuxt-link>
          <p>Pranie tapicerki i wykładzin.<br />Warszawa i okolice, z dojazdem do klienta.</p>
        </div>
        <div class="footer__contact">
          <h2>Porozmawiajmy</h2>
          <a class="footer__phone" href="tel:+48733740112">733 740 112</a>
          <p>Codziennie 7:00–23:00</p>
          <a href="mailto:cleanwwa@gmail.com">cleanwwa@gmail.com</a>
          <p class="footer__address">ul. Kasprzaka 29c<br />01-234 Warszawa</p>
        </div>
        <nav class="footer__links" aria-label="Na skróty">
          <h2>Na skróty</h2>
          <nuxt-link to="/uslugi/">Nasze usługi</nuxt-link>
          <nuxt-link to="/cennik/">Cennik</nuxt-link>
          <nuxt-link to="/dla-firm/">Dla firm</nuxt-link>
          <nuxt-link to="/gdzie-dzialamy/">Gdzie działamy</nuxt-link>
          <nuxt-link to="/pytania-klientow/">Pytania klientów</nuxt-link>
        </nav>
        <div class="footer__links">
          <h2>Nasze realizacje</h2>
          <a href="https://www.facebook.com/CleanWwa" target="_blank" rel="noopener noreferrer">Facebook ↗</a>
          <a href="https://www.instagram.com/pranie_tapicerki_cleanwwa/" target="_blank" rel="noopener noreferrer">Instagram ↗</a>
          <a href="https://www.tiktok.com/@cleanwwa" target="_blank" rel="noopener noreferrer">TikTok ↗</a>
          <a href="https://www.youtube.com/@Cleanwwa-pranietapicerki/shorts" target="_blank" rel="noopener noreferrer">YouTube Shorts ↗</a>
        </div>
      </div>
      <div class="footer__bottom">
        <span>© CLEANWWA</span>
        <div><a href="https://drive.proton.me/urls/K5J2WAJC84#tkmTmLmTWivf" target="_blank" rel="noopener noreferrer">Polityka prywatności</a><nuxt-link to="/kontakt/#regulamin">Regulamin</nuxt-link></div>
      </div>
    </div>
  </footer>
</template>

<style lang="scss" scoped>
.footer { background: #212121; color: #d7e4e4; border-top: 3px solid #037b80; font-size: 18px; }
.footer__grid { display: grid; grid-template-columns: 1.4fr 1.2fr 1fr 1fr; gap: 40px; padding: 56px 0 44px; }
.footer h2 { color: #fff; font-size: 22px; margin: 0 0 20px; line-height: 1.3; }
.footer a { color: inherit; text-decoration: none; }
.footer a:hover { color: #75e5e8; }
.footer a:focus-visible { outline-color: #75e5e8; }
.footer__logo { display: flex; align-items: center; gap: 12px; margin-bottom: 20px; }
.footer__logo img { object-fit: contain; }
.footer__logo span { color: #fff; font-size: 27px; font-weight: 700; }
.footer__brand p { color: #a9bebe; font-size: 17px; }
.footer__phone { color: #75e5e8 !important; font-size: 28px; font-weight: 700; }
.footer__contact > p { color: #a9bebe; font-size: 16px; margin-bottom: 14px; }
.footer__contact .footer__address { margin-top: 16px; margin-bottom: 0; }
.footer__links { display: flex; flex-direction: column; align-items: start; gap: 10px; }
.footer__links h2 { margin-bottom: 10px; }
.footer__bottom { display: flex; justify-content: space-between; gap: 24px; padding: 22px 0; border-top: 1px solid #ffffff20; font-size: 16px; color: #a9bebe; }
.footer__bottom div { display: flex; flex-wrap: wrap; gap: 24px; }
@media (max-width: 1050px) { .footer__grid { grid-template-columns: 1fr 1fr; gap: 36px; } }
@media (max-width: 540px) { .footer__grid { gap: 32px 20px; padding-top: 40px; } .footer__brand, .footer__contact { grid-column: 1 / -1; } .footer__bottom { flex-direction: column; gap: 12px; } }
</style>
