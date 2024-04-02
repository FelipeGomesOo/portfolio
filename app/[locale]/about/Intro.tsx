import { useTranslations } from "next-intl";
import { animationDelay } from "@/lib/utils";
export default function Intro() {
  const t = useTranslations("AboutPage.intro");
  return (
    <section className="container mb-16">
      <div style={animationDelay(1)} className="reveal">
        <h1 className="fade-out-down ">{t("title")}</h1>
      </div>
      <div className="mt-8 grid grid-cols-12 gap-6  pb-16">
        <div
          style={animationDelay(2)}
          className="reveal col-span-12 hidden sm:block lg:col-span-4"
        >
          <div className="mt-3 border-t lg:mt-5">&nbsp;</div>
        </div>
        <div className="col-span-12 lg:col-span-8">
          <div style={animationDelay(3)} className="reveal">
            <h3 className="fade-out-down ">{t("p1")}</h3>
          </div>
          <div style={animationDelay(4)} className="reveal">
            <h3 className="fade-out-down mb-2">{t("p2")}</h3>
          </div>
        </div>
      </div>
    </section>
  );
}
