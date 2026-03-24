import Image from "next/image";
import Link from "next/link";

type BrandLogoProps = {
  variant?: "negative" | "white";
  showText?: boolean;
  href?: string;
};

export function BrandLogo({ variant = "negative", showText = true, href = "/" }: BrandLogoProps) {
  const src = variant === "white" ? "/logo-white.png" : "/logo-negative.png";

  return (
    <Link href={href} className="flex items-center gap-3">
      <Image
        src={src}
        alt="Sardinia United logo"
        width={72}
        height={100}
        className="h-14 w-auto shrink-0 object-contain"
      />
      {showText ? (
        <span className={`text-lg font-bold ${variant === "white" ? "text-white" : "text-sky-900"}`}>
          Sardinia United
        </span>
      ) : null}
    </Link>
  );
}
