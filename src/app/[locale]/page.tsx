import Link from "next/link";
import Clientcomponent from "@/app/components/clientcomponent";
import initTranslations from "../../i18n";
import TranslationsProvider from "../components/TranslationProvider";
import LanguageChanger from "../components/LanguageChanger";

const i18nNamespaces = ["home", "common"];

// @ts-ignore
export default async function Home({ params: { locale } }) {
  // @ts-ignore
  const { t, resources } = await initTranslations(locale, ["home", "common"]);
  return (
    <TranslationsProvider
      resources={resources}
      locale={locale}
      namespaces={i18nNamespaces}
    >
      <div className="flex flex-col items-center justify-center min-h-screen">
        <h1 className="flex justify-center text-center font-bold text-4xl mb-6">
          {t("header")}
        </h1>
        <Clientcomponent />
        <Link href="/about-us" className="mt-4 mb-4">
          {t("common:about_us")}
        </Link>

        <LanguageChanger />
      </div>
    </TranslationsProvider>
  );
}
