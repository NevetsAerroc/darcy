import React, { useState, useEffect } from 'react';

interface PreRegistroModalProps {
  isOpen: boolean;
  onClose: () => void;
  defaultSede?: string;
}

export const PreRegistroModal: React.FC<PreRegistroModalProps> = ({ isOpen, onClose, defaultSede }) => {
  const [formData, setFormData] = useState({
    nombreEstudiante: '',
    edad: '',
    grado: 'Transición',
    sede: defaultSede || 'Sede Principal (Sur de Armenia)',
    nombreAcudiente: '',
    telefono: '',
    municipioResidencia: 'Armenia',
    condicionEspecial: 'Ninguna conocida / Deseo valoración artística'
  });

  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    if (defaultSede) {
      setFormData(prev => ({ ...prev, sede: defaultSede }));
    }
  }, [defaultSede]);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const handleResetAndClose = () => {
    setSubmitted(false);
    onClose();
  };

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-stone-950/60 backdrop-blur-xs overflow-y-auto"
      role="dialog"
      aria-modal="true"
    >
      <div 
        className="relative w-full max-w-xl my-8 bg-white rounded-3xl p-6 sm:p-8 shadow-2xl border border-stone-200"
      >
        <button
          onClick={handleResetAndClose}
          className="absolute top-5 right-5 text-stone-400 hover:text-stone-700 w-8 h-8 flex items-center justify-center rounded-full hover:bg-stone-100 transition-colors text-lg"
          aria-label="Cerrar modal"
        >
          ✕
        </button>

        {submitted ? (
          <div className="text-center py-6">
            <div className="w-14 h-14 rounded-full bg-[#EAE3F7] text-[#5B3F8C] flex items-center justify-center mx-auto text-2xl font-bold mb-4">
              ✓
            </div>
            <h3 className="text-2xl font-serif font-bold text-stone-900">
              ¡Pre-registro Oficial Registrado!
            </h3>
            <p className="mt-3 text-sm text-stone-600 leading-relaxed max-w-md mx-auto">
              Hemos guardado la información de <strong>{formData.nombreEstudiante}</strong> para el grado <strong>{formData.grado}</strong> en la <strong>{formData.sede}</strong>.
            </p>
            <div className="mt-6 p-4 rounded-xl bg-[#FAF8F5] border border-stone-200 text-xs text-stone-600 text-left max-w-md mx-auto space-y-1.5">
              <p className="font-semibold text-stone-800">Próximos pasos:</p>
              <p>1. La coordinación te llamará al teléfono <strong>{formData.telefono}</strong> para coordinar la entrevista sensible.</p>
              <p>2. Participación en el taller vivencial de arte y acogida.</p>
              <p>3. Asignación de cupo oficial SIMAT (100% gratuito).</p>
            </div>
            <button
              onClick={handleResetAndClose}
              className="mt-6 px-6 py-2.5 text-xs font-semibold text-white bg-[#5B3F8C] hover:bg-[#4A3273] rounded-xl transition-colors"
            >
              Cerrar y Volver al Portal
            </button>
          </div>
        ) : (
          <div>
            <div className="mb-6">
              <span className="text-xs uppercase tracking-wider font-semibold text-[#5B3F8C]">
                Educación Pública Oficial Gratuita
              </span>
              <h3 className="text-2xl font-serif font-bold text-stone-900 mt-1">
                Solicitud de Cupo y Acogida Escolar
              </h3>
              <p className="text-xs text-stone-500 mt-1">
                Completa este formulario inicial para apartar cupo en la sede de tu preferencia.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4 text-xs">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-stone-700 font-semibold mb-1">
                    Nombre del Estudiante *
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.nombreEstudiante}
                    onChange={(e) => setFormData({ ...formData, nombreEstudiante: e.target.value })}
                    placeholder="Nombre completo"
                    className="w-full px-3 py-2 rounded-xl border border-stone-300 focus:outline-none focus:ring-1 focus:ring-[#5B3F8C] text-stone-900 text-sm"
                  />
                </div>
                <div>
                  <label className="block text-stone-700 font-semibold mb-1">
                    Edad del Niño/a (Años) *
                  </label>
                  <input
                    type="number"
                    required
                    min={3}
                    max={13}
                    value={formData.edad}
                    onChange={(e) => setFormData({ ...formData, edad: e.target.value })}
                    placeholder="Ej. 6"
                    className="w-full px-3 py-2 rounded-xl border border-stone-300 focus:outline-none focus:ring-1 focus:ring-[#5B3F8C] text-stone-900 text-sm"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-stone-700 font-semibold mb-1">
                    Grado Solicitado *
                  </label>
                  <select
                    value={formData.grado}
                    onChange={(e) => setFormData({ ...formData, grado: e.target.value })}
                    className="w-full px-3 py-2 rounded-xl border border-stone-300 focus:outline-none focus:ring-1 focus:ring-[#5B3F8C] text-stone-900 text-sm bg-white"
                  >
                    <option value="Pre-jardín">Pre-jardín (3 años)</option>
                    <option value="Jardín">Jardín (4 años)</option>
                    <option value="Transición">Transición (5 años)</option>
                    <option value="1.º de Primaria">1.º de Primaria</option>
                    <option value="2.º de Primaria">2.º de Primaria</option>
                    <option value="3.º de Primaria">3.º de Primaria</option>
                    <option value="4.º de Primaria">4.º de Primaria</option>
                    <option value="5.º de Primaria">5.º de Primaria</option>
                  </select>
                </div>

                <div>
                  <label className="block text-stone-700 font-semibold mb-1">
                    Sede Preferente *
                  </label>
                  <select
                    value={formData.sede}
                    onChange={(e) => setFormData({ ...formData, sede: e.target.value })}
                    className="w-full px-3 py-2 rounded-xl border border-stone-300 focus:outline-none focus:ring-1 focus:ring-[#5B3F8C] text-stone-900 text-sm bg-white"
                  >
                    <option value="Sede Principal (Sur de Armenia)">Sede Principal (Sur de Armenia)</option>
                    <option value="Sede Rural Barcelona (Quindío)">Sede Rural Barcelona (80 cupos)</option>
                    <option value="Sede Rural Río Verde (Buenavista)">Sede Rural Río Verde (Buenavista)</option>
                  </select>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-stone-700 font-semibold mb-1">
                    Nombre del Acudiente *
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.nombreAcudiente}
                    onChange={(e) => setFormData({ ...formData, nombreAcudiente: e.target.value })}
                    placeholder="Nombre y apellido"
                    className="w-full px-3 py-2 rounded-xl border border-stone-300 focus:outline-none focus:ring-1 focus:ring-[#5B3F8C] text-stone-900 text-sm"
                  />
                </div>
                <div>
                  <label className="block text-stone-700 font-semibold mb-1">
                    Teléfono Celular *
                  </label>
                  <input
                    type="tel"
                    required
                    value={formData.telefono}
                    onChange={(e) => setFormData({ ...formData, telefono: e.target.value })}
                    placeholder="310 000 0000"
                    className="w-full px-3 py-2 rounded-xl border border-stone-300 focus:outline-none focus:ring-1 focus:ring-[#5B3F8C] text-stone-900 text-sm"
                  />
                </div>
              </div>

              <div>
                <label className="block text-stone-700 font-semibold mb-1">
                  Atención Pedagógica Especial / PIAR (Opcional)
                </label>
                <select
                  value={formData.condicionEspecial}
                  onChange={(e) => setFormData({ ...formData, condicionEspecial: e.target.value })}
                  className="w-full px-3 py-2 rounded-xl border border-stone-300 focus:outline-none focus:ring-1 focus:ring-[#5B3F8C] text-stone-900 text-sm bg-white"
                >
                  <option value="Ninguna conocida / Deseo valoración artística">Ninguna conocida / Deseo valoración artística</option>
                  <option value="Sospecha o diagnóstico de Dislexia / Dificultad lectoescritura">Sospecha o diagnóstico de Dislexia / Dificultad lectoescritura</option>
                  <option value="TDAH / Inquietud motriz">TDAH / Inquietud motriz</option>
                  <option value="Acompañamiento socioemocional por migración o duelo">Acompañamiento socioemocional por migración o duelo</option>
                  <option value="Otra barrera para el aprendizaje">Otra barrera para el aprendizaje</option>
                </select>
              </div>

              <div className="pt-2 flex items-center justify-end gap-3">
                <button
                  type="button"
                  onClick={handleResetAndClose}
                  className="px-4 py-2.5 rounded-xl text-stone-600 hover:bg-stone-100 font-medium transition-colors"
                >
                  Cancelar
                </button>
                <button
                  type="submit"
                  className="px-6 py-2.5 rounded-xl bg-[#5B3F8C] hover:bg-[#4A3273] active:bg-[#3C2760] text-white font-semibold shadow-sm transition-colors"
                >
                  Confirmar Pre-registro Gratuito
                </button>
              </div>
            </form>
          </div>
        )}
      </div>
    </div>
  );
};
