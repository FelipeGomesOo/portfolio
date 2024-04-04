"use client";
import MenuIcon from "@/components/MenuIcon";
import MobileNavContent from "./MobileNavContent";
import { createPortal } from "react-dom";
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
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);
  const [menuOpen, setMenuOpen] = useState(false);
  const handleClick = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <nav className="lg:hidden">
      <MenuIcon onClick={handleClick} menuOpen={menuOpen} />
      {isClient &&
        createPortal(
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
