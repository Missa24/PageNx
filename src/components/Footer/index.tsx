"use client";
import Image from "next/image";
import Link from "next/link";
import { Facebook, Linkedin, Mail, Phone, MapPin } from 'lucide-react';

const menuData = [
  {
    id: 1,
    title: "Inicio",
    path: "/",
    newTab: false,
  },
  {
    id: 2,
    title: "Nuestros Servicios",
    path: "#ourservice",
    newTab: false,
  },
  {
    id: 33,
    title: "Acerca de nosotros",
    path: "#about",
    newTab: false,
  },
  {
    id: 3,
    title: "Contactanos",
    path: "#contact",
    newTab: false,
  },
];

const Footer = () => {
  return (
    <>
      <footer className="relative z-10 bg-saffron pt-16 text-tangaroa md:pt-20 lg:pt-24">
        <div className="container mx-auto px-4">
          <div className="-mx-4 flex flex-wrap">
            <div className="w-full px-4 md:w-1/2 lg:w-4/12 xl:w-5/12">
              <div className="mb-12 max-w-[360px] lg:mb-16">
                <Link href="/" className="mb-8 inline-block">
                  <div className="flex items-center">
                    <div className="relative mr-3 h-16 w-28 rounded-lg bg-tangaroa/10 p-2">
                      <Image
                        src="/images/noxun.png"
                        alt="logo de Noxun"
                        className="object-contain"
                        fill
                        style={{ objectFit: 'contain' }}
                      />
                    </div>
                    <span className="text-2xl font-bold text-tangaroa">Noxun</span>
                  </div>
                </Link>
                <p className="mb-9 text-base leading-relaxed text-tangaroa/80">
                  Soluciones de ingeniería innovadoras para impulsar tu negocio hacia el futuro.
                  Calidad, precisión y excelencia en cada proyecto.
                </p>
                <div className="flex items-center space-x-4">
                  <a
                    href="https://www.facebook.com/p/Noxun-Engineering-100084657338568/?locale=es_LA"
                    aria-label="Facebook"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex h-10 w-10 items-center justify-center rounded-full bg-tangaroa text-saffron transition-all hover:scale-110"
                  >
                    <Facebook size={20} />
                  </a>
                  <a
                    href="https://bo.linkedin.com/company/noxun"
                    aria-label="LinkedIn"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex h-10 w-10 items-center justify-center rounded-full bg-tangaroa text-saffron transition-all hover:scale-110"
                  >
                    <Linkedin size={20} />
                  </a>
                  <a
                    href="https://www.tiktok.com/@noxun.s.r.l"
                    aria-label="TikTok"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex h-10 w-10 items-center justify-center rounded-full bg-tangaroa text-saffron transition-all hover:scale-110"
                  >
                    <svg
                      className="h-5 w-5"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                    >
                      <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z" />
                    </svg>
                  </a>
                  <a
                    href="#contact"
                    aria-label="Contacto"
                    className="flex h-10 w-10 items-center justify-center rounded-full bg-tangaroa text-saffron transition-all hover:scale-110"
                  >
                    <Mail size={20} />
                  </a>
                </div>
              </div>
            </div>
            <div className="w-full px-4 sm:w-1/2 md:w-1/2 lg:w-3/12 xl:w-2/12">
              <div className="mb-12 lg:mb-16">
                <h2 className="mb-10 text-xl font-bold text-tangaroa">
                  Navegación
                </h2>
                <ul>
                  {menuData.map((item) => (
                    <li key={item.id}>
                      <Link
                        href={item.path}
                        className="mb-4 inline-block text-base text-tangaroa/80 duration-300 hover:text-tangaroa hover:underline"
                      >
                        {item.title}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="w-full px-4 md:w-1/2 lg:w-5/12 xl:w-3/12">
              <div className="mb-12 lg:mb-16">
                <h2 className="mb-10 text-xl font-bold text-tangaroa">
                  Contacto
                </h2>
                <ul className="mb-6">
                  <li className="mb-4 flex items-center">
                    <Phone size={18} className="mr-3 text-tangaroa" />
                    <span className="text-base text-tangaroa/80">+591 64235604</span>
                  </li>
                  <li className="mb-4 flex items-center">
                    <Mail size={18} className="mr-3 text-tangaroa" />
                    <span className="text-base text-tangaroa/80">info@noxun.com</span>
                  </li>
                  <li className="flex items-start">
                    <MapPin size={18} className="mr-3 mt-1 text-tangaroa" />
                    <span className="text-base text-tangaroa/80">
                      Torre Goya<br />
                      La Paz, Bolivia
                    </span>
                  </li>
                </ul>

                <div className="rounded-lg overflow-hidden shadow-lg border-2 border-tangaroa/20">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d1912.7821616107906!2d-68.119569!3d-16.497584!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x915f21b21dee7469%3A0x960d6b372d219f57!2sTorre%20Goya!5e0!3m2!1ses-419!2sbo!4v1756182395409!5m2!1ses-419!2sbo"
                    width="100%"
                    height="150"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Ubicación de Noxun en Torre Goya, La Paz, Bolivia"
                    className="rounded-lg"
                  ></iframe>
                </div>
              </div>
            </div>
          </div>

          <div className="h-px w-full bg-gradient-to-r from-transparent via-tangaroa/30 to-transparent"></div>
          <div className="py-8">
            <p className="text-center text-base text-tangaroa/80">
              © {new Date().getFullYear()} Noxun Engineering. Todos los derechos reservados. |
              Desarrollado por {" "}
              <a
                href="https://noxun.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-tangaroa hover:underline"
              >
                Noxun
              </a>
            </p>
          </div>
        </div>

        <div className="absolute right-0 top-14 z-[-1]">
          <svg
            width="55"
            height="99"
            viewBox="0 0 55 99"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle opacity="0.8" cx="49.5" cy="49.5" r="49.5" fill="#030d41" fillOpacity="0.1" />
            <mask
              id="mask0_94:899"
              style={{ maskType: "alpha" }}
              maskUnits="userSpaceOnUse"
              x="0"
              y="0"
              width="99"
              height="99"
            >
              <circle
                opacity="0.8"
                cx="49.5"
                cy="49.5"
                r="49.5"
                fill="#030d41"
              />
            </mask>
            <g mask="url(#mask0_94:899)">
              <circle
                opacity="0.8"
                cx="49.5"
                cy="49.5"
                r="49.5"
                fill="url(#paint0_radial_94:899)"
              />
              <g opacity="0.8" filter="url(#filter0_f_94:899)">
                <circle cx="53.8676" cy="26.2061" r="20.3824" fill="#030d41" />
              </g>
            </g>
            <defs>
              <filter
                id="filter0_f_94:899"
                x="12.4852"
                y="-15.1763"
                width="82.7646"
                height="82.7646"
                filterUnits="userSpaceOnUse"
                colorInterpolationFilters="sRGB"
              >
                <feFlood floodOpacity="0" result="BackgroundImageFix" />
                <feBlend
                  mode="normal"
                  in="SourceGraphic"
                  in2="BackgroundImageFix"
                  result="shape"
                />
                <feGaussianBlur
                  stdDeviation="10.5"
                  result="effect1_foregroundBlur_94:899"
                />
              </filter>
              <radialGradient
                id="paint0_radial_94:899"
                cx="0"
                cy="0"
                r="1"
                gradientUnits="userSpaceOnUse"
                gradientTransform="translate(49.5 49.5) rotate(90) scale(53.1397)"
              >
                <stop stopOpacity="0.47" />
                <stop offset="1" stopOpacity="0" />
              </radialGradient>
            </defs>
          </svg>
        </div>
        <div className="absolute bottom-24 left-0 z-[-1]">
          <svg
            width="79"
            height="94"
            viewBox="0 0 79 94"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <rect
              opacity="0.3"
              x="-41"
              y="26.9426"
              width="66.6675"
              height="66.6675"
              transform="rotate(-22.9007 -41 26.9426)"
              fill="url(#paint0_linear_94:889)"
            />
            <rect
              x="-41"
              y="26.9426"
              width="66.6675"
              height="66.6675"
              transform="rotate(-22.9007 -41 26.9426)"
              stroke="url(#paint1_linear_94:889)"
              strokeWidth="0.7"
            />
            <path
              opacity="0.3"
              d="M50.5215 7.42229L20.325 1.14771L46.2077 62.3249L77.1885 68.2073L50.5215 7.42229Z"
              fill="url(#paint2_linear_94:889)"
            />
            <path
              d="M50.5215 7.42229L20.325 1.14771L46.2077 62.3249L76.7963 68.2073L50.5215 7.42229Z"
              stroke="url(#paint3_linear_94:889)"
              strokeWidth="0.7"
            />
            <path
              opacity="0.3"
              d="M17.9721 93.3057L-14.9695 88.2076L46.2077 62.325L77.1885 68.2074L17.9721 93.3057Z"
              fill="url(#paint4_linear_94:889)"
            />
            <path
              d="M17.972 93.3057L-14.1852 88.2076L46.2077 62.325L77.1884 68.2074L17.972 93.3057Z"
              stroke="url(#paint5_linear_94:889)"
              strokeWidth="0.7"
            />
            <defs>
              <linearGradient
                id="paint0_linear_94:889"
                x1="-41"
                y1="21.8445"
                x2="36.9671"
                y2="59.8878"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#030d41" stopOpacity="0.3" />
                <stop offset="1" stopColor="#030d41" stopOpacity="0" />
              </linearGradient>
              <linearGradient
                id="paint1_linear_94:889"
                x1="25.6675"
                y1="95.9631"
                x2="-42.9608"
                y2="20.668"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#030d41" stopOpacity="0" />
                <stop offset="1" stopColor="#030d41" stopOpacity="0.3" />
              </linearGradient>
              <linearGradient
                id="paint2_linear_94:889"
                x1="20.325"
                y1="-3.98039"
                x2="90.6248"
                y2="25.1062"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#030d41" stopOpacity="0.3" />
                <stop offset="1" stopColor="#030d41" stopOpacity="0" />
              </linearGradient>
              <linearGradient
                id="paint3_linear_94:889"
                x1="18.3642"
                y1="-1.59742"
                x2="113.9"
                y2="80.6826"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#030d41" stopOpacity="0" />
                <stop offset="1" stopColor="#030d41" stopOpacity="0.3" />
              </linearGradient>
              <linearGradient
                id="paint4_linear_94:889"
                x1="61.1098"
                y1="62.3249"
                x2="-8.82468"
                y2="58.2156"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#030d41" stopOpacity="0.3" />
                <stop offset="1" stopColor="#030d41" stopOpacity="0" />
              </linearGradient>
              <linearGradient
                id="paint5_linear_94:889"
                x1="65.4236"
                y1="65.0701"
                x2="24.0178"
                y2="41.6598"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#030d41" stopOpacity="0" />
                <stop offset="1" stopColor="#030d41" stopOpacity="0.3" />
              </linearGradient>
            </defs>
          </svg>
        </div>
      </footer>

      <style jsx>{`
        .bg-tangaroa {
          background-color: #030d41;
        }
        .bg-saffron {
          background-color: #f7bd2d;
        }
        .text-tangaroa {
          color: #030d41;
        }
        .text-saffron {
          color: #f7bd2d;
        }
      `}</style>
    </>
  );
};

export default Footer;