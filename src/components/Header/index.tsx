"use client";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import menuData from "./menuData";
import { FaWhatsapp } from 'react-icons/fa';

const Header = () => {
  const [navbarOpen, setNavbarOpen] = useState(false);
  const navbarToggleHandler = () => {
    setNavbarOpen(!navbarOpen);
  };

  const [sticky, setSticky] = useState(false);
  const handleStickyNavbar = () => {
    if (window.scrollY >= 80) {
      setSticky(true);
    } else {
      setSticky(false);
    }
  };
  useEffect(() => {
    window.addEventListener("scroll", handleStickyNavbar);
  });

  const [openIndex, setOpenIndex] = useState(-1);
  const handleSubmenu = (index) => {
    if (openIndex === index) {
      setOpenIndex(-1);
    } else {
      setOpenIndex(index);
    }
  };

  const usePathName = usePathname();

  return (
    <>
      <header
        className={`header top-0 left-0 z-40 flex w-full items-center ${sticky
          ? "dark:bg-[#f7bd2d] dark:shadow-sticky-dark shadow-sticky fixed z-9999 bg-white/80 backdrop-blur-xs transition"
          : "absolute bg-transparent"
          }`}
      >
        <div className="container">
          <div className="relative -mx-4 flex items-center justify-between">
            <div className="w-60 max-w-full px-4 xl:mr-12">
              <Link href="/" className={`header-logo block w-full ${sticky ? "py-5 lg:py-2" : "py-8"} transition-all duration-500 hover:opacity-90 hover:scale-[1.02]`}>
                <div className="flex items-center space-x-2">
                  <Image
                    src="/images/noxun.png"
                    alt="logo"
                    width={100}
                    height={60}
                    className="w-[80px] h-auto dark:hidden transition-all duration-500 hover:scale-110 hover:rotate-2"
                  />
                  <Image
                    src="/images/noxun.png"
                    alt="logo dark"
                    width={100}
                    height={60}
                    className="w-[80px] h-auto hidden dark:block transition-all duration-500 hover:scale-110 hover:rotate-2"
                  />
                  <span className={`text-xl md:text-2xl font-bold transition-all duration-500 ${sticky ? "text-[#030d41] hover:text-[#f7bd2d] hover:drop-shadow-lg" : "text-white hover:text-[#f7bd2d] hover:drop-shadow-lg"}`}>
                    Noxun
                  </span>

                </div>
              </Link>
            </div>

            <div className="flex w-full items-center justify-between px-4">
              <div>
                <button
                  onClick={navbarToggleHandler}
                  id="navbarToggler"
                  aria-label="Mobile Menu"
                  className="ring-primary absolute top-1/2 right-4 block translate-y-[-50%] rounded-lg px-3 py-[6px] focus:ring-2 lg:hidden transition-all duration-300 hover:bg-gray-100 dark:hover:bg-gray-800 hover:shadow-md"
                >
                  <span
                    className={`relative my-1.5 block h-0.5 w-[30px] bg-black transition-all duration-300 dark:bg-white ${navbarOpen ? "top-[7px] rotate-45" : " "
                      }`}
                  />
                  <span
                    className={`relative my-1.5 block h-0.5 w-[30px] bg-black transition-all duration-300 dark:bg-white ${navbarOpen ? "opacity-0" : " "
                      }`}
                  />
                  <span
                    className={`relative my-1.5 block h-0.5 w-[30px] bg-black transition-all duration-300 dark:bg-white ${navbarOpen ? "top-[-8px] -rotate-45" : " "
                      }`}
                  />
                </button>
                <nav
                  id="navbarCollapse"
                  className={`navbar border-body-color/50 dark:border-body-color/20 duration-300 right-0 z-30 w-[250px] rounded border-[.5px] px-6 py-4 lg:visible lg:static lg:w-auto lg:border-none lg:!bg-transparent lg:p-0 lg:opacity-100
    ${navbarOpen ? "visibility top-full opacity-100" : "invisible top-[120%] opacity-0"}
    ${sticky
                      ? "dark:bg-[#f7bd2d] dark:shadow-sticky-dark shadow-sticky fixed z-9999 bg-white/80 backdrop-blur-xs transition"
                      : "absolute bg-white dark:bg-dark "}
  `}
                >

                  <ul className="block lg:flex lg:space-x-12">
                    {menuData.map((menuItem, index) => (
                      <li key={index} className="group relative">
                        {menuItem.path ? (
                          <Link
                            href={menuItem.path}
                            className={`flex py-2 text-base lg:mr-0 lg:inline-flex lg:px-0 lg:py-6 transition-all duration-500 ${sticky
                              ? "dark:text-[#030d41] text-black hover:text-[#f7bd2d] dark:hover:text-white hover:scale-105"
                              : "dark:text-white text-[#030d41] hover:text-[#f7bd2d] dark:hover:text-[#f7bd2d] hover:scale-105"
                              } relative after:content-[''] after:absolute after:w-0 after:h-0.5 after:bg-[#f7bd2d] after:bottom-4 after:left-0 after:transition-all after:duration-500 hover:after:w-full`}
                          >
                            {menuItem.title}
                          </Link>
                        ) : (
                          <>
                            <p
                              onClick={() => handleSubmenu(index)}
                              className="text-dark group-hover:text-primary flex cursor-pointer items-center justify-between py-2 text-base lg:mr-0 lg:inline-flex lg:px-0 lg:py-6 dark:text-white/70 dark:group-hover:text-white transition-all duration-500 hover:text-[#f7bd2d] dark:hover:text-[#f7bd2d] hover:scale-105 relative after:content-[''] after:absolute after:w-0 after:h-0.5 after:bg-[#f7bd2d] after:bottom-4 after:left-0 after:transition-all after:duration-500 hover:after:w-full"
                            >
                              {menuItem.title}
                              <span className="pl-3 transition-all duration-500 group-hover:rotate-180 group-hover:scale-110">
                                <svg width="25" height="24" viewBox="0 0 25 24">
                                  <path
                                    fillRule="evenodd"
                                    clipRule="evenodd"
                                    d="M6.29289 8.8427C6.68342 8.45217 7.31658 8.45217 7.70711 8.8427L12 13.1356L16.2929 8.8427C16.6834 8.45217 17.3166 8.45217 17.7071 8.8427C18.0976 9.23322 18.0976 9.86639 17.7071 10.2569L12 15.964L6.29289 10.2569C5.90237 9.86639 5.90237 9.23322 6.29289 8.8427Z"
                                    fill="currentColor"
                                  />
                                </svg>
                              </span>
                            </p>
                            <div
                              className={`submenu dark:bg-dark relative top-full left-0 rounded-sm bg-white transition-all duration-500 group-hover:opacity-100 lg:invisible lg:absolute lg:top-[110%] lg:block lg:w-[250px] lg:p-4 lg:opacity-0 lg:shadow-lg lg:group-hover:visible lg:group-hover:top-full ${openIndex === index ? "block" : "hidden"
                                }`}
                            >
                              {menuItem.submenu.map((submenuItem, index) => (
                                <Link
                                  href={submenuItem.path}
                                  key={index}
                                  className="text-dark hover:text-primary block rounded-sm py-2.5 text-sm lg:px-3 dark:text-white/70 dark:hover:text-white transition-all duration-500 hover:bg-gray-100 dark:hover:bg-gray-700 hover:pl-4 hover:font-medium hover:shadow-sm"
                                >
                                  {submenuItem.title}
                                </Link>
                              ))}
                            </div>
                          </>
                        )}
                      </li>
                    ))}
                  </ul>
                </nav>
              </div>
              <div className="flex items-center justify-end pr-16 lg:pr-0">
                {/* Botón de WhatsApp */}
                <a
                  href="https://wa.me/59170140353?text=Hola,%20me%20gustaría%20obtener%20más%20información"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`ml-4 flex items-center justify-center rounded-full p-2 transition-all duration-500 ${sticky
                    ? "bg-[#030d41] hover:bg-[#f7bd2d] text-white transform hover:scale-110 hover:shadow-lg"
                    : "bg-[#f7bd2d] hover:bg-[#030d41] text-white transform hover:scale-110 hover:shadow-lg"} relative overflow-hidden group`}
                  aria-label="Contactar por WhatsApp"
                >
                  <FaWhatsapp size={24} className="transition-all duration-500 group-hover:scale-110" />
                  <span className="absolute inset-0 bg-white opacity-0 transition-all duration-500 group-hover:opacity-10 rounded-full"></span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;