"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { MenuOverlay } from "./MenuOverlay";
import { LanguageSelector } from "./LanguageSelector";
import { HamburgerButton } from "./HamburgerButton";

function getCurrentSection(pathname: string): string {
  if (pathname.includes("/about")) return "About";
  if (pathname.includes("/contact")) return "Contact";
  return "Work";
}

function getCurrentLocale(pathname: string): string {
  const match = pathname.match(/^\/(en|es|it)\//);
  return match ? match[1] : "en";
}

export function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();
  const section = getCurrentSection(pathname);
  const locale = getCurrentLocale(pathname);

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-40 px-8 md:px-12 lg:px-20 py-6 flex items-start justify-between bg-white/90 backdrop-blur-sm">
        <div>
          <Link
            href={`/${locale}/work/`}
            className="text-sm font-bold uppercase tracking-wide"
          >
            Juan Pablo Tazzioli
          </Link>
          <p className="text-xs text-muted mt-0.5">{section}</p>
        </div>

        <div className="flex items-center gap-4">
          <LanguageSelector locale={locale} />
          <HamburgerButton
            isOpen={menuOpen}
            onClick={() => setMenuOpen(!menuOpen)}
          />
        </div>
      </header>

      <MenuOverlay
        isOpen={menuOpen}
        locale={locale}
        currentSection={section}
        onClose={() => setMenuOpen(false)}
      />
    </>
  );
}
