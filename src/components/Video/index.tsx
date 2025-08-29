"use client";

import { useState, useRef, useEffect } from "react";
import { Play, X, ChevronRight, Users, Code, Globe, Shield, Pause } from "lucide-react";

export default function AboutSection() {
  const [isModalOpen, setModalOpen] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
  const videoRef = useRef(null);

  // Datos para mostrar en lugar del video
  const features = [
    {
      icon: <Code className="h-8 w-8" />,
      title: "Desarrollo a Medida",
      description: "Soluciones tecnológicas personalizadas para cada institución"
    },
    {
      icon: <Globe className="h-8 w-8" />,
      title: "Tecnología Moderna",
      description: "Implementamos las últimas tecnologías para garantizar eficiencia"
    },
    {
      icon: <Shield className="h-8 w-8" />,
      title: "Seguridad Garantizada",
      description: "Protegemos tus datos con los más altos estándares de seguridad"
    },
    {
      icon: <Users className="h-8 w-8" />,
      title: "Soporte Continuo",
      description: "Acompañamiento durante y después de la implementación"
    }
  ];

  // Efecto para cambiar automáticamente las características
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % features.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [features.length]);

  const togglePlay = () => {
    if (videoRef.current) {
      if (videoRef.current.paused) {
        videoRef.current.play();
        setIsPlaying(true);
      } else {
        videoRef.current.pause();
        setIsPlaying(false);
      }
    }
  };

  return (
    <>
      <section className="relative py-16 md:py-20 lg:py-28 bg-gradient-to-br from-[#030d41] via-[#0a1a5e] to-[#030d41] overflow-hidden">
        {/* Video de fondo con opacidad */}
        <div className="absolute inset-0 z-0 overflow-hidden">
          <video
            ref={videoRef}
            autoPlay
            muted
            loop
            playsInline
            className="w-full h-full object-cover opacity-30"
          >
            <source src="/images/about/nosotros.mp4" type="video/mp4" />
            {/* Puedes agregar fuentes alternativas aquí si es necesario */}
          </video>
          <div className="absolute inset-0 bg-gradient-to-b from-[#030d41]/20 via-[#030d41]/70 to-[#030d41]/20"></div>

          {/* Botón para controlar el video */}
          <button
            onClick={togglePlay}
            className="absolute bottom-4 right-4 z-10 p-2 bg-[#030d41]/70 rounded-full text-[#f7bd2d] hover:bg-[#030d41] transition-colors"
          >
            {isPlaying ? <Pause size={20} /> : <Play size={20} />}
          </button>
        </div>

        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-1/4 left-10 w-80 h-80 bg-[#f7bd2d] rounded-full mix-blend-soft-light filter blur-3xl animate-pulse-slow"></div>
          <div className="absolute bottom-1/4 right-10 w-96 h-96 bg-[#f7bd2d] rounded-full mix-blend-soft-light filter blur-3xl animate-pulse-slow delay-1000"></div>
        </div>

        <div className="container relative z-10 mx-auto px-4">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
              Acerca de <span className="text-[#f7bd2d]">nosotros</span>
            </h2>
            <p className="text-lg text-slate-300 max-w-2xl mx-auto">
              NOXUN es una empresa especializada en el desarrollo de sistemas a medida a través de herramientas tecnológicas adaptadas a las necesidades de cada institución.
            </p>
          </div>

          <div className="flex flex-col lg:flex-row items-center gap-10">
            {/* Presentación visual interactiva */}
            <div className="w-full lg:w-1/2">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl shadow-[#f7bd2d]/30 bg-gradient-to-br from-[#0a1442]/80 to-[#030d41]/80 border border-gray-700/50 p-8 h-96 flex flex-col justify-center backdrop-blur-sm">
                <div className="absolute -top-10 -right-10 w-40 h-40 bg-[#f7bd2d]/10 rounded-full blur-xl"></div>
                <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-[#f7bd2d]/10 rounded-full blur-xl"></div>

                <div className="relative z-10 text-center">
                  <div className="flex justify-center mb-6">
                    <div className="p-4 bg-[#f7bd2d]/10 rounded-2xl backdrop-blur-sm border border-[#f7bd2d]/20">
                      {features[activeIndex].icon}
                    </div>
                  </div>

                  <h3 className="text-2xl font-bold text-white mb-3">
                    {features[activeIndex].title}
                  </h3>

                  <p className="text-slate-300 mb-6">
                    {features[activeIndex].description}
                  </p>

                  <div className="flex justify-center space-x-2 mb-8">
                    {features.map((_, index) => (
                      <button
                        key={index}
                        onClick={() => setActiveIndex(index)}
                        className={`w-3 h-3 rounded-full transition-all ${index === activeIndex ? 'bg-[#f7bd2d] w-8' : 'bg-gray-600'
                          }`}
                      />
                    ))}
                  </div>

                </div>
              </div>
            </div>

            {/* Información adicional */}
            <div className="w-full lg:w-1/2">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-[#0a1442]/60 backdrop-blur-sm rounded-xl p-6 border border-gray-700/30 hover:border-[#f7bd2d]/30 transition-colors">
                  <div className="w-12 h-12 bg-[#f7bd2d]/10 rounded-lg flex items-center justify-center mb-4">
                    <Users className="h-6 w-6 text-[#f7bd2d]" />
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-2">Experiencia</h3>
                </div>

                <div className="bg-[#0a1442]/60 backdrop-blur-sm rounded-xl p-6 border border-gray-700/30 hover:border-[#f7bd2d]/30 transition-colors">
                  <div className="w-12 h-12 bg-[#f7bd2d]/10 rounded-lg flex items-center justify-center mb-4">
                    <Code className="h-6 w-6 text-[#f7bd2d]" />
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-2">Tecnología</h3>
                </div>

                <div className="bg-[#0a1442]/60 backdrop-blur-sm rounded-xl p-6 border border-gray-700/30 hover:border-[#f7bd2d]/30 transition-colors">
                  <div className="w-12 h-12 bg-[#f7bd2d]/10 rounded-lg flex items-center justify-center mb-4">
                    <Globe className="h-6 w-6 text-[#f7bd2d]" />
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-2">Alcance</h3>
                </div>

                <div className="bg-[#0a1442]/60 backdrop-blur-sm rounded-xl p-6 border border-gray-700/30 hover:border-[#f7bd2d]/30 transition-colors">
                  <div className="w-12 h-12 bg-[#f7bd2d]/10 rounded-lg flex items-center justify-center mb-4">
                    <Shield className="h-6 w-6 text-[#f7bd2d]" />
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-2">Compromiso</h3>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="absolute inset-0 overflow-hidden z-0">
          {[...Array(12)].map((_, i) => (
            <div
              key={i}
              className="absolute rounded-full bg-[#f7bd2d] opacity-30 animate-float"
              style={{
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
                width: `${Math.random() * 15 + 5}px`,
                height: `${Math.random() * 15 + 5}px`,
                animationDuration: `${Math.random() * 15 + 10}s`,
                animationDelay: `${Math.random() * 5}s`
              }}
            />
          ))}
        </div>
      </section>

      {/* Modal de información extendida */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-md p-4">
          <div className="relative w-full max-w-4xl bg-gradient-to-br from-[#030d41] to-[#0a1442] rounded-2xl border border-gray-700/50 overflow-hidden max-h-[90vh] overflow-y-auto">
            <button
              onClick={() => setModalOpen(false)}
              className="absolute top-4 right-4 z-10 p-2 bg-[#f7bd2d] text-[#030d41] rounded-full hover:bg-[#ffd34e] transition-colors"
            >
              <X size={24} />
            </button>

            <div className="p-8">
              <div className="text-center mb-8">
                <h2 className="text-3xl font-bold text-white mb-4">Más sobre <span className="text-[#f7bd2d]">NOXUN</span></h2>
                <div className="w-20 h-1 bg-[#f7bd2d] mx-auto mb-6"></div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-xl font-semibold text-[#f7bd2d] mb-4">Nuestra Misión</h3>
                  <p className="text-slate-300 mb-6">
                    Desarrollar soluciones tecnológicas innovadoras que impulsen la transformación digital de las instituciones,
                    optimizando sus procesos y maximizando su eficiencia operativa.
                  </p>

                  <h3 className="text-xl font-semibold text-[#f7bd2d] mb-4">Nuestra Visión</h3>
                  <p className="text-slate-300">
                    Ser líderes en el desarrollo de software a medida, reconocidos por nuestra capacidad de adaptación
                    y por generar valor tangible para nuestros clientes.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-[#f7bd2d] mb-4">¿Por qué elegirnos?</h3>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-3 text-slate-300">
                      <span className="text-[#f7bd2d] mt-1">•</span>
                      <span>Soluciones personalizadas según necesidades específicas</span>
                    </li>
                    <li className="flex items-start gap-3 text-slate-300">
                      <span className="text-[#f7bd2d] mt-1">•</span>
                      <span>Tecnologías modernas y escalables</span>
                    </li>
                    <li className="flex items-start gap-3 text-slate-300">
                      <span className="text-[#f7bd2d] mt-1">•</span>
                      <span>Soporte técnico continuo post-implementación</span>
                    </li>
                    <li className="flex items-start gap-3 text-slate-300">
                      <span className="text-[#f7bd2d] mt-1">•</span>
                      <span>Equipo especializado con amplia experiencia</span>
                    </li>
                    <li className="flex items-start gap-3 text-slate-300">
                      <span className="text-[#f7bd2d] mt-1">•</span>
                      <span>Metodologías ágiles para desarrollo eficiente</span>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="mt-8 text-center">
                <button className="bg-[#f7bd2d] text-[#030d41] font-semibold px-6 py-3 rounded-lg hover:bg-[#ffd34e] transition-colors">
                  Contactar ahora
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      <style jsx>{`
        @keyframes float {
          0% {
            transform: translateY(0) rotate(0deg);
          }
          50% {
            transform: translateY(-15px) rotate(5deg);
          }
          100% {
            transform: translateY(0) rotate(0deg);
          }
        }
        @keyframes pulse-slow {
          0%, 100% {
            opacity: 0.2;
          }
          50% {
            opacity: 0.3;
          }
        }
        .animate-float {
          animation: float 12s ease-in-out infinite;
        }
        .animate-pulse-slow {
          animation: pulse-slow 6s ease-in-out infinite;
        }
      `}</style>
    </>
  );
}