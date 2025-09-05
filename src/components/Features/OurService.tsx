"use client"
import { Code, Globe, Mail, Cpu, Download, Sparkles } from 'lucide-react';
import { useRef, useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const services = [
  {
    title: "Sistemas a medida",
    description: "Soluciones tecnológicas diseñadas específicamente para las necesidades de cada empresa",
    icon: <Code className="h-8 w-8" />,
    downloadUrl: "/pdfs/services/empresa.pdf",
    features: ["Personalizado", "Escalable", "Soporte 24/7"]
  },
  {
    title: "Diseño web",
    description: "Sitios profesionales, responsivos y optimizados para SEO",
    icon: <Globe className="h-8 w-8" />,
    downloadUrl: "/pdfs/services/paginas.pdf",
    features: ["Responsive", "Optimizado SEO", "Moderno"]
  },
  {
    title: "Correos corporativos",
    description: "Cuentas de correo profesional con dominio empresarial",
    icon: <Mail className="h-8 w-8" />,
    downloadUrl: "/pdfs/services/correos.pdf",
    features: ["Personalizado", "Seguro", "Alto almacenamiento"]
  },
  {
    title: "Mantenimiento",
    description: "Limpieza profunda para mayor eficiencia de tu equipo",
    icon: <Cpu className="h-8 w-8" />,
    downloadUrl: "/pdfs/services/mantenimiento.pdf",
    features: ["Preventivo", "Limpieza", "Optimización"]
  }
];

const downloadFile = async (url: string, filename: string) => {
  try {
    const response = await fetch(url, { method: 'HEAD' });

    if (!response.ok) {
      alert('El archivo PDF no está disponible en este momento. Por favor, contacte con nosotros para más información.');
      return;
    }

    const link = document.createElement('a');
    link.href = url;
    link.download = filename;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  } catch (error) {
    console.error('Error al descargar el archivo:', error);
    alert('Error al descargar el archivo. Por favor, intente nuevamente.');
  }
};

const ServiceCard = ({ service, index }: { service: typeof services[0]; index: number }) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
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

  const getFilenameFromUrl = (url: string) => {
    return url.substring(url.lastIndexOf('/') + 1);
  };

  return (
    <motion.div
      ref={cardRef}
      initial={{ opacity: 0, y: 50 }}
      animate={isVisible ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.7, delay: index * 0.1 }}
      className="relative h-full"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="relative h-full bg-gradient-to-b from-[#030d41] to-[#0a1a5f] rounded-2xl p-6 shadow-2xl border border-[#f7bd2d]/20 hover:shadow-2xl hover:shadow-[#f7bd2d]/40 transition-all duration-300 group overflow-hidden flex flex-col">
        <div className={`absolute inset-0 bg-gradient-to-br from-[#f7bd2d]/0 via-[#f7bd2d]/5 to-[#f7bd2d]/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 ${isHovered ? 'opacity-100' : 'opacity-0'}`}></div>

        <div className="flex flex-col items-center text-center flex-grow">
          <motion.div
            animate={{ y: isHovered ? -5 : 0 }}
            transition={{ duration: 0.3 }}
            className="inline-flex items-center justify-center p-2 rounded-full bg-gradient-to-b from-[#0a1a5f] to-[#030d41] mb-6 shadow-lg border border-[#f7bd2d]/30 group-hover:border-[#f7bd2d]/60 transition-colors"
          >
            <div className="bg-gradient-to-br from-[#f7bd2d] to-[#ffd84d] p-3 rounded-full text-[#030d41]">
              {service.icon}
            </div>
          </motion.div>

          <h3 className="text-xl font-bold mb-3 text-white group-hover:text-[#f7bd2d] transition-colors">
            {service.title}
          </h3>

          <p className="text-white/80 text-sm mb-5 leading-relaxed">
            {service.description}
          </p>

          <div className="w-full mb-5">
            {service.features.map((feature, i) => (
              <div key={i} className="flex items-center justify-center mb-2">
                <Sparkles className="h-3 w-3 text-[#f7bd2d] mr-2" />
                <span className="text-xs text-white/70">{feature}</span>
              </div>
            ))}
          </div>
        </div>

        <motion.button
          onClick={() => downloadFile(service.downloadUrl, getFilenameFromUrl(service.downloadUrl))}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="w-full flex items-center justify-center py-2.5 rounded-lg bg-gradient-to-r from-[#f7bd2d] to-[#ffd84d] text-[#030d41] font-medium hover:shadow-lg hover:shadow-[#f7bd2d]/30 transition-all mt-4 z-10 relative"
        >
          <Download className="h-4 w-4 mr-2" />
          Descargar PDF
        </motion.button>
      </div>
    </motion.div>
  );
};

const OurService = () => {
  return (
    <section id="services" className="py-20 md:py-28 lg:py-36 bg-[#030d41] relative overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 border-4 border-[#f7bd2d] rounded-full"></div>
        <div className="absolute bottom-1/3 right-1/4 w-48 h-48 border-4 border-[#f7bd2d] rounded-full"></div>
        <div className="absolute top-1/2 left-1/3 w-32 h-32 border-4 border-[#f7bd2d] rounded-full"></div>
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

      <div className="container px-4 mx-auto relative z-10">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="inline-block relative"
          >
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
              Nuestros <span className="text-[#f7bd2d] relative">Servicios
                <span className="absolute -bottom-2 left-0 w-full h-1 bg-gradient-to-r from-[#f7bd2d] to-transparent"></span>
              </span>
            </h2>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-xl text-white/80 max-w-3xl mx-auto mt-6 leading-relaxed"
          >
            Soluciones tecnológicas de alta calidad diseñadas para impulsar tu negocio hacia el éxito
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <ServiceCard key={index} service={service} index={index} />
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-center mt-16"
        >
        </motion.div>
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

export default OurService;