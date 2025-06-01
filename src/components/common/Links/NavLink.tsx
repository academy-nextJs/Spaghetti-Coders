'use client'

import { LinkProps } from "next/link";
import { usePathname } from "next/navigation";
import { TransitionLink } from "./TransitionLink";

interface NavLinkProps extends LinkProps {
  children: React.ReactNode;
  href: string;
  className?: string;
}

export function NavLink({ children, href, className = '', ...props }: NavLinkProps) {
  const pathname = usePathname()
  const isRelevantRoute = pathname === href

  return (
    <TransitionLink
      href={href}
      className={className + (isRelevantRoute ? ' ' + 'gap-2' : '')}
      {...props}
    >
      {isRelevantRoute ? <div className="rounded-full bg-black dark:bg-darkModSubText w-2 h-2"></div> : null}
      {children}
    </TransitionLink>
  );
}