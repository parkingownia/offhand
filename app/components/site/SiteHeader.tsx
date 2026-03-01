"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { navigation } from "@/app/content/studio";
import ThemeToggle from "@/src/components/ThemeToggle";

function isRouteActive(pathname: string, href: string): boolean {
  if (href === "/") {
    return pathname === "/";
  }

  return pathname === href || pathname.startsWith(`${href}/`);
}

export default function SiteHeader() {
  const pathname = usePathname();

  return (
    <header className="site-header">
      <div className="page site-header__inner">
        <Link href="/" className="site-logo" aria-label="Offhand - strona główna">
          <span className="site-logo__mark">Offhand</span>
          <span className="site-logo__sub">Light Through Glass</span>
        </Link>

        <div className="site-header__actions">
          <nav className="site-nav" aria-label="Nawigacja główna">
            {navigation.map((item) => {
              const active = isRouteActive(pathname, item.href);

              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`site-nav__link ${active ? "is-active" : ""}`.trim()}
                  aria-current={active ? "page" : undefined}
                >
                  {item.label}
                </Link>
              );
            })}
          </nav>

          <ThemeToggle />
        </div>
      </div>
    </header>
  );
}
