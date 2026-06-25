import Link from "next/link";
import { ReactNode } from "react";

type ButtonProps = {
  href?: string;
  children: ReactNode;
  variant?: "primary" | "outline" | "light";
  size?: "default" | "lg";
  className?: string;
  type?: "button" | "submit";
  icon?: ReactNode;
  iconAfter?: boolean;
  disabled?: boolean;
};

export default function Button({
  href,
  children,
  variant = "primary",
  size = "default",
  className = "",
  type = "button",
  icon,
  iconAfter = false,
  disabled = false,
}: ButtonProps) {
  const classes = [
    "btn",
    `btn--${variant}`,
    size === "lg" ? "btn--lg" : "",
    iconAfter ? "btn--icon-after" : "",
    className,
  ]
    .filter(Boolean)
    .join(" ");

  const content = (
    <>
      {icon}
      {children}
    </>
  );

  if (href) {
    return (
      <Link href={href} className={classes}>
        {content}
      </Link>
    );
  }

  return (
    <button type={type} className={classes} disabled={disabled}>
      {content}
    </button>
  );
}
