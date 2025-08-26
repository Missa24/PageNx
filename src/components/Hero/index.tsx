"use client"
import Link from "next/link";
import { useState, useEffect, useRef } from "react";
import { Play, Pause, ChevronDown, ArrowRight, Sparkles } from "lucide-react";
import { motion } from "framer-motion";
const Hero = () => {
  const [isMounted, setIsMounted] = useState(false);
  const [isVideoPlaying, setIsVideoPlaying] = useState(true);
  const videoRef = useRef(null);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  const toggleVideo = () => {
    if (videoRef.current) {
      if (isVideoPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setIsVideoPlaying(!isVideoPlaying);
    }
  };

  return (
    <section className="relative min-h-screen overflow-hidden flex items-center justify-center bg-[#030d41]">
      {/* Video de fondo con overlay */}
      <div className="absolute inset-0 z-0">
        <video
          ref={videoRef}
          autoPlay
          muted
          loop
          playsInline
          className="w-full h-full object-cover"
        >
          <source src="images/video/hero_video.mp4" type="video/mp4" />
        </video>

        {/* Overlay para mejorar contraste */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#030d41]/70 via-[#030d41]/40 to-[#030d41]/70"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-[#030d41]/50 to-[#0a1a66]/30"></div>
      </div>

      {/* Control de video */}
      <button
        onClick={toggleVideo}
        className="absolute bottom-6 right-6 z-30 flex items-center justify-center w-12 h-12 rounded-full bg-[#f7bd2d]/20 backdrop-blur-sm border border-[#f7bd2d]/30 text-[#f7bd2d] hover:bg-[#f7bd2d]/30 transition-all"
        aria-label={isVideoPlaying ? "Pausar video" : "Reproducir video"}
      >
        {isVideoPlaying ? <Pause size={16} /> : <Play size={16} />}
      </button>

      {/* Partículas flotantes */}
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

      {/* Efectos de luz */}
      <div className="absolute inset-0 z-1 overflow-hidden">
        <motion.div
          className="absolute top-1/3 left-1/4 w-96 h-96 rounded-full bg-[#f7bd2d]/10 blur-3xl"
          animate={{
            scale: [1, 1.1, 1],
            opacity: [0.3, 0.5, 0.3]
          }}
          transition={{
            duration: 8,
            repeat: Infinity
          }}
        />
        <motion.div
          className="absolute bottom-1/4 right-1/3 w-80 h-80 rounded-full bg-[#f7bd2d]/5 blur-3xl"
          animate={{
            scale: [1.1, 1, 1.1],
            opacity: [0.2, 0.4, 0.2]
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            delay: 2
          }}
        />
      </div>

      {/* Contenido principal */}
      <div className="container relative z-20 px-4 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-8"
        >

        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight"
        >
          <span className="text-[#f7bd2d]">Transformamos</span>
          <br />
          ideas en realidad
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-xl text-gray-200 mb-10 max-w-2xl mx-auto font-light"
        >
          Creamos experiencias digitales excepcionales que conectan con tu audiencia
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <Link
            href="/proyectos"
            className="group relative px-8 py-4 bg-[#f7bd2d] text-[#030d41] font-medium rounded-full hover:bg-[#ffd34e] transition-all flex items-center justify-center gap-2 overflow-hidden"
          >
            <span className="absolute inset-0 bg-white opacity-0 group-hover:opacity-10 transition-opacity duration-300"></span>
            Explorar proyectos
            <ArrowRight size={18} className="transition-transform duration-300 group-hover:translate-x-1" />
          </Link>
          <Link
            href="/contacto"
            className="px-8 py-4 border border-[#f7bd2d]/40 text-[#f7bd2d] font-medium rounded-full hover:bg-[#f7bd2d]/10 transition-all backdrop-blur-sm"
          >
            Contactar ahora
          </Link>
        </motion.div>

        <motion.div
          className="mt-24 flex justify-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 1 }}
        >
        </motion.div>
      </div>

      {/* Efecto de brillo central */}
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-1/2 h-1/2 bg-[#f7bd2d]/5 rounded-full blur-[100px] z-1"></div>
    </section>
  );
};

export default Hero;