import { Factory } from 'lucide-react';

type IndustryCardProps = {
  title: string;
};

export default function IndustryCard({ title }: IndustryCardProps) {
  return (
    <div className="flex items-center gap-3 rounded-lg border border-slate-200 bg-white p-4 shadow-sm">
      <span className="grid h-10 w-10 shrink-0 place-items-center rounded-md bg-brand-navy text-brand-lime">
        <Factory className="h-5 w-5" aria-hidden="true" />
      </span>
      <span className="font-bold text-brand-navy">{title}</span>
    </div>
  );
}
