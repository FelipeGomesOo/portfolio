import { useTranslations } from "next-intl";
import Link from "next/link";
export default function Experience() {
  const t = useTranslations("AboutPage");
  const p = useTranslations("AboutPage.experience.positions");
  const keys = [
    "Arajara Park",
    "Oowlish",
    "Pé de Sonhos",
    "Onespacemedia",
    "Piloti Mobile & Internet",
  ] as const;
  return (
    <section className="container my-10 lg:my-16">
      <div className="grid grid-cols-12 gap-4 border-b-2 pb-10 lg:gap-6">
        <h2 className="col-span-12 lg:col-span-4">{t("experience.title")}</h2>
        <div className="grid-col-2 col-span-12  grid-flow-col grid-rows-3 items-stretch gap-x-8 lg:col-span-8 lg:grid">
          {keys.map((key: any) => {
            return (
              <div
                key={key}
                className="w-100 group mb-8 overflow-visible hover:z-10 lg:col-span-1 lg:h-40"
              >
                <div className="w-full rounded-sm outline-[#FFF] transition-all  duration-0 ease-in-out group-hover:outline-[50px] group-hover:duration-150  lg:group-hover:shadow-[0_35px_60px_0px_rgba(0,0,0,0.5)] lg:group-hover:outline">
                  <h4>{p(`${key}.period`)}</h4>
                  <h3 className="mb-1">
                    <Link target="_blank" href={p(`${key}.link`)}>
                      {key}
                      <br /> {p(`${key}.position`)}
                    </Link>
                  </h3>
                  <p className="group-hover:line-clamp-none group-hover:bg-[#fff] lg:line-clamp-2">
                    {p(`${key}.description`)}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
