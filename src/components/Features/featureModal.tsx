"use client"
import { motion, AnimatePresence } from "framer-motion"
import { X, Download, FileText, Target, MapPin } from "lucide-react"

const FeatureModal = ({ isOpen, onClose, feature }) => {
  if (!feature) return null

  const handleDownload = () => {
    // Crear un enlace temporal para descargar el PDF
    const link = document.createElement('a')
    link.href = feature.download
    link.setAttribute('download', `Sistema_${feature.title.replace(/\s+/g, '_')}.pdf`)
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
  }

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/80 backdrop-blur-md z-50 flex items-center justify-center p-4"
            onClick={onClose}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              className="bg-gradient-to-br from-gray-900 via-[#0a1442] to-[#030d41] rounded-2xl border border-gray-700/50 max-w-2xl w-full overflow-hidden shadow-2xl shadow-[#f7bd2d]/10"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Header con imagen */}
              <div className="relative h-56">
                <div
                  className="absolute inset-0 bg-cover bg-center"
                  style={{ backgroundImage: `url(${feature.bgImage})` }}
                >
                  <div className="absolute inset-0 bg-gradient-to-t from-[#030d41] via-[#030d41]/90 to-transparent"></div>
                  <div className="absolute inset-0 bg-gradient-to-r from-[#030d41]/70 to-[#030d41]/50"></div>
                </div>

                {/* Botón de cerrar */}
                <button
                  onClick={onClose}
                  className="absolute top-4 right-4 w-10 h-10 bg-[#f7bd2d] rounded-full flex items-center justify-center text-[#030d41] z-10 hover:bg-[#ffd34e] transition-colors shadow-lg"
                >
                  <X size={20} />
                </button>

                {/* Título */}
                <div className="absolute bottom-4 left-6">
                  <div className="w-12 h-1 bg-[#f7bd2d] mb-3"></div>
                  <h3 className="text-3xl font-bold text-white">{feature.title}</h3>
                </div>
              </div>

              {/* Contenido */}
              <div className="p-6 text-white max-h-[60vh] overflow-y-auto">
                <p className="text-gray-200 mb-6 leading-relaxed text-lg">
                  {feature.paragraph}
                </p>

                {/* Objetivo */}
                <div className="mb-6 p-4 bg-[#0a1442]/50 rounded-xl border border-gray-700/30">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="p-2 bg-[#f7bd2d]/20 rounded-lg">
                      <Target size={20} className="text-[#f7bd2d]" />
                    </div>
                    <h4 className="text-xl font-semibold text-[#f7bd2d]">Objetivo</h4>
                  </div>
                  <p className="text-gray-300 pl-11">
                    {feature.objetivo}
                  </p>
                </div>

                {/* Alcance */}
                <div className="mb-6 p-4 bg-[#0a1442]/50 rounded-xl border border-gray-700/30">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="p-2 bg-[#f7bd2d]/20 rounded-lg">
                      <MapPin size={20} className="text-[#f7bd2d]" />
                    </div>
                    <h4 className="text-xl font-semibold text-[#f7bd2d]">Alcance</h4>
                  </div>
                  <p className="text-gray-300 pl-11">
                    {feature.alcance}
                  </p>
                </div>

                {/* Botón de descarga */}
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={handleDownload}
                  className="flex items-center gap-3 bg-gradient-to-r from-[#f7bd2d] to-[#f7a82d] text-[#030d41] font-semibold px-6 py-4 rounded-xl hover:from-[#ffd34e] hover:to-[#ffb94e] transition-all w-full justify-center shadow-lg mt-4"
                >
                  <Download size={20} />
                  Descargar PDF con detalles completos
                  <FileText size={18} />
                </motion.button>
              </div>
            </motion.div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  )
}

export default FeatureModal