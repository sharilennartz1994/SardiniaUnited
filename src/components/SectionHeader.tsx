type SectionHeaderProps = {
  eyebrow?: string;
  title: string;
  description?: string;
};

export function SectionHeader({ eyebrow, title, description }: SectionHeaderProps) {
  return (
    <div className="mb-8 max-w-3xl">
      {eyebrow ? (
        <p className="mb-2 inline-block rounded-full bg-sky-100 px-3 py-1 text-xs font-bold uppercase tracking-widest text-sky-700">
          {eyebrow}
        </p>
      ) : null}
      <h2 className="text-2xl font-bold text-sky-950 md:text-3xl">{title}</h2>
      {description ? <p className="mt-3 text-sky-700">{description}</p> : null}
    </div>
  );
}
