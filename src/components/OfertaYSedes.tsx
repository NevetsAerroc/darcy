import React, { useState } from 'react';
import { SEDES_DATA } from '../data/institutionData';

interface OfertaYSedesProps {
  onSelectSede: (sedeNombre: string) => void;
}

export const OfertaYSedes: React.FC<OfertaYSedesProps> = ({ onSelectSede }) => {
  const [activeSedeId, setActiveSedeId] = useState<string>('sede-armenia');

  const selectedSede = SEDES_DATA.find(s => s.id === activeSedeId) || SEDES_DATA[0];

  return (
    <section id="sedes" className="py-16 lg:py-20 bg-[#FAF8F5] border-b border-stone-200">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="max-w-3xl">
          <p className="text-xs uppercase tracking-widest text-[#5B3F8C] font-semibold">
            Presencia Territorial y Grados Ofertados
          </p>
          <h2 className="mt-2 text-2xl sm:text-3xl lg:text-4xl font-serif font-bold text-stone-900 tracking-tight">
            Oferta Educativa y Sedes en el Quindío
          </h2>
          <p className="mt-4 text-base text-stone-600 leading-relaxed">
            Atendemos desde la <strong className="text-stone-900">Unidad Infantil</strong> (Pre-jardín, Jardín y Transición) hasta la <strong className="text-stone-900">Básica Primaria completa</strong> (1.º a 5.º), con una distribución estratégica entre el sur de Armenia y las veredas de la cordillera.
          </p>
        </div>

        {/* Levels Grid overview */}
        <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="p-6 rounded-2xl bg-white border border-stone-200">
            <span className="text-xs font-mono font-bold text-[#8363B8]">NIVEL 01</span>
            <h3 className="text-xl font-serif font-bold text-stone-900 mt-1">Unidad Infantil</h3>
            <p className="text-xs font-semibold text-[#5B3F8C] mt-0.5">Pre-jardín · Jardín · Transición (Edades: 3 a 5 años)</p>
            <p className="mt-3 text-sm text-stone-600 leading-relaxed">
              Enfoque en desarrollo sensoriomotriz, juego simbólico, expresión gestual, iniciación musical y contención afectiva. Cero exámenes memorísticos; evaluación descriptiva formativa.
            </p>
            <div className="mt-4 pt-3 border-t border-stone-100 text-xs text-stone-500">
              Cupos prioritarios en Sede Principal (Sur de Armenia) y Multigrado Rural Río Verde.
            </div>
          </div>

          <div className="p-6 rounded-2xl bg-white border border-stone-200">
            <span className="text-xs font-mono font-bold text-[#8363B8]">NIVEL 02</span>
            <h3 className="text-xl font-serif font-bold text-stone-900 mt-1">Básica Primaria</h3>
            <p className="text-xs font-semibold text-[#5B3F8C] mt-0.5">Primero a Quinto de Primaria (1.º a 5.º)</p>
            <p className="mt-3 text-sm text-stone-600 leading-relaxed">
              Desarrollo de pensamiento lógico-matemático contextualizado, comprensión lectora crítica a través de la literatura infantil y teatro, ciencias vivenciales en huertas y proyecto de ARTETERAPIA permanente.
            </p>
            <div className="mt-4 pt-3 border-t border-stone-100 text-xs text-stone-500">
              Ofertado en Sede Principal Armenia (50 niños), Sede Barcelona (80 niños) y Sede Río Verde.
            </div>
          </div>
        </div>

        {/* Campuses Detailed View with Tab Selector */}
        <div className="mt-14">
          <div className="flex items-center justify-between mb-6 flex-wrap gap-2">
            <h3 className="text-base font-serif font-bold text-stone-900">
              Nuestras 3 Sedes Oficiales en Quindío
            </h3>
            <span className="text-xs text-stone-500">Haz clic en cada sede para conocer sus instalaciones y cupos</span>
          </div>

          {/* Sede Buttons */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mb-8">
            {SEDES_DATA.map((sede) => {
              const isSelected = sede.id === activeSedeId;
              return (
                <button
                  key={sede.id}
                  onClick={() => setActiveSedeId(sede.id)}
                  className={`p-4 rounded-xl text-left transition-all border ${
                    isSelected
                      ? 'bg-white border-[#5B3F8C] shadow-sm ring-1 ring-[#5B3F8C]'
                      : 'bg-white/70 hover:bg-white border-stone-200 text-stone-700'
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-mono font-bold text-[#5B3F8C]">{sede.municipio}</span>
                    <span className="text-xs font-bold text-stone-900 tabular-nums">{sede.estudiantesTotal} cupos</span>
                  </div>
                  <p className="text-sm font-bold text-stone-900 mt-1">{sede.nombre}</p>
                </button>
              );
            })}
          </div>

          {/* Sede Detail Card */}
          <div className="p-8 rounded-3xl bg-white border border-stone-200 shadow-xs">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
              <div className="lg:col-span-5 flex flex-col justify-between">
                <div>
                  <span className="text-xs uppercase tracking-wider font-semibold text-[#5B3F8C]">
                    Ficha Técnica de Sede
                  </span>
                  <h4 className="text-2xl font-serif font-bold text-stone-900 mt-1">
                    {selectedSede.nombre}
                  </h4>
                  <p className="text-xs font-medium text-stone-500 mt-1">
                    {selectedSede.municipio} — <span className="text-stone-700">{selectedSede.ubicacion}</span>
                  </p>

                  <div className="mt-6 p-4 rounded-xl bg-[#F4F0FA] border border-[#E2DAF0]">
                    <p className="text-xs uppercase tracking-wider text-[#4C3270] font-semibold">
                      Capacidad y Distribución
                    </p>
                    <p className="text-sm font-bold text-stone-900 mt-0.5">
                      {selectedSede.detallesCupos}
                    </p>
                  </div>

                  <p className="mt-4 text-sm text-stone-600 leading-relaxed">
                    {selectedSede.descripcion}
                  </p>

                  <div className="mt-4">
                    <p className="text-xs font-semibold text-stone-400 uppercase tracking-wider">
                      Enfoque Pedagógico Específico:
                    </p>
                    <p className="text-xs sm:text-sm text-stone-800 font-medium mt-1">
                      {selectedSede.enfoque}
                    </p>
                  </div>
                </div>

                <div className="mt-6 pt-4 border-t border-stone-200 flex items-center justify-between">
                  <span className="text-xs text-stone-500">Educación Pública Gratuita</span>
                  <button
                    onClick={() => onSelectSede(selectedSede.nombre)}
                    className="px-4 py-2 text-xs font-semibold text-white bg-[#5B3F8C] hover:bg-[#4A3273] rounded-lg transition-colors"
                  >
                    Postular a esta Sede
                  </button>
                </div>
              </div>

              {/* Sede Image */}
              <div className="lg:col-span-7 rounded-2xl overflow-hidden bg-stone-100 min-h-[300px] border border-stone-200/80 relative">
                <img
                  src={selectedSede.imagen}
                  alt={`Instalaciones de la ${selectedSede.nombre} en Quindío`}
                  className="w-full h-full object-cover min-h-[320px]"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute bottom-3 left-3 right-3 p-3 rounded-xl bg-stone-900/80 backdrop-blur-xs text-white text-xs">
                  <p className="font-medium">{selectedSede.nombre} · Entorno pedagógico activo</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
