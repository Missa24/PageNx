"use client";
import { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, ExternalLink, Globe, Loader, ChevronDown } from 'lucide-react';

const websites = [
  {
    name: "Bruseco",
    url: "https://abruseco.com/"
  },
  {
    name: "Assesorcorp",
    url: "https://www.assessorcorp.com/"
  },
  {
    name: "Metodicalatam",
    url: "https://metodicalatam.com/"
  },
  {
    name: "Negocios Independientes",
    url: "https://nodoscowork.com/"
  },
  {
    name: "Redcoporation",
    url: "https://aprendoyaa.com/"
  },
  {
    name: "Tacticalforce",
    url: "https://tacticalforceltda.com/"
  },
  {
    name: "Bolivia Para El Mundo",
    url: "https://boliviaparaelmundo.com/"
  },
  {
    name: "ALWA",
    url: "https://www.alwaboliviatours.com/es"
  },
  {
    name: "Adafalabella",
    url: "https://www.adafalabella.com.bo"
  },
  {
    name: "Coutlery on the Table",
    url: "https://www.ctmrstaffing.com/"
  },
  {
    name: "Capacita",
    url: "https://capacitaglobal.com/"
  }
];

const WebsiteViewer = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isLoading, setIsLoading] = useState(true);
  const [iframeKey, setIframeKey] = useState(0);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const nextWebsite = () => {
    setIsLoading(true);
    setCurrentIndex((prevIndex) =>
      prevIndex === websites.length - 1 ? 0 : prevIndex + 1
    );
    setIframeKey(prev => prev + 1);
  };

  const prevWebsite = () => {
    setIsLoading(true);
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? websites.length - 1 : prevIndex - 1
    );
    setIframeKey(prev => prev + 1);
  };

  const goToWebsite = (index) => {
    setIsLoading(true);
    setCurrentIndex(index);
    setIframeKey(prev => prev + 1);
    setIsDropdownOpen(false);
  };

  const handleIframeLoad = () => {
    setIsLoading(false);
  };

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  if (!websites || websites.length === 0) {
    return <div className="p-4 text-center text-white">No hay websites para mostrar</div>;
  }

  return (
    <div className="relative py-16 md:py-20 lg:py-28 bg-[#030d41] overflow-hidden" id='projects'>
      <div className="text-center mb-10">
        <h2 className="text-4xl font-bold text-[#f7bd2d] mb-4 flex items-center justify-center">
          NUESTROS PROYECTOS
        </h2>
        <p className="text-white/70 max-w-1xl mx-1">
          Explora nuestra colección de proyectos web desarrollados con las últimas tecnologías y mejores prácticas de la industria.
        </p>
      </div>

      <div className="flex flex-col lg:flex-row gap-8 px-4">
        <div className="lg:w-1/3 bg-[#030d41]/80 rounded-xl border border-[#f7bd2d]/30 p-6">
          <h3 className="text-xl font-bold text-[#f7bd2d] mb-4 flex items-center">
            Lista de Proyectos
          </h3>
          <div className="lg:hidden mb-6">
            <div
              className="flex justify-between items-center p-4 bg-[#030d41] border border-[#f7bd2d]/50 rounded-lg text-white cursor-pointer"
              onClick={toggleDropdown}
            >
              <span>{websites[currentIndex].name}</span>
              <ChevronDown className={`transition-transform ${isDropdownOpen ? 'rotate-180' : ''}`} />
            </div>

            {isDropdownOpen && (
              <div className="mt-2 bg-[#030d41] border border-[#f7bd2d]/30 rounded-lg overflow-hidden">
                {websites.map((site, index) => (
                  <div
                    key={index}
                    className={`p-3 cursor-pointer hover:bg-[#f7bd2d]/10 ${index === currentIndex ? 'bg-[#f7bd2d]/20' : ''}`}
                    onClick={() => goToWebsite(index)}
                  >
                    {site.name}
                  </div>
                ))}
              </div>
            )}
          </div>
          <div className="hidden lg:block max-h-[50vh] overflow-y-auto pr-2 custom-scrollbar">
            <div className="space-y-3">
              {websites.map((site, index) => (
                <div
                  key={index}
                  className={`p-4 rounded-lg cursor-pointer transition-all ${index === currentIndex
                    ? 'bg-[#f7bd2d] text-[#030d41]'
                    : 'bg-[#030d41] text-white border border-[#f7bd2d]/30 hover:bg-[#f7bd2d]/10'
                    }`}
                  onClick={() => goToWebsite(index)}
                >
                  <div className="flex items-center">
                    <div className={`w-3 h-3 rounded-full mr-3 ${index === currentIndex ? 'bg-[#030d41]' : 'bg-[#f7bd2d]'
                      }`}></div>
                    <span className="font-medium">{site.name}</span>
                  </div>
                  <div className="text-sm mt-1 opacity-80 truncate">
                    {site.url}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-8 p-4 bg-[#030d41] border border-[#f7bd2d]/20 rounded-lg">
            <h4 className="text-[#f7bd2d] font-medium mb-2">Información del Proyecto</h4>
            <p className="text-white/80 text-sm">
              Selecciona un proyecto de la lista para visualizarlo en el navegador integrado.
            </p>
          </div>
        </div>

        <div className="lg:w-2/3">
          <div className="mb-6 p-4 bg-[#030d41]/60 rounded-xl border border-[#f7bd2d]/20">

            <div className="flex justify-center mb-4 space-x-4">
              <button
                onClick={prevWebsite}
                className="flex items-center px-4 py-2 bg-[#030d41] border border-[#f7bd2d]/30 text-[#f7bd2d] rounded-lg hover:bg-[#f7bd2d] hover:text-[#030d41] transition-colors"
              >
                <ChevronLeft size={18} className="mr-1" />
                Anterior
              </button>
              <span className="flex items-center px-4 py-2 bg-[#030d41] border border-[#f7bd2d]/30 text-[#f7bd2d] rounded-lg">
                {currentIndex + 1} / {websites.length}
              </span>
              <button
                onClick={nextWebsite}
                className="flex items-center px-4 py-2 bg-[#030d41] border border-[#f7bd2d]/30 text-[#f7bd2d] rounded-lg hover:bg-[#f7bd2d] hover:text-[#030d41] transition-colors"
              >
                Siguiente
                <ChevronRight size={18} className="ml-1" />
              </button>
            </div>

            <div className="relative w-full h-[60vh] border-2 border-[#f7bd2d]/30 rounded-lg overflow-hidden shadow-lg">
              {isLoading && (
                <div className="absolute inset-0 flex flex-col items-center justify-center bg-[#030d41]">
                  <Loader className="animate-spin text-[#f7bd2d] mb-4" size={40} />
                  <p className="text-[#f7bd2d]">Cargando {websites[currentIndex].name}...</p>
                </div>
              )}

              <iframe
                key={iframeKey}
                src={websites[currentIndex].url}
                className="w-full h-full border-none"
                onLoad={handleIframeLoad}
                title={websites[currentIndex].name}
                sandbox="allow-same-origin allow-scripts allow-popups allow-forms"
                loading="lazy"
              />
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
        }
        .custom-scrollbar::-webkit-scrollbar-thumb {
          background: #f7bd2d;
          border-radius: 3px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb:hover {
          background: #ffd84d;
        }
      `}</style>
    </div>
  );
};

export default WebsiteViewer;