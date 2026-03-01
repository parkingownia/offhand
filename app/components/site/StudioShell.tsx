import PageBackdrop from "@/app/components/site/PageBackdrop";
import SiteFooter from "@/app/components/site/SiteFooter";
import SiteHeader from "@/app/components/site/SiteHeader";

type StudioShellProps = {
  children: React.ReactNode;
};

export default function StudioShell({ children }: StudioShellProps) {
  return (
    <>
      <PageBackdrop />
      <div className="site-shell">
        <SiteHeader />
        <main className="studio-main">{children}</main>
        <SiteFooter />
      </div>
    </>
  );
}
