import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import FormField from './FormField';

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const phonePattern = /^[+()\-\s0-9]{7,}$/;

const standardMaterials = [
  'Aluminium Scrap',
  'Brass Scrap',
  'Ferrous Scrap',
  'Copper Scrap',
  'Stainless Steel Scrap',
  'Other Material',
];

export default function QuoteForm() {
  const [sent, setSent] = useState(false);
  const [error, setError] = useState('');
  const [searchParams] = useSearchParams();
  const requestedMaterial = searchParams.get('material') ?? '';

  const [selectedMaterial, setSelectedMaterial] = useState(requestedMaterial || 'Aluminium Scrap');

  useEffect(() => {
    if (requestedMaterial) {
      setSelectedMaterial(requestedMaterial);
    }
  }, [requestedMaterial]);

  return (
    <form
      id="quote"
      noValidate
      className="scroll-mt-28 rounded-xl bg-brand-navy p-6 sm:p-8 text-white shadow-industrial"
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
          setError('Please complete all required fields: name, phone, email, and material.');
          return;
        }

        if (!emailPattern.test(email)) {
          setSent(false);
          setError('Please enter a valid business email address.');
          return;
        }

        if (!phonePattern.test(phone)) {
          setSent(false);
          setError('Please enter a valid telephone number.');
          return;
        }

        setError('');
        setSent(true);
      }}
    >
      <p className="eyebrow text-brand-lime">Request a Quotation</p>
      <h2 className="mt-2 text-2xl font-black tracking-normal sm:text-3xl">
        Share Your Material Requirement
      </h2>
      <p className="mt-2 text-xs text-white/70">
        Receive tailored sourcing terms, packing specs, and availability confirmation.
      </p>

      <div className="mt-6 grid gap-5 sm:grid-cols-2">
        <div className="[&_label]:text-white">
          <FormField label="Full Name" name="quoteName" required placeholder="e.g. John Doe" />
        </div>
        <div className="[&_label]:text-white">
          <FormField label="Company Name" name="quoteCompany" placeholder="e.g. Metal Works Ltd" />
        </div>
        <div className="[&_label]:text-white">
          <FormField label="Phone Number" name="quotePhone" type="tel" required placeholder="+91 / +90 / International" />
        </div>
        <div className="[&_label]:text-white">
          <FormField label="Business Email" name="quoteEmail" type="email" required placeholder="name@company.com" />
        </div>

        {/* Material Selection */}
        <div className="sm:col-span-2">
          <label className="block text-sm font-bold text-white">
            Material Category / Item <span className="text-brand-lime">*</span>
            <div className="mt-2 grid gap-3 sm:grid-cols-2">
              <select
                name="quoteMaterialCategory"
                value={standardMaterials.includes(selectedMaterial) ? selectedMaterial : 'Specific Product / Other'}
                onChange={(e) => {
                  if (e.target.value !== 'Specific Product / Other') {
                    setSelectedMaterial(e.target.value);
                  }
                }}
                className="w-full rounded-md border border-slate-200 bg-white px-4 py-3 text-sm text-brand-navy outline-none focus:border-brand-green focus:ring-4 focus:ring-brand-green/20"
              >
                {standardMaterials.map((mat) => (
                  <option key={mat} value={mat}>
                    {mat}
                  </option>
                ))}
                {!standardMaterials.includes(selectedMaterial) && selectedMaterial && (
                  <option value="Specific Product / Other">
                    Specific Product: {selectedMaterial}
                  </option>
                )}
              </select>

              <input
                type="text"
                name="quoteMaterial"
                value={selectedMaterial}
                onChange={(e) => setSelectedMaterial(e.target.value)}
                placeholder="Specific material grade or product name"
                className="w-full rounded-md border border-slate-200 bg-white px-4 py-3 text-sm text-brand-navy outline-none focus:border-brand-green focus:ring-4 focus:ring-brand-green/20"
                required
              />
            </div>
          </label>
        </div>

        <div className="[&_label]:text-white">
          <FormField label="Approximate Quantity (MT)" name="quoteQuantity" placeholder="e.g. 25 MT / 100 MT / Spot" />
        </div>
        <div className="[&_label]:text-white">
          <FormField label="Delivery Port / Location" name="quoteLocation" placeholder="e.g. Mundra / Istanbul / CIF port" />
        </div>
        <div className="sm:col-span-2 [&_label]:text-white">
          <FormField
            label="Additional Specifications / Notes"
            name="quoteMessage"
            textarea
            placeholder="Include any alloy preferences, packing needs (bales/drums/containers), or target delivery timeframes."
          />
        </div>
      </div>

      <button
        type="submit"
        className="mt-6 w-full sm:w-auto rounded-lg bg-brand-lime px-8 py-3.5 text-sm font-black text-brand-navy transition hover:bg-white shadow-md"
      >
        Submit Quote Request
      </button>

      {error && (
        <p className="mt-4 rounded-lg border border-red-300/40 bg-red-500/20 px-4 py-3 text-sm font-semibold text-white">
          {error}
        </p>
      )}

      {sent && (
        <div className="mt-5 rounded-lg border border-brand-lime/40 bg-white/10 p-4 text-sm text-white">
          <strong className="block font-bold text-brand-lime">
            ✓ Quotation Request Form Validated
          </strong>
          <p className="mt-1 text-xs text-white/80 leading-relaxed">
            All fields have been validated on the client side. Connect this form to an email gateway or backend API service to transmit production enquiries.
          </p>
        </div>
      )}
    </form>
  );
}
