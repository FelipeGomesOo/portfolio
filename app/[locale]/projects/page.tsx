import Footer from "@/components/Footer";
import Portfolio from "@/components/Portfolio/Portfolio";
import { useTranslations } from "next-intl";
import { unstable_setRequestLocale } from "next-intl/server";

export default function Projects({
  params: { locale },
}: {
  params: { locale: string };
}) {
  unstable_setRequestLocale(locale);
  const t = useTranslations("Portfolio");
  return (
    <>
      <section className="relative z-10  mb-[90svh] bg-[#fff] pb-24 pt-[40%] shadow-lg shadow-[black] lg:pt-[15%]">
        <h1 className="reveal container">{t("title")}</h1>
        <Portfolio seeAll={false} />
      </section>
      <Footer />
    </>
  );
}
