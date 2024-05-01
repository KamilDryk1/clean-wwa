<template>
	<section class="contact">
		<div class="contact__container">
			<div class="contact__content">
				<div class="contact__content-details">
					<h3>CLEAN WWA Grzegorz Gancarek</h3>

					<h5><a href="tel:+48733740112">tel. +48 733 740 112</a></h5>

					<h5><a href="mailto:cleanwwa@gmail.com">cleanwwa@gmail.com</a></h5>

					<h5>ul. Kasprzaka 29c</h5>

					<h5>01-234 Warszawa</h5>

					<h5>NIP 5060122821</h5>
				</div>

				<ContactForm />

				<div class="contact__content-terms">
					<h1>Regulamin świadczonych usług firmy CLEAN WWA Grzegorz Gancarek</h1>
  					<p>Usługi firmy CLEAN WWA Grzegorz Gancarek świadczone zgodnie z regulaminem. Regulamin określa zasady świadczonych usług przez firmę tj. pranie tapicerki meblowej,
  					samochodowej, wykładzin oraz innych usług zawartych w oferowanych usługach.</p>
  					<ol>
  						<li>Firma przyjmuje zlecenia prania tapicerki meblowej, samochodowej oraz innych
  						oferowanych usług zgodnie z cennikiem, umieszczonym na stronie zastrzegając, że
  						ostateczna cena usługi może ulec zmianie ze względu na poszerzony zakres usługi lub
  						jeżeli prany przedmiot będzie w ekstremalnym stopniu zabrudzony.</li>
  						<li>Pracownik firmy informuje klienta o kosztach wykonania usługi przed jej
  						rozpoczęciem.</li>
  						<li>Usługi są świadczone jedynie mobilnie.</li>
  						<li>Ceny, promocje i rabaty podane w cenniku są cenami brutto.</li>
  						<li>Za świadczone usługi wystawiana jest faktura albo paragon. Firma wystawia Faktury
  						VAT.</li>
  						<li>Zamówienia przyjmowane są telefonicznie pod numerem +48 733 740 112, przez
  						formularz kontaktowy lub inne formy kontaktu tj. media społecznościowe
  						(messenger, instagram)</li>
  						<li>Każdy klient otrzymuje 3-dniową gwarancję, która może zgłosić telefonicznie, lub
  						SMS na numer +48 733 740 112.</li>
  						<li>Pracownik poinformuje klienta o orientacyjnym czasie wykonania usługi.</li>
  						<li>Usługa może być wykonana jeśli klient zapewni dostęp do prądu i ciepłej wody.</li>
  						<li>Pranie całości mebla odbywa się tylko i wyłącznie w przypadku rozkręcenia mebla
  						przez Klienta na poszczególne elementy.</li>
  						<li>Pracownik firmy poinformuje klienta w przypadku, gdy zanieczyszczenia nie mogą
  						zostać usunięte, oraz przekaże jakie efekty będą w wskazanym przypadku możliwe.</li>
  						<li>Firma nie bierze odpowiedzialności za uszkodzenia powstałe w trakcie wykonywania
  						usługi, do których doszło z powodu ukrytych wad przedmiotów usługi.</li>
  						<li>Pracownik może odmówić wykonania usługi jeżeli pranie przedmiotu w jego ocenie
  						nie będzie skuteczne.</li>
  						<li>W niektórych przypadkach niemożliwe jest całkowite usunięcie plam silnych
  						barwników (kawa, herbata, coca-cola, tusze, itp.), plam z klejów i substancji lepkich,
  						przebarwień powstałych od naturalnego drewna i bejc, plam z moczu oraz jego
  						zapachu, niektórych plam tłustych i odbarwień niewiadomego pochodzenia.</li>
  						<li>Złożenie zamówienia oznacza akceptację regulaminu.</li>
  						<li>W sprawach nieuregulowanych niniejszym regulaminem stosuje się odpowiednio
  						przepisy kodeksu cywilnego.</li>
  					</ol>
				</div>
			</div>
		</div>
	</section>
</template>

<script>
import ContactForm from '~/components/ContactForm.vue';

export default {
	layout: "contact",

	components: {ContactForm}
}
</script>

<style lang="scss" scoped>
.contact {
	&__container {
		max-width: 1440px;
   		margin: 0 auto;
	}

	&__content {
		padding: 0 5%;
		&-details {
			margin: 50px auto 0; 
			text-align: center;

			h3 {
				font-size: 26px;
			}

			h5 {
				font-size: 20px;

				a {
					color: black;
					text-decoration: none;
				}
			}
		}

		&-terms {
			max-width: 1000px;
			margin: 0 auto 50px;
			text-align: justify;

			h1 {
				text-align: center;
				margin-bottom: 10px;
			}
		}
	}
}
</style>