'use client'

import { useTransition } from "@/src/hooks/PageTransition/useTransition";
import Link, { LinkProps } from "next/link";

interface TransitionLinkProps extends LinkProps {
  children: React.ReactNode;
  href: string;
  className?: string;
}

export function TransitionLink({ children, href, className = "", ...props }: TransitionLinkProps) {
  const handleTransition = useTransition()

  return (
    <Link
      href={href}
      className={className}
      onClick={handleTransition(href)}
      {...props}
    >
      {children}
    </Link>
  );
}