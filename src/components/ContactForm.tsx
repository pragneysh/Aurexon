import { useState } from 'react';
import { officialEmails, officialPhones } from '../data/company';
import FormField from './FormField';
import { publicApi } from '../lib/publicApi';

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const phonePattern = /^[+()\-\s0-9]{7,}$/;

const materialOptions = [
  'Aluminium Scrap',
  'Brass Scrap',
  'Ferrous Scrap',
  'Copper Scrap',
  'Stainless Steel Scrap',
  'Other Material',
];

export default function ContactForm() {
  const [sent, setSent] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState('');

  return (
    <form
      noValidate
      className="rounded-xl border border-slate-200 bg-white p-6 sm:p-8 shadow-sm"
      onSubmit={async (event) => {
        event.preventDefault();
        const form = event.currentTarget;
        const data = new FormData(form);
        const fullName = String(data.get('fullName') ?? '').trim();
        const companyName = String(data.get('companyName') ?? '').trim();
        const email = String(data.get('email') ?? '').trim();
        const phone = String(data.get('phone') ?? '').trim();
        const materialCategory = String(data.get('materialCategory') ?? '').trim();
        const quantityMT = String(data.get('quantity') ?? '').trim();
        const message = String(data.get('message') ?? '').trim();

        if (!fullName || !email || !phone || !message) {
          setSent(false);
          setError('Please complete all required fields: name, email, phone, and message.');
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
        setSubmitting(true);

        try {
          await publicApi.submitEnquiry({
            type: 'contact',
            fullName,
            companyName,
            email,
            phone,
            materialCategory,
            quantityMT,
            message,
          });
          setSent(true);
        } catch (err: unknown) {
          setError(err instanceof Error ? err.message : 'Submission error. Please email us directly.');
        } finally {
          setSubmitting(false);
        }
      }}
    >
      <div className="grid gap-5 sm:grid-cols-2">
        <FormField label="Full Name" name="fullName" required placeholder="e.g. Alex Smith" />
        <FormField label="Company Name" name="companyName" placeholder="e.g. Industrial Metals Co" />
        <FormField label="Business Email" name="email" type="email" required placeholder="alex@company.com" />
        <FormField label="Phone Number" name="phone" type="tel" required placeholder="+91 / +90 / International" />

        {/* Material Category Selector */}
        <div>
          <label className="block text-sm font-bold text-brand-navy">
            Material Category
            <select
              name="materialCategory"
              className="mt-2 w-full rounded-md border border-slate-200 bg-white px-4 py-3 text-sm text-brand-navy outline-none focus:border-brand-green focus:ring-4 focus:ring-brand-green/10"
            >
              {materialOptions.map((opt) => (
                <option key={opt} value={opt}>
                  {opt}
                </option>
              ))}
            </select>
          </label>
        </div>

        <FormField label="Approximate Quantity (MT)" name="quantity" placeholder="e.g. 50 MT" />

        <div className="sm:col-span-2">
          <FormField
            label="Enquiry Message"
            name="message"
            required
            textarea
            placeholder="Please describe your material requirement, current scrap availability, or business proposal."
          />
        </div>
      </div>

      <div className="mt-6 flex flex-wrap items-center justify-between gap-4">
        <button
          type="submit"
          disabled={submitting}
          className="rounded-lg bg-brand-green px-8 py-3.5 text-sm font-bold text-white transition hover:bg-brand-dark-green shadow disabled:opacity-50"
        >
          {submitting ? 'Sending Enquiry...' : 'Send Enquiry'}
        </button>

        <p className="text-xs text-slate-500">
          Or email directly:{' '}
          <a
            href={`mailto:${officialEmails[0].address}`}
            className="font-bold text-brand-dark-green hover:underline"
          >
            {officialEmails[0].address}
          </a>
        </p>
      </div>

      {error && (
        <p className="mt-4 rounded-lg border border-red-200 bg-red-50 px-4 py-3 text-sm font-semibold text-red-700">
          {error}
        </p>
      )}

      {sent && (
        <div className="mt-5 rounded-lg border border-brand-green/30 bg-brand-green/10 p-5 text-sm text-brand-dark-green">
          <strong className="block font-bold text-base">✓ Enquiry Submitted Successfully</strong>
          <p className="mt-1 text-xs leading-relaxed text-slate-700">
            Thank you! Your enquiry has been received and routed directly to the Aurexon International LLP sourcing desk. You can also reach our team immediately at{' '}
            <a href={`mailto:${officialEmails[0].address}`} className="font-bold underline text-brand-dark-green">
              {officialEmails[0].address}
            </a>{' '}
            or call India:{' '}
            <a href={`tel:${officialPhones[0].phoneRaw}`} className="font-bold underline text-brand-navy">
              {officialPhones[0].number}
            </a>{' '}
            / Turkey:{' '}
            <a href={`tel:${officialPhones[1].phoneRaw}`} className="font-bold underline text-brand-navy">
              {officialPhones[1].number}
            </a>.
          </p>
        </div>
      )}
    </form>
  );
}
