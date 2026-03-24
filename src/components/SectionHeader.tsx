type SectionHeaderProps = {
  eyebrow?: string;
  title: string;
  description?: string;
};

export function SectionHeader({ eyebrow, title, description }: SectionHeaderProps) {
  return (
    <div className="mb-8 max-w-3xl">
      {eyebrow ? (
        <p className="mb-3 inline-block rounded-full bg-[#f2e0c3] px-3 py-1 text-xs font-bold uppercase tracking-[0.2em] text-[#231a08]">
          {eyebrow}
        </p>
      ) : null}
      <h2 className="text-3xl font-black tracking-tight text-[#030568] md:text-4xl">{title}</h2>
      {description ? <p className="mt-3 text-[#464651]">{description}</p> : null}
    </div>
  );
}
