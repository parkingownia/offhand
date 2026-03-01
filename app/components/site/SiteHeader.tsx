import Link from "next/link";
import { navigation } from "@/app/content/studio";

export default function SiteHeader() {
  return (
    <header className="site-header">
      <div className="page site-header__inner">
        <Link href="/" className="site-logo" aria-label="Offhand - strona główna">
          <span className="site-logo__mark">Offhand</span>
          <span className="site-logo__sub">Light Through Glass</span>
        </Link>

        <nav className="site-nav" aria-label="Nawigacja główna">
          {navigation.map((item) => (
            <Link key={item.href} href={item.href} className="site-nav__link">
              {item.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}
