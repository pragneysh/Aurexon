import { useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import FormField from './FormField';

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const phonePattern = /^[+()\-\s0-9]{7,}$/;

export default function QuoteForm() {
  const [sent, setSent] = useState(false);
  const [error, setError] = useState('');
  const [searchParams] = useSearchParams();
  const requestedMaterial = searchParams.get('material') ?? '';

  return (
    <form
      id="quote"
      noValidate
      className="scroll-mt-28 rounded-lg bg-brand-navy p-6 text-white shadow-industrial"
      onSubmit={(event) => {
        event.preventDefault();
        const form = event.currentTarget;
        const data = new FormData(form);
        const name = String(data.get('quoteName') ?? '').trim();
        const phone = String(data.get('quotePhone') ?? '').trim();
        const email = String(data.get('quoteEmail') ?? '').trim();
        const material = String(data.get('quoteMaterial') ?? '').trim();

        if (!name || !phone || !email || !material) {
          setSent(false);
          setError('Please complete the required quote fields: name, phone, email and material.');
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
      <p className="eyebrow text-brand-lime">Request a Quote</p>
      <h2 className="mt-3 text-2xl font-black tracking-normal">Share Your Material Requirement</h2>
      <div className="mt-6 grid gap-5 sm:grid-cols-2">
        <div className="[&_label]:text-white">
          <FormField label="Name" name="quoteName" required />
        </div>
        <div className="[&_label]:text-white">
          <FormField label="Company" name="quoteCompany" />
        </div>
        <div className="[&_label]:text-white">
          <FormField label="Phone" name="quotePhone" type="tel" required />
        </div>
        <div className="[&_label]:text-white">
          <FormField label="Email" name="quoteEmail" type="email" required />
        </div>
        <div className="[&_label]:text-white">
          <FormField label="Material Required" name="quoteMaterial" required defaultValue={requestedMaterial} />
        </div>
        <div className="[&_label]:text-white">
          <FormField label="Approximate Quantity" name="quoteQuantity" />
        </div>
        <div className="sm:col-span-2 [&_label]:text-white">
          <FormField label="Delivery Location" name="quoteLocation" />
        </div>
        <div className="sm:col-span-2 [&_label]:text-white">
          <FormField label="Message" name="quoteMessage" textarea />
        </div>
      </div>
      <button type="submit" className="mt-6 rounded-md bg-brand-lime px-6 py-3 text-sm font-black text-brand-navy transition hover:bg-white">
        Submit Quote Request
      </button>
      {error && <p className="mt-4 rounded-md border border-red-300/50 bg-red-500/12 px-4 py-3 text-sm font-semibold text-white">{error}</p>}
      {sent && <p className="mt-4 rounded-md bg-white/10 px-4 py-3 text-sm font-semibold text-white">Quote request validated in the frontend. Connect an email/API endpoint when ready.</p>}
    </form>
  );
}
