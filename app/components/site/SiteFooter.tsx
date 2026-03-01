import Link from "next/link";

export default function SiteFooter() {
  const year = new Date().getFullYear();

  return (
    <footer className="site-footer">
      <div className="page site-footer__inner">
        <p>© {year} Offhand Studio</p>
        <div className="site-footer__links">
          <Link href="/kontakt">Kontakt</Link>
          <Link href="/mozliwosci">Możliwości</Link>
          <Link href="/inspiracje">Inspiracje</Link>
        </div>
      </div>
    </footer>
  );
}
