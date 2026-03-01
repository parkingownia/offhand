type CopperMaterialProps = {
  className?: string;
};

export default function CopperMaterial({ className = "" }: CopperMaterialProps) {
  return <div aria-hidden="true" className={`copper-material ${className}`.trim()} />;
}
