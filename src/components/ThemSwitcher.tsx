// app/components/ThemeSwitcher.tsx
"use client";

import {useTheme} from "next-themes";
import { useEffect, useState } from "react";
import { Moon02Icon, Sun01Icon } from "hugeicons-react";

export function ThemeSwitcher() {
  const [mounted, setMounted] = useState(false)
  const { theme, setTheme } = useTheme()

  useEffect(() => {
    setMounted(true)
  }, [])

  if(!mounted) return null

  return (
    <div>
        {
            theme === 'light' ? (
                <button className="p-2.5 rounded-full cursor-pointer border-1.5 border-black" onClick={() => setTheme('dark')}><Moon02Icon /></button>
            ) : (
                <button  className="p-2.5 rounded-full cursor-pointer border-1.5 border-white bg-stone-500" onClick={() => setTheme('light')}><Sun01Icon /></button>
            )
        }
    </div>
  )
};