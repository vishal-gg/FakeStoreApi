"use client";

import { useTheme } from "next-themes";
import { MdOutlineLightMode, MdOutlineDarkMode } from "react-icons/md";
import { useEffect, useState } from "react";
import { LuLoader } from "react-icons/lu";

const ToggleTheme = () => {
  const { theme, setTheme } = useTheme();
  const [isClient, setIsClient] = useState(false)

  const handleToggle = () => {
    setTheme(theme === "light" ? "dark" : "light")
  }

  useEffect(() => {
    setIsClient(true)
  })

  if (!isClient) return (
    <div>
      <LuLoader className="text-xl animate-spin opacity-70" />
    </div>
  ) 

  return (
    <button onClick={handleToggle} className="flex items-center gap-1 opacity-70 hover:opacity-100 transition-opacity group">
      {theme === "dark" ? (
        <>
          Light <MdOutlineLightMode className="text-xl group-hover:rotate-180 transition-transform" />
        </>
      ) : (
        <>
          Dark <MdOutlineDarkMode className="text-xl" />
        </>
      )}
    </button>
  )
}

export default ToggleTheme;
