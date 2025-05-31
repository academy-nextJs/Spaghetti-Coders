'use client'

import Link, { LinkProps } from "next/link";
import { usePathname } from "next/navigation";

interface NavLinkProps extends LinkProps {
  children: React.ReactNode;
  href: string;
  className?: string;
}

export function NavLink({ children, href, className = '', ...props}: NavLinkProps) {
  const pathname = usePathname()
  const isRelevantRoute = pathname === href
  
  return (
    <Link 
      href={href}
      className={className + (isRelevantRoute ? ' ' + 'gap-2' : '')}
      {...props}
    >
      {isRelevantRoute ? <div className="rounded-full bg-black dark:bg-darkModSubText w-2 h-2"></div> : null}
      {children}
    </Link>
  );
}