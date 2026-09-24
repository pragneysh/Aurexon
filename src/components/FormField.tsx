type FormFieldProps = {
  label: string;
  name: string;
  type?: string;
  required?: boolean;
  textarea?: boolean;
  placeholder?: string;
  defaultValue?: string;
};

export default function FormField({ label, name, type = 'text', required = false, textarea = false, placeholder, defaultValue }: FormFieldProps) {
  const baseClass =
    'mt-2 w-full rounded-md border border-slate-200 bg-white px-4 py-3 text-sm text-brand-navy outline-none transition placeholder:text-slate-400 focus:border-brand-green focus:ring-4 focus:ring-brand-green/10';

  return (
    <label className="block text-sm font-bold text-brand-navy">
      {label} {required && <span className="text-brand-green">*</span>}
      {textarea ? (
        <textarea name={name} required={required} placeholder={placeholder} defaultValue={defaultValue} rows={5} className={baseClass} />
      ) : (
        <input name={name} type={type} required={required} placeholder={placeholder} defaultValue={defaultValue} className={baseClass} />
      )}
    </label>
  );
}
