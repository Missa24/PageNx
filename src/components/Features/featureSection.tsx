'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { FileText, X, ArrowRight, Target, Globe, Download } from 'lucide-react';
import { features } from './featuresData';

const FeaturesSection = () => {
  const [selectedFeature, setSelectedFeature] = useState(null);
  const [open, setOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkMobile();
    window.addEventListener('resize', checkMobile);

    return () => {
      window.removeEventListener('resize', checkMobile);
    };
  }, []);

  const openDialog = (feature) => {
    setSelectedFeature(feature);
    setOpen(true);
  };

  const closeDialog = () => {
    setOpen(false);
    setTimeout(() => setSelectedFeature(null), 300);
  };

  return (
    <section className="py-16 bg-[#030d41]" id='ourservice'>
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center px-4 py-2 rounded-full bg-[#f7bd2d]/10 mb-6">
            <span className="text-[#f7bd2d] text-sm font-semibold">Soluciones Tecnológicas</span>
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
            Potencia tu <span className="text-[#f7bd2d]">Negocio</span>
          </h2>
          <p className="text-lg text-slate-300 max-w-3xl mx-auto">
            Descubre nuestras soluciones tecnológicas diseñadas para optimizar y transformar tu empresa.
          </p>
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
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-5">
          {features.map((feature) => (
            <div
              key={feature.id}
              className="group relative bg-white/5 backdrop-blur-sm rounded-xl overflow-hidden cursor-pointer transform transition-all duration-500 hover:-translate-y-2 border border-white/10 hover:border-[#f7bd2d]/30 hover:shadow-2xl hover:shadow-[#f7bd2d]/10"
              onClick={() => openDialog(feature)}
            >
              <div className="relative h-40 overflow-hidden">
                <Image
                  src={feature.bgImage}
                  alt={feature.title}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#030d41] to-transparent opacity-90 group-hover:opacity-80 transition-opacity duration-300" />

                <div className="absolute bottom-3 left-3">
                  <h3 className="text-lg font-bold text-white">{feature.title}</h3>
                </div>

                <div className="absolute top-3 right-3">
                  <div className="w-8 h-8 bg-[#f7bd2d] rounded-full flex items-center justify-center transform group-hover:scale-110 transition-transform duration-300">
                    <FileText className="h-4 w-4 text-[#030d41]" />
                  </div>
                </div>
              </div>

              <div className="p-4">
                <p className="text-slate-300 text-sm line-clamp-3 group-hover:text-white transition-colors">
                  {feature.paragraph}
                </p>

                <div className="mt-3 flex items-center text-[#f7bd2d] opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <span className="text-xs font-medium">Explorar</span>
                  <ArrowRight className="h-3 w-3 ml-1" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent className={`max-w-[98vw] ${isMobile ? 'h-[55vh]' : 'max-h-[75vh] w-full max-w-9xl'} overflow-y-auto p-0 bg-[#030d41] border-2 border-[#f7bd2d]/30 text-white shadow-2xl shadow-[#f7bd2d]/10 rounded-xl`}>
          {selectedFeature && (
            <>
              <DialogHeader className="sr-only">
                <DialogTitle>{selectedFeature.title}</DialogTitle>
              </DialogHeader>

              <div className="relative">
                <div className="relative h-72 w-full">
                  <Image
                    src={selectedFeature.bgImage}
                    alt={selectedFeature.title}
                    fill
                    className="object-cover"
                    priority
                  />
                  <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[#030d41] via-[#030d41]/80" />

                  <div className="absolute bottom-6 left-6 right-6">
                    <h2 className="text-3xl md:text-4xl font-bold text-white mb-2">
                      {selectedFeature.title}
                    </h2>
                    <p className="text-slate-200 text-lg max-w-2xl">
                      {selectedFeature.paragraph}
                    </p>
                  </div>

                  <Button
                    variant="ghost"
                    size="icon"
                    className="absolute top-4 right-4 z-10 bg-[#030d41]/80 backdrop-blur-md border border-[#f7bd2d]/30 rounded-full hover:bg-[#f7bd2d] hover:text-[#030d41] transition-all transform hover:scale-110"
                    onClick={closeDialog}
                  >
                    <X className="h-5 w-5" />
                  </Button>
                </div>

                <div className="p-6 md:p-8">
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
                    <div className="bg-gradient-to-br from-[#f7bd2d]/10 to-[#f7bd2d]/5 p-6 rounded-2xl border border-[#f7bd2d]/20">
                      <div className="flex items-center mb-4">
                        <div className="bg-[#f7bd2d] p-2 rounded-lg mr-3">
                          <Target className="h-6 w-6 text-[#030d41]" />
                        </div>
                        <h3 className="text-xl font-bold text-white">Objetivo Principal</h3>
                      </div>
                      <p className="text-slate-200 leading-relaxed">
                        {selectedFeature.objetivo}
                      </p>
                    </div>

                    <div className="bg-gradient-to-br from-[#f7bd2d]/10 to-[#f7bd2d]/5 p-6 rounded-2xl border border-[#f7bd2d]/20">
                      <div className="flex items-center mb-4">
                        <div className="bg-[#f7bd2d] p-2 rounded-lg mr-3">
                          <Globe className="h-6 w-6 text-[#030d41]" />
                        </div>
                        <h3 className="text-xl font-bold text-white">Alcance Integral</h3>
                      </div>
                      <p className="text-slate-200 leading-relaxed">
                        {selectedFeature.alcance}
                      </p>
                    </div>
                  </div>
                  <div className="bg-gradient-to-r from-[#f7bd2d]/10 to-[#f7bd2d]/5 p-6 rounded-2xl border border-[#f7bd2d]/20">
                    <div className="flex flex-col md:flex-row items-center justify-between gap-4">
                      <div>
                        <h4 className="text-xl font-bold text-white mb-2">¿Listo para transformar tu negocio?</h4>
                        <p className="text-slate-300">Descarga la información completa en PDF</p>
                      </div>
                      <a
                        href={selectedFeature.download}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center justify-center px-6 py-3 text-base font-bold rounded-xl bg-[#f7bd2d] text-[#030d41] hover:bg-[#f7bd2d]/90 transition-all transform hover:scale-105 shadow-lg shadow-[#f7bd2d]/20"
                      >
                        <Download className="h-5 w-5 mr-2" />
                        Descargar PDF
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </>
          )}
        </DialogContent>
      </Dialog>
    </section>
  );
};

export default FeaturesSection;