import React, { useState } from 'react';
import { REFERENTES_TEORICOS } from '../data/institutionData';

export const ModeloPedagogico: React.FC = () => {
  const [selectedTheorist, setSelectedTheorist] = useState<string>('ausubel');

  const current = REFERENTES_TEORICOS.find(t => t.id === selectedTheorist) || REFERENTES_TEORICOS[0];

  return (
    <section id="modelo-pedagogico" className="py-16 lg:py-20 bg-[#FAF8F5] border-b border-stone-200">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        {/* Header */}
        <div className="max-w-3xl">
          <p className="text-xs uppercase tracking-widest text-[#5B3F8C] font-semibold">
            Fundamentos Epistemológicos y Didácticos
          </p>
          <h2 className="mt-2 text-2xl sm:text-3xl lg:text-4xl font-serif font-bold text-stone-900 tracking-tight">
            Modelo y Método Pedagógico
          </h2>
          <p className="mt-4 text-base text-stone-600 leading-relaxed">
            Nuestro modelo integra las corrientes <strong className="text-stone-900">constructivista, social, humanista y artística</strong> mediante el aprendizaje significativo. El arte no es una pausa entre clases, sino la vía regia por la que se comprende la ciencia, el lenguaje, la matemática y la convivencia.
          </p>
        </div>

        {/* 4 Theoretical Pillars Interactive Explorer */}
        <div className="mt-12">
          <div className="flex items-center justify-between flex-wrap gap-3 mb-6">
            <h3 className="text-sm font-semibold uppercase tracking-wider text-stone-500">
              Referentes Teóricos Fundamentales (Haz clic para explorar su aplicación):
            </h3>
            <span className="text-xs text-stone-400">
              Didáctica activa y contextualizada
            </span>
          </div>

          {/* Interactive Theorist Tab Selector */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
            {REFERENTES_TEORICOS.map((t) => {
              const isActive = t.id === selectedTheorist;
              return (
                <button
                  key={t.id}
                  onClick={() => setSelectedTheorist(t.id)}
                  className={`p-4 rounded-xl text-left transition-all border ${
                    isActive
                      ? 'bg-white border-[#5B3F8C] shadow-sm ring-1 ring-[#5B3F8C]'
                      : 'bg-white/60 hover:bg-white border-stone-200 text-stone-700'
                  }`}
                >
                  <p className="text-xs text-[#5B3F8C] font-semibold">{t.corriente}</p>
                  <p className="text-base font-serif font-bold text-stone-900 mt-1">{t.autor}</p>
                  <p className="text-xs text-stone-500 mt-1 truncate">{t.conceptoClave}</p>
                </button>
              );
            })}
          </div>

          {/* Detailed Theorist Application View */}
          <div className="mt-6 p-8 rounded-2xl bg-white border border-stone-200 shadow-xs">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
              <div className="lg:col-span-5">
                <span className="text-xs font-semibold text-[#5B3F8C] uppercase tracking-wider">
                  Marco Conceptual
                </span>
                <h4 className="text-2xl font-serif font-bold text-stone-900 mt-1">
                  {current.autor}
                </h4>
                <p className="text-sm font-medium text-stone-700 mt-1">
                  {current.corriente} — <span className="text-stone-500 font-normal">{current.conceptoClave}</span>
                </p>

                <div className="mt-6 p-4 rounded-xl bg-[#FAF8F5] border border-stone-200">
                  <p className="text-xs uppercase tracking-wider text-stone-400 font-semibold mb-1">
                    Traducción al Contexto Rural
                  </p>
                  <p className="text-sm text-stone-700 leading-relaxed">
                    {current.aplicacionAlasDeArte}
                  </p>
                </div>
              </div>

              <div className="lg:col-span-7 flex flex-col justify-between h-full">
                <div>
                  <span className="text-xs font-semibold text-[#4C3270] uppercase tracking-wider">
                    Ejemplo Vivencial en las Sedes de Alas de Arte
                  </span>
                  <div className="mt-3 p-6 rounded-xl bg-[#F4F0FA] border border-[#E2DAF0]">
                    <p className="text-base font-serif italic text-stone-900 leading-relaxed">
                      "{current.ejemploPractico}"
                    </p>
                  </div>
                </div>

                <div className="mt-6 pt-4 border-t border-stone-200 flex items-center justify-between text-xs text-stone-500">
                  <span>Enfoque Constructivista & Humanista</span>
                  <span className="text-[#5B3F8C] font-medium">Validado en currículo escolar</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Constructivist Learning Cycle Flow */}
        <div className="mt-12 p-8 rounded-2xl bg-white border border-stone-200">
          <h3 className="text-lg font-serif font-bold text-stone-900 mb-4">
            Ciclo de Aprendizaje Significativo en el Aula Artística
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 text-sm">
            <div className="p-4 rounded-xl bg-[#FAF8F5] border border-stone-200">
              <span className="text-xs font-mono font-bold text-[#8363B8]">FASE 1</span>
              <h4 className="font-bold text-stone-900 mt-1">Sensibilización & Saberes Previos</h4>
              <p className="text-stone-600 text-xs mt-2 leading-relaxed">
                El docente parte de las anécdotas, el aroma a café, el entorno natural y las vivencias de la casa rural.
              </p>
            </div>
            <div className="p-4 rounded-xl bg-[#FAF8F5] border border-stone-200">
              <span className="text-xs font-mono font-bold text-[#8363B8]">FASE 2</span>
              <h4 className="font-bold text-stone-900 mt-1">Exploración Sensorial y Artística</h4>
              <p className="text-stone-600 text-xs mt-2 leading-relaxed">
                Manipulación de pigmentos, modelado de greda, instrumentos musicales o títeres para dar forma al concepto.
              </p>
            </div>
            <div className="p-4 rounded-xl bg-[#FAF8F5] border border-stone-200">
              <span className="text-xs font-mono font-bold text-[#8363B8]">FASE 3</span>
              <h4 className="font-bold text-stone-900 mt-1">Conceptualización & PIAR</h4>
              <p className="text-stone-600 text-xs mt-2 leading-relaxed">
                Formalización del aprendizaje con ajustes a cada ritmo cognitivo, garantizando que nadie quede rezagado.
              </p>
            </div>
            <div className="p-4 rounded-xl bg-[#FAF8F5] border border-stone-200">
              <span className="text-xs font-mono font-bold text-[#8363B8]">FASE 4</span>
              <h4 className="font-bold text-stone-900 mt-1">Devolución Comunitaria</h4>
              <p className="text-stone-600 text-xs mt-2 leading-relaxed">
                Murales, recitales de poesía o exposiciones donde la familia y la vereda admiran y celebran el logro.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
