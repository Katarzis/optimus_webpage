import { useState, type FormEvent } from 'react';
import Section from '@/components/Section';
import Button from '@/components/ui/Button';
import styles from './Contact.module.css';
import pageStyles from './Page.module.css';

const slots = [
  { id: 'mon-10', label: 'Hétfő 10:00' },
  { id: 'mon-14', label: 'Hétfő 14:00' },
  { id: 'wed-10', label: 'Szerda 10:00' },
  { id: 'fri-9', label: 'Péntek 9:00' },
];

type FormState = {
  name: string;
  email: string;
  phone: string;
  message: string;
  consent: boolean;
};

const initial: FormState = {
  name: '',
  email: '',
  phone: '',
  message: '',
  consent: false,
};

export default function Contact() {
  const [form, setForm] = useState<FormState>(initial);
  const [errors, setErrors] = useState<Partial<Record<keyof FormState, string>>>({});
  const [submitted, setSubmitted] = useState(false);
  const [bookingSlot, setBookingSlot] = useState<string>('');
  const [bookingSent, setBookingSent] = useState(false);

  function validate(): boolean {
    const e: Partial<Record<keyof FormState, string>> = {};
    if (!form.name.trim()) e.name = 'A név megadása kötelező.';
    if (!form.email.trim()) {
      e.email = 'Az e-mail megadása kötelező.';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
      e.email = 'Érvényes e-mail címet adjon meg.';
    }
    if (!form.message.trim()) e.message = 'Az üzenet megadása kötelező.';
    if (!form.consent) e.consent = 'Az adatkezeléshez való hozzájárulás szükséges.';
    setErrors(e);
    return Object.keys(e).length === 0;
  }

  function handleSubmit(ev: FormEvent) {
    ev.preventDefault();
    setSubmitted(false);
    if (!validate()) return;
    // TODO: POST /api/contact
    setSubmitted(true);
    setForm(initial);
  }

  function handleBooking(ev: FormEvent) {
    ev.preventDefault();
    if (!bookingSlot) return;
    // TODO: POST /api/booking
    setBookingSent(true);
  }

  return (
    <>
      <div className={pageStyles.pageHeader}>
        <div className="container">
          <h1 className={pageStyles.title}>Kapcsolat</h1>
          <p className={pageStyles.subtitle}>
            Írjon üzenetet vagy foglaljon időpontot. Az űrlap jelenleg csak frontenden validál — a küldéshez backend
            vagy szolgáltatás (pl. e-mail API) szükséges.
          </p>
        </div>
      </div>

      <Section title="Üzenet küldése">
        <form className={styles.form} onSubmit={handleSubmit} noValidate aria-describedby={submitted ? 'form-success' : undefined}>
          {submitted ? (
            <p id="form-success" className={styles.success} role="status">
              Köszönjük — üzenetét megkaptuk (demó: nincs adatküldés). Éles környezetben e-mail értesítés következik.
            </p>
          ) : null}

          <div className={styles.field}>
            <label htmlFor="contact-name">Név *</label>
            <input
              id="contact-name"
              name="name"
              type="text"
              autoComplete="name"
              value={form.name}
              onChange={(e) => setForm((f) => ({ ...f, name: e.target.value }))}
              aria-invalid={errors.name ? true : undefined}
              aria-describedby={errors.name ? 'err-name' : undefined}
            />
            {errors.name ? (
              <span id="err-name" className={styles.error} role="alert">
                {errors.name}
              </span>
            ) : null}
          </div>

          <div className={styles.field}>
            <label htmlFor="contact-email">E-mail *</label>
            <input
              id="contact-email"
              name="email"
              type="email"
              autoComplete="email"
              value={form.email}
              onChange={(e) => setForm((f) => ({ ...f, email: e.target.value }))}
              aria-invalid={errors.email ? true : undefined}
              aria-describedby={errors.email ? 'err-email' : undefined}
            />
            {errors.email ? (
              <span id="err-email" className={styles.error} role="alert">
                {errors.email}
              </span>
            ) : null}
          </div>

          <div className={styles.field}>
            <label htmlFor="contact-phone">Telefon</label>
            <input
              id="contact-phone"
              name="phone"
              type="tel"
              autoComplete="tel"
              value={form.phone}
              onChange={(e) => setForm((f) => ({ ...f, phone: e.target.value }))}
            />
          </div>

          <div className={styles.field}>
            <label htmlFor="contact-message">Üzenet *</label>
            <textarea
              id="contact-message"
              name="message"
              rows={5}
              value={form.message}
              onChange={(e) => setForm((f) => ({ ...f, message: e.target.value }))}
              aria-invalid={errors.message ? true : undefined}
              aria-describedby={errors.message ? 'err-message' : undefined}
            />
            {errors.message ? (
              <span id="err-message" className={styles.error} role="alert">
                {errors.message}
              </span>
            ) : null}
          </div>

          <div className={styles.checkbox}>
            <input
              id="contact-consent"
              name="consent"
              type="checkbox"
              checked={form.consent}
              onChange={(e) => setForm((f) => ({ ...f, consent: e.target.checked }))}
              aria-invalid={errors.consent ? true : undefined}
              aria-describedby={errors.consent ? 'err-consent' : undefined}
            />
            <label htmlFor="contact-consent">
              Elfogadom az <a href="#adatkezeles">adatkezelési tájékoztatót</a> és hozzájárulok adataim kapcsolatfelvétel
              céljából történő kezeléséhez. *
            </label>
          </div>
          {errors.consent ? (
            <span id="err-consent" className={styles.error} role="alert">
              {errors.consent}
            </span>
          ) : null}

          <Button type="submit" variant="primary">
            Küldés
          </Button>
        </form>
      </Section>

      <Section id="idopont" variant="muted" title="Időpontfoglalás" intro="Válasszon minta idősávot — éles rendszerben CMS-ből vagy naptár API-ból töltődik.">
        {bookingSent ? (
          <p className={styles.success} role="status">
            Foglalás rögzítve (demó). Hivatkozás: {bookingSlot}
          </p>
        ) : (
          <form className={styles.booking} onSubmit={handleBooking}>
            <fieldset className={styles.fieldset}>
              <legend className={styles.legend}>Elérhető idősávok</legend>
              <div className={styles.slots}>
                {slots.map((s) => (
                  <label key={s.id} className={styles.slotLabel}>
                    <input
                      type="radio"
                      name="slot"
                      value={s.id}
                      checked={bookingSlot === s.id}
                      onChange={() => setBookingSlot(s.id)}
                    />
                    {s.label}
                  </label>
                ))}
              </div>
            </fieldset>
            <Button type="submit" variant="primary" disabled={!bookingSlot}>
              Foglalás megerősítése
            </Button>
          </form>
        )}
      </Section>
    </>
  );
}
