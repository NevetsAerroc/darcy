import React from 'react';

export const PoblacionAtendida: React.FC = () => {
  return (
    <section className="py-16 lg:py-20 bg-[#FAF8F5] border-b border-stone-200">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center">
          <div className="lg:col-span-6">
            <p className="text-xs uppercase tracking-widest text-[#5B3F8C] font-semibold">
              Inclusión y Realidad Territorial
            </p>
            <h2 className="mt-2 text-2xl sm:text-3xl lg:text-4xl font-serif font-bold text-stone-900 tracking-tight">
              Descripción de la Población y Atención en el Medio
            </h2>
            <p className="mt-4 text-base text-stone-600 leading-relaxed">
              Atendemos de manera activa a <strong className="text-stone-900">160+ estudiantes</strong> en un ecosistema que combina el perímetro sur de Armenia con los paisajes cafeteros y cordilleranos de Barcelona y Río Verde.
            </p>

            <div className="mt-6 space-y-4 text-sm text-stone-700">
              <div className="p-4 rounded-xl bg-white border border-stone-200">
                <h4 className="font-bold text-stone-900">Vulnerabilidad Socioemocional & Ausencia Parental</h4>
                <p className="text-stone-600 text-xs sm:text-sm mt-1 leading-relaxed">
                  Gran porcentaje de nuestros niños vive bajo el cuidado de abuelos o familiares extendidos debido a que los padres trabajan jornadas intensas en fincas o han migrado a ciudades intermedias. La escuela es su principal espacio de afecto, escucha y contención.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-white border border-stone-200">
                <h4 className="font-bold text-stone-900">Necesidades Educativas Especiales y Barreras de Aprendizaje</h4>
                <p className="text-stone-600 text-xs sm:text-sm mt-1 leading-relaxed">
                  Identificamos y acompañamos a estudiantes con dislexia, desfases lectoescritores, dificultades en lateralidad, hipersensibilidad sensorial y secuelas psicosociales del conflicto armado.
                </p>
              </div>
            </div>
          </div>

          <div className="lg:col-span-6">
            <div className="p-8 rounded-3xl bg-white border border-stone-200 shadow-xs">
              <h3 className="text-lg font-serif font-bold text-stone-900 mb-6">
                Indicadores de Cobertura y Enfoque Inclusivo
              </h3>

              <div className="space-y-6">
                <div>
                  <div className="flex justify-between text-xs font-semibold mb-1">
                    <span className="text-stone-700">Población Rural y Periurbana Atendida</span>
                    <span className="text-stone-900 tabular-nums">100% Gratuito</span>
                  </div>
                  <div className="w-full bg-stone-100 rounded-full h-2">
                    <div className="bg-[#5B3F8C] h-2 rounded-full w-full" />
                  </div>
                  <p className="text-[11px] text-stone-400 mt-1">160+ niños y niñas en Armenia, Barcelona y Buenavista/Río Verde</p>
                </div>

                <div>
                  <div className="flex justify-between text-xs font-semibold mb-1">
                    <span className="text-stone-700">Estudiantes con Acompañamiento PIAR y Arteterapia</span>
                    <span className="text-stone-900 tabular-nums">100% de la Matrícula</span>
                  </div>
                  <div className="w-full bg-stone-100 rounded-full h-2">
                    <div className="bg-[#8363B8] h-2 rounded-full w-full" />
                  </div>
                  <p className="text-[11px] text-stone-400 mt-1">El enfoque artístico e inclusivo cobija a la totalidad de la comunidad escolar</p>
                </div>

                <div>
                  <div className="flex justify-between text-xs font-semibold mb-1">
                    <span className="text-stone-700">Retención Escolar y Cero Deserción por Dificultades de Aprendizaje</span>
                    <span className="text-stone-900 tabular-nums">98.5% Éxito</span>
                  </div>
                  <div className="w-full bg-stone-100 rounded-full h-2">
                    <div className="bg-[#4C3270] h-2 rounded-full w-[98.5%]" />
                  </div>
                  <p className="text-[11px] text-stone-400 mt-1">El refugio pedagógico previene la deserción infantil en zonas rurales</p>
                </div>
              </div>

              <div className="mt-8 pt-6 border-t border-stone-100 text-xs text-stone-500 flex items-center justify-between">
                <span>Régimen Oficial Público</span>
                <span className="font-semibold text-[#5B3F8C]">Aprobación SED Quindío & Armenia</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
