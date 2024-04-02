"use client";

import { useSelectedLayoutSegment } from "next/navigation";
import { ComponentProps } from "react";
import { Link, pathnames } from "@/navigation";

export default function NavigationLink<
  Pathname extends keyof typeof pathnames,
>({ href, className, ...rest }: ComponentProps<typeof Link<Pathname>>) {
  const selectedLayoutSegment = useSelectedLayoutSegment();
  const pathname = selectedLayoutSegment ? `/${selectedLayoutSegment}` : "/";
  const isActive = pathname === href;
  const linkStyle = isActive ? "font-bold text-blue active" : "";

  return (
    <Link
      aria-current={isActive ? "page" : undefined}
      href={href}
      className={`${linkStyle} ${className}`}
      {...rest}
    />
  );
}
