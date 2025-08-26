import { MapPin, Phone, Mail, Clock } from 'lucide-react';

const ContactSection = () => {
  return (
    <section id="contact" className="py-16 md:py-20 lg:py-28 bg-gradient-to-br from-[#030d41] to-[#0a1a66] relative overflow-hidden">
      {/* Elementos decorativos */}
      <div className="absolute top-0 left-0 w-full h-full opacity-10">
        <div className="absolute top-20 left-10 w-32 h-32 border-4 border-[#f7bd2d] rounded-full"></div>
        <div className="absolute bottom-20 right-10 w-48 h-48 border-4 border-[#f7bd2d] rounded-full"></div>
        <div className="absolute top-1/2 left-1/4 w-24 h-24 border-4 border-[#f7bd2d] rounded-full"></div>
      </div>

      <div className="container px-4 mx-auto relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            <span className="text-[#f7bd2d]">Visítanos</span> en Nuestras Oficinas
          </h2>
          <p className="text-xl text-white/80 max-w-3xl mx-auto">
            Estamos ubicados en un lugar estratégico para atenderte de la mejor manera
          </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-10 items-stretch">
          {/* Información de contacto */}
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
                  <p className="text-white/80">+591 XXX XXX XXX</p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="bg-[#f7bd2d] p-3 rounded-lg mr-4">
                  <Mail className="h-6 w-6 text-[#030d41]" />
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-white">Email</h4>
                  <p className="text-white/80">info@tuempresa.com</p>
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

            <a
              href="https://wa.me/59164235604?text=Hola,%20me%20gustaría%20solicitar%20una%20cita."
              target="_blank"
              rel="noopener noreferrer"
              className="mt-10 block text-center bg-gradient-to-r from-[#f7bd2d] to-[#ffd84d] text-[#030d41] font-bold py-4 px-6 rounded-xl transition-all duration-300 transform hover:scale-105 hover:shadow-2xl hover:shadow-yellow-500/30"
            >
              Solicitar una Cita
            </a>
          </div>

          {/* Mapa */}
          <div className="w-full lg:w-3/5 rounded-2xl overflow-hidden shadow-2xl border-2 border-[#f7bd2d]">
            <div className="relative w-full h-full min-h-[450px]">
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

              {/* Overlay decorativo en esquina */}
              <div className="absolute top-0 right-0 w-24 h-24">
                <div className="absolute top-0 right-0 w-16 h-16 bg-[#f7bd2d] rounded-bl-2xl"></div>
                <div className="absolute top-4 right-4 w-8 h-8 bg-white rounded-bl-xl"></div>
              </div>
            </div>
          </div>
        </div>

        {/* Elemento decorativo inferior */}
        <div className="mt-16 text-center">
          <div className="inline-flex items-center justify-center p-4 bg-white/5 rounded-full">
            <div className="w-3 h-3 bg-[#f7bd2d] rounded-full mr-3 animate-pulse"></div>
            <span className="text-white/70">Estamos aquí para servirte</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;