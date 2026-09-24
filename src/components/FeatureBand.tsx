type FeatureBandProps = {
  items: { title: string; description: string }[];
};

export default function FeatureBand({ items }: FeatureBandProps) {
  return (
    <div className="grid gap-px overflow-hidden rounded-lg bg-white/12 sm:grid-cols-2 lg:grid-cols-3">
      {items.map((item) => (
        <div key={item.title} className="bg-white/6 p-6">
          <h3 className="font-black tracking-normal text-white">{item.title}</h3>
          <p className="mt-2 text-sm leading-7 text-white/68">{item.description}</p>
        </div>
      ))}
    </div>
  );
}
