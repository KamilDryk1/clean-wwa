<template>
	<section class="companies">
		<div class="companies__container">
			<div class="companies__content">
				<div class="companies__content-paragraph">
					<p>
						Szukasz skutecznej i terminowej firmy, która zadba o czystość w Twoim obiekcie?<br>Oferujemy profesjonalne <strong>czyszczenie wykładzin biurowych</strong> oraz <strong>pranie tapicerki meblowej w biurach, hotelach, restauracjach, siłowniach, salonach beauty i placówkach edukacyjnych.</strong><br>Działamy na terenie Warszawy i okolic.<br><br>Pracujemy na nowoczesnym sprzęcie, korzystamy z bezpiecznych i skutecznych środków czystości. Wystawiamy faktury VAT i dopasowujemy terminy do potrzeb Twojej firmy.
					</p>
				</div>


				<div class="companies__content-main">
					<div class="companies__content-main-left">
						<div class="companies__content-benefits">
							<h3 class="companies__content-benefits-title">
								Dlaczego warto z nami współpracować?
							</h3>

							<ul class="companies__content-benefits-list">
								<li class="companies__content-benefits-list-element">
									✅ Doświadczenie w pracy z firmami i obiektami komercyjnymi
								</li>
								<li class="companies__content-benefits-list-element">
									✅ Ekologiczne środki – bezpieczne dla ludzi i zwierząt
								</li>
								<li class="companies__content-benefits-list-element">
									✅ Głębokie czyszczenie – usuwanie plam, alergenów i zapachów
								</li>
								<li class="companies__content-benefits-list-element">
									✅ Elastyczne terminy – pracujemy również poza godzinami pracy biura
								</li>
								<li class="companies__content-benefits-list-element">
									✅ Faktura VAT – przejrzystość i wygoda rozliczeń
								</li>
							</ul>
						</div>

						<div class="companies__content-details">
							<h3 class="companies__content-details-title">
								Co czyścimy?
							</h3>

							<ul class="companies__content-details-list">
								<li class="companies__content-details-list-element">
									📌 <strong>Wykładziny biurowe i hotelowe</strong> – odświeżenie, usuwanie plam, dezynfekcja
								</li>
								<li class="companies__content-details-list-element">
									📌 <strong>Tapicerka meblowa</strong> – krzesła, fotele, kanapy, materace
								</li>
								<li class="companies__content-details-list-element">
									📌 <strong>Meble w lokalach gastronomicznych i hotelach</strong>
								</li>
								<li class="companies__content-details-list-element">
									📌 <strong>Fotele pracownicze, krzesła konferencyjne, meble recepcyjne</strong>
								</li>
								<li class="companies__content-details-list-element">
									📌 <strong>Dezynfekcja i eliminacja roztoczy, bakterii, 	nieprzyjemnych zapachów</strong> 
								</li>
							</ul>
						</div>	
					</div>	

					<div class="companies__content-image">
						<img src="/assets/img/DlaFirm/IMG_3747.jpeg" alt="Pranie wykładziny" 	class="companies__content-image-img">
					</div>
				</div>
			</div>
		</div>
	</section>
</template>

<script>
export default {
	layout: "companies"
}
</script>

<style lang="scss" scoped>
.companies {
	&__container {
    	max-width: 1440px;
    	margin: 0 auto;
	}

	&__content {
    	margin: 50px 4% 50px;
    	padding: 0 4%;
    	position: relative;
    	background-color: #fff;
    	z-index: 5;
		font-size: 20px;

		&-main {
			display: flex;
			padding-top: 30px;

			@media only screen and (max-width: 800px) {
				flex-direction: column-reverse;
			}

			&-left {
				display: flex;
				flex-direction: column;
				flex: 1;
			}
		}

		&-benefits {

			&-title {
				font-size: 28px;
			}
		}

		&-details {
			padding-top: 20px;

			&-title {
				font-size: 28px;
			}
		}

		&-image {
			max-width: 400px;
			flex: 2;
			margin: 0 auto;

			@media only screen and (max-width: 800px) {
				padding-bottom: 20px;
			}

			&-img {
				width: 100%;
			}
		}
	}
}

ul {
	list-style: none;
}
</style>