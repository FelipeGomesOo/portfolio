"use client";
import { useState } from "react";
import LocaleLink from "@/components/LocaleSwitcher";
import { motion, AnimatePresence } from "framer-motion";
import NavigationLink from "./NavigationLink";
import MenuIcon from "@/components/MenuIcon";
import { animationDelay } from "@/lib/utils";

export default function MobileNav({
  work,
  about,
  contact,
}: {
  work: string;
  about: string;
  contact: string;
}) {
  const [menuOpen, setMenuOpen] = useState(false);
  const handleClick = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <nav style={animationDelay(1)} className="reveal lg:hidden">
      <MenuIcon onClick={handleClick} menuOpen={menuOpen} />
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className={`${menuOpen ? "block" : "hidden"} fixed left-0 top-20 z-50 h-svh w-full bg-[#fff] shadow-lg `}
            id="mobile-menu"
          >
            <div className="container space-y-1 pt-8 ">
              <h4 className="mb-4">Menu</h4>
              <div className="flex flex-col gap-4 text-2xl font-bold">
                <NavigationLink onClick={handleClick} href="/projects">
                  {work}
                </NavigationLink>

                <NavigationLink onClick={handleClick} href="/about">
                  {about}
                </NavigationLink>

                <NavigationLink onClick={handleClick} href="/contact">
                  {contact}
                </NavigationLink>
              </div>
            </div>
            <div className="container  mt-4 border-t border-t-primary-light/20 pt-6">
              <h2>
                <LocaleLink className="" />
              </h2>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
