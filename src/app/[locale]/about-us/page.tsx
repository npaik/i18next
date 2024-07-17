import Link from "next/link";
import initTranslations from "@/i18n";
import TranslationsProvider from "@/app/components/TranslationProvider";

const i18nNamespaces = ["about-us", "common"];

// @ts-ignore
export default async function AboutUs({ params: { locale } }) {
  // @ts-ignore
  const { t, resources } = await initTranslations(locale, i18nNamespaces);
  return (
    <TranslationsProvider
      resources={resources}
      locale={locale}
      namespaces={i18nNamespaces}
    >
      <div className="flex flex-col items-center justify-center min-h-screen">
        <h1 className="flex justify-center text-center font-bold text-4xl mb-6">
          {t("common:about_us")}
        </h1>
        <p className="font-bold mb-2 text-xl">{t("our_address")}</p>
        <p className="mb-4">
          409 Granville St
          <br />
          Vancouver, BC
        </p>
        <Link href="/">{t("back")}</Link>
      </div>
    </TranslationsProvider>
  );
}
