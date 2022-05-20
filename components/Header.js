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
            <Image src="/singh.webp" height={40} width={40} />
            <Link href="/">
              <h1 className="pl-2 text-2xl font-semibold text-primary">
                Ashok<span className="font-extrabold">.</span>
              </h1>
            </Link>
          </div>
          <nav
            className={` ${
              navOpen ? " " : "hidden "
            }  relative order-last md:order-none w-full md:w-auto   md:block`}
          >
            <ul className="absolute md:relative flex w-full md:w-auto flex-col md:flex-row  gap-2 bg-white md:bg-transparent  font-medium text-gray-700 shadow-2xl md:shadow-none ">
              {NavMenu.map((item) => (
                <Link href={item.slug}>
                  <li
                    onClick={navToggle}
                    key={item.title}
                    className="cursor-pointer border-b md:border-none px-6 py-2 text-lg transition-all hover:bg-primary/80 hover:text-white/80 md:rounded-full"
                  >
                    {item.title}
                  </li>
                </Link>
              ))}
            </ul>
          </nav>
          <div className="md:hidden hmaburder" onClick={navToggle}>
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
