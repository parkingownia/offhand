type SectionProps = {
  children: React.ReactNode;
  className?: string;
  id?: string;
};

export default function Section({ children, className = "", id }: SectionProps) {
  return (
    <section id={id} className={`studio-section ${className}`.trim()}>
      <div className="page">{children}</div>
    </section>
  );
}
