<template>
  <form class="area-form form-card" @submit.prevent="submit">
    <h3>Zapytaj o wycenę</h3>
    <label for="area-name">Imię i nazwisko / firma</label>
    <input id="area-name" v-model.trim="form.name" name="name" autocomplete="name" required maxlength="150" />
    <label for="area-phone">Telefon</label>
    <input id="area-phone" v-model.trim="form.phone" name="phone" type="tel" autocomplete="tel" required maxlength="40" />
    <label for="area-location">Dzielnica / miasto</label>
    <select id="area-location" v-model="form.area" name="area" required>
      <option disabled value="">Wybierz lokalizację</option>
      <option v-for="location in locations" :key="location.slug" :value="location.name">{{ location.name }}</option>
      <option value="Inna lokalizacja">Inna lokalizacja – podam w opisie</option>
    </select>
    <label for="area-message">Co chcesz wyczyścić?</label>
    <textarea id="area-message" v-model.trim="form.message" name="message" rows="4" placeholder="Np. narożnik, 3 fotele, wykładzina w biurze 100 m². Podaj preferowany termin." required maxlength="5000"></textarea>
    <label class="form-consent" for="area-consent">
      <input id="area-consent" v-model="consent" type="checkbox" required />
      <span>Wyrażam zgodę na przetwarzanie danych w celu odpowiedzi na zapytanie. <a href="https://drive.proton.me/urls/K5J2WAJC84#tkmTmLmTWivf" target="_blank" rel="noopener noreferrer">Polityka prywatności</a>.</span>
    </label>
    <p v-if="status === 'success'" class="area-form__success form-success" role="status">Dziękujemy! Zapytanie zostało wysłane. Skontaktujemy się z Tobą w sprawie wyceny.</p>
    <p v-if="status === 'error'" class="area-form__error form-error" role="alert">Nie udało się wysłać zapytania. Spróbuj ponownie lub zadzwoń: <a href="tel:+48733740112">733 740 112</a>.</p>
    <button type="submit" class="content-button" :disabled="status === 'sending'">{{ status === 'sending' ? 'Wysyłanie…' : 'Wyślij zapytanie' }}</button>
  </form>
</template>

<script>
import { sendEnquiry } from '~/utils/enquiry';
export default {
  props: { locations: { type: Array, required: true }, selectedArea: { type: String, default: '' } },
  data() { return { form: { name: '', phone: '', area: this.selectedArea, message: '' }, consent: false, status: 'idle' }; },
  watch: { selectedArea(value) { this.form.area = value; } },
  methods: {
    async submit() {
      if (this.status === 'sending' || !this.consent || !this.form.name || !this.form.phone || !this.form.area || !this.form.message) return;
      this.status = 'sending';
      try {
        await sendEnquiry({ ...this.form, subject: 'CLEANWWA – zapytanie o wycenę', from_name: 'CLEANWWA – strona internetowa' });
        this.status = 'success';
        this.form = { name: '', phone: '', area: this.form.area, message: '' };
        this.consent = false;
      } catch (_) { this.status = 'error'; }
    },
  },
};
</script>

