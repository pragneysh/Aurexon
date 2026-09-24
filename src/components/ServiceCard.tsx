import type { LucideIcon } from 'lucide-react';
import Card from './Card';

type ServiceCardProps = {
  title: string;
  description: string;
  icon: LucideIcon;
};

export default function ServiceCard({ title, description, icon: Icon }: ServiceCardProps) {
  return (
    <Card className="p-6">
      <span className="grid h-12 w-12 place-items-center rounded-md bg-brand-green/10 text-brand-dark-green">
        <Icon className="h-6 w-6" aria-hidden="true" />
      </span>
      <h3 className="mt-5 text-lg font-black tracking-normal text-brand-navy">{title}</h3>
      <p className="mt-3 text-sm leading-7 text-slate-600">{description}</p>
    </Card>
  );
}
