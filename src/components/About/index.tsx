"use client";

import { useState, useRef, useEffect } from "react";
import {
  Play,
  X,
  ChevronRight,
  Users,
  Code,
  Globe,
  Shield,
  Award,
  CheckCircle,
} from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";

export default function AboutSection() {
  const [isModalOpen, setModalOpen] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
  const videoRef = useRef(null);

  const features = [
    {
      icon: <Code className="h-8 w-8" />,
      title: "Desarrollo a Medida",
      description:
        "Soluciones tecnológicas personalizadas para cada institución",
    },
    {
      icon: <Globe className="h-8 w-8" />,
      title: "Tecnología Moderna",
      description:
        "Implementamos las últimas tecnologías para garantizar eficiencia",
    },
    {
      icon: <Shield className="h-8 w-8" />,
      title: "Seguridad Garantizada",
      description:
        "Protegemos tus datos con los más altos estándares de seguridad",
    },
    {
      icon: <Users className="h-8 w-8" />,
      title: "Soporte Continuo",
      description: "Acompañamiento durante y después de la implementación",
    },
  ];

  const stats = [
    {
      value: "35+",
      label: "Proyectos Completados",
    },
    {
      value: "3+",
      label: "Años de Experiencia",
    },
    {
      value: "24/7",
      label: "Soporte Continuo",
    },
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
      <section
        className="relative overflow-hidden bg-[#030d41] py-16 md:py-20 lg:py-28"
        id="about"
      >
        <div className="absolute inset-0 z-0 overflow-hidden">
          <video
            ref={videoRef}
            autoPlay
            muted
            loop
            playsInline
            className="h-full w-full object-cover opacity-20"
          >
            <source src="/images/about/nosotros.mp4" type="video/mp4" />
          </video>
          <div className="absolute inset-0 bg-[#030d41] opacity-25"></div>
        </div>

        <div className="absolute inset-0">
          {[...Array(20)].map((_, i) => (
            <div
              key={i}
              className="animate-float absolute rounded-full bg-[#f7bd2d]"
              style={{
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
                width: `${Math.random() * 10 + 5}px`,
                height: `${Math.random() * 10 + 5}px`,
                opacity: Math.random() * 0.3 + 0.1,
                animationDuration: `${Math.random() * 15 + 10}s`,
                animationDelay: `${Math.random() * 5}s`,
              }}
            />
          ))}
        </div>

        <div className="relative z-10 container mx-auto px-4">
          <div className="mb-16 text-center">
            <div className="mb-6 inline-flex items-center justify-center rounded-full bg-[#f7bd2d]/10 px-4 py-2">
              <span className="text-sm font-semibold text-[#f7bd2d]">
                Nuestra Empresa
              </span>
            </div>
            <h2 className="mb-6 text-4xl font-bold text-white md:text-5xl lg:text-6xl">
              Acerca de <span className="text-[#f7bd2d]">NOXUN</span>
            </h2>
            <p className="mx-auto max-w-3xl text-xl text-slate-300">
              Somos especialistas en desarrollo de sistemas a medida a través de
              herramientas tecnológicas adaptadas a las necesidades de cada
              institución.
            </p>
          </div>

          <div className="mb-16 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
            {features.map((feature, index) => (
              <div
                key={index}
                className="group rounded-2xl border border-[#f7bd2d]/20 bg-[#0a1442] p-6 transition-all duration-300 hover:scale-105 hover:border-[#f7bd2d]/40"
              >
                <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-xl bg-[#f7bd2d]/10 transition-colors group-hover:bg-[#f7bd2d]/20">
                  <div className="text-[#f7bd2d]">{feature.icon}</div>
                </div>
                <h3 className="mb-2 text-xl font-bold text-white">
                  {feature.title}
                </h3>
                <p className="text-slate-300">{feature.description}</p>
              </div>
            ))}
          </div>

          <div className="mb-16 rounded-3xl border border-[#f7bd2d]/20 bg-[#0a1442] p-8">
            <div className="grid grid-cols-3 gap-6 md:grid-cols-3">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="mb-4 text-3xl font-bold text-white">
                    {stat.value}
                  </div>
                  <div className="text-sm text-slate-300">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 items-center gap-10">
            <div className="relative rounded-2xl border border-[#f7bd2d]/20 bg-[#0a1442] p-8">
              <div className="mb-8 text-center">
                <div className="mx-auto mb-4 inline-flex h-16 w-16 items-center justify-center rounded-full bg-[#f7bd2d]/10">
                  <Award className="h-8 w-8 text-[#f7bd2d]" />
                </div>
                <h3 className="mb-2 text-3xl font-bold text-white">
                  Nuestra <span className="text-[#f7bd2d]">Filosofía</span>
                </h3>
                <p className="mx-auto max-w-3xl text-lg text-slate-300">
                  En NOXUN creemos que la tecnología debe ser un facilitador, no
                  una barrera. Por eso desarrollamos soluciones intuitivas,
                  poderosas y adaptadas específicamente a las necesidades de
                  cada cliente.
                </p>
              </div>

              <div className="mb-8 grid grid-cols-1 gap-6 md:grid-cols-2">
                <div>
                  <h4 className="mb-4 text-xl font-semibold text-[#f7bd2d]">
                    Nuestros Pilares
                  </h4>
                  <div className="space-y-4">
                    {[
                      "Soluciones 100% personalizadas",
                      "Tecnología de vanguardia",
                      "Soporte técnico especializado",
                      "Desarrollo ágil y eficiente",
                    ].map((item, index) => (
                      <div key={index} className="flex items-center">
                        <CheckCircle className="mr-3 h-5 w-5 text-[#f7bd2d]" />
                        <span className="text-slate-300">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div>
                  <h4 className="mb-4 text-xl font-semibold text-[#f7bd2d]">
                    Nuestro Compromiso
                  </h4>
                  <p className="mb-4 text-slate-300">
                    Trabajamos con dedicación para ofrecer soluciones que
                    superen las expectativas de nuestros clientes, garantizando
                    calidad, innovación y excelencia en cada proyecto.
                  </p>
                  <p className="text-slate-300">
                    Nuestro equipo especializado combina experiencia técnica con
                    comprensión profunda de las necesidades institucionales para
                    entregar resultados excepcionales.
                  </p>
                </div>
              </div>

              <div className="text-center">
                <button
                  onClick={() => setModalOpen(true)}
                  className="inline-flex items-center rounded-xl bg-[#f7bd2d] px-8 py-4 font-bold text-[#030d41] transition-colors hover:bg-[#ffd34e]"
                >
                  Conoce más sobre nosotros
                  <ChevronRight className="ml-2 h-5 w-5" />
                </button>
              </div>

              <div className="absolute -top-4 -right-4 z-0 h-28 w-28 rounded-full bg-[#f7bd2d]/10 blur-xl"></div>
              <div className="absolute -bottom-4 -left-4 z-0 h-24 w-24 rounded-full bg-[#f7bd2d]/10 blur-xl"></div>
            </div>
          </div>
        </div>
      </section>

      <Dialog open={isModalOpen} onOpenChange={setModalOpen}>
        <DialogContent className="max-h-[50vh] max-w-4xl overflow-y-auto border-2 border-[#f7bd2d]/30 bg-[#030d41] p-0 text-white shadow-2xl shadow-[#f7bd2d]/10 md:max-h-[65vh] md:rounded-2xl">
          <div className="relative">
            <DialogHeader className="sr-only">
              <DialogTitle>Más sobre NOXUN</DialogTitle>
            </DialogHeader>

            <Button
              variant="ghost"
              size="icon"
              className="absolute top-4 right-4 z-10 rounded-full bg-[#f7bd2d] p-2 text-[#030d41] transition-colors hover:bg-[#ffd34e]"
              onClick={() => setModalOpen(false)}
            >
              <X className="h-5 w-5" />
            </Button>

            <div className="p-6 md:p-8">
              <div className="mb-8 text-center">
                <h2 className="mb-4 text-2xl font-bold text-white md:text-3xl">
                  Más sobre <span className="text-[#f7bd2d]">NOXUN</span>
                </h2>
                <div className="mx-auto mb-6 h-1 w-20 bg-[#f7bd2d]"></div>
              </div>

              <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
                <div>
                  <h3 className="mb-4 text-lg font-semibold text-[#f7bd2d] md:text-xl">
                    Nuestra Misión
                  </h3>
                  <p className="mb-6 text-sm text-slate-300 md:text-base">
                    Desarrollar soluciones tecnológicas innovadoras que impulsen
                    la transformación digital de las instituciones, optimizando
                    sus procesos y maximizando su eficiencia operativa.
                  </p>

                  <h3 className="mb-4 text-lg font-semibold text-[#f7bd2d] md:text-xl">
                    Nuestra Visión
                  </h3>
                  <p className="text-sm text-slate-300 md:text-base">
                    Ser líderes en el desarrollo de software a medida,
                    reconocidos por nuestra capacidad de adaptación y por
                    generar valor tangible para nuestros clientes.
                  </p>
                </div>

                <div>
                  <h3 className="mb-4 text-lg font-semibold text-[#f7bd2d] md:text-xl">
                    ¿Por qué elegirnos?
                  </h3>
                  <ul className="space-y-3">
                    {[
                      "Soluciones personalizadas según necesidades específicas",
                      "Tecnologías modernas y escalables",
                      "Soporte técnico continuo post-implementación",
                      "Equipo especializado con amplia experiencia",
                      "Metodologías ágiles para desarrollo eficiente",
                    ].map((item, index) => (
                      <li
                        key={index}
                        className="flex items-start gap-3 text-sm text-slate-300 md:text-base"
                      >
                        <span className="mt-1 text-[#f7bd2d]">•</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </DialogContent>
      </Dialog>

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
