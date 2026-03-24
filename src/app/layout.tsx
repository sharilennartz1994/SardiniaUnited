import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: "Sardinia United | Free Futsal for Children",
    template: "%s | Sardinia United"
  },
  description:
    "Sardinia United is a non-profit association offering free football activities for children aged 4-12 from economically disadvantaged families in Sardinia.",
  keywords: [
    "Sardinia United",
    "non-profit",
    "futsal",
    "children",
    "social inclusion",
    "Sardinia"
  ]
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="it">
      <body>{children}</body>
    </html>
  );
}
