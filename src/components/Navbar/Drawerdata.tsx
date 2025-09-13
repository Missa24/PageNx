import React from "react";
import Link from "next/link";
import { Phone } from "lucide-react";
interface NavigationItem {
  name: string;
  href: string;
  current: boolean;
}

const navigation: NavigationItem[] = [
  { name: "Inicio", href: "/", current: false },
  { name: "Nuestros Servicios", href: "#ourservice", current: false },
  { name: "Acerca de nosotros", href: "#about", current: false },
  { name: "Contactanos", href: "#contact", current: false },
  { name: "Proyectos", href: "#projects", current: false },
];

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(" ");
}

const handleWhatsAppClick = () => {
  window.open(`https://wa.me/59177713481`, "_blank");
};

const Data = () => {
  return (
    <div className="w-full max-w-sm rounded-md">
      <div className="flex-1 space-y-4 py-1">
        <div className="sm:block">
          <div className="space-y-1 px-5 pt-2 pb-3">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={classNames(
                  item.current
                    ? "bg-gray-900 text-[#f7bd2d]"
                    : "text-[#f7bd2d] hover:bg-gray-700 hover:text-white",
                  "block rounded-md py-2 text-base font-medium",
                )}
                aria-current={item.current ? "page" : undefined}
              >
                {item.name}
              </Link>
            ))}
            <div className="mt-4">
              <button
                onClick={handleWhatsAppClick}
                className="flex items-center justify-center rounded-full bg-[#f7bd2d] p-2.5 text-[#030d41] shadow-md transition-colors hover:bg-[#030d41] hover:text-[#f7bd2d] hover:shadow-lg"
                aria-label="Contactar por WhatsApp"
              >
                <Phone className="h-6 w-6" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Data;
