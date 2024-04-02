import { useTranslations } from "next-intl";
import { Link } from "@/navigation";

export default function About() {
  const t = useTranslations("HomePage.about");
  return (
    <section id="about" className="container mt-12 md:mt-24">
      <div className="w-full lg:w-4/6">
        <h2>{t("title")}</h2>
        <h3>{t("description")}</h3>
        <h3 className="mb-0">
          {t.rich("cta", {
            Link: (chunks) => (
              <Link className="text-blue hover:text-green" href="/about">
                {chunks}
              </Link>
            ),
          })}
        </h3>
      </div>
    </section>
  );
}
