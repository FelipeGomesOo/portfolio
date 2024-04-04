import { useTranslations } from "next-intl";
import { Link } from "@/navigation";
import { animationDelay } from "@/lib/utils";

export default function Hero() {
  const t = useTranslations("HomePage");
  return (
    <section className="fade-out-down container h-[80svh] sm:h-[85svh]  ">
      <h1 style={animationDelay(1)} className="reveal">
        {t("hero.subtitle")}
      </h1>
      <div className=" mt-8 grid grid-cols-12 gap-6">
        <div
          style={animationDelay(2)}
          className="reveal col-span-12 hidden sm:block lg:col-span-2"
        >
          <div className="mt-3 border-t lg:mt-5">&nbsp;</div>
        </div>
        <div className="col-span-12  lg:col-span-10">
          <h2 style={animationDelay(2)} className="reveal">
            {t("about.description")}
          </h2>
          <div style={animationDelay(3)} className="reveal flex gap-4 ">
            <Link className="button medium" href="/about">
              {t("about.cta_about")}
            </Link>
            <Link className="button medium" href="/projects">
              {t("about.cta_work")}
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
