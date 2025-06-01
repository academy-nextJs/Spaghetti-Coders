'use client'

import { useTransitionRouter } from "next-view-transitions";
import { usePathname } from "next/navigation";

export function useTransition() {
  const router = useTransitionRouter()
  const pathname = usePathname()

  const triggerPageTransition = () => {
    document.documentElement.animate([
      {
        clipPath: 'polygon(25% 75%, 75% 75%, 75% 75%, 25% 75%)'
      },
      {
        clipPath: 'polygon(0% 100%, 100% 100%, 100% 0%, 0% 0%)'
      }
    ],
    {
      duration: 2000,
      easing: 'cubic-bezier(0.9, 0, 0.1, 1)',
      pseudoElement: '::view-transition-new(root)'
    })
  }

  const handleTransition = (path: string) => (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
    e.preventDefault();
    if(path === pathname) {
      return;
    }

    router.push(path, {
      onTransitionReady: triggerPageTransition,
    })
  }

  return handleTransition;
}