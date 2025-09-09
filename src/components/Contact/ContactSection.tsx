"use client";
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  Send,
  User,
  MessageSquare,
  X,
  Map,
  ExternalLink,
} from "lucide-react";
import { useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

export const formSchemaEmail = z.object({
  username: z.string().min(2, {
    message: "Debes ingresar un Nombre",
  }),
  email: z.string().email({
    message: "Debes ingresar un Correo Válido",
  }),
  phone: z.string().min(8, {
    message: "Debes ingresar un Número Válido",
  }),
  subject: z.string().min(2, {
    message: "Debes ingresar un Asunto",
  }),
  message: z.string().min(10, {
    message: "Debes ingresar un Mensaje (mínimo 10 caracteres)",
  }),
});

export type FormSchemaType = z.infer<typeof formSchemaEmail>;

export const sendEmail = (values: FormSchemaType) => {
  const companyEmail = "info@noxun.com";
  const body = `Nombre: ${values.username}%0AEmail: ${values.email}%0ATeléfono: ${values.phone}%0A%0AMensaje:%0A${values.message}`;
  const gmailLink = `https://mail.google.com/mail/?view=cm&fs=1&to=${companyEmail}&su=${values.subject}&body=${body}`;

  window.open(gmailLink, "_blank");
};

const ContactSection = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<
    "idle" | "success" | "error"
  >("idle");
  const [isMapModalOpen, setIsMapModalOpen] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<FormSchemaType>({
    resolver: zodResolver(formSchemaEmail),
  });

  const onSubmit = async (data: FormSchemaType) => {
    setIsSubmitting(true);
    setSubmitStatus("idle");

    try {
      sendEmail(data);

      setSubmitStatus("success");
      reset();

      setTimeout(() => setSubmitStatus("idle"), 5000);
    } catch (error) {
      console.error("Error al enviar el mensaje:", error);
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      <section
        id="contact"
        className="relative overflow-hidden bg-[#030d41] py-16 md:py-20 lg:py-28"
      >
        <div className="absolute top-0 left-0 h-full w-full opacity-10">
          <div className="absolute top-20 left-10 h-32 w-32 rounded-full border-4 border-[#f7bd2d]"></div>
          <div className="absolute right-10 bottom-20 h-48 w-48 rounded-full border-4 border-[#f7bd2d]"></div>
          <div className="absolute top-1/2 left-1/4 h-24 w-24 rounded-full border-4 border-[#f7bd2d]"></div>
        </div>

        <div className="absolute inset-0">
          {[...Array(15)].map((_, i) => (
            <div
              key={i}
              className="animate-float absolute rounded-full bg-[#f7bd2d]"
              style={{
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
                width: `${Math.random() * 6 + 2}px`,
                height: `${Math.random() * 6 + 2}px`,
                opacity: Math.random() * 0.3 + 0.1,
                animationDuration: `${Math.random() * 15 + 10}s`,
                animationDelay: `${Math.random() * 5}s`,
              }}
            />
          ))}
        </div>

        <div className="relative z-10 container mx-auto px-4">
          <div className="mb-16 text-center">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="mb-6 text-4xl font-bold text-white md:text-5xl"
            >
              <span className="text-[#f7bd2d]">Contáctanos</span> para Más
              Información
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="mx-auto max-w-3xl text-xl text-white/80"
            >
              Estamos aquí para responder todas tus preguntas y ayudarte con lo
              que necesites
            </motion.p>
          </div>

          <div className="flex flex-col items-stretch gap-10 lg:flex-row">
            <div className="w-full rounded-2xl border border-white/10 bg-white/10 p-8 backdrop-blur-md lg:w-2/5">
              <h3 className="mb-8 flex items-center text-2xl font-bold text-white">
                <MapPin className="mr-3 text-[#f7bd2d]" />
                Nuestra Ubicación
              </h3>

              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="mr-4 rounded-lg bg-[#f7bd2d] p-3">
                    <MapPin className="h-6 w-6 text-[#030d41]" />
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-white">
                      Dirección
                    </h4>
                    <p className="text-white/80">
                      {" "}
                      Bolivia, La Paz, Z. Miraflores Av. Pasoskanki Torre Goya
                      N° 1578, Of. 2
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="mr-4 rounded-lg bg-[#f7bd2d] p-3">
                    <Phone className="h-6 w-6 text-[#030d41]" />
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-white">
                      Teléfono
                    </h4>
                    <p className="text-white/80">+591 70140353 - +591 71525335</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="mr-4 rounded-lg bg-[#f7bd2d] p-3">
                    <Mail className="h-6 w-6 text-[#030d41]" />
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-white">Email</h4>
                    <p className="text-white/80">info@noxun.com</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="mr-4 rounded-lg bg-[#f7bd2d] p-3">
                    <Clock className="h-6 w-6 text-[#030d41]" />
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-white">
                      Horario de Atención
                    </h4>
                    <p className="text-white/80">
                      Lunes a Viernes 09:00 - 17:00
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-10 space-y-4">
                <a
                  href="https://wa.me/59170140353?text=Hola,%20me%20gustaría%20solicitar%20una%20cita."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block transform rounded-xl bg-gradient-to-r from-[#f7bd2d] to-[#ffd84d] px-6 py-4 text-center font-bold text-[#030d41] transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-yellow-500/30"
                >
                  Solicitar una Cita por WhatsApp
                </a>

                <button
                  onClick={() => setIsMapModalOpen(true)}
                  className="flex w-full transform items-center justify-center gap-2 rounded-xl border border-white/10 bg-white/10 px-6 py-4 font-bold text-white transition-all duration-300 hover:scale-105 hover:bg-white/20"
                >
                  <Map className="h-5 w-5" />
                  Ver Ubicación en Mapa
                </button>
              </div>
            </div>

            <div className="w-full rounded-2xl border border-white/10 bg-white/10 p-8 backdrop-blur-md lg:w-3/5">
              <h3 className="mb-8 flex items-center text-2xl font-bold text-white">
                <MessageSquare className="mr-3 text-[#f7bd2d]" />
                Envíanos un Mensaje
              </h3>

              <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                  <div>
                    <label
                      htmlFor="username"
                      className="mb-2 block font-medium text-white"
                    >
                      Nombre Completo
                    </label>
                    <div className="relative">
                      <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                        <User className="h-5 w-5 text-[#f7bd2d]" />
                      </div>
                      <input
                        {...register("username")}
                        type="text"
                        className={`border bg-white/5 ${errors.username ? "border-red-500" : "border-white/10"} block w-full rounded-xl p-3 pl-10 text-white transition-all focus:border-transparent focus:ring-2 focus:ring-[#f7bd2d]`}
                        placeholder="Tu nombre completo"
                      />
                    </div>
                    {errors.username && (
                      <p className="mt-1 text-sm text-red-400">
                        {errors.username.message}
                      </p>
                    )}
                  </div>

                  <div>
                    <label
                      htmlFor="email"
                      className="mb-2 block font-medium text-white"
                    >
                      Correo Electrónico
                    </label>
                    <div className="relative">
                      <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                        <Mail className="h-5 w-5 text-[#f7bd2d]" />
                      </div>
                      <input
                        {...register("email")}
                        type="email"
                        className={`border bg-white/5 ${errors.email ? "border-red-500" : "border-white/10"} block w-full rounded-xl p-3 pl-10 text-white transition-all focus:border-transparent focus:ring-2 focus:ring-[#f7bd2d]`}
                        placeholder="tu@email.com"
                      />
                    </div>
                    {errors.email && (
                      <p className="mt-1 text-sm text-red-400">
                        {errors.email.message}
                      </p>
                    )}
                  </div>
                </div>

                <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                  <div>
                    <label
                      htmlFor="phone"
                      className="mb-2 block font-medium text-white"
                    >
                      Teléfono
                    </label>
                    <div className="relative">
                      <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                        <Phone className="h-5 w-5 text-[#f7bd2d]" />
                      </div>
                      <input
                        {...register("phone")}
                        type="tel"
                        className={`border bg-white/5 ${errors.phone ? "border-red-500" : "border-white/10"} block w-full rounded-xl p-3 pl-10 text-white transition-all focus:border-transparent focus:ring-2 focus:ring-[#f7bd2d]`}
                        placeholder="+591 12345678"
                      />
                    </div>
                    {errors.phone && (
                      <p className="mt-1 text-sm text-red-400">
                        {errors.phone.message}
                      </p>
                    )}
                  </div>

                  <div>
                    <label
                      htmlFor="subject"
                      className="mb-2 block font-medium text-white"
                    >
                      Asunto
                    </label>
                    <div className="relative">
                      <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                        <MessageSquare className="h-5 w-5 text-[#f7bd2d]" />
                      </div>
                      <input
                        {...register("subject")}
                        type="text"
                        className={`border bg-white/5 ${errors.subject ? "border-red-500" : "border-white/10"} block w-full rounded-xl p-3 pl-10 text-white transition-all focus:border-transparent focus:ring-2 focus:ring-[#f7bd2d]`}
                        placeholder="Asunto del mensaje"
                      />
                    </div>
                    {errors.subject && (
                      <p className="mt-1 text-sm text-red-400">
                        {errors.subject.message}
                      </p>
                    )}
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="mb-2 block font-medium text-white"
                  >
                    Mensaje
                  </label>
                  <div className="relative">
                    <div className="pointer-events-none absolute top-3 left-3">
                      <MessageSquare className="h-5 w-5 text-[#f7bd2d]" />
                    </div>
                    <textarea
                      {...register("message")}
                      rows={5}
                      className={`border bg-white/5 ${errors.message ? "border-red-500" : "border-white/10"} block w-full rounded-xl p-3 pl-10 text-white transition-all focus:border-transparent focus:ring-2 focus:ring-[#f7bd2d]`}
                      placeholder="Escribe tu mensaje aquí..."
                    ></textarea>
                  </div>
                  {errors.message && (
                    <p className="mt-1 text-sm text-red-400">
                      {errors.message.message}
                    </p>
                  )}
                </div>

                <motion.button
                  type="submit"
                  disabled={isSubmitting}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="flex w-full items-center justify-center rounded-xl bg-gradient-to-r from-[#f7bd2d] to-[#ffd84d] px-6 py-4 font-bold text-[#030d41] transition-all duration-300 hover:shadow-2xl hover:shadow-yellow-500/30 disabled:cursor-not-allowed disabled:opacity-70"
                >
                  {isSubmitting ? (
                    <>
                      <div className="mr-2 h-5 w-5 animate-spin rounded-full border-b-2 border-[#030d41]"></div>
                      Preparando...
                    </>
                  ) : (
                    <>
                      <Send className="mr-2 h-5 w-5" />
                      Enviar
                    </>
                  )}
                </motion.button>

                {submitStatus === "success" && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="rounded-xl border border-green-500/30 bg-green-500/20 p-4 text-center text-green-300"
                  >
                    ¡Formulario completado! Se abrirá Gmail con tu mensaje.
                  </motion.div>
                )}

                {submitStatus === "error" && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="rounded-xl border border-red-500/30 bg-red-500/20 p-4 text-center text-red-300"
                  >
                    Hubo un error. Por favor, inténtalo de nuevo.
                  </motion.div>
                )}
              </form>
            </div>
          </div>

          <div className="mt-16 text-center">
            <div className="inline-flex items-center justify-center rounded-full bg-white/5 p-4">
              <div className="mr-3 h-3 w-3 animate-pulse rounded-full bg-[#f7bd2d]"></div>
              <span className="text-white/70">Estamos aquí para servirte</span>
            </div>
          </div>
        </div>

        <style jsx>{`
          @keyframes float {
            0%,
            100% {
              transform: translateY(0) rotate(0deg);
            }
            50% {
              transform: translateY(-15px) rotate(5deg);
            }
          }
          .animate-float {
            animation: float 6s ease-in-out infinite;
          }
        `}</style>
      </section>

      <AnimatePresence>
        {isMapModalOpen && (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4 backdrop-blur-sm">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ type: "spring", damping: 20, stiffness: 300 }}
              className="relative w-full max-w-4xl overflow-hidden rounded-2xl border-2 border-[#f7bd2d] bg-[#030d41] shadow-2xl"
            >
              <div className="flex items-center justify-between border-b border-[#f7bd2d]/30 bg-gradient-to-r from-[#030d41] to-[#0a1a66] p-6">
                <h3 className="flex items-center text-2xl font-bold text-white">
                  <MapPin className="mr-3 text-[#f7bd2d]" />
                  Nuestra Ubicación
                </h3>
                <button
                  onClick={() => setIsMapModalOpen(false)}
                  className="rounded-full bg-white/10 p-2 text-white transition-colors hover:bg-white/20"
                >
                  <X className="h-6 w-6" />
                </button>
              </div>

              <div className="relative h-96 w-full md:h-[500px]">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d1912.7821616107906!2d-68.119569!3d-16.497584!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x915f21b21dee7469%3A0x960d6b372d219f57!2sTorre%20Goya!5e0!3m2!1ses-419!2sbo!4v1756182395409!5m2!1ses-419!2sbo"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="absolute inset-0"
                ></iframe>
              </div>

              <div className="border-t border-[#f7bd2d]/30 bg-gradient-to-r from-[#030d41] to-[#0a1a66] p-6">
                <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
                  <div>
                    <p className="font-semibold text-white">
                      Bolivia, La Paz, Z. Miraflores Av. Pasoskanki Torre Goya
                      N° 1578, Of. 2
                    </p>
                    <p className="text-white/70">
                      +591 70140353 - +591 71525335
                    </p>
                  </div>
                  <a
                    href="https://www.google.com/maps/place/Torre+Goya/@-16.497584,-68.119569,16z/data=!4m6!3m5!1s0x915f21b21dee7469:0x960d6b372d219f57!8m2!3d-16.497584!4d-68.119569!16s%2Fg%2F11qptd_8p2?entry=ttu"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 rounded-xl bg-[#f7bd2d] px-6 py-3 font-bold text-[#030d41] transition-all hover:bg-[#ffd84d]"
                  >
                    <ExternalLink className="h-5 w-5" />
                    Abrir en Google Maps
                  </a>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </>
  );
};

export default ContactSection;
