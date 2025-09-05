"use client"
import { MapPin, Phone, Mail, Clock, Send, User, MessageSquare, X, Map, ExternalLink } from 'lucide-react';
import { useRef, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { z } from 'zod';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';

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
  const companyEmail = "missaelapaza@gmail.com";
  const body = `Nombre: ${values.username}%0AEmail: ${values.email}%0ATeléfono: ${values.phone}%0A%0AMensaje:%0A${values.message}`;
  const gmailLink = `https://mail.google.com/mail/?view=cm&fs=1&to=${companyEmail}&su=${values.subject}&body=${body}`;

  window.open(gmailLink, "_blank");
};

const ContactSection = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [isMapModalOpen, setIsMapModalOpen] = useState(false);

  const { register, handleSubmit, formState: { errors }, reset } = useForm<FormSchemaType>({
    resolver: zodResolver(formSchemaEmail),
  });

  const onSubmit = async (data: FormSchemaType) => {
    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      sendEmail(data);

      setSubmitStatus('success');
      reset(); 

      setTimeout(() => setSubmitStatus('idle'), 5000);
    } catch (error) {
      console.error('Error al enviar el mensaje:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      <section id="contact" className="py-16 md:py-20 lg:py-28 bg-[#030d41] relative overflow-hidden" >
        <div className="absolute top-0 left-0 w-full h-full opacity-10">
          <div className="absolute top-20 left-10 w-32 h-32 border-4 border-[#f7bd2d] rounded-full"></div>
          <div className="absolute bottom-20 right-10 w-48 h-48 border-4 border-[#f7bd2d] rounded-full"></div>
          <div className="absolute top-1/2 left-1/4 w-24 h-24 border-4 border-[#f7bd2d] rounded-full"></div>
        </div>

        <div className="absolute inset-0">
          {[...Array(15)].map((_, i) => (
            <div
              key={i}
              className="absolute rounded-full bg-[#f7bd2d] animate-float"
              style={{
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
                width: `${Math.random() * 6 + 2}px`,
                height: `${Math.random() * 6 + 2}px`,
                opacity: Math.random() * 0.3 + 0.1,
                animationDuration: `${Math.random() * 15 + 10}s`,
                animationDelay: `${Math.random() * 5}s`
              }}
            />
          ))}
        </div>

        <div className="container px-4 mx-auto relative z-10">
          <div className="text-center mb-16">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-4xl md:text-5xl font-bold text-white mb-6"
            >
              <span className="text-[#f7bd2d]">Contáctanos</span> para Más Información
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-xl text-white/80 max-w-3xl mx-auto"
            >
              Estamos aquí para responder todas tus preguntas y ayudarte con lo que necesites
            </motion.p>
          </div>

          <div className="flex flex-col lg:flex-row gap-10 items-stretch">
            <div className="w-full lg:w-2/5 bg-white/10 backdrop-blur-md rounded-2xl p-8 border border-white/10">
              <h3 className="text-2xl font-bold text-white mb-8 flex items-center">
                <MapPin className="mr-3 text-[#f7bd2d]" />
                Nuestra Ubicación
              </h3>

              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="bg-[#f7bd2d] p-3 rounded-lg mr-4">
                    <MapPin className="h-6 w-6 text-[#030d41]" />
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-white">Dirección</h4>
                    <p className="text-white/80">Torre Goya, La Paz, Bolivia</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="bg-[#f7bd2d] p-3 rounded-lg mr-4">
                    <Phone className="h-6 w-6 text-[#030d41]" />
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-white">Teléfono</h4>
                    <p className="text-white/80">+591 64235604</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="bg-[#f7bd2d] p-3 rounded-lg mr-4">
                    <Mail className="h-6 w-6 text-[#030d41]" />
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-white">Email</h4>
                    <p className="text-white/80">info@noxun.com</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="bg-[#f7bd2d] p-3 rounded-lg mr-4">
                    <Clock className="h-6 w-6 text-[#030d41]" />
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-white">Horario de Atención</h4>
                    <p className="text-white/80">Lunes a Viernes: 8:00 - 18:00</p>
                    <p className="text-white/80">Sábados: 9:00 - 13:00</p>
                  </div>
                </div>
              </div>

              <div className="mt-10 space-y-4">
                <a
                  href="https://wa.me/59164235604?text=Hola,%20me%20gustaría%20solicitar%20una%20cita."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block text-center bg-gradient-to-r from-[#f7bd2d] to-[#ffd84d] text-[#030d41] font-bold py-4 px-6 rounded-xl transition-all duration-300 transform hover:scale-105 hover:shadow-2xl hover:shadow-yellow-500/30"
                >
                  Solicitar una Cita por WhatsApp
                </a>

                <button
                  onClick={() => setIsMapModalOpen(true)}
                  className="w-full flex items-center justify-center gap-2 bg-white/10 text-white font-bold py-4 px-6 rounded-xl transition-all duration-300 transform hover:scale-105 hover:bg-white/20 border border-white/10"
                >
                  <Map className="h-5 w-5" />
                  Ver Ubicación en Mapa
                </button>
              </div>
            </div>

            <div className="w-full lg:w-3/5 bg-white/10 backdrop-blur-md rounded-2xl p-8 border border-white/10">
              <h3 className="text-2xl font-bold text-white mb-8 flex items-center">
                <MessageSquare className="mr-3 text-[#f7bd2d]" />
                Envíanos un Mensaje
              </h3>

              <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="username" className="block text-white mb-2 font-medium">
                      Nombre Completo
                    </label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                        <User className="h-5 w-5 text-[#f7bd2d]" />
                      </div>
                      <input
                        {...register('username')}
                        type="text"
                        className={`bg-white/5 border ${errors.username ? 'border-red-500' : 'border-white/10'} text-white rounded-xl focus:ring-2 focus:ring-[#f7bd2d] focus:border-transparent block w-full pl-10 p-3 transition-all`}
                        placeholder="Tu nombre completo"
                      />
                    </div>
                    {errors.username && (
                      <p className="mt-1 text-red-400 text-sm">{errors.username.message}</p>
                    )}
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-white mb-2 font-medium">
                      Correo Electrónico
                    </label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                        <Mail className="h-5 w-5 text-[#f7bd2d]" />
                      </div>
                      <input
                        {...register('email')}
                        type="email"
                        className={`bg-white/5 border ${errors.email ? 'border-red-500' : 'border-white/10'} text-white rounded-xl focus:ring-2 focus:ring-[#f7bd2d] focus:border-transparent block w-full pl-10 p-3 transition-all`}
                        placeholder="tu@email.com"
                      />
                    </div>
                    {errors.email && (
                      <p className="mt-1 text-red-400 text-sm">{errors.email.message}</p>
                    )}
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="phone" className="block text-white mb-2 font-medium">
                      Teléfono
                    </label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                        <Phone className="h-5 w-5 text-[#f7bd2d]" />
                      </div>
                      <input
                        {...register('phone')}
                        type="tel"
                        className={`bg-white/5 border ${errors.phone ? 'border-red-500' : 'border-white/10'} text-white rounded-xl focus:ring-2 focus:ring-[#f7bd2d] focus:border-transparent block w-full pl-10 p-3 transition-all`}
                        placeholder="+591 12345678"
                      />
                    </div>
                    {errors.phone && (
                      <p className="mt-1 text-red-400 text-sm">{errors.phone.message}</p>
                    )}
                  </div>

                  <div>
                    <label htmlFor="subject" className="block text-white mb-2 font-medium">
                      Asunto
                    </label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                        <MessageSquare className="h-5 w-5 text-[#f7bd2d]" />
                      </div>
                      <input
                        {...register('subject')}
                        type="text"
                        className={`bg-white/5 border ${errors.subject ? 'border-red-500' : 'border-white/10'} text-white rounded-xl focus:ring-2 focus:ring-[#f7bd2d] focus:border-transparent block w-full pl-10 p-3 transition-all`}
                        placeholder="Asunto del mensaje"
                      />
                    </div>
                    {errors.subject && (
                      <p className="mt-1 text-red-400 text-sm">{errors.subject.message}</p>
                    )}
                  </div>
                </div>

                <div>
                  <label htmlFor="message" className="block text-white mb-2 font-medium">
                    Mensaje
                  </label>
                  <div className="relative">
                    <div className="absolute top-3 left-3 pointer-events-none">
                      <MessageSquare className="h-5 w-5 text-[#f7bd2d]" />
                    </div>
                    <textarea
                      {...register('message')}
                      rows={5}
                      className={`bg-white/5 border ${errors.message ? 'border-red-500' : 'border-white/10'} text-white rounded-xl focus:ring-2 focus:ring-[#f7bd2d] focus:border-transparent block w-full pl-10 p-3 transition-all`}
                      placeholder="Escribe tu mensaje aquí..."
                    ></textarea>
                  </div>
                  {errors.message && (
                    <p className="mt-1 text-red-400 text-sm">{errors.message.message}</p>
                  )}
                </div>

                <motion.button
                  type="submit"
                  disabled={isSubmitting}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full bg-gradient-to-r from-[#f7bd2d] to-[#ffd84d] text-[#030d41] font-bold py-4 px-6 rounded-xl transition-all duration-300 hover:shadow-2xl hover:shadow-yellow-500/30 flex items-center justify-center disabled:opacity-70 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? (
                    <>
                      <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-[#030d41] mr-2"></div>
                      Preparando...
                    </>
                  ) : (
                    <>
                      <Send className="mr-2 h-5 w-5" />
                      Enviar
                    </>
                  )}
                </motion.button>

                {submitStatus === 'success' && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="p-4 bg-green-500/20 border border-green-500/30 rounded-xl text-green-300 text-center"
                  >
                    ¡Formulario completado! Se abrirá Gmail con tu mensaje.
                  </motion.div>
                )}

                {submitStatus === 'error' && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="p-4 bg-red-500/20 border border-red-500/30 rounded-xl text-red-300 text-center"
                  >
                    Hubo un error. Por favor, inténtalo de nuevo.
                  </motion.div>
                )}
              </form>
            </div>
          </div>

          <div className="mt-16 text-center">
            <div className="inline-flex items-center justify-center p-4 bg-white/5 rounded-full">
              <div className="w-3 h-3 bg-[#f7bd2d] rounded-full mr-3 animate-pulse"></div>
              <span className="text-white/70">Estamos aquí para servirte</span>
            </div>
          </div>
        </div>

        <style jsx>{`
          @keyframes float {
            0%, 100% { transform: translateY(0) rotate(0deg); }
            50% { transform: translateY(-15px) rotate(5deg); }
          }
          .animate-float {
            animation: float 6s ease-in-out infinite;
          }
        `}</style>
      </section>

      <AnimatePresence>
        {isMapModalOpen && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ type: "spring", damping: 20, stiffness: 300 }}
              className="relative bg-[#030d41] rounded-2xl overflow-hidden shadow-2xl border-2 border-[#f7bd2d] w-full max-w-4xl"
            >
              <div className="flex items-center justify-between p-6 bg-gradient-to-r from-[#030d41] to-[#0a1a66] border-b border-[#f7bd2d]/30">
                <h3 className="text-2xl font-bold text-white flex items-center">
                  <MapPin className="mr-3 text-[#f7bd2d]" />
                  Nuestra Ubicación
                </h3>
                <button
                  onClick={() => setIsMapModalOpen(false)}
                  className="p-2 rounded-full bg-white/10 text-white hover:bg-white/20 transition-colors"
                >
                  <X className="h-6 w-6" />
                </button>
              </div>

              <div className="relative w-full h-96 md:h-[500px]">
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

              <div className="p-6 bg-gradient-to-r from-[#030d41] to-[#0a1a66] border-t border-[#f7bd2d]/30">
                <div className="flex flex-col md:flex-row justify-between items-center gap-4">
                  <div>
                    <p className="text-white font-semibold">Torre Goya, La Paz, Bolivia</p>
                    <p className="text-white/70">+591 64235604</p>
                  </div>
                  <a
                    href="https://www.google.com/maps/place/Torre+Goya/@-16.497584,-68.119569,16z/data=!4m6!3m5!1s0x915f21b21dee7469:0x960d6b372d219f57!8m2!3d-16.497584!4d-68.119569!16s%2Fg%2F11qptd_8p2?entry=ttu"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 bg-[#f7bd2d] text-[#030d41] font-bold py-3 px-6 rounded-xl transition-all hover:bg-[#ffd84d]"
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