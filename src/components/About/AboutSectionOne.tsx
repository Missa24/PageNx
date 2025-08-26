import { Code, Globe, Mail, Cpu } from 'lucide-react';

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
  const isEven = index % 2 === 0;

  return (
    <div className="relative mb-20 group">
      {/* Efecto de borde brillante */}
      <div className={`absolute -inset-1 rounded-lg bg-gradient-to-r ${isEven ? 'from-[#f7bd2d] to-[#ffd84d]' : 'from-[#030d41] to-[#1a2b75]'} blur opacity-30 group-hover:opacity-50 transition duration-500`}></div>

      {/* Tarjeta principal */}
      <div className={`relative w-full md:w-11/12 h-72 ${isEven ? 'bg-[#030d41] ml-auto' : 'bg-[#030d41] mr-auto'} rounded-xl flex items-center justify-center p-8 z-10 overflow-hidden border border-[#f7bd2d]/20`}>
        {/* Patrón de fondo sutil */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-0 left-0 w-32 h-32 border-2 border-[#f7bd2d] rounded-full transform -translate-x-16 -translate-y-16"></div>
          <div className="absolute bottom-0 right-0 w-32 h-32 border-2 border-[#f7bd2d] rounded-full transform translate-x-16 translate-y-16"></div>
        </div>

        {/* Elemento decorativo */}
        <div className={`absolute ${isEven ? '-left-12 top-8' : '-right-12 top-8'} w-24 h-24 bg-[#f7bd2d] rounded-full opacity-20 group-hover:opacity-30 transition duration-500`}></div>

        <div className="text-center relative z-20">
          <div className="bg-gradient-to-br from-[#f7bd2d] to-[#ffd84d] p-4 rounded-full inline-flex items-center justify-center mb-6 transform group-hover:scale-110 transition duration-300">
            {service.icon}
          </div>
          <h3 className="text-2xl font-bold mb-3 text-white group-hover:text-[#f7bd2d] transition duration-300">{service.title}</h3>
          <p className="text-white/80">{service.description}</p>
        </div>

        {/* Efecto de brillo al pasar el mouse */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[#f7bd2d]/5 opacity-0 group-hover:opacity-100 transition duration-500 rounded-xl"></div>
      </div>

      {/* Conector decorativo entre tarjetas */}
      {index < services.length - 1 && (
        <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 w-1 h-16 bg-gradient-to-b from-[#f7bd2d] to-transparent"></div>
      )}
    </div>
  );
};

const AboutSectionOne = () => {
  return (
    <section id="services" className="py-16 md:py-20 lg:py-28 bg-gradient-to-b from-[#030d41] to-[#0a1a66] relative overflow-hidden">
      {/* Elementos decorativos de fondo */}
      <div className="absolute top-0 left-0 w-full h-full opacity-10">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 border-4 border-[#f7bd2d] rounded-full"></div>
        <div className="absolute bottom-1/3 right-1/4 w-48 h-48 border-4 border-[#f7bd2d] rounded-full"></div>
        <div className="absolute top-1/2 left-1/3 w-32 h-32 border-4 border-[#f7bd2d] rounded-full"></div>
      </div>

      <div className="container px-4 mx-auto relative z-10">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Nuestros <span className="text-[#f7bd2d]">Servicios</span>
          </h2>
          <p className="text-xl text-white/80 max-w-3xl mx-auto">
            Soluciones tecnológicas de alta calidad diseñadas para impulsar tu negocio hacia el éxito
          </p>
        </div>

        <div className="space-y-4">
          {services.map((service, index) => (
            <ServiceCard key={index} service={service} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutSectionOne;