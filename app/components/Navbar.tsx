"use client"

import Link from "next/link";
import { usePathname } from "next/navigation";
import { FiArrowUpRight } from "react-icons/fi";
import ToggleTheme from "./ToggleTheme";
import { cn } from "@/lib/utils";

const Navbar = () => {
  const pathname = usePathname()

  return (
    <div>
      <div
        className="flex justify-between max-sm:flex-col gap-4 items-center p-5 px-8 font-semibold bg-white/70 dark:bg-[#020817d0] border-b border-gray-100 dark:border-white/5 backdrop-blur-sm fixed z-50 top-0 left-0 w-full"
      >
        <div>
          <Link href="/">
            FakeStore<strong className="text-pink-500">API</strong>
          </Link>
        </div>
        <div className="flex items-center gap-6">
          <ul className="flex items-center gap-6 ">
            <li className={cn("opacity-60 hover:opacity-100 transition-opacity",
            pathname === '/' && "opacity-100"
            )}>
              <Link href="/">Home</Link>
            </li>
            <li className={cn("opacity-60 hover:opacity-100 transition-opacity",
            pathname === '/docs' && "opacity-100"
            )}>
              <Link href="/docs">Docs</Link>
            </li>
            <li className="opacity-60 hover:opacity-100 transition-opacity group">
              <Link href="https://github.com/vishal-gg/fakeStoreApi" target="_blank" className="flex items-center">
                GitHub <FiArrowUpRight className="text-xl group-hover:-translate-y-[2px] group-hover:translate-x-[2px] transition-transform" />
              </Link>
            </li>
          </ul>
          <ToggleTheme />
        </div>
      </div>
    </div>
  )
}

export default Navbar;
