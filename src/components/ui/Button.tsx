import Link from "next/link";

interface ButtonProps {
  children: React.ReactNode;
  href?: string;
  variant?: "primary" | "secondary";
  className?: string;
}

export default function Button({
  children,
  href,
  variant = "primary",
  className = "",
}: ButtonProps) {
  //   const base =
  //     "inline-flex items-center justify-center gap-2 rounded-full px-5 py-3 text-sm font-medium transition-all duration-300";

  //   const variants = {
  //     primary:
  //       "bg-[#111111] text-white hover:bg-[#292929] hover:-translate-y-0.5",
  //     secondary:
  //       "border border-[#dededb] bg-transparent text-[#111111] hover:bg-white hover:-translate-y-0.5",
  //   };
  const base =
    "relative inline-flex items-center justify-center gap-2 rounded-full px-5 py-3 text-sm font-medium transition-all duration-300";

  const variants = {
    primary:
      "bg-[#111111] text-white hover:-translate-y-0.5 hover:bg-[#292929]",
    secondary:
      "border border-[#dededb] bg-transparent text-[#111111] hover:-translate-y-0.5 hover:bg-white",
  };

  const classes = `${base} ${variants[variant]} ${className}`;

  if (href) {
    return (
      <Link href={href} className={classes}>
        {children}
      </Link>
    );
  }

  return (
    <button type="button" className={classes}>
      {children}
    </button>
  );
}
