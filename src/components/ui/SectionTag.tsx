import { clsx } from "clsx";

type SectionTagProps = {
  children: React.ReactNode;
  variant?: "light" | "dark";
  className?: string;
};

export function SectionTag({
  children,
  variant = "dark",
  className,
}: SectionTagProps) {
  return (
    <span
      className={clsx(
        "inline-block font-display text-[10px] sm:text-xs font-bold uppercase tracking-[0.3em]",
        variant === "dark" && "text-brand-blue",
        variant === "light" && "text-white/80",
        className
      )}
    >
      {children}
    </span>
  );
}
