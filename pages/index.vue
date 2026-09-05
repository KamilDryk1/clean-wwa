<template>
  <main class="index">
	<section class="description">
	  <div class="description__container">
		<div class="description__content">
		  <div class="description__content-text">
			<h2 v-reveal>Pranie tapicerki z dojazdem w Warszawie</h2>
			<p>
				Jesteśmy profesjonalną firmą zajmującą się praniem tapicerki meblowej, samochodowej, oraz wykładzin na terenie Warszawy i okolic. Posiadamy wieloletnie doświadczenie w przywracaniu pierwotnego stanu Państwa mebli. Dzięki naszej usłudze możesz usunąć głęboko osadzone plamy, sierść zwierząt domowych, nieprzyjemne zapachy i roztocza z mebli, oraz innych powierzchni. 
				Rezultat? Dogłębnie czyste meble i zdrowszy dom.
			</p>
			<p class="home-service-links">Poznaj <nuxt-link to="/uslugi/">nasze usługi</nuxt-link>, sprawdź <nuxt-link to="/cennik/">cennik prania tapicerki</nuxt-link> i <nuxt-link to="/gdzie-dzialamy/">obszar bezpłatnego dojazdu</nuxt-link>.</p>
			<div class="description__content-text-tel">
				<img src="/assets/img/tel-icon.png" alt="" width="30" height="30">
				<a href="tel:+48733740112">+48 733 740 112</a>
			</div>
		  </div>
		  <div v-reveal="100" class="description__content-photo">
			<OptimizedImage loading="eager"
			  src="/assets/img/HomePage/description-2.jpg"
			  alt="Pranie tapicerki meblowej"
			/>
		  </div>
		</div>
	  </div>
	</section>
	<section class="benefits">
		<div class="benefits__container">
			<div class="benefits__content">
				<h2 v-reveal>Co zyskujesz?</h2>
				<div class="benefits__content-list">
					<div v-reveal class="benefits__content-element">
						<div class="benefits__content-element-img">
							<OptimizedImage src="/assets/img/gwarancja-satysfakcji.png" alt="Gwarancja satysfakcji" />
						</div>
						<div class="benefits__content-element-text">
							<h3>Gwarancja jakości</h3>
							<p>Do każdej usługi otrzymują Państwo 3-dniową gwarancję, jeżeli efekt będzie inny od ustalonego zwrócimy do 100% ceny usługi.</p>
						</div>
					</div>
					<div v-reveal class="benefits__content-element">
						<div class="benefits__content-element-img">
							<OptimizedImage src="/assets/img/doswiadczenie.png" alt="Doświadczenie" />
						</div>
						<div class="benefits__content-element-text">
							<h3>Doświadczenie</h3>
							<p>5 lat doświadczenia w praniu tapicerki meblowej, oraz wykładzin. 1000 zadowolonych klientów. 4000 upranych mebli i wykładzin.</p>
						</div>
					</div>
					<div v-reveal class="benefits__content-element">
						<div class="benefits__content-element-img">
							<OptimizedImage src="/assets/img/bezpieczne-platnosci.png" alt="Bezpieczne płatności" />
						</div>
						<div class="benefits__content-element-text">
							<h3>Bezpieczne płatności</h3>
							<p>Świadczymy usługi na rzecz osób prywatnych oraz przedsiębiorców - u nas dostaniesz fakturę na swoją firmę.</p>
						</div>
					</div>
					<div v-reveal class="benefits__content-element">
						<div class="benefits__content-element-img">
							<OptimizedImage src="/assets/img/terminowosc.png" alt="Ekspresowy termin" />
						</div>
						<div class="benefits__content-element-text">
							<h3>Ekspresowy termin</h3>
							<p>Gwarantujemy ekspresowy termin wykonania usługi w większości przypadków nawet na jutro!</p>
						</div>
					</div>
					<div v-reveal class="benefits__content-element">
						<div class="benefits__content-element-img">
							<OptimizedImage src="/assets/img/dojazd-gratis.png" alt="Dojazd gratis" />
						</div>
						<div class="benefits__content-element-text">
							<h3>Dojazd gratis</h3>
							<p>{{ travelPolicy }}</p>
						</div>
					</div>
					<div v-reveal class="benefits__content-element">
						<div class="benefits__content-element-img">
							<OptimizedImage src="/assets/img/profesjonalny-sprzet.png" alt="Profesjonalny sprzęt" />
						</div>
						<div class="benefits__content-element-text">
							<h3>Profesjonalny sprzęt</h3>
							<p>Działamy jedynie na profesjonalnym sprzęcie wiodących marek, oraz najskuteczniejszych detergentach dostępnych na rynku, które są w stanie uporać się z silnymi zabrudzeniami.</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	</section>
	<section class="carousel">
	  <div class="carousel__container">
		<div class="carousel__content">
		  <h2 v-reveal>Efekty naszej pracy</h2>
		  <ContentCarousel label="Efekty naszej pracy">
            <div v-for="(photo, index) in projects" :key="photo" class="swiper__slide-visual">
              <OptimizedImage :src="photo" :alt="`Efekty prania tapicerki – realizacja CLEANWWA ${index + 1}`" sizes="(max-width: 599px) 80vw, (max-width: 999px) 42vw, 355px" class="swiper__element-img" />
            </div>
          </ContentCarousel>
          <nuxt-link class="content-link" to="/galeria/">Zobacz wszystkie realizacje przed i po →</nuxt-link>
		</div>
	  </div>
	</section>
	<Opinions />
	<section class="contact">
		<div class="contact__container">
			<div class="contact__content">
				<div class="home-contact-copy"><h2 v-reveal>Przywróć świeżość swoim meblom</h2><p>Opisz, co chcesz wyczyścić, i podaj dogodny termin. Skontaktujemy się z Tobą w sprawie wyceny.</p><a class="content-link" href="tel:+48733740112">Wolisz zadzwonić? 733 740 112 →</a></div>
                <ContactForm id-prefix="home-contact" />
			</div>
		</div>
	</section>
  </main>
</template>

<script>
import { travelPolicy } from "~/data/site";

import ContactForm from "~/components/ContactForm";

export default {
  name: "IndexPage",



  components: { ContactForm },

  data() {
	return {
	  travelPolicy,
	  projects: ['/assets/img/HomePage/carousel-photo-1.jpg', '/assets/img/HomePage/carousel-photo-8.jpg', '/assets/img/HomePage/carousel-photo-3.jpg', '/assets/img/HomePage/carousel-photo-7.jpg', '/assets/img/HomePage/carousel-photo-5.jpg', '/assets/img/HomePage/carousel-photo-6.jpg', '/assets/img/HomePage/carousel-photo-4.jpg', '/assets/img/HomePage/carousel-photo-2.jpg'],
	};
  }
};
</script>

<style lang="scss" scoped>
.description__container, .benefits__container, .carousel__container, .contact__container { max-width: 1280px; padding: var(--section-space) 6%; margin: auto; }
.description__content { display: grid; grid-template-columns: 1fr 1fr; gap: 48px; align-items: center; }
.home-service-links { margin-top: 20px; }
.home-service-links a { color: var(--brand); text-underline-offset: 3px; }
.description__content-text p { line-height: 1.65; }
.description__content-text-tel { display: flex; align-items: center; gap: 12px; margin-top: 24px; }
.description__content-text-tel img { width: 36px; }
.description__content-text-tel a { color: var(--brand); font-size: 26px; font-weight: 700; text-decoration: none; }
.description__content-photo img { display: block; width: 100%; max-height: 450px; object-fit: cover; border-radius: 12px; }
.benefits { background: var(--surface); }
.benefits__content-list { display: grid; grid-template-columns: repeat(3, minmax(0, 1fr)); gap: 22px; }
.benefits__content-element { background: #fff; padding: 26px; border: 1px solid var(--line); border-top: 3px solid #03989e; border-radius: 8px; }
.benefits__content-element-img { margin-bottom: 22px; }
.benefits__content-element-img img { width: 56px; height: 56px; object-fit: contain; display: block; }
.benefits__content-element-text p { color: #454545; font-size: 18px; }
.carousel__content h2 { margin-bottom: 28px; }
.swiper__slide-visual { aspect-ratio: 1; border-radius: 12px; overflow: hidden; border: 1px solid var(--line); }
.swiper__element-img { display: block; width: 100%; height: 100%; object-fit: cover; }
.contact { background: var(--surface); }
.contact__content { display: grid; grid-template-columns: 1fr 1.15fr; gap: 48px; align-items: start; }
.home-contact-copy { padding-top: 20px; }
.home-contact-copy a { display: inline-block; margin-top: 24px; }
@media (max-width: 900px) { .benefits__content-list { grid-template-columns: 1fr 1fr; } .description__content, .contact__content { grid-template-columns: 1fr; gap: 32px; } }
@media (max-width: 540px) { .benefits__content-list { grid-template-columns: 1fr; } .benefits__content-element { padding: 24px; } .home-contact-copy { padding: 0; } }
</style>
