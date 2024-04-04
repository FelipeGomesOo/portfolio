"use client";
import { useState } from "react";
import MenuIcon from "@/components/MenuIcon";
import MobileNavContent from "./MobileNavContent";
import { createPortal } from "react-dom";

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
      {createPortal(
        <MobileNavContent
          work={work}
          about={about}
          contact={contact}
          onClose={handleClick}
          menuOpen={menuOpen}
        />,
        document.body,
      )}
    </nav>
  );
}
