import React, { useState } from 'react';
import { INSTITUTION_INFO } from '../data/institutionData';

export const ContactoUbicacion: React.FC = () => {
  const [formData, setFormData] = useState({
    nombreAcudiente: '',
    telefono: '',
    email: '',
    sedeInteres: 'Sede Principal (Sur de Armenia)',
    gradoInteres: 'Pre-jardín / Transición',
    mensaje: ''
  });

  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section id="contacto" className="py-16 lg:py-20 bg-[#FAF8F5] border-b border-stone-200">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="max-w-3xl">
          <p className="text-xs uppercase tracking-widest text-[#5B3F8C] font-semibold">
            Canales de Atención y Acogida Familiar
          </p>
          <h2 className="mt-2 text-2xl sm:text-3xl lg:text-4xl font-serif font-bold text-stone-900 tracking-tight">
            Contacto y Ubicación de Nuestras Sedes
          </h2>
          <p className="mt-4 text-base text-stone-600 leading-relaxed">
            Estamos a disposición de las familias, líderes veredales y entidades colaboradoras para resolver dudas sobre inscripciones, transferencias y atención a barreras de aprendizaje.
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-start">
          {/* Left Column: Direct contact info & Campuses */}
          <div className="lg:col-span-5 space-y-6">
            <div className="p-6 rounded-2xl bg-white border border-stone-200">
              <h3 className="text-lg font-serif font-bold text-stone-900 mb-4">
                Atención Directiva Institucional
              </h3>

              <div className="space-y-4 text-sm">
                <div>
                  <p className="text-xs uppercase tracking-wider text-stone-400 font-semibold">
                    Teléfono Institucional / PBX:
                  </p>
                  <p className="text-base font-bold text-stone-900 mt-0.5">
                    {INSTITUTION_INFO.contacto.telefono}
                  </p>
                  <p className="text-xs text-stone-500">
                    Línea directa con Rectoría (Angie Valentina Carrillo) y Coordinación (Juliana Marcela Delgado).
                  </p>
                </div>

                <div className="pt-3 border-t border-stone-100">
                  <p className="text-xs uppercase tracking-wider text-stone-400 font-semibold">
                    Correos Electrónicos Oficiales:
                  </p>
                  <p className="text-sm font-medium text-[#5B3F8C] mt-0.5">
                    {INSTITUTION_INFO.contacto.emailPrincipal}
                  </p>
                  <p className="text-xs font-medium text-stone-600 mt-0.5">
                    {INSTITUTION_INFO.contacto.emailAcademico}
                  </p>
                </div>

                <div className="pt-3 border-t border-stone-100">
                  <p className="text-xs uppercase tracking-wider text-stone-400 font-semibold">
                    Horario de Atención Presencial:
                  </p>
                  <p className="text-xs font-medium text-stone-700 mt-0.5">
                    {INSTITUTION_INFO.contacto.atencionHorario}
                  </p>
                </div>
              </div>
            </div>

            {/* Sede Locations Summary */}
            <div className="p-6 rounded-2xl bg-white border border-stone-200">
              <h3 className="text-base font-serif font-bold text-stone-900 mb-3">
                Ubicación de Sedes en Quindío
              </h3>
              <ul className="space-y-3 text-xs text-stone-600">
                <li className="pb-2 border-b border-stone-100">
                  <strong className="text-stone-900 block">Sede Principal:</strong>
                  Sur de Armenia, Quindío. (Unidad Infantil y Básica Primaria).
                </li>
                <li className="pb-2 border-b border-stone-100">
                  <strong className="text-stone-900 block">Sede Rural Barcelona:</strong>
                  Corregimiento de Barcelona, Quindío. (Énfasis en Básica Primaria, 80 niños).
                </li>
                <li>
                  <strong className="text-stone-900 block">Sede Rural Río Verde:</strong>
                  Municipio de Buenavista / Río Verde, Quindío. (Multigrado Rural y Huertas).
                </li>
              </ul>
            </div>
          </div>

          {/* Right Column: Interactive Consultation Form */}
          <div className="lg:col-span-7">
            <div className="p-8 rounded-3xl bg-white border border-stone-200 shadow-xs">
              <h3 className="text-xl font-serif font-bold text-stone-900">
                Formulario de Consulta y Solicitud de Acogida
              </h3>
              <p className="text-xs text-stone-500 mt-1 mb-6">
                Envía tus datos y el equipo de Coordinación o Psicopedagogía te contactará telefónicamente.
              </p>

              {submitted ? (
                <div className="p-8 rounded-2xl bg-[#F4F0FA] border border-[#DDD0F0] text-center">
                  <div className="w-12 h-12 rounded-full bg-[#5B3F8C] text-white flex items-center justify-center mx-auto text-xl font-bold mb-3">
                    ✓
                  </div>
                  <h4 className="text-lg font-serif font-bold text-stone-900">
                    ¡Mensaje Recibido en Rectoría y Coordinación!
                  </h4>
                  <p className="mt-2 text-sm text-stone-700 max-w-md mx-auto">
                    Gracias, <strong>{formData.nombreAcudiente || 'familia'}</strong>. Nos comunicaremos al teléfono <strong>{formData.telefono || 'registrado'}</strong> para orientarte en la postulación de tu niño/a para la sede <strong>{formData.sedeInteres}</strong>.
                  </p>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="mt-6 px-4 py-2 text-xs font-semibold text-[#5B3F8C] hover:text-[#4A3273] transition-colors"
                  >
                    Enviar otra consulta
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4 text-xs">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-stone-700 font-semibold mb-1">
                        Nombre del Padre, Madre o Acudiente *
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.nombreAcudiente}
                        onChange={(e) => setFormData({ ...formData, nombreAcudiente: e.target.value })}
                        placeholder="Ej. María Esperanza Gómez"
                        className="w-full px-3.5 py-2.5 rounded-xl border border-stone-300 focus:outline-none focus:ring-1 focus:ring-[#5B3F8C] bg-white text-stone-900 text-sm"
                      />
                    </div>
                    <div>
                      <label className="block text-stone-700 font-semibold mb-1">
                        Teléfono / Celular de Contacto *
                      </label>
                      <input
                        type="tel"
                        required
                        value={formData.telefono}
                        onChange={(e) => setFormData({ ...formData, telefono: e.target.value })}
                        placeholder="Ej. 314 000 0000"
                        className="w-full px-3.5 py-2.5 rounded-xl border border-stone-300 focus:outline-none focus:ring-1 focus:ring-[#5B3F8C] bg-white text-stone-900 text-sm"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-stone-700 font-semibold mb-1">
                        Correo Electrónico (Opcional)
                      </label>
                      <input
                        type="email"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="ejemplo@correo.com"
                        className="w-full px-3.5 py-2.5 rounded-xl border border-stone-300 focus:outline-none focus:ring-1 focus:ring-[#5B3F8C] bg-white text-stone-900 text-sm"
                      />
                    </div>
                    <div>
                      <label className="block text-stone-700 font-semibold mb-1">
                        Sede de Mayor Conveniencia
                      </label>
                      <select
                        value={formData.sedeInteres}
                        onChange={(e) => setFormData({ ...formData, sedeInteres: e.target.value })}
                        className="w-full px-3.5 py-2.5 rounded-xl border border-stone-300 focus:outline-none focus:ring-1 focus:ring-[#5B3F8C] bg-white text-stone-900 text-sm"
                      >
                        <option value="Sede Principal (Sur de Armenia)">Sede Principal (Sur de Armenia)</option>
                        <option value="Sede Rural Barcelona (Quindío)">Sede Rural Barcelona (Quindío)</option>
                        <option value="Sede Rural Río Verde (Buenavista)">Sede Rural Río Verde (Buenavista)</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-stone-700 font-semibold mb-1">
                      Grado de Interés del Niño o Niña
                    </label>
                    <select
                      value={formData.gradoInteres}
                      onChange={(e) => setFormData({ ...formData, gradoInteres: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-xl border border-stone-300 focus:outline-none focus:ring-1 focus:ring-[#5B3F8C] bg-white text-stone-900 text-sm"
                    >
                      <option value="Pre-jardín (3 años)">Pre-jardín (3 años)</option>
                      <option value="Jardín (4 años)">Jardín (4 años)</option>
                      <option value="Transición (5 años)">Transición (5 años)</option>
                      <option value="1.º de Primaria">1.º de Primaria</option>
                      <option value="2.º de Primaria">2.º de Primaria</option>
                      <option value="3.º de Primaria">3.º de Primaria</option>
                      <option value="4.º de Primaria">4.º de Primaria</option>
                      <option value="5.º de Primaria">5.º de Primaria</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-stone-700 font-semibold mb-1">
                      Comentarios o Necesidad Pedagógica / Arteterapia Específica (Opcional)
                    </label>
                    <textarea
                      rows={3}
                      value={formData.mensaje}
                      onChange={(e) => setFormData({ ...formData, mensaje: e.target.value })}
                      placeholder="Menciona si el estudiante presenta dislexia, timidez, cambio de vereda o requiere acompañamiento socioemocional especial..."
                      className="w-full px-3.5 py-2.5 rounded-xl border border-stone-300 focus:outline-none focus:ring-1 focus:ring-[#5B3F8C] bg-white text-stone-900 text-sm"
                    />
                  </div>

                  <div className="pt-2">
                    <button
                      type="submit"
                      className="w-full py-3 px-6 text-sm font-semibold text-white bg-[#5B3F8C] hover:bg-[#4A3273] active:bg-[#3C2760] rounded-xl transition-colors shadow-sm"
                    >
                      Enviar Solicitud de Información Gratuita
                    </button>
                    <p className="text-[11px] text-stone-400 text-center mt-2">
                      Educación Pública Oficial garantizada. No se solicita ningún cobro por trámites ni formularios.
                    </p>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
