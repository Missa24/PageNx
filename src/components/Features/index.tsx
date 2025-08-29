"use client"
import { useState } from "react";
import { motion } from "framer-motion"
import { features } from "./featuresData";
import { ArrowRight, Play } from "lucide-react";
import FeatureModal from "./featureModal";

const Features = () => {
  const [selectedFeature, setSelectedFeature] = useState(null)
  const [isModalOpen, setIsModalOpen] = useState(false)

  const handleFeatureClick = (feature) => {
    setSelectedFeature(feature)
    setIsModalOpen(true)
  }

  const closeModal = () => {
    setIsModalOpen(false)
    setTimeout(() => setSelectedFeature(null), 300)
  }
  return (
    <>
      <section id="features" className="py-16 md:py-20 lg:py-28 bg-[#030d41] relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
          <div className="absolute top-10% left-5% w-72 h-72 bg-[#f7bd2d]/5 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20% right-10% w-96 h-96 bg-[#f7bd2d]/3 rounded-full blur-3xl"></div>
        </div>
        <div className="container relative z-10">
          <div className="text-center mb-16">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6"
            >
              Nuestros <span className="text-[#f7bd2d] relative">Sistemas
                <span className="absolute -bottom-2 left-0 w-full h-1 bg-gradient-to-r from-[#f7bd2d] to-transparent"></span>
              </span>
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed"
            >
              Soluciones tecnológicas innovadoras diseñadas para
              <span className="text-[#f7bd2d] font-medium"> impulsar tu negocio</span> al siguiente nivel
            </motion.p>
          </div>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            {features.map((feature, index) => (
              <motion.div
                key={feature.id}
                initial={{ opacity: 0, y: 50, scale: 0.95 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                transition={{
                  duration: 0.6,
                  delay: index * 0.1,
                  type: "spring",
                  stiffness: 100
                }}
                onClick={() => handleFeatureClick(feature)}
                viewport={{ once: true, margin: "-50px" }}
                className="group relative overflow-hidden rounded-3xl bg-gradient-to-br from-gray-900 via-[#0a1442] to-[#030d41] border border-gray-700/50 hover:border-[#f7bd2d]/40 transition-all duration-700 hover:shadow-2xl hover:shadow-[#f7bd2d]/20 h-[420px]"
              >
                <div
                  className="absolute inset-0 bg-cover bg-center transition-all duration-1000 group-hover:scale-110 group-hover:rotate-2"
                  style={{ backgroundImage: `url(${feature.bgImage})` }}
                >
                  <div className="absolute inset-0 bg-gradient-to-t from-[#030d41] via-[#030d41]/80 to-transparent"></div>
                  <div className="absolute inset-0 bg-gradient-to-r from-[#030d41]/60 to-[#030d41]/40"></div>
                </div>

                <div className="absolute top-6 left-6 w-10 h-10 bg-[#f7bd2d] rounded-full flex items-center justify-center text-[#030d41] font-bold text-lg z-10">
                  {index + 1}
                </div>

                <div className="absolute bottom-0 left-0 right-0 p-8 text-white transform transition-all duration-700 group-hover:-translate-y-4">
                  <div className="mb-4">
                    <div className="w-12 h-1 bg-[#f7bd2d] mb-3 transform group-hover:scale-x-125 transition-transform duration-500"></div>
                    <h3 className="text-2xl font-bold mb-3 group-hover:text-[#f7bd2d] transition-colors duration-500">
                      {feature.title}
                    </h3>
                  </div>

                  <p className="text-gray-300 text-base leading-relaxed opacity-0 group-hover:opacity-100 transform translate-y-8 group-hover:translate-y-0 transition-all duration-500 mb-6">
                    {feature.paragraph}
                  </p>

                  <div className="opacity-0 group-hover:opacity-100 transform translate-y-8 group-hover:translate-y-0 transition-all duration-500 delay-200">
                    <button className="flex items-center gap-3 text-[#f7bd2d] font-medium hover:text-[#ffd34e] transition-colors duration-300 group/btn">
                      <span className="relative overflow-hidden">
                        Descubrir más
                        <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#f7bd2d] group-hover/btn:w-full transition-all duration-300"></span>
                      </span>
                      <div className="w-8 h-8 bg-[#f7bd2d] rounded-full flex items-center justify-center text-[#030d41] transition-transform duration-300 group-hover/btn:translate-x-1">
                        <ArrowRight size={16} />
                      </div>
                    </button>
                  </div>
                </div>

                <div className="absolute inset-0 bg-[#f7bd2d]/0 group-hover:bg-[#f7bd2d]/3 transition-all duration-700"></div>

                <div className="absolute inset-0 rounded-3xl border-2 border-transparent group-hover:border-[#f7bd2d]/20 transition-all duration-500"></div>
              </motion.div>
            ))}
          </div>
        </div>
        <FeatureModal
          isOpen={isModalOpen}
          onClose={closeModal}
          feature={selectedFeature}
        />
      </section>
    </>
  );
};

export default Features;