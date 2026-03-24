import { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ContactForm } from "@/components/ContactForm";
import { SectionHeader } from "@/components/SectionHeader";
import { getContent, isLocale } from "@/i18n/content";

type Params = Promise<{ locale: string }>;

export async function generateMetadata({ params }: { params: Params }): Promise<Metadata> {
  const { locale } = await params;
  if (!isLocale(locale)) return {};
  return {
    title: locale === "it" ? "Contatti" : "Contact",
    description:
      locale === "it"
        ? "Contatta Sardinia United per iscrizioni, donazioni e collaborazioni."
        : "Get in touch with Sardinia United for enrollment, donations, and partnerships."
  };
}

export default async function ContactPage({ params }: { params: Params }) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();
  const t = getContent(locale);

  return (
    <div className="space-y-8">
      <SectionHeader
        eyebrow={t.contact.eyebrow}
        title={t.contact.title}
        description={t.contact.description}
      />
      <div className="grid gap-6 md:grid-cols-2">
        <ContactForm locale={locale} />
        <aside className="rounded-2xl border border-sky-100 bg-white p-6 shadow-sm">
          <h2 className="text-lg font-semibold text-sky-900">{t.contact.socialLinks}</h2>
          <ul className="mt-4 space-y-2 text-sm text-sky-700">
            <li>
              Instagram:{" "}
              <Link className="font-medium text-sky-900 hover:text-sky-700" href="#">
                @sardiniaunited
              </Link>
            </li>
            <li>
              Facebook:{" "}
              <Link className="font-medium text-sky-900 hover:text-sky-700" href="#">
                Sardinia United
              </Link>
            </li>
            <li>
              Email:{" "}
              <Link
                className="font-medium text-sky-900 hover:text-sky-700"
                href="mailto:info@sardiniaunited.org"
              >
                info@sardiniaunited.org
              </Link>
            </li>
          </ul>
        </aside>
      </div>
    </div>
  );
}
