"use client";

import { useState, useRef, useEffect } from "react";
import { Play, X, ChevronRight, Users, Code, Globe, Shield, Pause, Target, Heart, Star, Award, Clock, Zap, CheckCircle } from "lucide-react";

export default function AboutSection() {
  const [isModalOpen, setModalOpen] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
  const videoRef = useRef(null);

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

  const stats = [
    { value: "50+", label: "Proyectos Completados", icon: <Target className="h-5 w-5" /> },
    { value: "30+", label: "Clientes Satisfechos", icon: <Heart className="h-5 w-5" /> },
    { value: "10+", label: "Años de Experiencia", icon: <Award className="h-5 w-5" /> },
    { value: "24/7", label: "Soporte Técnico", icon: <Clock className="h-5 w-5" /> }
  ];

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
      <section className="relative py-16 md:py-20 lg:py-28 bg-[#030d41] overflow-hidden" id="about">
        <div className="absolute inset-0 z-0 overflow-hidden">
          <video
            ref={videoRef}
            autoPlay
            muted
            loop
            playsInline
            className="w-full h-full object-cover opacity-20"
          >
            <source src="/images/about/nosotros.mp4" type="video/mp4" />
          </video>
          <div className="absolute inset-0 bg-[#030d41] opacity-25"></div>
        </div>

        <div className="absolute inset-0">
          {[...Array(20)].map((_, i) => (
            <div
              key={i}
              className="absolute rounded-full bg-[#f7bd2d] animate-float"
              style={{
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
                width: `${Math.random() * 10 + 5}px`,
                height: `${Math.random() * 10 + 5}px`,
                opacity: Math.random() * 0.3 + 0.1,
                animationDuration: `${Math.random() * 15 + 10}s`,
                animationDelay: `${Math.random() * 5}s`
              }}
            />
          ))}
        </div>

        <div className="container relative z-10 mx-auto px-4">
          <div className="text-center mb-16">
            <div className="inline-flex items-center justify-center px-4 py-2 rounded-full bg-[#f7bd2d]/10 mb-6">
              <span className="text-[#f7bd2d] text-sm font-semibold">Nuestra Empresa</span>
            </div>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
              Acerca de <span className="text-[#f7bd2d]">NOXUN</span>
            </h2>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              Somos especialistas en desarrollo de sistemas a medida a través de herramientas tecnológicas adaptadas a las necesidades de cada institución.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {features.map((feature, index) => (
              <div
                key={index}
                className="bg-[#0a1442] rounded-2xl p-6 border border-[#f7bd2d]/20 hover:border-[#f7bd2d]/40 transition-all duration-300 hover:scale-105 group"
              >
                <div className="w-14 h-14 bg-[#f7bd2d]/10 rounded-xl flex items-center justify-center mb-4 group-hover:bg-[#f7bd2d]/20 transition-colors">
                  <div className="text-[#f7bd2d]">
                    {feature.icon}
                  </div>
                </div>
                <h3 className="text-xl font-bold text-white mb-2">{feature.title}</h3>
                <p className="text-slate-300">{feature.description}</p>
              </div>
            ))}
          </div>

          <div className="bg-[#0a1442] rounded-3xl p-8 mb-16 border border-[#f7bd2d]/20">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-[#f7bd2d]/10 rounded-full mb-4">
                    <div className="text-[#f7bd2d]">
                      {stat.icon}
                    </div>
                  </div>
                  <div className="text-3xl font-bold text-white mb-2">{stat.value}</div>
                  <div className="text-slate-300 text-sm">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
            <div>
              <h3 className="text-3xl font-bold text-white mb-6">Nuestra <span className="text-[#f7bd2d]">Filosofía</span></h3>
              <p className="text-slate-300 mb-6 text-lg">
                En NOXUN creemos que la tecnología debe ser un facilitador, no una barrera.
                Por eso desarrollamos soluciones intuitivas, poderosas y adaptadas específicamente
                a las necesidades de cada cliente.
              </p>

              <div className="space-y-4 mb-8">
                {[
                  "Soluciones 100% personalizadas",
                  "Tecnología de vanguardia",
                  "Soporte técnico especializado",
                  "Desarrollo ágil y eficiente"
                ].map((item, index) => (
                  <div key={index} className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-[#f7bd2d] mr-3" />
                    <span className="text-slate-300">{item}</span>
                  </div>
                ))}
              </div>

              <button
                onClick={() => setModalOpen(true)}
                className="bg-[#f7bd2d] text-[#030d41] font-bold px-8 py-4 rounded-xl hover:bg-[#ffd34e] transition-colors flex items-center"
              >
                Conoce más sobre nosotros
                <ChevronRight className="ml-2 h-5 w-5" />
              </button>
            </div>

            <div className="relative">
              <div className="bg-[#0a1442] rounded-2xl p-8 border border-[#f7bd2d]/20">
                <div className="text-center mb-6">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-[#f7bd2d]/10 rounded-full mb-4">
                    <Zap className="h-8 w-8 text-[#f7bd2d]" />
                  </div>
                  <h4 className="text-2xl font-bold text-white mb-2">Innovación Constante</h4>
                  <p className="text-slate-300">
                    Nos mantenemos a la vanguardia tecnológica para ofrecer siempre las mejores soluciones.
                  </p>
                </div>

                <div className="bg-[#030d41] rounded-xl p-4 border border-[#f7bd2d]/10">
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-slate-300">Desarrollo Web</span>
                    <span className="text-[#f7bd2d] font-bold">95%</span>
                  </div>
                  <div className="w-full bg-[#0a1442] rounded-full h-2.5">
                    <div className="bg-[#f7bd2d] h-2.5 rounded-full" style={{ width: '95%' }}></div>
                  </div>

                  <div className="flex items-center justify-between mt-4 mb-3">
                    <span className="text-slate-300">Apps Móviles</span>
                    <span className="text-[#f7bd2d] font-bold">90%</span>
                  </div>
                  <div className="w-full bg-[#0a1442] rounded-full h-2.5">
                    <div className="bg-[#f7bd2d] h-2.5 rounded-full" style={{ width: '90%' }}></div>
                  </div>

                  <div className="flex items-center justify-between mt-4 mb-3">
                    <span className="text-slate-300">Cloud Solutions</span>
                    <span className="text-[#f7bd2d] font-bold">85%</span>
                  </div>
                  <div className="w-full bg-[#0a1442] rounded-full h-2.5">
                    <div className="bg-[#f7bd2d] h-2.5 rounded-full" style={{ width: '85%' }}></div>
                  </div>
                </div>
              </div>

              <div className="absolute -top-4 -right-4 w-28 h-28 bg-[#f7bd2d]/10 rounded-full blur-xl z-0"></div>
              <div className="absolute -bottom-4 -left-4 w-24 h-24 bg-[#f7bd2d]/10 rounded-full blur-xl z-0"></div>
            </div>
          </div>
        </div>

        <button
          onClick={togglePlay}
          className="fixed bottom-6 right-6 z-20 p-3 bg-[#030d41] border border-[#f7bd2d]/30 rounded-full text-[#f7bd2d] hover:bg-[#f7bd2d] hover:text-[#030d41] transition-colors shadow-lg"
        >
          {isPlaying ? <Pause size={24} /> : <Play size={24} />}
        </button>
      </section>

      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-md p-4">
          <div className="relative w-full max-w-4xl bg-[#030d41] rounded-2xl border-2 border-[#f7bd2d]/30 overflow-hidden max-h-[90vh] overflow-y-auto">
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
                <button className="bg-[#f7bd2d] text-[#030d41] font-bold px-8 py-3 rounded-xl hover:bg-[#ffd34e] transition-colors">
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
        .animate-float {
          animation: float 12s ease-in-out infinite;
        }
      `}</style>
    </>
  );
}   