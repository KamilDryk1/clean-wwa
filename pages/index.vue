<template>
  <div class="index">
	<section class="description">
	  <div class="description__container">
		<div class="description__content">
		  <div class="description__content-text">
			<h2>O nas</h2>
			<p>
				Jesteśmy profesjonalną firmą zajmującą się praniem tapicerki meblowej, samochodowej, oraz wykładzin na terenie Warszawy i okolic. Posiadamy wieloletnie doświadczenie w przywracaniu pierwotnego stanu Państwa mebli. Dzięki naszej usłudze możesz usunąć głęboko osadzone plamy, sierść zwierząt domowych, nieprzyjemne zapachy i roztocza z mebli, oraz innych powierzchni. 
				Rezultat? Dogłębnie czyste meble i zdrowszy dom.
			</p>
			<div class="description__content-text-tel">
				<img src="/assets/img/tel-icon.png" alt="telefon">
				<a href="tel:+48733740112">+48 733 740 112</a>
			</div>
		  </div>
		  <div class="description__content-photo">
			<img
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
				<h2>Co zyskujesz?</h2>
				<div class="benefits__content-list">
					<div class="benefits__content-element show-elem show-elem-bottom">
						<div class="benefits__content-element-img">
							<img src="/assets/img/gwarancja-satysfakcji.png" alt="Gwarancja satysfakcji">
						</div>
						<div class="benefits__content-element-text">
							<h3>Gwarancja jakości</h3>
							<p>Do każdej usługi otrzymują Państwo 3-dniową gwarancję, jeżeli efekt będzie inny od ustalonego zwrócimy do 100% ceny usługi.</p>
						</div>
					</div>
					<div class="benefits__content-element show-elem show-elem-bottom">
						<div class="benefits__content-element-img">
							<img src="/assets/img/doswiadczenie.png" alt="Doświadczenie">
						</div>
						<div class="benefits__content-element-text">
							<h3>Doświadczenie</h3>
							<p>5 lat doświadczenia w praniu tapicerki meblowej, oraz wykładzin. 1000 zadowolonych klientów. 4000 upranych mebli i wykładzin.</p>
						</div>
					</div>
					<div class="benefits__content-element show-elem show-elem-bottom">
						<div class="benefits__content-element-img">
							<img src="/assets/img/bezpieczne-platnosci.png" alt="Bezpieczne płatności">
						</div>
						<div class="benefits__content-element-text">
							<h3>Bezpieczne płatności</h3>
							<p>Świadczymy usługi na rzecz osób prywatnych oraz przedsiębiorców - u nas dostaniesz fakturę na swoją firmę.</p>
						</div>
					</div>
					<div class="benefits__content-element show-elem show-elem-bottom">
						<div class="benefits__content-element-img">
							<img src="/assets/img/terminowosc.png" alt="Ekspresowy termin">
						</div>
						<div class="benefits__content-element-text">
							<h3>Ekspresowy termin</h3>
							<p>Gwarantujemy ekspresowy termin wykonania usługi w większości przypadków nawet na jutro!</p>
						</div>
					</div>
					<div class="benefits__content-element show-elem show-elem-bottom">
						<div class="benefits__content-element-img">
							<img src="/assets/img/dojazd-gratis.png" alt="Dojazd gratis">
						</div>
						<div class="benefits__content-element-text">
							<h3>Dojazd gratis</h3>
							<p>Dojazd na terenie Warszawy, oraz bliższych okolic jest zawsze w cenie! Nie pobieramy żadnych dodatkowych ukrytych opłat.</p>
						</div>
					</div>
					<div class="benefits__content-element show-elem show-elem-bottom">
						<div class="benefits__content-element-img">
							<img src="/assets/img/profesjonalny-sprzet.png" alt="Profesjonalny sprzęt">
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
		  <h2>Efekty naszej pracy</h2>
		  <swiper
			class="swiper carousel__content-swiper"
			:options="swiperOptions"
		  >
			<swiper-slide>
			  <div class="swiper__element">
				<div class="swiper__slide-visual">
				  <img
					src="/assets/img/HomePage/carousel-photo-1.jpg"
					alt="Pranie"
					class="swiper__element-img"
				  />
				</div>
			  </div>
			</swiper-slide>
			<swiper-slide>
			  <div class="swiper__element">
				<div class="swiper__slide-visual">
				  <img
					src="/assets/img/HomePage/carousel-photo-8.jpg"
					alt="Pranie"
					class="swiper__element-img"
				  />
				</div>
			  </div>
			</swiper-slide>
			<swiper-slide>
			  <div class="swiper__element">
				<div class="swiper__slide-visual">
				  <img
					src="/assets/img/HomePage/carousel-photo-3.jpg"
					alt="Pranie"
					class="swiper__element-img"
				  />
				</div>
			  </div>
			</swiper-slide>
			<swiper-slide>
			  <div class="swiper__element">
				<div class="swiper__slide-visual">
				  <img
					src="/assets/img/HomePage/carousel-photo-7.jpg"
					alt="Pranie"
					class="swiper__element-img"
				  />
				</div>
			  </div>
			</swiper-slide>
			<swiper-slide>
			  <div class="swiper__element">
				<div class="swiper__slide-visual">
				  <img
					src="/assets/img/HomePage/carousel-photo-5.jpg"
					alt="Pranie"
					class="swiper__element-img"
				  />
				</div>
			  </div>
			</swiper-slide>
			<swiper-slide>
			  <div class="swiper__element">
				<div class="swiper__slide-visual">
				  <img
					src="/assets/img/HomePage/carousel-photo-6.jpg"
					alt="Pranie"
					class="swiper__element-img"
				  />
				</div>
			  </div>
			</swiper-slide>
			<swiper-slide>
			  <div class="swiper__element">
				<div class="swiper__slide-visual">
				  <img
					src="/assets/img/HomePage/carousel-photo-4.jpg"
					alt="Pranie"
					class="swiper__element-img"
				  />
				</div>
			  </div>
			</swiper-slide>
			<swiper-slide>
			  <div class="swiper__element">
				<div class="swiper__slide-visual">
				  <img
					src="/assets/img/HomePage/carousel-photo-2.jpg"
					alt="Pranie"
					class="swiper__element-img"
				  />
				</div>
			  </div>
			</swiper-slide>
		  </swiper>
		</div>
	  </div>
	</section>
	<!-- <section class="more">
	  <div class="more__container">
		<div class="more__content">
		  <div class="more__content-offer show-elem show-elem-bottom">
			<p>
			  Chcesz poznać całość oferowanych przez nas usług? Kliknij tutaj!
			</p>
			<i class="fa-solid fa-clipboard-list"></i>
		  </div>
		  <div class="more__content-gallery show-elem show-elem-bottom">
			<p>Całość naszych prac przed i po znajdziesz tutaj!</p>
			<i class="fa-solid fa-camera"></i>
		  </div>
		</div>
	  </div>
	</section> -->
	<Opinions />
	<section class="contact">
		<div class="contact__container">
			<div class="contact__content">
				<ContactForm />
			</div>
		</div>
	</section>
  </div>
</template>

<script>
import showElement from "~/mixins/showElement";
import ContactForm from "~/components/ContactForm";

export default {
  name: "IndexPage",

  mixins: [showElement],

  components: [ContactForm],

  data() {
	return {
	  swiperOptions: {
		slidesPerView: 1,
		spaceBetween: 30,
		centeredSlides: false,
		autoplay: {
		  delay: 3000,
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
	};
  },

  methods: {
	closeForm() {
		this.showForm = false;
	}
  },

  computed: {
	showForm() {
		return this.showForm
	}
  }
};
</script>

<style lang="scss" scoped>
.index {
  position: relative;
  // z-index: 15;
  background-color: #fff;
}

.description {
  margin-bottom: 100px;

  //   margin-top: 50px;

  &__container {
	max-width: 1440px;
	margin: 0 auto;
  }

  &__content {
	display: flex;
	justify-content: space-between;
	margin: 0 4%;
	padding-top: 100px;

	&-text {
	  width: 45%;

	  h2 {
		margin-bottom: 20px;
		font-size: 32px;
	  }

	  p {
		text-align: justify;
		font-size: 20px;
	  }

	  &-tel {
		display: flex;
		gap: 5px;
		margin-top: 5px;

		img {
			max-width: 50px;
	  	}

		a {
			margin: auto 0;
			font-size: 24px;
			color: #03989e;
		}
	  }
	}

	&-photo {
	  margin: auto 0;
	  max-height: 380px;
	  width: 45%;
	  //   overflow: hidden;

	  img {
		object-fit: cover;
		max-height: 380px;
		width: 100%;
	  }
	}
  }

  @media (max-width: 999px) {
	&__content {
	  flex-direction: column;

	  &-text {
		width: 100%;
	  }

	  &-photo {
		width: 100%;
		padding-top: 20px;
	  }
	}
  }
}

.benefits{
	&__container {
		max-width: 1440px;
		margin: 0 auto 100px auto;
	}

	&__content {
		margin: 0 4%;

		h2 {
			margin-bottom: 20px;
			font-size: 32px;
		}

		&-list {
			display: flex;
			justify-content: space-between;
			flex-wrap: wrap;
		}

		&-element {
			width: 33%;
			display: flex;
			justify-content: space-around;
			margin-bottom: 10px;
			background-color: #f3f3f3;
			padding: 20px;
			min-height: 300px;

			&-text {
				width: 45%;
				margin: auto;
			}

			&-img {
				width: 45%;
				margin: auto;

				img {
					width: 60%;
					margin: auto;
					display: block;
				}
			}
		}

		@media(max-width: 1000px) {
			&-element {
				width: 49%;
				min-height: 270px;
				flex-direction: column;

				&-text {
					width: 100%;
					text-align: center;
				}
			}
		}

		@media(max-width: 600px) {
			&-element {
				width: 100%;
			}
		}
	}
}

.carousel {
  &__container {
	max-width: 1440px;
	margin: 0 auto;
	padding-bottom: 100px;

	h2 {
	  margin: 20px 4%;
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
	// border-radius: 50%;
	overflow: hidden;
  }

  &__element-img {
	object-fit: cover;
	width: 100%;
	height: 100%;
  }
}
.swiper-slide-next + .swiper-slide + .swiper-slide {
  opacity: 0.5;
}
.more {
  margin-top: 150px;
  margin-bottom: 150px;

  &__container {
	max-width: 1440px;
	margin: 0 auto;
  }

  &__content {
	margin: 0 4%;
	display: flex;
	justify-content: space-between;

	&-offer {
	  width: 47%;
	  height: 400px;
	  position: relative;
	  // background-color: #7637b3;
	  background-color: #03989e;
	  border-radius: 30px;
	  cursor: pointer;

	  p {
		margin: 70px 5%;
		font-size: 26px;
		color: white;
		font-weight: bold;
		text-align: center;
	  }

	  i {
		position: absolute;
		top: 55%;
		left: 50%;
		transform: translateX(-50%);
		font-size: 100px;
		color: white;
	  }
	}

	&-offer:hover {
	  // background-color: #9044db;
	  background-color: #00b1b8;
	}

	&-gallery {
	  width: 47%;
	  height: 400px;
	  position: relative;
	  // background-color: #c12994;
	  background-color: #03989e;
	  border-radius: 30px;
	  cursor: pointer;

	  p {
		margin: 70px 5%;
		font-size: 26px;
		color: white;
		font-weight: bold;
		text-align: center;
	  }

	  i {
		position: absolute;
		top: 55%;
		left: 50%;
		transform: translateX(-50%);
		font-size: 100px;
		color: white;
	  }
	}

	&-gallery:hover {
	  background-color: #00b1b8;
	}
  }
}
.contact {
	// background-color: #212121;

	&__container {
		max-width: 1440px;
		margin: 0 auto;
	}
}
</style>
