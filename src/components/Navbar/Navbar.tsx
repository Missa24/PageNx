"use client";

import { Disclosure } from "@headlessui/react";
import Link from "next/link";
import React from "react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import Drawer from "./Drawer";
import Drawerdata from "./Drawerdata";
import Image from "next/image";
import { Phone } from "lucide-react";

const navigation = [
  { name: "Inicio", href: "/" },
  { name: "Nuestros Servicios", href: "#ourservice" },
  { name: "Acerca de nosotros", href: "#about" },
  { name: "Contactanos", href: "#contact" },
  { name: "Proyectos", href: "#projects" },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = React.useState(false);

  const handleWhatsAppClick = () => {
    window.open(`https://wa.me/59177713481`, "_blank");
  };

  return (
    <Disclosure as="nav" className="fixed z-50 w-full bg-[#030d41] shadow-md">
      <>
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex h-16 items-center justify-between sm:h-20">
            {/* Logo */}
            <div className="flex flex-shrink-0 items-center">
              <Link href="#home-section" className="flex items-center">
                <div className="relative mr-2 h-10 w-10 lg:h-12 lg:w-12">
                  <Image
                    src="/images/noxun.png"
                    alt="Logo"
                    fill
                    className="object-contain"
                    sizes="(max-width: 768px) 40px, 48px"
                  />
                </div>
                <div className="flex flex-col leading-tight">
                  <span className="text-xl font-bold text-[#f7bd2d]">
                    NOXUN
                  </span>
                </div>
              </Link>
            </div>

            {/* Desktop Nav */}
            <div className="hidden items-center space-x-8 lg:flex">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="group relative text-lg font-medium text-[#f7bd2d] transition-colors duration-200 hover:text-white"
                >
                  {item.name}
                  <span className="absolute -bottom-1 left-0 h-0.5 w-0 bg-[#f7bd2d] transition-all group-hover:w-full"></span>
                </Link>
              ))}

              {/* WhatsApp Button */}
              <button
                onClick={handleWhatsAppClick}
                className="flex items-center justify-center rounded-full bg-[#f7bd2d] p-2.5 text-[#030d41] shadow-md transition-colors hover:bg-[#030d41] hover:text-[#f7bd2d] hover:shadow-lg"
                aria-label="Contactar por WhatsApp"
              >
                <Phone className="h-6 w-6" />
              </button>
            </div>

            {/* Mobile Menu Button */}
            <div className="flex lg:hidden">
              <button
                onClick={() => setIsOpen(true)}
                className="rounded-md p-2 text-[#f7bd2d] transition-colors hover:bg-[#f7bd2d] hover:text-[#030d41]"
              >
                <Bars3Icon className="h-6 w-6" aria-hidden="true" />
              </button>
            </div>

            {/* Drawer Menu (Mobile) */}
            <Drawer isOpen={isOpen} setIsOpen={setIsOpen}>
              <div className="flex items-center justify-between border-b border-[#f7bd2d] bg-[#030d41] px-4 py-4">
                <div className="flex items-center">
                  <div className="relative mr-2 h-8 w-8">
                    <Image
                      src="/images/noxun.png"
                      alt="Logo"
                      fill
                      className="object-contain"
                    />
                  </div>
                  <span className="text-lg font-bold text-[#f7bd2d]">
                    NOXUN
                  </span>
                </div>
                <button
                  onClick={() => setIsOpen(false)}
                  className="rounded-md p-1 text-[#f7bd2d] hover:bg-[#f7bd2d] hover:text-[#030d41]"
                >
                  <XMarkIcon className="h-6 w-6" />
                </button>
              </div>
              <div className="h-full bg-[#030d41]">
                <Drawerdata />
              </div>
            </Drawer>
          </div>
        </div>
      </>
    </Disclosure>
  );
};

export default Navbar;
