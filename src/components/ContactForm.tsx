import { useState } from 'react';
import FormField from './FormField';

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const phonePattern = /^[+()\-\s0-9]{7,}$/;

export default function ContactForm() {
  const [sent, setSent] = useState(false);
  const [error, setError] = useState('');

  return (
    <form
      noValidate
      className="rounded-lg border border-slate-200 bg-white p-6 shadow-sm"
      onSubmit={(event) => {
        event.preventDefault();
        const form = event.currentTarget;
        const data = new FormData(form);
        const fullName = String(data.get('fullName') ?? '').trim();
        const email = String(data.get('email') ?? '').trim();
        const phone = String(data.get('phone') ?? '').trim();
        const message = String(data.get('message') ?? '').trim();

        if (!fullName || !email || !phone || !message) {
          setSent(false);
          setError('Please complete the required fields: name, email, phone and message.');
          return;
        }

        if (!emailPattern.test(email)) {
          setSent(false);
          setError('Please enter a valid business email address.');
          return;
        }

        if (!phonePattern.test(phone)) {
          setSent(false);
          setError('Please enter a valid phone number.');
          return;
        }

        setError('');
        setSent(true);
        form.reset();
      }}
    >
      <div className="grid gap-5 sm:grid-cols-2">
        <FormField label="Full Name" name="fullName" required />
        <FormField label="Company Name" name="companyName" />
        <FormField label="Email" name="email" type="email" required />
        <FormField label="Phone Number" name="phone" type="tel" required />
        <FormField label="Requirement / Material" name="material" />
        <FormField label="Required Quantity" name="quantity" />
        <div className="sm:col-span-2">
          <FormField label="Message" name="message" required textarea />
        </div>
      </div>
      <button type="submit" className="mt-6 rounded-md bg-brand-green px-6 py-3 text-sm font-bold text-white transition hover:bg-brand-dark-green">
        Send Enquiry
      </button>
      {error && <p className="mt-4 rounded-md border border-red-200 bg-red-50 px-4 py-3 text-sm font-semibold text-red-700">{error}</p>}
      {sent && (
        <p className="mt-4 rounded-md bg-brand-green/10 px-4 py-3 text-sm font-semibold text-brand-dark-green">
          Thank you. This frontend enquiry was validated and can be connected to an email or API service next.
        </p>
      )}
    </form>
  );
}
