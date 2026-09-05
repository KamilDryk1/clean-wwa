<template>
  <main class="content-wrap content-section contact-page">
    <div class="contact-page__grid">
      <section class="contact-page__details">
        <h2 v-reveal>Jesteśmy do Twojej dyspozycji</h2>
        <p class="section-lead">Opowiedz nam, co chcesz wyczyścić. Ustalimy zakres prac, wycenę i termin wizyty.</p>
        <a class="contact-detail" href="tel:+48733740112"><span class="contact-detail__label">Zadzwoń do nas</span><strong>733 740 112</strong><span>Codziennie 7:00–23:00</span></a>
        <a class="contact-detail" href="mailto:cleanwwa@gmail.com"><span class="contact-detail__label">Napisz do nas</span><strong>cleanwwa@gmail.com</strong></a>
        <div class="contact-detail"><span class="contact-detail__label">Dane firmy</span><strong>CLEANWWA</strong><span>ul. Kasprzaka 29c, 01-234 Warszawa</span><span>NIP 5060122821</span></div>
        <p class="content-note">Usługi wykonujemy mobilnie, bezpośrednio u klienta.</p>
      </section>
      <ContactForm />
    </div>
    <section id="regulamin" class="contact-page__terms">
      <h2 v-reveal>Regulamin świadczonych usług firmy CLEAN WWA</h2>
<p>Usługi firmy CLEAN WWA świadczone zgodnie z regulaminem. Regulamin określa zasady świadczonych usług przez firmę tj. pranie tapicerki meblowej,
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
    </section>
  </main>
</template>

<script>
export default { layout: 'contact' };
</script>

<style lang="scss" scoped>
.contact-page__grid { display: grid; grid-template-columns: 1fr 1.15fr; gap: 56px; align-items: start; }
.contact-detail { display: flex; flex-direction: column; gap: 3px; padding: 22px 0; border-bottom: 1px solid var(--line); text-decoration: none; color: var(--ink); }
.contact-detail__label { color: var(--muted); font-size: 16px; }
.contact-detail strong { font-size: 28px; color: var(--brand); overflow-wrap: anywhere; }
.contact-detail span:last-child:not(.contact-detail__label) { font-size: 18px; }
.contact-detail:hover strong { color: #025f63; }
.contact-page__terms { margin-top: var(--section-space); padding-top: var(--section-space); border-top: 1px solid var(--line); max-width: 980px; }
.contact-page__terms > p { color: var(--muted); margin-bottom: 28px; }
.contact-page__terms ol { padding-left: 26px; font-size: 18px; }
.contact-page__terms li { padding-left: 10px; margin-bottom: 15px; }
.contact-page__terms li::marker { color: var(--brand); font-weight: 700; }
@media (max-width: 850px) { .contact-page__grid { grid-template-columns: 1fr; gap: 36px; } }
</style>
