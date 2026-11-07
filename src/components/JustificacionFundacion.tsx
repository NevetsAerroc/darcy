import React from 'react';
import { JUSTIFICACION_FUNDACION } from '../data/institutionData';

export const JustificacionFundacion: React.FC = () => {
  return (
    <section className="py-16 lg:py-20 bg-[#FAF8F5] border-b border-stone-200">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-start">
          {/* Left Column: Contextual Narrative */}
          <div className="lg:col-span-5">
            <p className="text-xs uppercase tracking-widest text-[#5B3F8C] font-semibold">
              Génesis y Sentido Social
            </p>
            <h2 className="mt-2 text-2xl sm:text-3xl lg:text-4xl font-serif font-bold text-stone-900 tracking-tight leading-snug">
              ¿Por qué nace Alas de Arte en el Quindío Rural?
            </h2>
            <div className="mt-6 text-base text-stone-700 leading-relaxed space-y-4">
              <p>
                {JUSTIFICACION_FUNDACION.sintesis}
              </p>
              <p className="text-stone-600">
                En las zonas rurales y periurbanas del Quindío, la infancia enfrenta a menudo silencios forzados: padres ausentes por temporadas de cosecha o migración económica, memorias de familias desplazadas por el conflicto armado y niños etiquetados como "con problemas de aprendizaje" en escuelas convencionales sin adaptaciones curriculares.
              </p>
            </div>

            {/* Quote Box without thick left bar (anti-slop clean border) */}
            <div className="mt-8 p-6 rounded-2xl bg-white border border-stone-200 shadow-xs">
              <p className="font-serif italic text-stone-800 text-sm leading-relaxed">
                "{JUSTIFICACION_FUNDACION.propositoCentral}"
              </p>
              <p className="mt-3 text-xs text-stone-500 uppercase tracking-wider font-medium">
                — Principio Fundacional Alas de Arte
              </p>
            </div>
          </div>

          {/* Right Column: 3 Complex Realities Addressed */}
          <div className="lg:col-span-7 space-y-5">
            <h3 className="text-lg font-serif font-bold text-stone-900 mb-2">
              Las tres realidades que transformamos en resiliencia
            </h3>

            {JUSTIFICACION_FUNDACION.realidadesAtendidas.map((item, idx) => (
              <div 
                key={idx}
                className="p-6 rounded-2xl bg-white border border-stone-200 hover:border-[#D0C0E8] transition-colors"
              >
                <div className="flex items-start gap-4">
                  <span className="flex-shrink-0 w-8 h-8 rounded-full bg-[#F4F0FA] text-[#5B3F8C] text-xs font-bold flex items-center justify-center tabular-nums">
                    0{idx + 1}
                  </span>
                  <div>
                    <h4 className="text-base font-bold text-stone-900">{item.titulo}</h4>
                    <p className="mt-2 text-sm text-stone-600 leading-relaxed">
                      {item.descripcion}
                    </p>
                  </div>
                </div>
              </div>
            ))}

            <div className="p-6 rounded-2xl bg-[#EFEAF6] border border-[#DDD0F0] text-stone-800 text-xs sm:text-sm flex items-center justify-between gap-4">
              <div>
                <strong className="text-[#4C3270] block sm:inline">El Arte como Derecho: </strong>
                <span>No formamos únicamente artistas de galería; formamos personas sanas, autónomas y en paz con su propia historia.</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
