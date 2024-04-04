import { Link } from "@/navigation";
import MobileNav from "@/components/MobileNav/MobileNav";
import { useTranslations } from "next-intl";
import LocaleSwitcher from "@/components/LocaleSwitcher";
import Logo from "@/components/Logo";
import NavigationLink from "@/components/NavigationLink";
import { animationDelay } from "@/lib/utils";

export default function Header() {
  const t = useTranslations("Navigation");
  return (
    <header className=" absolute top-0 z-20 w-full ">
      <div className="container flex h-24 items-center  md:h-28 xl:h-32">
        <Link
          style={animationDelay(0)}
          href="/"
          className="reveal grow basis-1/3"
        >
          <Logo className="w-[9rem] fill-primary-dark transition-all hover:fill-blue  md:w-[12rem] xl:w-[13rem]" />
        </Link>
        <nav className="hidden grow basis-1/3 items-center  justify-end gap-6 lg:flex ">
          <div className="flex justify-center  gap-10  text-xl xl:text-2xl">
            <NavigationLink
              style={animationDelay(2)}
              className="link reveal"
              href="/projects"
            >
              {t("work")}
            </NavigationLink>
            <NavigationLink
              style={animationDelay(3)}
              className="link reveal"
              href="/about"
            >
              {t("about")}
            </NavigationLink>
            <NavigationLink
              style={animationDelay(4)}
              className="link reveal"
              href="/contact"
            >
              {t("contact")}
            </NavigationLink>
          </div>
          <LocaleSwitcher className="reveal" />
        </nav>
        <div className="reveal" style={animationDelay(1)}>
          <MobileNav
            work={t("work")}
            about={t("about")}
            contact={t("contact")}
          />
        </div>
      </div>
    </header>
  );
}
