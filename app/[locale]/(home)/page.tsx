import Portfolio from "@/components/Portfolio/Portfolio";
import Hero from "./Hero";
import { useTranslations } from "next-intl";
import Footer from "@/components/Footer";
import { animationDelay } from "@/lib/utils";
import { unstable_setRequestLocale } from "next-intl/server";
export default function Home({
  params: { locale },
}: {
  params: { locale: string };
}) {
  unstable_setRequestLocale(locale);
  const t = useTranslations("HomePage");
  return (
    <>
      <section className="relative z-10  mb-[90svh] bg-[#fff] pb-24 pt-[40%] shadow-lg shadow-[black] lg:pt-[15%]">
        <Hero />
        <div style={animationDelay(6)} className="reveal container bg-[#fff]">
          <div className="fade-in border-t-4 pb-2 pt-2 ">
            <h2 className=" fade-in w-10/12 ">{t("projects.title")}</h2>
          </div>
        </div>
        <Portfolio filterable={false} limit={6} />
      </section>
      <Footer />
    </>
  );
}
