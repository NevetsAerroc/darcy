import React from 'react';
import { DIRECTIVOS_DOCENTES, EQUIPO_DOCENTE_RESUMEN } from '../data/institutionData';

export const TalentoHumano: React.FC = () => {
  return (
    <section className="py-16 lg:py-20 bg-white border-b border-stone-200">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="max-w-3xl">
          <p className="text-xs uppercase tracking-widest text-[#5B3F8C] font-semibold">
            Liderazgo y Comunidad de Formadores
          </p>
          <h2 className="mt-2 text-2xl sm:text-3xl lg:text-4xl font-serif font-bold text-stone-900 tracking-tight">
            Talento Humano y Organización Administrativa
          </h2>
          <p className="mt-4 text-base text-stone-600 leading-relaxed">
            Un equipo directivo y docente comprometido con la dignidad de la educación pública rural, la ética del cuidado y la innovación artística aplicada.
          </p>
        </div>

        {/* Executive Directives Cards */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-8">
          {DIRECTIVOS_DOCENTES.map((directivo, idx) => (
            <div
              key={idx}
              className="p-8 rounded-2xl bg-[#FAF8F5] border border-stone-200 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between">
                  <span className="text-xs uppercase tracking-wider font-semibold text-[#5B3F8C]">
                    Dirección Institucional
                  </span>
                  <span className="text-xs font-mono text-stone-400">Oficial Quindío</span>
                </div>
                <h3 className="text-2xl font-serif font-bold text-stone-900 mt-2">
                  {directivo.nombre}
                </h3>
                <p className="text-sm font-semibold text-[#4C3270] mt-1">
                  {directivo.cargo}
                </p>
                <p className="mt-4 text-sm text-stone-600 leading-relaxed">
                  {directivo.perfil}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-stone-200/80">
                <p className="text-xs uppercase tracking-wider text-stone-400 font-semibold">
                  Especialidad Principal:
                </p>
                <p className="text-xs font-medium text-stone-800 mt-1">
                  {directivo.areaEspecialidad}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* 8 Specialized Teachers Overview */}
        <div className="mt-12 p-8 rounded-3xl bg-[#F4F0FA] border border-[#E2DAF0]">
          <div className="max-w-3xl">
            <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#4C3270]">
              <span>Cuerpo Pedagógico</span>
              <span>·</span>
              <span className="tabular-nums font-mono">{EQUIPO_DOCENTE_RESUMEN.totalDocentes} Docentes Especializados</span>
            </div>
            <h3 className="text-xl font-serif font-bold text-stone-900 mt-2">
              Perfil del Personal Docente
            </h3>
            <p className="mt-3 text-sm text-stone-700 leading-relaxed">
              {EQUIPO_DOCENTE_RESUMEN.perfilDocente}
            </p>
          </div>

          <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {EQUIPO_DOCENTE_RESUMEN.especialidades.map((esp, i) => (
              <div
                key={i}
                className="p-4 rounded-xl bg-white border border-[#DDD0F0] text-xs"
              >
                <p className="font-bold text-stone-900 leading-snug">{esp.area}</p>
                <p className="text-stone-600 mt-1.5 leading-relaxed">{esp.aplicacion}</p>
              </div>
            ))}
          </div>

          <div className="mt-6 pt-4 border-t border-[#DDD0F0] text-xs text-stone-600 flex flex-wrap items-center justify-between gap-2">
            <span>Formación continua en Diseño Universal para el Aprendizaje (DUA)</span>
            <span className="font-semibold text-[#4C3270]">Acompañamiento Psicosocial Activo</span>
          </div>
        </div>
      </div>
    </section>
  );
};
