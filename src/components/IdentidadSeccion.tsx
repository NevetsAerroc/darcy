import React, { useState } from 'react';
import { IDENTIDAD } from '../data/institutionData';

export const IdentidadSeccion: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'mision' | 'vision' | 'filosofia'>('mision');

  return (
    <section id="identidad" className="py-16 lg:py-20 bg-white border-b border-stone-200">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        {/* Editorial Section Header */}
        <div className="max-w-3xl">
          <p className="text-xs uppercase tracking-widest text-[#5B3F8C] font-semibold">
            Identidad y Horizonte Formativo
          </p>
          <h2 className="mt-2 text-2xl sm:text-3xl lg:text-4xl font-serif font-bold text-stone-900 tracking-tight">
            Misión, Visión 2035 y Filosofía de Alas de Arte
          </h2>
          <p className="mt-4 text-base text-stone-600 leading-relaxed">
            Nacemos desde la convicción de que la escuela no puede ser una estructura rígida en medio del campo, sino una comunidad sensible que abraza la diversidad y despierta la capacidad transformadora de cada infancia.
          </p>
        </div>

        {/* 3 Pillars Layout */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Misión Card */}
          <div className="p-8 rounded-2xl bg-[#FAF8F5] border border-stone-200 flex flex-col justify-between">
            <div>
              <div className="w-10 h-10 rounded-lg bg-[#EAE3F7] flex items-center justify-center text-[#5B3F8C] font-serif font-bold text-lg mb-6">
                M
              </div>
              <h3 className="text-xl font-serif font-bold text-stone-900">Misión Institucional</h3>
              <p className="mt-4 text-sm text-stone-600 leading-relaxed">
                {IDENTIDAD.mision}
              </p>
            </div>
            <div className="mt-6 pt-4 border-t border-stone-200/80 text-xs text-[#5B3F8C] font-medium">
              Prejardín a 5.º · Arte, Danza, Teatro y Música
            </div>
          </div>

          {/* Visión Card */}
          <div className="p-8 rounded-2xl bg-[#FAF8F5] border border-stone-200 flex flex-col justify-between">
            <div>
              <div className="w-10 h-10 rounded-lg bg-[#EAE3F7] flex items-center justify-center text-[#5B3F8C] font-serif font-bold text-lg mb-6">
                V
              </div>
              <h3 className="text-xl font-serif font-bold text-stone-900">Visión (2035)</h3>
              <p className="mt-4 text-sm text-stone-600 leading-relaxed">
                {IDENTIDAD.vision}
              </p>
            </div>
            <div className="mt-6 pt-4 border-t border-stone-200/80 text-xs text-[#5B3F8C] font-medium">
              Horizonte 2035 · Espacio Seguro & Inclusión Pionera
            </div>
          </div>

          {/* Filosofía e Identidad Card */}
          <div className="p-8 rounded-2xl bg-[#F4F0FA] border border-[#E2DAF0] flex flex-col justify-between">
            <div>
              <div className="w-10 h-10 rounded-lg bg-[#5B3F8C] flex items-center justify-center text-white font-serif font-bold text-lg mb-6">
                F
              </div>
              <h3 className="text-xl font-serif font-bold text-stone-900">Filosofía e Identidad</h3>
              <p className="mt-4 text-sm text-stone-700 leading-relaxed">
                {IDENTIDAD.filosofia}
              </p>
            </div>
            <div className="mt-6 pt-4 border-t border-[#D7C9EC] text-xs font-semibold text-[#4C3270]">
              Transmutación · Calma · Sentido de Pertenencia
            </div>
          </div>
        </div>

        {/* Color Meaning Explanatory Bar */}
        <div className="mt-10 p-6 rounded-xl bg-stone-50 border border-stone-200 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="flex -space-x-1">
              <span className="w-6 h-6 rounded-full bg-[#8363B8] inline-block shadow-sm" title="Lila Institucional" />
              <span className="w-6 h-6 rounded-full bg-[#646A78] inline-block shadow-sm" title="Gris Institucional" />
            </div>
            <div className="text-xs text-stone-600">
              <strong className="text-stone-900">Simbología Cromática: </strong>
              <span className="text-[#5B3F8C] font-medium">Lila</span> representa la transmutación y la floración artística; <span className="text-stone-700 font-medium">Gris</span> simboliza la serenidad, la calma emocional y el refugio protector.
            </div>
          </div>
          <div className="text-xs text-stone-500 whitespace-nowrap">
            Valores: Empatía · Convivencia · Inclusión · Creatividad
          </div>
        </div>
      </div>
    </section>
  );
};
