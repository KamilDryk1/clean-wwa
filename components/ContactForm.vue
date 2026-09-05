<template>
  <div class="contact-form" :class="{ 'contact-form--modal': showOverlay }" @click.self="closeForm">
    <form ref="form" class="form-card" :role="showOverlay ? 'dialog' : undefined" :aria-modal="showOverlay ? 'true' : undefined" :aria-labelledby="`${idPrefix}-title`" @submit.prevent="submitForm" @keydown="onKeydown">
      <button v-if="showOverlay" class="contact-form__close" type="button" aria-label="Zamknij formularz" @click="closeForm">×</button>
      <h2 :id="`${idPrefix}-title`">Formularz kontaktowy</h2>
      <div class="contact-form__row">
        <div><label :for="`${idPrefix}-name`">Imię</label><input :id="`${idPrefix}-name`" v-model.trim="name" name="name" autocomplete="name" required maxlength="150" placeholder="Jak się do Ciebie zwracać?" /></div>
        <div><label :for="`${idPrefix}-phone`">Telefon</label><input :id="`${idPrefix}-phone`" v-model.trim="phone" name="phone" type="tel" autocomplete="tel" required maxlength="40" placeholder="Twój numer telefonu" /></div>
      </div>
      <label :for="`${idPrefix}-date`">Preferowany termin</label>
      <input :id="`${idPrefix}-date`" v-model.trim="date" name="date" required maxlength="150" placeholder="Data i godzina lub dogodna pora dnia" />
      <label :for="`${idPrefix}-message`">Co chcesz wyczyścić?</label>
      <textarea :id="`${idPrefix}-message`" v-model.trim="message" name="message" required maxlength="5000" rows="4" placeholder="Rodzaj i ilość mebli, lokalizacja oraz dodatkowe informacje"></textarea>
      <label class="form-consent" :for="`${idPrefix}-consent`">
        <input :id="`${idPrefix}-consent`" v-model="agreement" type="checkbox" required />
        <span>Wyrażam zgodę na przetwarzanie danych w celu odpowiedzi na zapytanie. <a href="https://drive.proton.me/urls/K5J2WAJC84#tkmTmLmTWivf" target="_blank" rel="noopener noreferrer">Polityka prywatności</a>.</span>
      </label>
      <p v-if="status === 'error'" class="form-error" role="alert">Nie udało się wysłać wiadomości. Spróbuj ponownie lub zadzwoń: 733 740 112.</p>
      <p v-if="status === 'success'" class="form-success" role="status">Dziękujemy! Wiadomość została wysłana. Skontaktujemy się z Tobą w sprawie zlecenia.</p>
      <button type="submit" class="content-button" :disabled="status === 'sending'">{{ status === 'sending' ? 'Wysyłanie…' : 'Wyślij zapytanie' }}</button>
    </form>
  </div>
</template>

<script>
import { sendEnquiry } from '~/utils/enquiry';
export default {
  props: { showOverlay: Boolean, idPrefix: { type: String, default: 'contact' } },
  data() { return { name: '', phone: '', date: '', message: '', agreement: false, status: 'idle' }; },
  mounted() {
    if (this.showOverlay) {
      document.documentElement.classList.add('contact-dialog-open');
      this.$refs.form.querySelector('input').focus();
    }
  },
  beforeDestroy() { if (this.showOverlay) document.documentElement.classList.remove('contact-dialog-open'); },
  methods: {
    async submitForm() {
      if (this.status === 'sending' || !this.name || !this.phone || !this.date || !this.message || !this.agreement) return;
      this.status = 'sending';
      try {
        await sendEnquiry({ name: this.name, phone: this.phone, date: this.date, message: this.message });
        this.name = this.phone = this.date = this.message = '';
        this.agreement = false;
        this.status = 'success';
      } catch (_) { this.status = 'error'; }
    },
    closeForm() { if (this.showOverlay) this.$emit('closeForm'); },
    onKeydown(event) {
      if (!this.showOverlay) return;
      if (event.key === 'Escape') { event.preventDefault(); this.closeForm(); }
      if (event.key !== 'Tab') return;
      const items = [...this.$refs.form.querySelectorAll('button:not(:disabled), input, textarea, a')];
      const first = items[0], last = items[items.length - 1];
      if (event.shiftKey && document.activeElement === first) { event.preventDefault(); last.focus(); }
      else if (!event.shiftKey && document.activeElement === last) { event.preventDefault(); first.focus(); }
    },
  },
};
</script>

<style lang="scss" scoped>
.contact-form { width: 100%; min-width: 0; }
.contact-form__row { display: grid; grid-template-columns: 1fr 1fr; gap: 18px; }
.contact-form--modal { position: fixed; inset: 0; z-index: 200; background: #102223a6; backdrop-filter: blur(5px); padding: 24px; display: grid; place-items: center; }
.contact-form--modal .form-card { position: relative; width: 100%; max-width: 640px; max-height: calc(100dvh - 48px); overflow-y: auto; overscroll-behavior: contain; }
.contact-form--modal h2 { padding-right: 42px; }
.contact-form__close { position: absolute; top: 18px; right: 18px; border: 1px solid var(--line); border-radius: 10px; width: 40px; height: 40px; background: var(--surface); cursor: pointer; font-size: 30px; line-height: 1; color: var(--ink); }
@media (max-width: 540px) { .contact-form__row { grid-template-columns: 1fr; gap: 0; } .contact-form--modal { padding: 12px; } .contact-form--modal .form-card { max-height: calc(100dvh - 24px); } }
</style>
