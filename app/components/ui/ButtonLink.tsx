import Link from "next/link";

const classesByVariant = {
  primary: "btn btn--primary",
  secondary: "btn btn--secondary",
  ghost: "btn btn--ghost",
} as const;

type Variant = keyof typeof classesByVariant;

type ButtonLinkProps = {
  href: string;
  children: React.ReactNode;
  variant?: Variant;
  className?: string;
};

export default function ButtonLink({
  href,
  children,
  variant = "primary",
  className = "",
}: ButtonLinkProps) {
  const classes = `${classesByVariant[variant]} ${className}`.trim();
  return (
    <Link href={href} className={classes}>
      {children}
    </Link>
  );
}
