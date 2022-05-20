import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const NavMenu = [
  { title: "Home", slug: "/" },
  { title: "About", slug: "/about" },
  { title: "Projects", slug: "/project" },
  { title: "Contact", slug: "/contact" },
];

export default function Header() {
  const [navOpen, setNavOpen] = useState(false);
  const navToggle = () => {
    setNavOpen(!navOpen);
  };

  return (
    <>
      <header className="relative top-0 z-50  backdrop-blur-md ">
        <div className="container flex flex-wrap items-center justify-between">
          <div className="logo flex items-center py-4">
            <Image src="/singh.webp" alt="A K Singh" height={40} width={40} />
            <Link href="/">
              <h1 className="pl-2 text-2xl font-semibold text-primary">
                Ashok<span className="font-extrabold">.</span>
              </h1>
            </Link>
          </div>
          <nav
            className={` ${
              navOpen ? " " : "hidden "
            }  relative order-last w-full md:order-none md:block   md:w-auto`}
          >
            <ul className="absolute flex w-full flex-col gap-2 bg-white font-medium  text-gray-700 shadow-2xl md:relative  md:w-auto md:flex-row md:bg-transparent md:shadow-none ">
              {NavMenu.map((item) => (
                <li
                  key={item.title}
                  onClick={navToggle}
                  className="cursor-pointer border-b px-6 py-2 text-lg transition-all hover:bg-primary/80 hover:text-white/80 md:rounded-full md:border-none"
                >
                  <Link key={item.title} href={item.slug}>
                    {item.title}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
          <div className="hmaburder md:hidden" onClick={navToggle}>
            <svg viewBox="0 0 65 40" width="25" height="25">
              <rect width="65" height="5"></rect>
              <rect y="20" width="65" height="5"></rect>
              <rect y="40" width="65" height="5"></rect>
            </svg>
          </div>
        </div>
      </header>
    </>
  );
}
