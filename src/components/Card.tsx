import { ReactNode } from "react";

type CardProps = {
  title: string;
  description?: string;
  children?: ReactNode;
};

export function Card({ title, description, children }: CardProps) {
  return (
    <article className="group rounded-2xl border border-sky-100 bg-white/95 p-6 shadow-sm transition duration-300 hover:-translate-y-1 hover:border-sky-300 hover:shadow-lg">
      <h3 className="text-lg font-semibold text-sky-900">{title}</h3>
      {description ? <p className="mt-2 text-sm text-sky-700 transition group-hover:text-sky-800">{description}</p> : null}
      {children ? <div className="mt-4">{children}</div> : null}
    </article>
  );
}
