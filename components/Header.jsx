"use client";
import Image from "next/image";
import { logo, GiHamburgerMenu } from "../utils/assets";
import Link from "next/link";
import { useState } from "react";
import { usePathname } from "next/navigation";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  return (
    <div>
      <div className="py-1 px-5 lg:py-2 lg:px-10">
        <div className="flex justify-between items-center">
          <div>
            <Image src={logo} />
          </div>
          {/* Desktop Menu */}
          <div className="hidden lg:flex gap-5 font-semibold items-center">
            <Link href="/">
              <button className={pathname == "/" && "text-primary"}>
                Home
              </button>
            </Link>
            <Link href="/services">
              <button className={pathname == "/services" && "text-primary"}>
                Services
              </button>
            </Link>
            <Link href="/technologies">
              <button className={pathname == "/technologies" && "text-primary"}>
                Technologies
              </button>
            </Link>
            <Link href="/portfolio">
              <button className={pathname == "/portfolio" && "text-primary"}>
                Portfolio
              </button>
            </Link>
            <Link href="/company">
              <button className={pathname == "/company" && "text-primary"}>
                Company
              </button>
            </Link>
            <button className="bg-primary py-2 text-white px-5 rounded-3xl">
              Request For Quote
            </button>
          </div>
          {/* Mobile Menu */}
          <div className="lg:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-2xl text-gray-800"
            >
              <GiHamburgerMenu />
            </button>
          </div>
        </div>

        {isOpen && (
          <div className="gap-10 ">
            <Link href="/">
              <button className="w-full">Home</button>
            </Link>
            <Link href="/services">
              <button className="w-full">Services</button>
            </Link>
            <Link href="/technologies">
              <button className="w-full">Technologies</button>
            </Link>
            <Link href="/portfolio">
              <button className="w-full">Portfolio</button>
            </Link>
            <Link href="/company">
              <button className="w-full">Company</button>
            </Link>
            <div className="flex justify-center my-2">
              <button className="bg-primary text-white px-5 py-2 rounded-3xl ">
                Request For Quote
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
