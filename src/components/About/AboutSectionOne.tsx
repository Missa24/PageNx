"use client"
import { Code, Globe, Mail, Cpu, ArrowRight } from 'lucide-react';
import { useRef, useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const services = [
  {
    title: "Sistemas a medida para empresas",
    description: "Soluciones tecnológicas diseñadas específicamente para las necesidades de cada empresa",
    icon: <Code className="h-10 w-10" />,
  },
  {
    title: "Diseño de sitios web",
    description: "Manejo profesional, responsivos y optimizados para SEO",
    icon: <Globe className="h-10 w-10" />,
  },
  {
    title: "Correos corporativos",
    description: "Cuentas de correo profesional con dominio empresarial",
    icon: <Mail className="h-10 w-10" />,
  },
  {
    title: "Mantenimiento de computadoras",
    description: "Limpieza profunda a tu ordenador para mayor eficiencia",
    icon: <Cpu className="h-10 w-10" />,
  }
];

const ServiceCard = ({ service, index }: { service: typeof services[0]; index: number }) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    if (cardRef.current) {
      observer.observe(cardRef.current);
    }

    return () => {
      if (cardRef.current) {
        observer.unobserve(cardRef.current);
      }
    };
  }, []);

  return (
    <motion.div
      ref={cardRef}
      initial={{ opacity: 0, y: 50 }}
      animate={isVisible ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.7, delay: index * 0.2 }}
      className="relative mb-16 bg-gradient-to-br from-[#030d41] to-[#0a1a5f] rounded-2xl p-8 shadow-2xl border border-[#f7bd2d]/20"
    >
      <div className="flex flex-col items-center text-center">
        <div className="inline-flex items-center justify-center p-2 rounded-full bg-[#030d41] mb-6 shadow-lg border border-[#f7bd2d]/30">
          <div className="bg-gradient-to-br from-[#f7bd2d] to-[#ffd84d] p-3 rounded-full text-[#030d41]">
            {service.icon}
          </div>
        </div>
        
        <h3 className="text-2xl md:text-3xl font-bold mb-4 text-white">
          {service.title}
        </h3>
        
        <p className="text-white/90 leading-relaxed mb-6 max-w-md">
          {service.description}
        </p>
        
        <button className="group flex items-center px-6 py-3 rounded-full bg-[#f7bd2d] text-[#030d41] font-medium hover:bg-[#ffd84d] transition-all transform hover:scale-105 shadow-lg hover:shadow-xl border border-[#f7bd2d]">
          Descubrir más
          <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
        </button>
      </div>

      {index < services.length - 1 && (
        <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 w-1 h-16 bg-gradient-to-b from-[#f7bd2d] to-transparent">
          <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-6 h-6 bg-[#f7bd2d] rounded-full animate-pulse border-2 border-[#030d41]"></div>
        </div>
      )}
    </motion.div>
  );
};

const AboutSectionOne = () => {
  return (
    <section id="services" className="py-20 md:py-28 lg:py-36 bg-gradient-to-b from-[#030d41] to-[#0a1a5f] relative overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 border-4 border-[#f7bd2d] rounded-full"></div>
        <div className="absolute bottom-1/3 right-1/4 w-48 h-48 border-4 border-[#f7bd2d] rounded-full"></div>
        <div className="absolute top-1/2 left-1/3 w-32 h-32 border-4 border-[#f7bd2d] rounded-full"></div>
      </div>

      <div className="absolute inset-0">
        {[...Array(15)].map((_, i) => (
          <div
            key={i}
            className="absolute w-2 h-2 bg-[#f7bd2d] rounded-full opacity-60"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              animation: `float ${5 + Math.random() * 5}s infinite ease-in-out`
            }}
          ></div>
        ))}
      </div>

      <div className="container px-4 mx-auto relative z-10">
        <div className="text-center mb-20">
          <div className="inline-block relative mb-6">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6"
            >
              Nuestros <span className="text-[#f7bd2d] relative">Servicios
                <span className="absolute -bottom-2 left-0 w-full h-1 bg-gradient-to-r from-[#f7bd2d] to-transparent"></span>
              </span>
            </motion.h2>
          </div>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-xl text-white/80 max-w-3xl mx-auto mt-6 leading-relaxed"
          >
            Soluciones tecnológicas de alta calidad diseñadas para impulsar tu negocio hacia el éxito
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <ServiceCard key={index} service={service} index={index} />
          ))}
        </div>
      </div>

      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0) rotate(0deg); }
          50% { transform: translateY(-15px) rotate(5deg); }
        }
        @keyframes ping {
          0% { transform: translate(-50%, -50%) scale(0.8); opacity: 0.8; }
          80%, 100% { transform: translate(-50%, -50%) scale(2); opacity: 0; }
        }
        .animate-float {
          animation: float 6s ease-in-out infinite;
        }
        .animate-ping {
          animation: ping 2s cubic-bezier(0, 0, 0.2, 1) infinite;
        }
      `}</style>
    </section>
  );
};

export default AboutSectionOne;