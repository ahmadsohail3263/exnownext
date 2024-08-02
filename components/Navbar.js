"use client";
import { useState } from "react";
import Logo from "@/public/logo.png";
import Link from "next/link";

const Navbar = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);
  return (
    <header>
      <div className=" ">
        <nav className="bg-white rounded-lg sm:py-[13px] px-[10px] sm:px-[24px] m-2 sm:m-0 ">
          <div className="flex flex-wrap justify-between items-center ">
            <div className="">
              <Link href="/">
                <img className="w-[153px]" src={Logo.src} alt="logo" />
              </Link>
            </div>

            <div className="block lg:hidden ">
              <section className="MOBILE-MENU flex lg:hidden">
                <div
                  className="HAMBURGER-ICON space-y-2"
                  onClick={() => setIsNavOpen((prev) => !prev)} // toggle isNavOpen state on click
                >
                  <span className="block h-0.5 w-8 bg-[#2C7B63]"></span>
                  <span className="block h-0.5 w-8 bg-[#2C7B63]"></span>
                  <span className="block h-0.5 w-8 bg-[#2C7B63]"></span>
                </div>

                <div className={isNavOpen ? "showMenuNav" : "hideMenuNav"}>
                  <div
                    className="CROSS-ICON absolute top-0 right-0 px-8 py-8"
                    onClick={() => setIsNavOpen(false)} // change isNavOpen state to false to close the menu
                  >
                    <svg
                      className="h-8 w-8 text-gray-600"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <line x1="18" y1="6" x2="6" y2="18" />
                      <line x1="6" y1="6" x2="18" y2="18" />
                    </svg>
                  </div>
                  <ul className="MENU-a-MOBILE-OPEN flex flex-col items-center justify-between min-h-[250px]">
                    <li className="border-b border-gray-400 my-8 uppercase">
                      <Link href="/" onClick={() => setIsNavOpen(false)}>
                        Home
                      </Link>
                    </li>
                    <li className="border-b border-gray-400 my-8 uppercase">
                      <Link
                        href="marketplace"
                        onClick={() => setIsNavOpen(false)}
                      >
                        marketplace
                      </Link>
                    </li>
                    <li className="border-b border-gray-400 my-8 uppercase">
                      <Link href="aboutus" onClick={() => setIsNavOpen(false)}>
                        About Us
                      </Link>
                    </li>
                    <li className="border-b border-gray-400 my-8 uppercase">
                      <Link
                        href="contactus"
                        onClick={() => setIsNavOpen(false)}
                      >
                        Contact
                      </Link>
                    </li>

                    <li className="border-b border-gray-400 my-8 uppercase">
                      <Link href="/signup" onClick={() => setIsNavOpen(false)}>
                        Registration
                      </Link>
                    </li>
                    <li className="border-b border-gray-400 my-8 uppercase">
                      <Link href="/login" onClick={() => setIsNavOpen(false)}>
                        Sign in
                      </Link>
                    </li>
                  </ul>
                </div>
              </section>
            </div>

            <div className="hidden lg:block">
              <ul className="flex items-center text-[14px] leading-[21px] font-medium text-[#1A1A1A] space-x-[50px]">
                <li className="">
                  <Link href="/">Home</Link>
                </li>
                <li>
                  <Link href="marketplace">Market Place</Link>
                </li>

                <li>
                  <Link href="aboutus">About Us</Link>
                </li>
                <li>
                  <Link href="contactus">Contact</Link>
                </li>
                {/* <li>
                  <Link href="signup">Registration</Link>
                </li> */}

                <li>
                  <Link
                    href="/login"
                    className="block bg-[#2C7B63] rounded-lg text-white text-[20px] leading-[30px] font-medium px-[40px] py-[12px]"
                  >
                    Login
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
