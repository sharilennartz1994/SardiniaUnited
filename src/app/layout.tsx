import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "ASD Sardinia United",
  description:
    "Sport per Tutti - Sport, Inclusione e Solidarietà per i Giovani",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
