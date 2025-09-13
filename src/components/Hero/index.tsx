"use client";
import { useState, useEffect, useRef } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Image from "next/image";
import { motion } from "framer-motion";
import Link from "next/link";

const Hero = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isMuted] = useState(true);
  const videoRef = useRef<HTMLVideoElement>(null);

  // Carrusel (videos + imágenes)
  const slides = [
    {
      type: "video",
      src: "/images/Banner/hero.mp4",
      alt: "Servicios logísticos integrales",
    },
    {
      type: "image",
      src: "/images/Banner/hero1.jpg",
      alt: "Servicios aduaneros profesionales",
    },
    {
      type: "image",
      src: "/images/Banner/hero2.jpg",
      alt: "Transporte y logística eficiente",
    },
    {
      type: "video",
      src: "/images/Banner/hero3.mp4",
      alt: "Soluciones aduaneras completas",
    },
  ];

  useEffect(() => {
    const video = videoRef.current;
    if (video && slides[currentSlide].type === "video") {
      video.play().catch(() => {});
    }
  }, [currentSlide]);

  // Auto cambio
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 6000);
    return () => clearInterval(interval);
  }, [slides.length]);

  const nextSlide = () => setCurrentSlide((prev) => (prev + 1) % slides.length);
  const prevSlide = () =>
    setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1));

  return (
    <section className="relative flex min-h-screen items-center justify-center overflow-hidden bg-[#030d41]">
      <div className="absolute inset-0 z-0">
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ${index === currentSlide ? "opacity-100" : "opacity-0"}`}
          >
            {slide.type === "video" ? (
              <video
                ref={index === currentSlide ? videoRef : null}
                autoPlay
                loop
                muted={isMuted}
                playsInline
                className="h-full w-full object-cover"
                src={slide.src}
              />
            ) : (
              <Image
                src={slide.src}
                alt={slide.alt}
                fill
                className="object-cover"
                priority={index === 0}
              />
            )}
            <div className="absolute inset-0 bg-[#030d41]/50"></div>
          </div>
        ))}
      </div>

      <div className="absolute inset-0 z-5">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full bg-[#f7bd2d]"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              width: `${Math.random() * 6 + 2}px`,
              height: `${Math.random() * 6 + 2}px`,
            }}
            animate={{
              y: [0, -20, 0],
              x: [0, Math.random() * 10 - 5, 0],
              opacity: [0, 0.8, 0],
              scale: [0, 1, 0],
            }}
            transition={{
              duration: Math.random() * 5 + 5,
              repeat: Infinity,
              delay: Math.random() * 3,
            }}
          />
        ))}
      </div>

      <div className="absolute inset-0 z-1 overflow-hidden">
        <motion.div
          className="absolute top-1/3 left-1/4 h-96 w-96 rounded-full bg-[#f7bd2d]/10 blur-3xl"
          animate={{ scale: [1, 1.1, 1], opacity: [0.3, 0.5, 0.3] }}
          transition={{ duration: 8, repeat: Infinity }}
        />
        <motion.div
          className="absolute right-1/3 bottom-1/4 h-80 w-80 rounded-full bg-[#f7bd2d]/5 blur-3xl"
          animate={{ scale: [1.1, 1, 1.1], opacity: [0.2, 0.4, 0.2] }}
          transition={{ duration: 10, repeat: Infinity, delay: 2 }}
        />
      </div>

      <div className="relative z-20 px-6 text-center">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mb-6 text-4xl leading-tight font-bold text-white md:text-6xl"
        >
          Transformamos
          <br />
          <span className="text-[#f7bd2d]">Ideas en realidad</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mx-auto mb-10 max-w-2xl text-lg font-light text-gray-200 md:text-xl"
        >
          Creamos experiencias digitales excepcionales que conectan con tu
          audiencia
        </motion.p>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="flex justify-center"
        >
          <Link
            href="#projects"
            className="transform rounded-lg bg-[#f7bd2d] px-8 py-3 font-semibold text-[#030d41] shadow-lg transition-all duration-300 hover:scale-105 hover:bg-[#dca90d]"
          >
            Ver proyectos
          </Link>
        </motion.div>
      </div>

      <button
        onClick={prevSlide}
        className="absolute top-1/2 left-4 z-20 hidden -translate-y-1/2 transform rounded-full bg-white/10 p-2 backdrop-blur-sm transition-all hover:bg-white/20 md:block"
      >
        <ChevronLeft className="h-6 w-6 text-white" />
      </button>
      <button
        onClick={nextSlide}
        className="absolute top-1/2 right-4 z-20 hidden -translate-y-1/2 transform rounded-full bg-white/10 p-2 backdrop-blur-sm transition-all hover:bg-white/20 md:block"
      >
        <ChevronRight className="h-6 w-6 text-white" />
      </button>

      <div className="absolute bottom-6 left-1/2 z-20 flex hidden -translate-x-1/2 transform space-x-2 md:flex">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`h-3 w-3 rounded-full transition-all duration-300 ${index === currentSlide ? "bg-[#f7bd2d]" : "bg-white/50"}`}
          />
        ))}
      </div>
    </section>
  );
};

export default Hero;
