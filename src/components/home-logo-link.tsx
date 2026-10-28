"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import type { ReactNode } from "react";

type HomeLogoLinkProps = {
  className?: string;
  children: ReactNode;
};

function isHomePath(pathname: string) {
  return pathname === "/" || pathname === "";
}

export function HomeLogoLink({ className, children }: HomeLogoLinkProps) {
  const pathname = usePathname();

  return (
    <Link
      href="/"
      className={className}
      aria-label="DoctorShina.by — на главную"
      scroll
      onClick={() => {
        if (isHomePath(pathname)) {
          window.scrollTo({ top: 0, behavior: "smooth" });
        }
      }}
    >
      {children}
    </Link>
  );
}
