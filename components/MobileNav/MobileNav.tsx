"use client";
import MenuIcon from "@/components/MenuIcon";
import MobileNavContent from "./MobileNavContent";
import { useEffect, useState } from "react";

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
    <nav className="lg:hidden">
      <MenuIcon onClick={handleClick} menuOpen={menuOpen} />
      <MobileNavContent
        work={work}
        about={about}
        contact={contact}
        onClose={handleClick}
        menuOpen={menuOpen}
      />
    </nav>
  );
}
