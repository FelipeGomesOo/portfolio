"use client";
import LocaleLink from "@/components/LocaleSwitcher";
import NavigationLink from "@/components/NavigationLink";
import MenuIcon from "@/components/MenuIcon";
import { Link } from "@/navigation";
import Logo from "@/components/Logo";

export default function ModalContent({
  onClose,
  menuOpen,
  work,
  about,
  contact,
}: any) {
  return (
    <div
      className={`${menuOpen ? "scale-y-100 " : "scale-y-0  "} transition-scale-100 container fixed left-0 top-0 z-50 flex h-svh w-full origin-top flex-col bg-primary-dark   `}
      style={{
        transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 1s",
        transitionDelay: menuOpen ? "0.1s" : "1s",
      }}
    >
      <div
        className={`${menuOpen ? "opacity-100" : "opacity-0"} flex grow flex-col`}
        style={{
          transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 1s",
          transitionDelay: menuOpen ? "1s" : "0.1s",
        }}
      >
        <section className="flex h-24 items-center md:h-28">
          <Link href="/" className="grow basis-1/3" onClick={onClose}>
            <Logo className="w-[9rem] fill-[#fff] transition-all hover:fill-blue  md:w-[12rem] xl:w-[13rem]" />
          </Link>
          <MenuIcon onClick={onClose} menuOpen={menuOpen} />
        </section>
        <section className="mt-16 grow">
          <h4 className="mb-4">Menu</h4>
          <div className="flex flex-col gap-4 text-2xl font-bold text-[#fff]">
            <NavigationLink onClick={onClose} href="/projects">
              {work}
            </NavigationLink>
            <NavigationLink onClick={onClose} href="/about">
              {about}
            </NavigationLink>
            <NavigationLink onClick={onClose} href="/contact">
              {contact}
            </NavigationLink>
          </div>
        </section>
        <section className="h-24  content-center items-center border-t border-t-primary-light/20 ">
          <LocaleLink className="mt-2 text-[#fff]" />
        </section>
      </div>
    </div>
  );
}
