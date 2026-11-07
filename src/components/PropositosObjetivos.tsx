import React from 'react';
import { PROPOSITOS_OBJETIVOS } from '../data/institutionData';

export const PropositosObjetivos: React.FC = () => {
  return (
    <section className="py-16 lg:py-20 bg-white border-b border-stone-200">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="text-center max-w-3xl mx-auto">
          <p className="text-xs uppercase tracking-widest text-[#5B3F8C] font-semibold">
            Horizontes de Transformación
          </p>
          <h2 className="mt-2 text-2xl sm:text-3xl lg:text-4xl font-serif font-bold text-stone-900 tracking-tight">
            Propósitos y Objetivos Institucionales
          </h2>
          <p className="mt-4 text-base text-stone-600 leading-relaxed">
            Metas estratégicas que guían el día a día de nuestras maestras, directivas y familias en cada rincón escolar.
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {PROPOSITOS_OBJETIVOS.map((obj) => (
            <div
              key={obj.numero}
              className="p-6 rounded-2xl bg-[#FAF8F5] border border-stone-200 flex flex-col justify-between hover:shadow-sm hover:border-[#D0C0E8] transition-all"
            >
              <div>
                <span className="text-xs font-mono font-bold text-[#8363B8] tracking-widest block mb-4">
                  OBJETIVO {obj.numero}
                </span>
                <h3 className="text-lg font-serif font-bold text-stone-900 leading-snug">
                  {obj.titulo}
                </h3>
                <p className="mt-3 text-sm text-stone-600 leading-relaxed">
                  {obj.descripcion}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-stone-200/80 text-xs text-stone-500 flex items-center justify-between">
                <span>Eje de Calidad</span>
                <span className="text-[#5B3F8C] font-semibold">Vigente 2026</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
