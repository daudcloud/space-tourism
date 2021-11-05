import Header from "../Header";
import Image from "next/image";
import Link from "next/Link";
import { useState } from "react";

export default function Layout({ page, title, children }) {
  const [showNav, setShowNav] = useState(false);
  const close = () => {
    setShowNav((prevShowNav) => false);
  };

  const open = () => {
    setShowNav((prevShowNav) => true);
  };
  return (
    <>
      <div className="bg-main min-h-screen relative overflow-hidden">
        <Header title={title} />
        <header className="p-6 flex">
          <div className="relative w-10 h-10">
            <Image
              src="/assets/shared/logo.svg"
              layout="fill"
              objectFit="contain"
            />
          </div>
          <nav
            className={`font-barlow uppercase list-none tracking-wider text-sm text-white absolute top-0 bottom-0 w-64 shadow z-10 pt-24 pl-8 transition-all ease-linear duration-100 ${
              showNav ? "right-0" : "-right-64"
            } sm:flex sm:static sm:ml-auto sm:-mt-6 sm:px-10 sm:w-auto sm:-mr-6 sm:gap-8 sm:items-center sm:pt-0`}
            style={{
              backgroundColor: "rgba(255, 255, 255, 0.04)",
              backdropFilter: "blur(82px)",
            }}
          >
            <div className="absolute top-0 right-0 mr-6 mt-6 sm:hidden">
              <div className="relative w-6 h-6" onClick={close}>
                <Image
                  src="/assets/shared/icon-close.svg"
                  layout="fill"
                  objectFit="contain"
                />
              </div>
            </div>
            <Link href="/">
              <li
                className={`mb-5 py-2 sm:py-10 cursor-pointer border-nav ${
                  page === "home" ? "active" : "non-active"
                } sm:mb-0`}
              >
                <strong className="sm:hidden">00</strong> home
              </li>
            </Link>
            <Link href="/destination">
              <li
                className={`mb-5 py-2 sm:py-10 cursor-pointer border-nav ${
                  page === "destination" ? "active" : "non-active"
                } sm:mb-0`}
              >
                <strong className="sm:hidden">01</strong> destination
              </li>
            </Link>
            <Link href="/crew">
              <li
                className={`mb-5 py-2 sm:py-10 cursor-pointer border-nav ${
                  page === "crew" ? "active" : "non-active"
                } sm:mb-0`}
              >
                <strong className="sm:hidden">02</strong> crew
              </li>
            </Link>
            <Link href="/technology">
              <li
                className={`py-2 sm:py-10 cursor-pointer border-nav  ${
                  page === "technology" ? "active" : "non-active"
                }`}
              >
                <strong className="sm:hidden">03</strong> technology
              </li>
            </Link>
          </nav>
          <div
            className={`${
              showNav ? "hidden" : "block"
            } relative w-6 h-6 ml-auto sm:hidden`}
            onClick={open}
          >
            <Image
              src="/assets/shared/icon-hamburger.svg"
              layout="fill"
              objectFit="contain"
            />
          </div>
        </header>
        <main>{children}</main>
      </div>
    </>
  );
}
