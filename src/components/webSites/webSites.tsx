"use client";
import { useState, useEffect } from "react";
import {
  ChevronLeft,
  ChevronRight,
  ExternalLink,
  Globe,
  Loader,
  ChevronDown,
  Eye,
  ArrowRight,
} from "lucide-react";

const websites = [
  {
    name: "Bruseco",
    url: "https://abruseco.com/",
  },
  {
    name: "Assesorcorp",
    url: "https://www.assessorcorp.com/",
  },
  {
    name: "Metodicalatam",
    url: "https://metodicalatam.com/",
  },
  {
    name: "Negocios Independientes",
    url: "https://nodoscowork.com/",
  },
  {
    name: "Redcoporation",
    url: "https://aprendoyaa.com/",
  },
  {
    name: "Tacticalforce",
    url: "https://tacticalforceltda.com/",
  },
  {
    name: "Bolivia Para El Mundo",
    url: "https://boliviaparaelmundo.com/",
  },
  {
    name: "ALWA",
    url: "https://www.alwaboliviatours.com/es",
  },
  {
    name: "Adafalabella",
    url: "https://www.adafalabella.com.bo",
  },
  {
    name: "Coutlery on the Table",
    url: "https://www.ctmrstaffing.com/",
  },
];

const WebsiteViewer = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isLoading, setIsLoading] = useState(true);
  const [iframeKey, setIframeKey] = useState(0);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const nextWebsite = () => {
    setIsLoading(true);
    setCurrentIndex((prevIndex) =>
      prevIndex === websites.length - 1 ? 0 : prevIndex + 1,
    );
    setIframeKey((prev) => prev + 1);
  };

  const prevWebsite = () => {
    setIsLoading(true);
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? websites.length - 1 : prevIndex - 1,
    );
    setIframeKey((prev) => prev + 1);
  };

  const goToWebsite = (index) => {
    setIsLoading(true);
    setCurrentIndex(index);
    setIframeKey((prev) => prev + 1);
    setIsDropdownOpen(false);
  };

  const handleIframeLoad = () => {
    setIsLoading(false);
  };

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  if (!websites || websites.length === 0) {
    return (
      <div className="p-4 text-center text-white">
        No hay websites para mostrar
      </div>
    );
  }

  return (
    <div
      className="relative overflow-hidden bg-[#030d41] py-16 md:py-20 lg:py-28"
      id="projects"
    >
      <div className="absolute inset-0">
        {[...Array(15)].map((_, i) => (
          <div
            key={i}
            className="animate-float absolute rounded-full bg-[#f7bd2d]"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              width: `${Math.random() * 8 + 4}px`,
              height: `${Math.random() * 8 + 4}px`,
              opacity: Math.random() * 0.2 + 0.1,
              animationDuration: `${Math.random() * 15 + 10}s`,
              animationDelay: `${Math.random() * 5}s`,
            }}
          />
        ))}
      </div>

      <div className="relative z-10 container mx-auto px-4">
        <div className="mb-12 text-center">
          <div className="mb-6 inline-flex items-center justify-center rounded-full bg-[#f7bd2d]/10 px-4 py-2">
            <span className="text-sm font-semibold text-[#f7bd2d]">
              Portafolio Digital
            </span>
          </div>
          <h2 className="mb-4 text-3xl font-bold text-white md:text-4xl lg:text-5xl">
            Nuestros <span className="text-[#f7bd2d]">Proyectos</span>
          </h2>
          <p className="mx-auto max-w-2xl text-lg text-slate-300">
            Explora nuestra colección de proyectos web desarrollados con las
            últimas tecnologías y mejores prácticas de la industria.
          </p>
        </div>

        <div className="flex flex-col gap-8 lg:flex-row">
          <div className="lg:w-1/3">
            <div className="rounded-2xl border border-[#f7bd2d]/30 bg-gradient-to-br from-[#030d41] to-[#0a1a5e] p-6 backdrop-blur-sm">
              <div className="mb-6 flex items-center justify-between">
                <h3 className="flex items-center text-xl font-bold text-[#f7bd2d]">
                  <Eye className="mr-2 h-5 w-5" />
                  Proyectos Destacados
                </h3>
                <span className="rounded-full bg-[#f7bd2d]/10 px-2 py-1 text-sm text-[#f7bd2d]">
                  {websites.length} sitios
                </span>
              </div>

              <div className="mb-6 lg:hidden">
                <div
                  className="flex cursor-pointer items-center justify-between rounded-xl border border-[#f7bd2d]/40 bg-[#030d41] p-4 text-white transition-all hover:border-[#f7bd2d]/60"
                  onClick={toggleDropdown}
                >
                  <div className="flex items-center">
                    <div className="mr-3 h-3 w-3 rounded-full bg-[#f7bd2d]"></div>
                    <span className="font-medium">
                      {websites[currentIndex].name}
                    </span>
                  </div>
                  <ChevronDown
                    className={`transition-transform ${isDropdownOpen ? "rotate-180" : ""}`}
                  />
                </div>

                {isDropdownOpen && (
                  <div className="mt-2 overflow-hidden rounded-xl border border-[#f7bd2d]/30 bg-[#030d41]">
                    {websites.map((site, index) => (
                      <div
                        key={index}
                        className={`cursor-pointer p-4 transition-all hover:bg-[#f7bd2d]/10 ${index === currentIndex ? "bg-[#f7bd2d]/20" : ""}`}
                        onClick={() => goToWebsite(index)}
                      >
                        <div className="flex items-center">
                          <div
                            className={`mr-3 h-2 w-2 rounded-full ${index === currentIndex ? "bg-[#f7bd2d]" : "bg-[#f7bd2d]/60"}`}
                          ></div>
                          <span className="text-white">{site.name}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </div>

              <div className="custom-scrollbar hidden max-h-[400px] overflow-y-auto pr-2 lg:block">
                <div className="space-y-2">
                  {websites.map((site, index) => (
                    <div
                      key={index}
                      className={`transform cursor-pointer rounded-xl p-4 transition-all hover:scale-[1.02] ${
                        index === currentIndex
                          ? "bg-gradient-to-r from-[#f7bd2d] to-[#ffd84d] text-[#030d41] shadow-lg shadow-[#f7bd2d]/30"
                          : "border border-[#f7bd2d]/20 bg-[#030d41]/50 text-white hover:border-[#f7bd2d]/40 hover:bg-[#030d41]/70"
                      }`}
                      onClick={() => goToWebsite(index)}
                    >
                      <div className="flex items-center justify-between">
                        <div className="flex items-center">
                          <div
                            className={`mr-3 h-3 w-3 rounded-full ${index === currentIndex ? "bg-[#030d41]" : "bg-[#f7bd2d]"}`}
                          ></div>
                          <span className="font-medium">{site.name}</span>
                        </div>
                        {index === currentIndex && (
                          <div className="h-2 w-2 animate-pulse rounded-full bg-[#030d41]"></div>
                        )}
                      </div>
                      <div
                        className={`mt-1 truncate text-xs ${index === currentIndex ? "text-[#030d41]/80" : "text-[#f7bd2d]/60"}`}
                      >
                        {site.url}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-6 rounded-xl border border-[#f7bd2d]/20 bg-[#030d41]/80 p-4">
                <h4 className="mb-2 text-sm font-medium text-[#f7bd2d]">
                  💡 Información
                </h4>
                <p className="text-xs text-white/70">
                  Selecciona un proyecto para visualizarlo en tiempo real. Todos
                  los sitios están en producción activa.
                </p>
              </div>
            </div>
          </div>

          <div className="lg:w-2/3">
            <div className="rounded-2xl border border-[#f7bd2d]/30 bg-gradient-to-br from-[#030d41] to-[#0a1a5e] p-6 backdrop-blur-sm">
              <div className="mb-6 flex flex-col items-center justify-between gap-4 sm:flex-row">
                <div className="flex items-center space-x-2">
                  <div className="h-3 w-3 animate-pulse rounded-full bg-[#f7bd2d]"></div>
                  <h3 className="truncate text-lg font-bold text-white">
                    {websites[currentIndex].name}
                  </h3>
                </div>

                <div className="flex items-center space-x-3">
                  <span className="rounded-full bg-[#f7bd2d]/10 px-3 py-1 text-sm text-[#f7bd2d]">
                    {currentIndex + 1} / {websites.length}
                  </span>

                  <div className="flex space-x-2">
                    <button
                      onClick={prevWebsite}
                      className="transform rounded-lg border border-[#f7bd2d]/30 bg-[#030d41] p-2 text-[#f7bd2d] transition-all hover:scale-105 hover:bg-[#f7bd2d] hover:text-[#030d41]"
                      title="Proyecto anterior"
                    >
                      <ChevronLeft size={18} />
                    </button>
                    <button
                      onClick={nextWebsite}
                      className="transform rounded-lg border border-[#f7bd2d]/30 bg-[#030d41] p-2 text-[#f7bd2d] transition-all hover:scale-105 hover:bg-[#f7bd2d] hover:text-[#030d41]"
                      title="Siguiente proyecto"
                    >
                      <ChevronRight size={18} />
                    </button>
                  </div>
                </div>
              </div>

              <div className="relative h-[500px] w-full overflow-hidden rounded-xl border-2 border-[#f7bd2d]/30 shadow-2xl shadow-[#f7bd2d]/10">
                {isLoading && (
                  <div className="absolute inset-0 flex flex-col items-center justify-center bg-gradient-to-br from-[#030d41] to-[#0a1a5e]">
                    <div className="relative">
                      <Loader
                        className="mb-4 animate-spin text-[#f7bd2d]"
                        size={40}
                      />
                      <div className="absolute inset-0 animate-ping rounded-full border-2 border-[#f7bd2d]/30"></div>
                    </div>
                    <p className="mt-2 text-sm text-[#f7bd2d]">
                      Cargando {websites[currentIndex].name}...
                    </p>
                  </div>
                )}

                <iframe
                  key={iframeKey}
                  src={websites[currentIndex].url}
                  className="h-full w-full border-none"
                  onLoad={handleIframeLoad}
                  title={websites[currentIndex].name}
                  sandbox="allow-same-origin allow-scripts allow-popups allow-forms"
                  loading="lazy"
                />
                <div className="absolute top-4 right-4">
                  <a
                    href={websites[currentIndex].url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex transform items-center rounded-lg border border-[#f7bd2d]/30 bg-[#030d41] px-3 py-1.5 text-xs text-[#f7bd2d] transition-all hover:scale-105 hover:bg-[#f7bd2d] hover:text-[#030d41]"
                    title="Abrir en nueva pestaña"
                  >
                    <ExternalLink size={14} className="mr-1" />
                    Abrir sitio
                  </a>
                </div>
              </div>

              <div className="mt-4 rounded-lg border border-[#f7bd2d]/20 bg-[#030d41]/50 p-3">
                <p className="truncate text-sm text-[#f7bd2d]/80">
                  <Globe size={14} className="mr-2 inline" />
                  {websites[currentIndex].url}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .custom-scrollbar::-webkit-scrollbar {
          width: 6px;
        }
        .custom-scrollbar::-webkit-scrollbar-track {
          background: #030d41;
          border-radius: 3px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb {
          background: #f7bd2d;
          border-radius: 3px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb:hover {
          background: #ffd84d;
        }
        @keyframes float {
          0%,
          100% {
            transform: translateY(0) rotate(0deg);
          }
          50% {
            transform: translateY(-10px) rotate(5deg);
          }
        }
        .animate-float {
          animation: float 8s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
};

export default WebsiteViewer;
