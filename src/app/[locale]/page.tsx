import { HeroSection } from "@/components/home/HeroSection";
import { MissionSection } from "@/components/home/MissionSection";
import { StatsSection } from "@/components/home/StatsSection";
import { HowItWorksSection } from "@/components/home/HowItWorksSection";
import { TargetsSection } from "@/components/home/TargetsSection";
import { DonationCtaBanner } from "@/components/home/DonationCtaBanner";
import { BlogPreviewSection } from "@/components/home/BlogPreviewSection";
import { getTranslations } from "next-intl/server";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "Metadata" });
  return {
    title: t("homeTitle"),
    description: t("homeDescription"),
    keywords: [
      "sport per tutti",
      "calcio a 5 gratuito bambini",
      "futsal",
      "psicologa dello sport",
      "sardinia united",
      "elmas",
      "inclusione sociale sport",
      "sardegna",
    ],
  };
}

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <MissionSection />
      <StatsSection />
      <HowItWorksSection />
      <TargetsSection />
      <DonationCtaBanner />
      <BlogPreviewSection />
    </>
  );
}
