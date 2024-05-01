<template>
	<section class="opinions">
	  <div class="opinions__container">
		<div class="opinions__content">
		  <swiper :options="swiperOptions" class="swiper opinions__content-swiper">
			<swiper-slide v-for="opinion in opinionList" :key="opinion.name">
				<div class="swiper__element" >
					<div class="swiper__slide-visual">
						<div class="title">
							<img :src="opinion.img" alt="" class="img">
							<p class="name">{{ opinion.name }}</p>
						</div>
						<div class="stars">
							<img v-for="n in 5" :key="n" src="/assets/img/opinie/star.png" alt="">
						</div>
						<p class="poz"><span>Pozytywne: </span>{{ opinion.poz }}</p>
						<p class="opinion">{{ opinion.opinion }}</p>
						<p v-if="opinion.service" class="service"><span>Usługa: </span>{{ opinion.service }}</p>
					</div>
				</div>
			</swiper-slide>
		  </swiper>
		</div>
		<p class="link"><a target="_blank" href="https://www.google.com/search?q=clean+wwa&oq=clean+wwa&aqs=chrome.0.69i59j0i10i22i30j0i10i22i30i625j69i60j69i61j69i60.1774j0j7&sourceid=chrome&ie=UTF-8#lrd=0x4718a1e6396353a7:0x91436c41079cbc63,1,,,,">Sprawdź pozostałe opinie</a></p>
	  </div>
	</section>
</template>

<script>
export default {
	data() {
		return {
		  swiperOptions: {
			slidesPerView: 1,
			spaceBetween: 30,
			centeredSlides: false,
			autoplay: {
			  delay: 4000,
			  disableOnInteraction: false,
			},
			loop: true,
			breakpoints: {
			  1000: {
				slidesPerView: 3.4,
			  },
			  800: {
				slidesPerView: 2.4,
			  },
			  500: {
				slidesPerView: 1.6,
			  },
			},
		  },
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
.opinions {
  width: 100%;
  background-color: #212121;
  color: white;
  padding-top: 100px;
  padding-bottom: 20px;

  &__container {
	max-width: 1440px;
	margin: 0 auto;
  }

  &__content {
	// margin: 0 4%;
	display: flex;
	justify-content: space-around;

	&-opinion {
	  width: 25%;
	  text-align: center;

	  img {
		max-width: 100px;
	  }
	}

	.opinion-2 {
	  margin-top: 30px;
	}
  }
}
.swiper {
  max-width: 1440px;
  margin: 0 0 0 4%;

  &__slide-visual {
	position: relative;
	max-width: 350px;
	height: 350px;
	overflow: hidden;

	.title {
		display: flex;
		gap: 10px;
		align-items: center;
		margin-bottom: 10px;

		.img {
			border-radius: 50%;
		}
	}

	.stars {
		max-width: 25px;
		display: flex;
		flex-direction: row;
		margin-bottom: 10px;
	}

	.poz {
		margin-bottom: 5px;
	}

	.opinion {
		margin-bottom: 5px;
	}

	span {
		font-weight: bold;
	}
  }
}
.swiper-slide-next + .swiper-slide + .swiper-slide {
  opacity: 0.5;
}

.link {
	text-align: center;
	font-size: 20px;

	a {
		color: white;
	}
}
</style>