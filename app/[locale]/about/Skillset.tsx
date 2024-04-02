import { useTranslations, useMessages } from "next-intl";
export default function Skillset() {
  const t = useTranslations("AboutPage.skillset");
  const pskillsKeys = ["Languages", "Tools", "Experience"] as const;
  const dskillsKeys = ["Tools", "Experience"] as const;

  return (
    <section className="container my-10 grid grid-cols-12 gap-4 lg:my-16 lg:gap-6">
      <h2 className="col-span-12 lg:col-span-4">{t("title")}</h2>

      <div className="col-span-12 lg:col-span-4">
        <h3>
          <strong>{t("programming.title")}</strong>
        </h3>
        {pskillsKeys.map((skill: any, index: number) => {
          // console.log(skill )
          return (
            <div key={index} className="w-full ">
              <h4 className="block">
                {t(`programming.skills.${skill}.title`)}
              </h4>
              <h3>{t(`programming.skills.${skill}.value`)}</h3>
            </div>
          );
        })}
      </div>
      <div className="col-span-12 lg:col-span-4">
        <h3>
          <strong>{t("design.title")}</strong>
        </h3>
        {dskillsKeys.map((skill: any, index: number) => {
          return (
            <div key={index} className="w-full ">
              <h4 className="block">{t(`design.skills.${skill}.title`)}</h4>
              <h3>{t(`design.skills.${skill}.value`)}</h3>
            </div>
          );
        })}
      </div>
    </section>
  );
}
