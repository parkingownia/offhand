import CopperMaterial from "@/app/components/ui/CopperMaterial";
import CornerMarks from "@/app/components/ui/CornerMarks";

type GlassMaterial = "none" | "copper";

type GlassCardProps = {
  children: React.ReactNode;
  className?: string;
  material?: GlassMaterial;
  cornerMarks?: boolean;
};

export default function GlassCard({
  children,
  className = "",
  material = "none",
  cornerMarks = false,
}: GlassCardProps) {
  const materialClass = material === "copper" ? "glass-card--material-copper" : "";
  const cornerClass = cornerMarks ? "glass-card--with-corners" : "";

  return (
    <article className={`glass-card ${materialClass} ${cornerClass} ${className}`.trim()}>
      {material === "copper" ? <CopperMaterial /> : null}
      {cornerMarks ? <CornerMarks /> : null}
      <div className="glass-card__content">{children}</div>
    </article>
  );
}
