import React, { ReactNode } from "react";
import Link from "next/link";

interface DrawerProps {
  children: ReactNode;
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
}

const Drawer = ({ children, isOpen, setIsOpen }: DrawerProps) => {
  return (
    <main
      className={
        "bg-opacity-80 fixed inset-0 z-10 transform overflow-hidden bg-[#030d41] ease-in-out " + // Fondo azul oscuro con opacidad
        (isOpen
          ? "translate-x-0 opacity-100 transition-opacity duration-500"
          : "-translate-x-full opacity-0 transition-all delay-500")
      }
    >
      <section
        className={
          "w-340px left-0 h-full max-w-sm transform shadow-xl transition-all delay-400 duration-500 ease-in-out " +
          (isOpen ? "translate-x-0 bg-[#030d41]" : "-translate-x-full")
        }
      >
        <article className="w-340px relative flex h-full max-w-lg flex-col space-y-6 pb-10">
          <div
            onClick={() => setIsOpen(false)}
            className="space-y-4 px-4 py-6 text-[#f7bd2d]"
          >
            {children}
          </div>
        </article>
      </section>

      <section
        className="h-full w-screen cursor-pointer"
        onClick={() => setIsOpen(false)}
      ></section>
    </main>
  );
};

export default Drawer;
