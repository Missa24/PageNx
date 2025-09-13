"use client";
import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Play, Download, X, ChevronRight, ChevronLeft } from "lucide-react";

const FeaturesSection = ({ features }) => {
  const [isMobile, setIsMobile] = useState(false);
  const [videoUrl, setVideoUrl] = useState("");
  const [showVideo, setShowVideo] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);
  const videoRefs = useRef([]);

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

  useEffect(() => {
    if (showVideo) {
      videoRefs.current.forEach((video) => {
        if (video) video.pause();
      });
    }
  }, [showVideo]);

  const openVideo = (url) => {
    setVideoUrl(url);
    setShowVideo(true);
  };

  const closeVideo = () => {
    setShowVideo(false);
    setVideoUrl("");
  };

  const nextFeature = () => {
    setActiveIndex((prev) => (prev + 1) % features.length);
  };

  const prevFeature = () => {
    setActiveIndex((prev) => (prev - 1 + features.length) % features.length);
  };

  return (
    <section
      className="relative min-h-screen w-full overflow-hidden"
      id="ourservice"
    >
      <div className="absolute top-1/2 right-4 z-20 hidden -translate-y-1/2 transform md:flex md:flex-col md:space-y-2">
        {features.map((_, index) => (
          <button
            key={index}
            onClick={() => setActiveIndex(index)}
            className={`h-3 w-3 rounded-full ${index === activeIndex ? "bg-[#f7bd2d]" : "bg-white/50"}`}
            aria-label={`Ir a característica ${index + 1}`}
          />
        ))}
      </div>

      <button
        onClick={prevFeature}
        className="absolute top-1/2 left-4 z-20 hidden -translate-y-1/2 transform rounded-full bg-white/20 p-2 backdrop-blur-sm transition-all hover:bg-white/30 md:block"
        aria-label="Característica anterior"
      >
        <ChevronLeft className="h-6 w-6 text-white" />
      </button>
      <button
        onClick={nextFeature}
        className="absolute top-1/2 right-4 z-20 hidden -translate-y-1/2 transform rounded-full bg-white/20 p-2 backdrop-blur-sm transition-all hover:bg-white/30 md:block"
        aria-label="Siguiente característica"
      >
        <ChevronRight className="h-6 w-6 text-white" />
      </button>

      <div className="relative h-screen w-full">
        {features.map((feature, index) => (
          <div
            key={feature.id}
            className={`absolute inset-0 flex flex-col transition-all duration-700 ease-in-out md:flex-row ${index === activeIndex ? "translate-x-0 opacity-100" : "translate-x-full opacity-0"}`}
          >
            <div className="relative h-1/2 w-full md:h-full md:w-[65%]">
              {feature.bgVideo ? (
                <video
                  autoPlay
                  muted
                  loop
                  playsInline
                  className="h-full w-full object-cover"
                  poster={feature.bgImage}
                >
                  <source src={feature.bgVideo} type="video/mp4" />
                  Tu navegador no soporta el elemento de video.
                </video>
              ) : (
                <Image
                  src={feature.bgImage}
                  alt={feature.title}
                  fill
                  className="object-cover"
                  priority={index === activeIndex}
                />
              )}
            </div>

            <div
              className={`flex h-1/2 w-full flex-col justify-center bg-gradient-to-br ${feature.color} p-6 md:h-full md:w-[35%] md:p-12`}
            >
              <div>
                <h3 className="mb-4 text-3xl font-bold text-[#030d41] md:mb-6 md:text-4xl">
                  {feature.title}
                </h3>
                <p className="mb-6 text-lg text-[#030d41]/90 md:mb-8 md:text-xl">
                  {feature.paragraph}
                </p>
                <div className="flex flex-wrap gap-3 md:gap-4">
                  {feature.videoUrl && (
                    <Button
                      onClick={() => openVideo(feature.videoUrl)}
                      className="bg-[#030d41] text-white hover:bg-[#030d41]/90"
                      size={isMobile ? "sm" : "default"}
                    >
                      <Play className="mr-2 h-4 w-4" />
                      Ver Demo
                    </Button>
                  )}
                  <a
                    href={feature.download}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center rounded-md bg-[#030d41]/10 px-3 py-2 text-xs font-medium text-[#030d41] transition-colors hover:bg-[#030d41]/20 md:px-4 md:py-2 md:text-sm"
                  >
                    <Download className="mr-2 h-3 w-3 md:h-4 md:w-4" />
                    Descargar PDF
                  </a>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Indicadores para móvil */}
      <div className="absolute bottom-4 left-1/2 z-20 flex -translate-x-1/2 transform space-x-2 md:hidden">
        {features.map((_, index) => (
          <button
            key={index}
            onClick={() => setActiveIndex(index)}
            className={`h-2 w-2 rounded-full ${index === activeIndex ? "bg-[#f7bd2d]" : "bg-white/50"}`}
            aria-label={`Ir a característica ${index + 1}`}
          />
        ))}
      </div>

      {/* Modal de video */}
      {showVideo && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4">
          <div className="relative w-full max-w-4xl">
            <Button
              onClick={closeVideo}
              className="absolute -top-12 right-0 z-10 rounded-full bg-[#f7bd2d] p-2 hover:bg-[#f7bd2d]/90"
              size="icon"
            >
              <X className="h-5 w-5 text-[#030d41]" />
            </Button>

            <div className="relative aspect-video w-full overflow-hidden rounded-lg">
              <iframe
                src={videoUrl}
                className="absolute inset-0 h-full w-full"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                title="Video demostrativo"
              />
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default FeaturesSection;
