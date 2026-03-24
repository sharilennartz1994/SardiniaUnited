import { ReactNode } from "react";

type CardProps = {
  title: string;
  description?: string;
  children?: ReactNode;
};

export function Card({ title, description, children }: CardProps) {
  return (
    <article className="group rounded-2xl border border-[#c7c5d3]/35 bg-white p-6 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-lg">
      <h3 className="text-lg font-bold text-[#030568]">{title}</h3>
      {description ? <p className="mt-2 text-sm text-[#464651]">{description}</p> : null}
      {children ? <div className="mt-4">{children}</div> : null}
    </article>
  );
}
