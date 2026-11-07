import React, { useState } from 'react';
import { ARTETERAPIA_DETALLE } from '../data/institutionData';

export const ArteterapiaPiar: React.FC = () => {
  const [activeTab, setActiveTab] = useState<number>(0);

  return (
    <section id="arteterapia" className="py-16 lg:py-20 bg-white border-b border-stone-200">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        {/* Header */}
        <div className="max-w-3xl">
          <p className="text-xs uppercase tracking-widest text-[#5B3F8C] font-semibold">
            Proyecto Transversal Insignia
          </p>
          <h2 className="mt-2 text-2xl sm:text-3xl lg:text-4xl font-serif font-bold text-stone-900 tracking-tight">
            ARTETERAPIA y Tratamiento Integral de Barreras de Aprendizaje
          </h2>
          <p className="mt-4 text-base text-stone-600 leading-relaxed">
            En muchas instituciones, la dislexia o las dificultades de concentración son tratadas con señalamiento o tareas repetitivas punitivas. En <strong className="text-stone-900">Alas de Arte</strong>, convertimos la experiencia multisensorial en un puente neurológico y emocional para superar la frustración y afianzar la lectoescritura con alegría.
          </p>
        </div>

        {/* 2-Column Split: Visual Narrative & Pillars */}
        <div className="mt-12 grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-stretch">
          {/* Left Column: Documentary Images & Caption */}
          <div className="lg:col-span-5 flex flex-col justify-between">
            <div className="rounded-2xl overflow-hidden border border-stone-200 bg-stone-100 shadow-xs relative">
              <img
                src="/src/assets/images/arteterapia_quindio_1794007517940.jpg"
                alt="Sesión de arteterapia multisensorial con modelado de arcilla y acuarelas para niños con dislexia en Quindío"
                className="w-full h-72 sm:h-80 object-cover"
                referrerPolicy="no-referrer"
              />
              <div className="p-4 bg-white border-t border-stone-100 text-xs text-stone-600">
                <strong className="text-stone-900">Aula Sensorial Viva: </strong>
                Modelado en arcilla y texturas para la interiorización tridimensional de grafemas y fonemas.
              </div>
            </div>

            <div className="mt-6 p-6 rounded-2xl bg-[#F4F0FA] border border-[#E2DAF0]">
              <h4 className="text-base font-serif font-bold text-stone-900">
                El Abordaje Multisensorial de la Dislexia
              </h4>
              <p className="mt-2 text-xs sm:text-sm text-stone-700 leading-relaxed">
                Al activar simultáneamente la vía kinestésica (manos en el barro), la auditiva (ritmo de percusión y rimas cantadas) y la visual (contrastes cromáticos), los circuitos neurales de decodificación lectora se fortalecen sin generar el estrés del dictado tradicional.
              </p>
              <div className="mt-4 pt-3 border-t border-[#DDD0F0] flex items-center justify-between text-xs text-[#4C3270] font-medium">
                <span>Marco PIAR · Decreto 1421</span>
                <span>Inclusión Real 100%</span>
              </div>
            </div>
          </div>

          {/* Right Column: 4 Therapeutic Modalities Tabs */}
          <div className="lg:col-span-7 flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="text-xs uppercase tracking-wider text-stone-500 font-semibold">
                  Disciplinas Terapéuticas Artísticas
                </span>
                <span className="text-xs text-[#5B3F8C]">Selecciona una técnica:</span>
              </div>

              {/* Segmented discipline buttons */}
              <div className="grid grid-cols-2 gap-2 mb-6">
                {ARTETERAPIA_DETALLE.map((item, idx) => (
                  <button
                    key={idx}
                    onClick={() => setActiveTab(idx)}
                    className={`p-3 text-left rounded-xl text-xs font-medium transition-all border ${
                      activeTab === idx
                        ? 'bg-[#5B3F8C] text-white border-[#5B3F8C] shadow-sm'
                        : 'bg-stone-50 hover:bg-stone-100 text-stone-700 border-stone-200'
                    }`}
                  >
                    <span className="block font-bold text-xs truncate">{item.disciplina}</span>
                  </button>
                ))}
              </div>

              {/* Active Tab Card Content */}
              {ARTETERAPIA_DETALLE[activeTab] && (
                <div className="p-6 sm:p-8 rounded-2xl bg-[#FAF8F5] border border-stone-200">
                  <span className="text-xs font-semibold text-[#5B3F8C] uppercase tracking-wider">
                    Estrategia Pedagógica #{activeTab + 1}
                  </span>
                  <h3 className="text-xl font-serif font-bold text-stone-900 mt-1">
                    {ARTETERAPIA_DETALLE[activeTab].disciplina}
                  </h3>

                  <div className="mt-6 space-y-4 text-sm">
                    <div>
                      <p className="text-xs uppercase tracking-wider font-semibold text-stone-400">
                        Propósito Socioemocional y Terapéutico
                      </p>
                      <p className="mt-1 text-stone-700 leading-relaxed">
                        {ARTETERAPIA_DETALLE[activeTab].propositoTerapeutico}
                      </p>
                    </div>

                    <div className="p-4 rounded-xl bg-white border border-stone-200">
                      <p className="text-xs uppercase tracking-wider font-semibold text-[#5B3F8C]">
                        Impacto Específico en Dislexia y Lectoescritura
                      </p>
                      <p className="mt-1 text-stone-800 leading-relaxed font-medium">
                        {ARTETERAPIA_DETALLE[activeTab].abordajeDislexia}
                      </p>
                    </div>

                    <div>
                      <p className="text-xs uppercase tracking-wider font-semibold text-stone-400">
                        Actividad Aplicada en Nuestras Sedes
                      </p>
                      <p className="mt-1 text-stone-700 font-serif italic">
                        "{ARTETERAPIA_DETALLE[activeTab].actividadPedagogica}"
                      </p>
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* PIAR Assurance Badge */}
            <div className="mt-6 p-4 rounded-xl bg-stone-50 border border-stone-200 flex items-center justify-between text-xs text-stone-600">
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-[#5B3F8C]" />
                <span>Cada estudiante cuenta con seguimiento individualizado y bitácora artística.</span>
              </div>
              <span className="font-semibold text-stone-900 hidden sm:inline">Sin costo adicional</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
