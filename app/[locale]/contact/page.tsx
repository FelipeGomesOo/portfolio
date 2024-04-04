import Link from "next/link";
import { useTranslations } from "next-intl";
import { animationDelay } from "@/lib/utils";
import { unstable_setRequestLocale } from "next-intl/server";

export default function Contact({
  params: { locale },
}: {
  params: { locale: string };
}) {
  unstable_setRequestLocale(locale);
  const t = useTranslations("Contact");

  return (
    <>
      <section className="container pt-[40%] lg:pt-[15%]">
        <h1 style={animationDelay(1)} className="reveal md:pb-10">
          {t("titlePage")}
        </h1>
        <div>
          <div
            style={animationDelay(2)}
            className="reveal grid w-full grid-cols-12 border-t-primary-light sm:border-t-2"
          >
            <div className="col-span-12 md:col-span-6 lg:col-span-4">
              <h4>Email</h4>
            </div>
            <div className="col-span-12 md:col-span-6 lg:col-span-8">
              <h3 className="">contato@felipe-gomes.com</h3>
            </div>
          </div>
          <div
            style={animationDelay(3)}
            className="reveal grid w-full grid-cols-12 border-t-primary-light sm:border-t-2"
          >
            <div className="col-span-12 md:col-span-6 lg:col-span-4 ">
              <h4>Whatsapp:</h4>
            </div>
            <div className="col-span-12 md:col-span-6 lg:col-span-8">
              <h3 className="">
                <Link
                  className="link"
                  target="_blank"
                  href="https://api.whatsapp.com/send/?phone=%2B5521991474675&text&type=phone_number&app_absent=0"
                >
                  {t("whatsapp")}
                </Link>
              </h3>
            </div>
          </div>
          <div
            style={animationDelay(5)}
            className="reveal grid w-full grid-cols-12 border-t-primary-light sm:border-t-2"
          >
            <div className="col-span-12 md:col-span-6 lg:col-span-4 ">
              <h4>{t("see_also")}</h4>
            </div>
            <div className="col-span-12 md:col-span-6 lg:col-span-8">
              <h3 className="">
                <div className="space-x-4">
                  <Link
                    className="link"
                    target="_blank"
                    href="https://github.com/FelipeGomesOo"
                  >
                    Github
                  </Link>
                  <Link
                    className="link"
                    target="_blank"
                    href="https://www.behance.net/FelipeGomesO_o"
                  >
                    Behance
                  </Link>
                  <Link
                    className="link"
                    target="_blank"
                    href="https://www.linkedin.com/in/felipegomesoliveira/"
                  >
                    Linkedin
                  </Link>
                </div>
              </h3>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
