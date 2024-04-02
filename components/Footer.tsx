import Link from "next/link";
import { useTranslations } from "next-intl";
import Copyright from "./Copyright";

export default function Footer() {
  const t = useTranslations("Contact");

  return (
    <footer className=" -z-1 fixed bottom-0 flex h-[90svh] w-full flex-col   bg-primary-dark pt-12">
      <div className="container text-[#fff]">
        <h4>{t("subtitle")}</h4>
        <h2 className="mb-[1.5rem] text-[2rem]/[1.3] text-[#fff]  md:text-[3rem] lg:text-[3.5rem] xl:text-[5rem] 3xl:text-[6rem]">
          {t("title")}
        </h2>
      </div>
      <div className="container  grow flex-col content-center text-[#fff]">
        <div className="grid w-full grid-cols-12 border-t-primary-light sm:border-t-2">
          <div className="col-span-12 md:col-span-6 lg:col-span-4">
            <h4>Email</h4>
          </div>
          <div className="col-span-12 md:col-span-6 lg:col-span-8">
            <h3 className="text-[#fff]">contato@felipe-gomes.com</h3>
          </div>
        </div>
        <div className="grid w-full grid-cols-12 border-t-primary-light sm:border-t-2">
          <div className="col-span-12 md:col-span-6 lg:col-span-4 ">
            <h4>Whatsapp:</h4>
          </div>
          <div className="col-span-12 md:col-span-6 lg:col-span-8">
            <h3 className="text-[#fff]">
              <Link
                className="link "
                target="_blank"
                href="https://api.whatsapp.com/send/?phone=%2B5521991474675&text&type=phone_number&app_absent=0"
              >
                {t("whatsapp")}
              </Link>
            </h3>
          </div>
        </div>
        <div className="grid w-full grid-cols-12 border-t-primary-light sm:border-t-2">
          <div className="col-span-12 md:col-span-6 lg:col-span-4 ">
            <h4>{t("see_also")}</h4>
          </div>
          <div className="col-span-12 md:col-span-6 lg:col-span-8">
            <h3 className="text-[#fff]">
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

      <Copyright />
    </footer>
  );
}
