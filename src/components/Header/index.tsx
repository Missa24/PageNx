"use client";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState, useRef } from "react";
import menuData from "./menuData";
import { FaWhatsapp } from "react-icons/fa";

const Header = () => {
  const [navbarOpen, setNavbarOpen] = useState(false);
  const navbarToggleHandler = () => {
    setNavbarOpen(!navbarOpen);
  };

  const [sticky, setSticky] = useState(false);
  const [visible, setVisible] = useState(true);
  const lastScrollY = useRef(0);
  const scrollTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  const handleScroll = () => {
    const currentScrollY = window.scrollY;

    // Ocultar/mostrar header basado en dirección del scroll
    if (currentScrollY > lastScrollY.current && currentScrollY > 100) {
      setVisible(false);
    } else if (currentScrollY < lastScrollY.current) {
      setVisible(true);
    }

    // Sticky header después de cierta altura
    if (currentScrollY >= 80) {
      setSticky(true);
    } else {
      setSticky(false);
    }

    lastScrollY.current = currentScrollY;

    // Limpiar timeout anterior
    if (scrollTimeoutRef.current) {
      clearTimeout(scrollTimeoutRef.current);
    }

    // Establecer nuevo timeout
    scrollTimeoutRef.current = setTimeout(() => {
      // Aquí puedes agregar lógica adicional si es necesario
      // después de que el scroll se detenga
    }, 150);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
      if (scrollTimeoutRef.current) {
        clearTimeout(scrollTimeoutRef.current);
      }
    };
  }, []);

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
        className={`header top-0 left-0 z-40 flex w-full items-center transition-transform duration-300 ${
          sticky
            ? "dark:shadow-sticky-dark shadow-sticky fixed z-9999 bg-white/80 backdrop-blur-xs transition dark:bg-[#f7bd2d]"
            : "absolute bg-transparent"
        } ${!visible && sticky ? "-translate-y-full" : "translate-y-0"}`}
      >
        <div className="container">
          <div className="relative -mx-4 flex items-center justify-between">
            <div
              className={`px-4 transition-all duration-300 xl:mr-12 ${
                sticky ? "w-16" : "w-60"
              }`}
            >
              <Link
                href="/"
                className={`header-logo block w-full ${
                  sticky ? "py-2 lg:py-0" : "py-1"
                } transition-all duration-500 hover:scale-[1.02] hover:opacity-90`}
              >
                <div className="flex items-center space-x-2">
                  <Image
                    src="/images/noxun.png"
                    alt="logo"
                    width={100}
                    height={60}
                    className={`h-auto transition-all duration-500 hover:scale-110 hover:rotate-2 dark:hidden ${
                      sticky ? "w-12" : "w-[80px]"
                    }`}
                  />
                  <Image
                    src="/images/noxun.png"
                    alt="logo dark"
                    width={100}
                    height={60}
                    className={`hidden h-auto transition-all duration-500 hover:scale-110 hover:rotate-2 dark:block ${
                      sticky ? "w-12" : "w-[80px]"
                    }`}
                  />
                  <span
                    className={`font-bold transition-all duration-500 md:text-2xl ${
                      sticky
                        ? "text-lg text-[#030d41] hover:text-[#f7bd2d] hover:drop-shadow-lg"
                        : "text-xl text-white hover:text-[#f7bd2d] hover:drop-shadow-lg"
                    } ${sticky ? "w-0 opacity-0" : "opacity-100"}`}
                  >
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
                  className="ring-primary absolute top-1/2 right-4 block translate-y-[-50%] rounded-lg px-3 py-[6px] transition-all duration-300 hover:bg-gray-100 hover:shadow-md focus:ring-2 lg:hidden dark:hover:bg-gray-800"
                >
                  <span
                    className={`relative my-1.5 block h-0.5 w-[30px] bg-black transition-all duration-300 dark:bg-white ${
                      navbarOpen ? "top-[7px] rotate-45" : " "
                    }`}
                  />
                  <span
                    className={`relative my-1.5 block h-0.5 w-[30px] bg-black transition-all duration-300 dark:bg-white ${
                      navbarOpen ? "opacity-0" : " "
                    }`}
                  />
                  <span
                    className={`relative my-1.5 block h-0.5 w-[30px] bg-black transition-all duration-300 dark:bg-white ${
                      navbarOpen ? "top-[-8px] -rotate-45" : " "
                    }`}
                  />
                </button>
                <nav
                  id="navbarCollapse"
                  className={`navbar border-body-color/50 dark:border-body-color/20 right-0 z-30 w-[250px] rounded border-[.5px] px-6 py-4 duration-300 lg:visible lg:static lg:w-auto lg:border-none lg:!bg-transparent lg:p-0 lg:opacity-100 ${
                    navbarOpen
                      ? "visibility top-full opacity-100"
                      : "invisible top-[120%] opacity-0"
                  } ${
                    sticky
                      ? "dark:shadow-sticky-dark shadow-sticky fixed z-9999 bg-white/80 backdrop-blur-xs transition dark:bg-[#f7bd2d]"
                      : "dark:bg-dark absolute bg-white"
                  } `}
                >
                  <ul className="block lg:flex lg:space-x-12">
                    {menuData.map((menuItem, index) => (
                      <li key={index} className="group relative">
                        {menuItem.path ? (
                          <Link
                            href={menuItem.path}
                            className={`flex py-2 text-base transition-all duration-500 lg:mr-0 lg:inline-flex lg:px-0 lg:py-6 ${
                              sticky
                                ? "text-black hover:scale-105 hover:text-[#f7bd2d] dark:text-[#030d41] dark:hover:text-white"
                                : "text-[#030d41] hover:scale-105 hover:text-[#f7bd2d] dark:text-white dark:hover:text-[#f7bd2d]"
                            } relative after:absolute after:bottom-4 after:left-0 after:h-0.5 after:w-0 after:bg-[#f7bd2d] after:transition-all after:duration-500 after:content-[''] hover:after:w-full`}
                          >
                            {menuItem.title}
                          </Link>
                        ) : (
                          <>
                            <p
                              onClick={() => handleSubmenu(index)}
                              className="text-dark group-hover:text-primary relative flex cursor-pointer items-center justify-between py-2 text-base transition-all duration-500 after:absolute after:bottom-4 after:left-0 after:h-0.5 after:w-0 after:bg-[#f7bd2d] after:transition-all after:duration-500 after:content-[''] hover:scale-105 hover:text-[#f7bd2d] hover:after:w-full lg:mr-0 lg:inline-flex lg:px-0 lg:py-6 dark:text-white/70 dark:group-hover:text-white dark:hover:text-[#f7bd2d]"
                            >
                              {menuItem.title}
                              <span className="pl-3 transition-all duration-500 group-hover:scale-110 group-hover:rotate-180">
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
                              className={`submenu dark:bg-dark relative top-full left-0 rounded-sm bg-white transition-all duration-500 group-hover:opacity-100 lg:invisible lg:absolute lg:top-[110%] lg:block lg:w-[250px] lg:p-4 lg:opacity-0 lg:shadow-lg lg:group-hover:visible lg:group-hover:top-full ${
                                openIndex === index ? "block" : "hidden"
                              }`}
                            >
                              {menuItem.submenu.map((submenuItem, index) => (
                                <Link
                                  href={submenuItem.path}
                                  key={index}
                                  className="text-dark hover:text-primary block rounded-sm py-2.5 text-sm transition-all duration-500 hover:bg-gray-100 hover:pl-4 hover:font-medium hover:shadow-sm lg:px-3 dark:text-white/70 dark:hover:bg-gray-700 dark:hover:text-white"
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
                  className={`ml-4 flex items-center justify-center rounded-full p-2 transition-all duration-500 ${
                    sticky
                      ? "transform bg-[#030d41] text-white hover:scale-110 hover:bg-[#f7bd2d] hover:shadow-lg"
                      : "transform bg-[#f7bd2d] text-white hover:scale-110 hover:bg-[#030d41] hover:shadow-lg"
                  } group relative overflow-hidden`}
                  aria-label="Contactar por WhatsApp"
                >
                  <FaWhatsapp
                    size={24}
                    className="transition-all duration-500 group-hover:scale-110"
                  />
                  <span className="absolute inset-0 rounded-full bg-white opacity-0 transition-all duration-500 group-hover:opacity-10"></span>
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
