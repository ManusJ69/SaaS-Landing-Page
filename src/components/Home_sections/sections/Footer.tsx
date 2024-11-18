import logo from "@/assets/logosaas.png"
import Image from "next/image"
import SocialX from "@/assets/social-x.svg"
import SocialInsta from "@/assets/social-insta.svg"
import SocialLinkedIn from "@/assets/social-linkedin.svg"
import SocialPin from "@/assets/social-pin.svg"
import SocialYoutube from "@/assets/social-youtube.svg"
import Link from "next/link"

export const Footer = () => {

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

  return (
    <>
      <footer className="bg-black text-[#BCBCBC] text-sm py-10 text-center">
        <div className="container">
          <div>
            <div className="inline-flex relative before:content-[''] before:top-2 before:bottom-0 before:blur before:w-full before:bg-[linear-gradient(to_right,#F87BFF,#FB92CF,#FFDD9B,#C2F0B1,#2FD8FE)] before:absolute">
              <Image src={logo} alt="SaaS Logo" height={40} className="relative" />
            </div>
            <nav className="flex flex-col gap-6 mt-6 md:flex-row md:justify-center">
              {
                menuItem.map(
                  (menu) => {
                    return (
                      <Link href={menu.link} key={menu.link}>
                        {menu.name}
                      </Link>
                    )
                  }
                )
              }
            </nav>
            <div className="flex justify-center gap-6 mt-6">
              <SocialX />
              <SocialInsta />
              <SocialLinkedIn />
              <SocialPin />
              <SocialYoutube />
            </div>
            <p className="mt-6">
              &copy; 2024 Your company, Inc. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </>
  );
};
