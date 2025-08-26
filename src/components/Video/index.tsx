"use client";

import { useState, useRef, useEffect } from "react";
import Image from "next/image";
import { Play, X, Volume2, VolumeX } from "lucide-react";

export default function VideoSection() {
  const [isModalOpen, setModalOpen] = useState(false);
  const [isMuted, setIsMuted] = useState(true);
  const videoRef = useRef(null);

  const toggleMute = () => {
    if (videoRef.current) {
      videoRef.current.muted = !videoRef.current.muted;
      setIsMuted(!isMuted);
    }
  };

  return (
    <>
      <section className="relative py-16 md:py-20 lg:py-28 bg-gradient-to-br from-[#030d41] via-[#0a1a5e] to-[#030d41] overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-1/4 left-10 w-80 h-80 bg-[#f7bd2d] rounded-full mix-blend-soft-light filter blur-3xl animate-pulse-slow"></div>
          <div className="absolute bottom-1/4 right-10 w-96 h-96 bg-[#f7bd2d] rounded-full mix-blend-soft-light filter blur-3xl animate-pulse-slow delay-1000"></div>
        </div>
        <div className="container relative z-10 mx-auto px-4">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Acerca de nosotros
            </h2>
            <p className="text-lg text-slate-300 max-w-2xl mx-auto">
              NOXUN es una empresa especializada en el desarrollo de sistemas a medida a través de herramientas tecnológicas adaptadas a las necesidades de cada institución.
            </p>
          </div>

          <div className="flex justify-center">
            <div
              className="relative w-full max-w-4xl rounded-2xl overflow-hidden shadow-2xl shadow-[#f7bd2d]/30 cursor-pointer transform transition-all duration-500 hover:scale-[1.02] hover:shadow-[#f7bd2d]/50"
              onClick={() => setModalOpen(true)}
            >
              <div className="relative aspect-video bg-black">
                <video
                  ref={videoRef}
                  className="w-full h-full object-cover"
                  poster="/images/video/image.png"
                  muted
                  loop
                  playsInline
                >
                  <source src="/sample-video.mp4" type="video/mp4" />
                  Your browser does not support the video tag.
                </video>

                <div className="absolute inset-0 bg-gradient-to-t from-[#030d41]/90 via-transparent to-transparent"></div>

                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="relative">
                    <div className="absolute inset-0 bg-[#f7bd2d] rounded-full scale-110 opacity-20 animate-ping"></div>
                    <div className="relative flex items-center justify-center w-20 h-20 md:w-24 md:h-24 bg-[#f7bd2d] rounded-full transition-all duration-300 hover:scale-110">
                      <Play className="h-8 w-8 md:h-10 md:w-10 text-[#030d41] ml-1 fill-current" />
                    </div>
                  </div>
                </div>

                <div className="absolute bottom-4 left-4 flex items-center space-x-3">
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      toggleMute();
                    }}
                    className="p-2 bg-black/50 rounded-full text-white hover:bg-[#f7bd2d] transition-colors"
                  >
                    {isMuted ? <VolumeX size={20} /> : <Volume2 size={20} />}
                  </button>
                  <div className="text-white text-sm font-medium">
                    Click para ver video completo
                  </div>
                </div>

                <div className="absolute bottom-4 right-4 bg-[#f7bd2d] text-[#030d41] px-3 py-1 rounded-full text-sm font-semibold">
                  2:45
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="absolute inset-0 overflow-hidden z-0">
          {[...Array(12)].map((_, i) => (
            <div
              key={i}
              className="absolute rounded-full bg-[#f7bd2d] opacity-30 animate-float"
              style={{
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
                width: `${Math.random() * 15 + 5}px`,
                height: `${Math.random() * 15 + 5}px`,
                animationDuration: `${Math.random() * 15 + 10}s`,
                animationDelay: `${Math.random() * 5}s`
              }}
            />
          ))}
        </div>
      </section>

      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-md">
          <div className="relative w-full max-w-4xl mx-4">
            <button
              onClick={() => setModalOpen(false)}
              className="absolute -top-12 right-0 text-white hover:text-[#f7bd2d] transition-colors z-10"
            >
              <X size={32} />
            </button>

            <div className="relative aspect-video bg-black rounded-lg overflow-hidden">
              <video
                className="w-full h-full object-contain"
                controls
                autoPlay
                src="/sample-video.mp4"
              >
                Your browser does not support the video tag.
              </video>
            </div>
          </div>
        </div>
      )}

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
        @keyframes pulse-slow {
          0%, 100% {
            opacity: 0.2;
          }
          50% {
            opacity: 0.3;
          }
        }
        .animate-float {
          animation: float 12s ease-in-out infinite;
        }
        .animate-pulse-slow {
          animation: pulse-slow 6s ease-in-out infinite;
        }
      `}</style>
    </>
  );
}