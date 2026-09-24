type CardProps = {
  children: React.ReactNode;
  className?: string;
};

export default function Card({ children, className = '' }: CardProps) {
  return <div className={`rounded-lg border border-[var(--border)] bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-industrial ${className}`}>{children}</div>;
}
