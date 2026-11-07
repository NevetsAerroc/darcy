import React from 'react';
import { INSTITUTION_INFO } from '../data/institutionData';

interface HeroProps {
  onOpenMatricula: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenMatricula }) => {
  return (
    <section id="inicio" className="pt-8 pb-16 lg:py-16 border-b border-stone-200">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        {/* Unboxed editorial kicker */}
        <div className="flex items-center gap-2 text-xs md:text-sm font-medium text-stone-500 mb-4 tracking-wide">
          <span className="text-[#5B3F8C] font-semibold">Educación Pública Rural Oficial</span>
          <span aria-hidden="true">·</span>
          <span>Armenia & Cordillera del Quindío</span>
          <span aria-hidden="true">·</span>
          <span>Prejardín a 5.º de Primaria</span>
        </div>

        {/* 2-Column Split: Editorial presentation and focal documentary photograph */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-stretch">
          <div className="lg:col-span-7 flex flex-col justify-between">
            <div>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-serif font-bold text-stone-900 tracking-tight leading-[1.15] text-balance">
                Donde cada talento encuentra su forma de volar.
              </h1>
              
              <p className="mt-6 text-base sm:text-lg text-stone-600 leading-relaxed max-w-2xl">
                A través del aprendizaje significativo, social y artístico, construimos un refugio pedagógico donde el arte enseña a volar, sanar y convivir con dignidad en el campo del Quindío.
              </p>

              <div className="mt-6 p-4 rounded-xl bg-[#F4F0FA] border border-[#E2DAF0] text-stone-700 text-sm leading-relaxed">
                <span className="font-semibold text-[#4C3270]">Identidad Institucional: </span>
                Fundamentada en la <span className="text-[#4C3270] font-medium">transmutación, la calma y el sentido de pertenencia</span> (tonos distintivos lila y gris). Priorizamos la empatía, la inclusión de barreras de aprendizaje y el florecimiento socioemocional.
              </div>
            </div>

            <div className="mt-8 flex flex-wrap items-center gap-4 pt-4 border-t border-stone-200/80">
              <button
                onClick={onOpenMatricula}
                className="px-6 py-3 text-sm font-semibold text-white bg-[#5B3F8C] hover:bg-[#4A3273] active:bg-[#3C2760] rounded-lg transition-colors shadow-sm whitespace-nowrap"
              >
                Inscripción Gratuita 2026
              </button>
              <a
                href="#modelo-pedagogico"
                className="px-5 py-3 text-sm font-medium text-stone-700 hover:text-stone-950 hover:bg-stone-100 rounded-lg transition-colors whitespace-nowrap"
              >
                Conocer Modelo Pedagógico →
              </a>
              <a
                href="#arteterapia"
                className="px-5 py-3 text-sm font-medium text-[#5B3F8C] hover:bg-[#F4F0FA] rounded-lg transition-colors whitespace-nowrap"
              >
                Proyecto ARTETERAPIA
              </a>
            </div>
          </div>

          {/* Focal Image Container with clean fallback */}
          <div className="lg:col-span-5 flex flex-col">
            <div className="relative w-full h-80 sm:h-96 lg:h-full min-h-[340px] rounded-2xl overflow-hidden bg-stone-200 shadow-sm border border-stone-200/70">
              <img
                src="/src/assets/images/hero_alas_de_arte_1794007516359.jpg"
                alt="Niños y niñas de la Institución Educativa Alas de Arte pintando al aire libre en el paisaje cafetero del Quindío"
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-stone-950/70 via-stone-950/20 to-transparent pointer-events-none" />
              <div className="absolute bottom-4 left-4 right-4 text-white text-xs sm:text-sm font-medium">
                <p className="font-serif italic drop-shadow-sm">
                  "El arte no es un adorno; es el lenguaje con el que nuestros niños descubren su voz en el mundo."
                </p>
                <p className="text-[11px] text-stone-300 mt-1">
                  Talleres de pintura al aire libre · Paisaje Cultural Cafetero del Quindío
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Operational Utility Strip */}
        <div className="mt-12 pt-8 border-t border-stone-200 grid grid-cols-2 md:grid-cols-4 gap-6 text-stone-700">
          <div>
            <p className="text-xs uppercase tracking-wider text-stone-400 font-medium">Naturaleza Oficial</p>
            <p className="mt-1 text-base font-semibold text-stone-900">100% Gratuita</p>
            <p className="text-xs text-stone-500 mt-0.5">Educación Pública de Calidad</p>
          </div>
          <div>
            <p className="text-xs uppercase tracking-wider text-stone-400 font-medium">Población Activa</p>
            <p className="mt-1 text-base font-semibold text-stone-900 tabular-nums">160+ Estudiantes</p>
            <p className="text-xs text-stone-500 mt-0.5">Armenia, Barcelona y Río Verde</p>
          </div>
          <div>
            <p className="text-xs uppercase tracking-wider text-stone-400 font-medium">Inclusión Curricular</p>
            <p className="mt-1 text-base font-semibold text-stone-900">PIAR & DUA</p>
            <p className="text-xs text-stone-500 mt-0.5">Decreto 1421 / Barreras superadas</p>
          </div>
          <div>
            <p className="text-xs uppercase tracking-wider text-stone-400 font-medium">Proyecto Insignia</p>
            <p className="mt-1 text-base font-semibold text-[#5B3F8C]">ARTETERAPIA</p>
            <p className="text-xs text-stone-500 mt-0.5">Danza, teatro, música y plásticas</p>
          </div>
        </div>
      </div>
    </section>
  );
};
