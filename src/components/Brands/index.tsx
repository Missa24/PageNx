"use client"
import { Brand } from "@/types/brand";
import Image from "next/image";
import { useEffect, useState } from "react";
import { ChevronLeft, ChevronRight, Star } from "lucide-react";
import brandsData from "./brandsData";

const Brands = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const itemsToShow = 5;

  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex >= brandsData.length - itemsToShow ? 0 : prevIndex + 1
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? brandsData.length - itemsToShow : prevIndex - 1
    );
  };

  useEffect(() => {
    if (!isAutoPlaying) return;

    const interval = setInterval(() => {
      nextSlide();
    }, 1500);

    return () => clearInterval(interval);
  }, [isAutoPlaying]);

  return (
    <section className="py-16 bg-gradient-to-b from-[#030d41] to-[#0a1a5e] relative overflow-hidden">
      {/* Elementos decorativos */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-[#f7bd2d] rounded-full mix-blend-soft-light filter blur-xl opacity-20 animate-blob"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#f7bd2d] rounded-full mix-blend-soft-light filter blur-xl opacity-15 animate-blob animation-delay-2000"></div>

      {/* Estrellas decorativas */}
      <div className="absolute top-20 left-1/4">
        <Star className="text-[#f7bd2d] opacity-30 w-8 h-8" />
      </div>
      <div className="absolute bottom-32 right-1/3">
        <Star className="text-[#f7bd2d] opacity-40 w-6 h-6" />
      </div>
      <div className="absolute top-1/3 right-20">
        <Star className="text-[#f7bd2d] opacity-50 w-5 h-5" />
      </div>

      <div className="container relative z-10 mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Nuestros <span className="text-[#f7bd2d]">Clientes</span>
          </h2>
          <div className="w-20 h-1 bg-[#f7bd2d] mx-auto mb-4"></div>
          <p className="text-lg text-slate-300 max-w-2xl mx-auto">
            Empresas que han confiado en nuestros servicios y soluciones de calidad
          </p>
        </div>

        <div className="relative px-4 md:px-12">
          {/* Botones de navegación */}
          <button
            onClick={prevSlide}
            onMouseEnter={() => setIsAutoPlaying(false)}
            onMouseLeave={() => setIsAutoPlaying(true)}
            className="absolute left-0 top-1/2 transform -translate-y-1/2 z-10 bg-[#030d41] border-2 border-[#f7bd2d] p-3 rounded-full shadow-lg hover:bg-[#f7bd2d] transition-all duration-300 group"
            aria-label="Anterior"
          >
            <ChevronLeft size={24} className="text-[#f7bd2d] group-hover:text-[#030d41]" />
          </button>

          <button
            onClick={nextSlide}
            onMouseEnter={() => setIsAutoPlaying(false)}
            onMouseLeave={() => setIsAutoPlaying(true)}
            className="absolute right-0 top-1/2 transform -translate-y-1/2 z-10 bg-[#030d41] border-2 border-[#f7bd2d] p-3 rounded-full shadow-lg hover:bg-[#f7bd2d] transition-all duration-300 group"
            aria-label="Siguiente"
          >
            <ChevronRight size={24} className="text-[#f7bd2d] group-hover:text-[#030d41]" />
          </button>

          {/* Contenedor del carrusel */}
          <div
            className="overflow-hidden"
            onMouseEnter={() => setIsAutoPlaying(false)}
            onMouseLeave={() => setIsAutoPlaying(true)}
          >
            <div
              className="flex transition-transform duration-700 ease-in-out"
              style={{ transform: `translateX(-${currentIndex * (100 / itemsToShow)}%)` }}
            >
              {brandsData.map((brand, index) => (
                <div
                  key={brand.id}
                  className="flex-shrink-0 px-3"
                  style={{ width: `${100 / itemsToShow}%` }}
                >
                  <div className="bg-white/5 backdrop-blur-sm border border-[#f7bd2d]/20 p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-500 hover:-translate-y-3 hover:border-[#f7bd2d]/40 flex items-center justify-center h-40">
                    <SingleBrand brand={brand} />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Indicadores de paginación */}
        <div className="flex justify-center mt-10 space-x-3">
          {Array.from({ length: Math.ceil(brandsData.length / itemsToShow) }).map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index * itemsToShow)}
              className={`h-2 rounded-full transition-all duration-300 ${currentIndex >= index * itemsToShow && currentIndex < (index + 1) * itemsToShow
                ? 'bg-[#f7bd2d] w-8'
                : 'bg-white/30 w-3'
                }`}
              aria-label={`Ir a slide ${index + 1}`}
            />
          ))}
        </div>
      </div>

      <style jsx>{`
        @keyframes blob {
          0% {
            transform: translate(0px, 0px) scale(1);
          }
          33% {
            transform: translate(30px, -50px) scale(1.1);
          }
          66% {
            transform: translate(-20px, 20px) scale(0.9);
          }
          100% {
            transform: translate(0px, 0px) scale(1);
          }
        }
        .animate-blob {
          animation: blob 7s infinite;
        }
        .animation-delay-2000 {
          animation-delay: 2s;
        }
      `}</style>
    </section>
  );
};

export default Brands;

const SingleBrand = ({ brand }: { brand: Brand }) => {
  const { href, image, imageLight, name } = brand;

  return (
    <a
      href={href}
      target="_blank"
      rel="nofollow noreferrer"
      className="relative h-20 w-full transition-all duration-500 hover:scale-110 group"
    >
      <div className="hidden dark:block relative h-full w-full">
        <Image
          src={imageLight}
          alt={name}
          fill
          className="object-contain filter brightness-0 invert opacity-90 group-hover:opacity-100 transition-opacity"
        />
      </div>

      <div className="block dark:hidden relative h-full w-full">
        <Image
          src={image}
          alt={name}
          fill
          className="object-contain filter contrast-125 brightness-110 group-hover:contrast-150 group-hover:brightness-125 transition-all"
        />
      </div>
    </a>
  );
};