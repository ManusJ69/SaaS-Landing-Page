"use client"
import ArrowRight from "@/assets/arrow-right.svg"
import Logo from "@/assets/logosaas.png"
import Image from "next/image"
import MenuIcon from "@/assets/menu.svg"
import Link from 'next/link'
import { usePathname } from "next/navigation"
import { useState } from "react"

export const Header = () => {

  const path = usePathname()
  const menuItem = [

    {
      name: "About",
      link: "/about",
    },
    {
      name: "Features",
      link: "/features",
    },
    {
      name: "Customers",
      link: "/customers",
    },
    {
      name: "Updates",
      link: "/updates",
    },
    {
      name: "Help",
      link: "/help",
    },

  ]

  const [isOpen, setOpen] = useState(false)
  const toggleMenu = () => setOpen(!isOpen)

  return (
    <header className="sticky top-0 backdrop-blur-sm z-20">
      <div className="flex justify-center items-center py-3 bg-black text-white text-sm gap-3">
        <p className="text-white/60 hidden md:block">
          Streamline your workflow and boost your productivity
        </p>
        <div className="inline-flex gap-1 items-center">
          <p>
            Get started for free
          </p>
          <ArrowRight className="h-4 w-4 inline-flex justify-center items-center" />
        </div>
      </div>
      <div className="py-5">
        <div className="container">
          <div className="flex items-center justify-between">
            <Link 
              href="/"
            >
              <Image src={Logo}alt="Saas Logo" height={40} width={40} />
            </Link>
            <button onClick={toggleMenu}>
              <MenuIcon className="h-5 w-5 md:hidden" />
            </button>

            <nav className="hidden md:flex gap-6 text-black/60 items-center">
              {
                menuItem.map(
                  (menu) => {
                    const isActive = menu.link === path
                    return (
                      <Link href={menu.link} key={menu.link} className={isActive? "text-black/100" : ""}>
                        {menu.name}
                      </Link>
                    )
                  }
                )
              }
              <button className="bg-black text-white px-4 py-2 rounded-lg font-medium inline-flex align-items justify-center tracking-tight">Get for free</button>
            </nav>
          </div>

          {isOpen &&
            (
              <div className="mt-5 md:hidden">
                <nav className="flex flex-col gap-6 text-black/60">
                  {
                    menuItem.map(
                      (menu) => {
                        const isActive = menu.link === path
                        return (
                            <Link href={menu.link} key={menu.link} className={isActive? "text-black/100" : ""} onClick={toggleMenu}>
                              {menu.name}
                            </Link>
                        )
                      }
                    )
                  }

                  <button className="bg-black text-white px-4 py-2 rounded-lg font-medium inline-flex align-items justify-center tracking-tight">Get for free</button>
                </nav>
              </div>
            )
          }

        </div>
      </div>
    </header>
  );
};
