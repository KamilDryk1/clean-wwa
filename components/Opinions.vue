<template>
	<section class="opinions">
	  <div class="opinions__container">
        <h2 v-reveal>Co mówią nasi klienci?</h2>
		<div class="opinions__content">

		  <ContentCarousel label="Opinie klientów" class="opinions__content-swiper">
			<div class="swiper-slide" v-for="opinion in opinionList" :key="opinion.name">
				<div class="swiper__element" >
					<div class="swiper__slide-visual">
						<div class="title">
							<img :src="opinion.img" alt="" class="img" width="44" height="44" loading="lazy" decoding="async">
							<p class="name">{{ opinion.name }}</p>
						</div>
						<div class="stars">
							<img v-for="n in 5" :key="n" src="/assets/img/opinie/star.png" alt="" width="18" height="18" loading="lazy">
						</div>
						<p class="poz"><span>Pozytywne: </span>{{ opinion.poz }}</p>
						<p class="opinion">{{ opinion.opinion }}</p>
						<p v-if="opinion.service" class="service"><span>Usługa: </span>{{ opinion.service }}</p>
					</div>
				</div>
			</div>
		  </ContentCarousel>

		</div>
		<p class="link"><a target="_blank" rel="noopener noreferrer" href="https://www.google.com/search?q=clean+wwa&oq=clean+wwa&aqs=chrome.0.69i59j0i10i22i30j0i10i22i30i625j69i60j69i61j69i60.1774j0j7&sourceid=chrome&ie=UTF-8#lrd=0x4718a1e6396353a7:0x91436c41079cbc63,1,,,,">Sprawdź pozostałe opinie</a></p>
	  </div>
	</section>
</template>

<script>
export default {
	data() {
		return {
		  opinionList: [
			{img: "/assets/img/opinie/mateusz.png", name: "Mateusz Wiek", poz: "Czas reakcji, Jakość, Profesjonalizm, Wartość", opinion: "Polecam CLEAN WWA 100% Szybko, sprawnie. Usługa na wysokim poziomie. Telefon koło południa i za godzinę mebelki już się piorą:) A to wszystko w przystępnej cenie!!! 10000% Polecam!!!", service: "Czyszczenie tapicerki"},
			{img: "/assets/img/opinie/vitalij.png", name: "Vitaliy Krupin", poz: "Jakość, Profesjonalizm, Wartość", opinion: "Polecam usługi pana Wojciecha, pełen profezjonalizm i wysoka jakość wykonania prac. Bardzo starannie wyczyszczona cała tapicerka w samochodzie, teraz samochód wygląda jak nowy. Cena rozsądna za dany zakres prac i trwałość wykonania. Polecam!!!", service: "Czyszczenie tapicerki"},
			{img: "/assets/img/opinie/zwyrol2.png", name: "Radosław Olek", poz: "Profesjonalizm", opinion: "Usługa została wykonana należycie w przyzwoitej cenie.", service: ""},
			{img: "/assets/img/opinie/barrbrra.png", name: "Barrbrra", poz: "Jakość, Profesjonalizm", opinion: "Czyszczenie foteli samochodowych - usług wykonana bardzo starannie, fotele jak nowe :) Pan wykonujący usługę bardzo miły, punktualny - kontakt bez problemu. POLECAM i z pewnością jeszcze skorzystam :)", service: "Czyszczenie tapicerki"},
			{img: "/assets/img/opinie/eliza.png", name: "Eliza Skrodzka", poz: "Jakość, Profesjonalizm, Punktualność", opinion: "Cena adekwatna do czasu, sprzętu i wysiłku włożonego w pracę. Komunikacja bez zarzutów. Kanapa i krzesła wyglądają jak nowe. Świetna robota. Polecam i chętnie skorzystam jeszcze raz.", service: "Czyszczenie tapicerki"},
			{img: "/assets/img/opinie/karol.png", name: "Karol Wołek", poz: "Jakość", opinion: "Polecam :) Narożnik starannie wyczyszczony jestem zadowolony z usługi, na pewno w przyszłości skorzystam ponownie.", service: "Czyszczenie tapicerki"},
			{img: "/assets/img/opinie/wioleta.png", name: "Wioleta Daniluk", poz: "Profesjonalizm", opinion: "Skorzystałam z usługi prania narożnika i krzeseł, narożnik był bardzo zabrudzony. Usługa wykonana bardzo profesjonalnie i starannie, jestem bardzo zadowolona.", service: "Czyszczenie tapicerki"},
			{img: "/assets/img/opinie/justyna.png", name: "Justyna Augustyniak", poz: "Jakość, Profesjonalizm, Punktualność, Wartość", opinion: "Bardzo polecam. Kanapa po czyszczeniu  w idealnym stanie jak nowa 🌸 warto skorzystać z usług mając w domu zwierzęta.", service: "Usuwanie plam i nieprzyjemnych zapachów po zwierzętach domowych"},
			{img: "/assets/img/opinie/busio.png", name: "B u s i o", poz: "Jakość, Punktualność", opinion: "Cała usługa wykonana profesjonalnie i na czas w przystępnej cenie. Skorzystam jeszcze na pewno, polecam", service: ""}
		  ]
		};
  }
}
</script>

<style lang="scss" scoped>
.opinions { background: #212121; color: #fff; }
.opinions__container { max-width: 1280px; padding: var(--section-space) 6%; margin: auto; }
.opinions h2 { color: #75e5e8; margin-bottom: 28px; }
.swiper-slide { height: auto; }
.swiper__element { height: 100%; padding: 24px; border: 1px solid #ffffff25; border-radius: 12px; background: #ffffff06; }
.swiper__slide-visual { font-size: 18px; }
.title { display: flex; align-items: center; gap: 12px; margin-bottom: 18px; }
.title .img { width: 44px; height: 44px; object-fit: cover; border-radius: 50%; }
.name { font-weight: 700; font-size: 21px; }
.stars { display: flex; gap: 3px; margin-bottom: 18px; }
.stars img { width: 18px; height: 18px; object-fit: contain; }
.poz, .service { font-size: 16px; color: #b6cbcb; margin: 12px 0; }
.opinion { line-height: 1.6; }
.link { margin-top: 28px; font-size: 18px; }
.link a { color: #75e5e8; text-underline-offset: 5px; }
</style>
