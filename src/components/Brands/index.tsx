"use client"
import { Brand } from "@/types/brand";
import Image from "next/image";
import { useEffect, useState } from "react";
import brandsData from "./brandsData";

const Brands = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying] = useState(true);
  const [itemsToShow, setItemsToShow] = useState(5);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex >= brandsData.length - itemsToShow ? 0 : prevIndex + 1
    );
  };
  useEffect(() => {
    if (!isAutoPlaying) return; const interval = setInterval(() => { nextSlide(); }, 2000); return () => clearInterval(interval);
  }, [isAutoPlaying]);

  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      if (width <= 480) {
        setItemsToShow(1); // para móviles pequeños
      } else if (width <= 768) {
        setItemsToShow(2); // tablets o móviles grandes
      } else if (width <= 1024) {
        setItemsToShow(3); // pantallas medianas
      } else {
        setItemsToShow(5); // pantallas grandes
      }
    };

    handleResize(); // establecer valor inicial
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);



  return (
    <section className="py-10 sm:py-12 md:py-16 bg-[#f7bd2d] relative overflow-hidden">

      {/* Elementos decorativos sutiles */}
      <div className="absolute -top-20 left-0 w-72 h-72 bg-blue-200 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-blob"></div>
      <div className="absolute -bottom-20 right-0 w-96 h-96 bg-blue-200 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-blob animation-delay-2000"></div>

      <div className="container relative z-10 mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            Nuestros <span className="text-blue-600">Clientes</span>
          </h2>
          <p className="text-sm sm:text-base text-black max-w-xl mx-auto">
            Empresas que han confiado en nuestros servicios y soluciones de calidad
          </p>

        </div>

        {/* Contenedor del slider */}
        <div className="relative">
          <div className="relative overflow-x-auto scrollbar-hide sm:overflow-hidden">
            <div
              className="flex transition-transform duration-500 ease-out"
              style={{ transform: `translateX(-${currentIndex * (100 / itemsToShow)}%)` }}
            >
              {brandsData.map((brand) => (
                <div
                  key={brand.id}
                  className="flex-shrink-0 px-2 sm:px-3"
                  style={{ width: `${100 / itemsToShow}%` }}
                >
                  <div className="bg-white p-4 sm:p-6 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 hover:-translate-y-1 flex items-center justify-center h-28 sm:h-36">
                    <SingleBrand brand={brand} />
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>

      <style jsx>{`
        @keyframes blob {
          0%, 100% {
            transform: translate(0px, 0px) scale(1);
          }
          33% {
            transform: translate(30px, -30px) scale(1.05);
          }
          66% {
            transform: translate(-20px, 20px) scale(0.95);
          }
        }
        .animate-blob {
          animation: blob 10s infinite;
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
      className="relative h-20 w-full transition-all duration-300 hover:scale-105"
    >
      <div className="hidden dark:block relative h-full w-full">
        <Image
          src={imageLight}
          alt={name}
          fill
          className="object-contain opacity-90 hover:opacity-100"
        />
      </div>

      <div className="block dark:hidden relative h-full w-full">
        <Image
          src={image}
          alt={name}
          fill
          className="object-contain opacity-90 hover:opacity-100"
        />
      </div>
    </a>
  );
};