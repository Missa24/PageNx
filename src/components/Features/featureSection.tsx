"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { FileText, X, ArrowRight, Target, Globe, Download } from "lucide-react";
import { features } from "./featuresData";

const FeaturesSection = () => {
  const [selectedFeature, setSelectedFeature] = useState(null);
  const [open, setOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkMobile();
    window.addEventListener("resize", checkMobile);

    return () => {
      window.removeEventListener("resize", checkMobile);
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
    <section className="bg-[#030d41] py-16" id="ourservice">
      <div className="container mx-auto px-4">
        <div className="mb-12 text-center">
          <div className="mb-6 inline-flex items-center justify-center rounded-full bg-[#f7bd2d]/10 px-4 py-2">
            <span className="text-sm font-semibold text-[#f7bd2d]">
              Soluciones Tecnológicas
            </span>
          </div>
          <h2 className="mb-4 text-3xl font-bold text-white md:text-4xl lg:text-5xl">
            Potencia tu <span className="text-[#f7bd2d]">Negocio</span>
          </h2>
          <p className="mx-auto max-w-3xl text-lg text-slate-300">
            Descubre nuestras soluciones tecnológicas diseñadas para optimizar y
            transformar tu empresa.
          </p>
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
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
          {features.map((feature) => (
            <div
              key={feature.id}
              className="group relative transform cursor-pointer overflow-hidden rounded-xl border border-white/10 bg-white/5 backdrop-blur-sm transition-all duration-500 hover:-translate-y-2 hover:border-[#f7bd2d]/30 hover:shadow-2xl hover:shadow-[#f7bd2d]/10"
              onClick={() => openDialog(feature)}
            >
              <div className="relative h-40 overflow-hidden">
                <Image
                  src={feature.bgImage}
                  alt={feature.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#030d41] to-transparent opacity-90 transition-opacity duration-300 group-hover:opacity-80" />

                <div className="absolute bottom-3 left-3">
                  <h3 className="text-lg font-bold text-white">
                    {feature.title}
                  </h3>
                </div>

                <div className="absolute top-3 right-3">
                  <div className="flex h-8 w-8 transform items-center justify-center rounded-full bg-[#f7bd2d] transition-transform duration-300 group-hover:scale-110">
                    <FileText className="h-4 w-4 text-[#030d41]" />
                  </div>
                </div>
              </div>

              <div className="p-4">
                <p className="line-clamp-3 text-sm text-slate-300 transition-colors group-hover:text-white">
                  {feature.paragraph}
                </p>

                <div className="mt-3 flex items-center text-[#f7bd2d] opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                  <span className="text-xs font-medium">Explorar</span>
                  <ArrowRight className="ml-1 h-3 w-3" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent
          className={`max-w-[95vw] ${isMobile ? "h-[50vh] max-h-[70vh]" : "h-auto max-h-[70vh] max-w-7xl"} overflow-y-auto rounded-xl border-2 border-[#f7bd2d]/30 bg-[#030d41] p-0 text-white shadow-2xl shadow-[#f7bd2d]/10`}
        >
          {selectedFeature && (
            <>
              <DialogHeader className="sr-only">
                <DialogTitle>{selectedFeature.title}</DialogTitle>
              </DialogHeader>

              <div className="relative">
                <div
                  className={`relative ${isMobile ? "h-60" : "h-64"} w-full`}
                >
                  <Image
                    src={selectedFeature.bgImage}
                    alt={selectedFeature.title}
                    fill
                    className="object-cover"
                    priority
                  />
                  <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#030d41]/80 to-[#030d41]" />

                  <div className="absolute right-6 bottom-6 left-6">
                    <h2 className="mb-2 text-2xl font-bold text-white md:text-3xl">
                      {selectedFeature.title}
                    </h2>
                    <p className="max-w-2xl text-base text-slate-200 md:text-lg">
                      {selectedFeature.paragraph}
                    </p>
                  </div>

                  <Button
                    variant="ghost"
                    size="icon"
                    className="absolute top-4 right-4 z-10 transform rounded-full border border-[#f7bd2d]/30 bg-[#030d41]/80 backdrop-blur-md transition-all hover:scale-110 hover:bg-[#f7bd2d] hover:text-[#030d41]"
                    onClick={closeDialog}
                  >
                    <X className="h-5 w-5" />
                  </Button>
                </div>

                <div className="p-6 md:p-8">
                  <div className="mb-8 grid grid-cols-1 gap-6 lg:grid-cols-2">
                    <div className="rounded-2xl border border-[#f7bd2d]/20 bg-gradient-to-br from-[#f7bd2d]/10 to-[#f7bd2d]/5 p-5">
                      <div className="mb-4 flex items-center">
                        <div className="mr-3 rounded-lg bg-[#f7bd2d] p-2">
                          <Target className="h-5 w-5 text-[#030d41]" />
                        </div>
                        <h3 className="text-lg font-bold text-white">
                          Objetivo Principal
                        </h3>
                      </div>
                      <p className="text-sm leading-relaxed text-slate-200">
                        {selectedFeature.objetivo}
                      </p>
                    </div>

                    <div className="rounded-2xl border border-[#f7bd2d]/20 bg-gradient-to-br from-[#f7bd2d]/10 to-[#f7bd2d]/5 p-5">
                      <div className="mb-4 flex items-center">
                        <div className="mr-3 rounded-lg bg-[#f7bd2d] p-2">
                          <Globe className="h-5 w-5 text-[#030d41]" />
                        </div>
                        <h3 className="text-lg font-bold text-white">
                          Alcance Integral
                        </h3>
                      </div>
                      <p className="text-sm leading-relaxed text-slate-200">
                        {selectedFeature.alcance}
                      </p>
                    </div>
                  </div>
                  <div className="rounded-2xl border border-[#f7bd2d]/20 bg-gradient-to-r from-[#f7bd2d]/10 to-[#f7bd2d]/5 p-5">
                    <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
                      <div>
                        <h4 className="mb-2 text-lg font-bold text-white">
                          ¿Listo para transformar tu negocio?
                        </h4>
                        <p className="text-sm text-slate-300">
                          Descarga la información completa en PDF
                        </p>
                      </div>
                      <a
                        href={selectedFeature.download}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex transform items-center justify-center rounded-xl bg-[#f7bd2d] px-5 py-2.5 text-sm font-bold text-[#030d41] shadow-lg shadow-[#f7bd2d]/20 transition-all hover:scale-105 hover:bg-[#f7bd2d]/90"
                      >
                        <Download className="mr-2 h-4 w-4" />
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
