"use client";
import FeaturesSection from "./featureSection";

const Features = () => {
  // Aquí defines las características de tus objetos
  const features = [
    {
      id: 1,
      bgImage: "/images/features/trazo.jpg",
      bgVideo: "/videos/trazo-demo.mp4",
      title: "Sistema Trazo",
      paragraph:
        "Software enfocado en agencias despachantes aduaneros para simplificar los procesos de gestión y potenciar tu negocio.",
      objetivo:
        "Proveer soluciones integrales que se adapten a las necesidades y ayuden a mejorar el flujo de despachos.",
      alcance:
        "La plataforma permite registrar documentación de clientes y despachos de manera fácil e intuitiva.",
      videoUrl: "https://www.youtube.com/embed/TU_VIDEO_ID_TRAZO",
      download: "/pdfs/systems/trazo.pdf",
      color: "from-[#f7bd2d] to-[#f7a92d]",
    },
    {
      id: 2,
      bgImage: "/images/features/contabilidad.jpg",
      bgVideo: "/videos/contabilidad-demo.mp4",
      title: "Sistema Contable",
      paragraph:
        "Solución integral para la gestión financiera y contable de tu empresa con reportes automatizados.",
      objetivo:
        "Automatizar procesos contables y generar reportes financieros precisos.",
      alcance:
        "Cubre todos los aspectos de la contabilidad empresarial con módulos especializados.",
      videoUrl: "https://www.youtube.com/embed/TU_VIDEO_ID_CONTABILIDAD",
      download: "/pdfs/systems/contabilidad.pdf",
      color: "from-[#4f46e5] to-[#7c3aed]",
    },
    {
      id: 3,
      bgImage: "/images/features/inventario.jpg",
      title: "Control de Inventario",
      paragraph:
        "Gestiona tu inventario de manera eficiente con seguimiento en tiempo real y alertas automáticas.",
      objetivo:
        "Optimizar la gestión de inventarios y reducir pérdidas por stock obsoleto o faltante.",
      alcance:
        "Control completo de entradas, salidas, traslados y valuación de inventarios.",
      videoUrl: "https://www.youtube.com/embed/TU_VIDEO_ID_INVENTARIO",
      download: "/pdfs/systems/inventario.pdf",
      color: "from-[#10b981] to-[#34d399]",
    },
  ];

  return (
    <>
      <FeaturesSection features={features} />
    </>
  );
};

export default Features;
