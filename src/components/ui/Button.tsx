import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: "primary" | "secondary" | "warm" | "outline";
  size?: "sm" | "md" | "lg";
  href?: string;
};

export function Button({
  variant = "primary",
  size = "md",
  className,
  children,
  ...props
}: ButtonProps) {
  const base =
    "inline-flex items-center justify-center gap-2 font-bold rounded transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-blue focus-visible:ring-offset-2";

  const variants = {
    primary: "bg-brand-blue text-white hover:bg-brand-blue-dark active:scale-[0.98]",
    secondary:
      "bg-transparent border-2 border-white/40 text-white hover:bg-white/10",
    warm: "bg-brand-brown text-white hover:bg-brand-brown-light active:scale-[0.98]",
    outline:
      "bg-transparent border-2 border-brand-blue text-brand-blue hover:bg-brand-blue hover:text-white",
  };

  const sizes = {
    sm: "px-4 py-2 text-sm",
    md: "px-6 py-3 text-base",
    lg: "px-8 py-4 text-lg",
  };

  return (
    <button
      className={twMerge(clsx(base, variants[variant], sizes[size], className))}
      {...props}
    >
      {children}
    </button>
  );
}
