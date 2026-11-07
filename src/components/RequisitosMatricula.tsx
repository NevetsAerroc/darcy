import React, { useState } from 'react';
import { MARCO_LEGAL_MATRICULA } from '../data/institutionData';

interface RequisitosMatriculaProps {
  onOpenModal: () => void;
}

export const RequisitosMatricula: React.FC<RequisitosMatriculaProps> = ({ onOpenModal }) => {
  const [checkedDocs, setCheckedDocs] = useState<Record<number, boolean>>({});

  const toggleDoc = (index: number) => {
    setCheckedDocs(prev => ({ ...prev, [index]: !prev[index] }));
  };

  const completedCount = Object.values(checkedDocs).filter(Boolean).length;
  const totalDocs = MARCO_LEGAL_MATRICULA.documentosRequeridos.length;

  return (
    <section id="matricula" className="py-16 lg:py-20 bg-white border-b border-stone-200">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="max-w-3xl">
          <p className="text-xs uppercase tracking-widest text-[#5B3F8C] font-semibold">
            Marco Normativo y Acceso Democrático
          </p>
          <h2 className="mt-2 text-2xl sm:text-3xl lg:text-4xl font-serif font-bold text-stone-900 tracking-tight">
            Requisitos Legales y Matrícula Oficial Gratuita
          </h2>
          <p className="mt-4 text-base text-stone-600 leading-relaxed">
            Como institución educativa pública oficial de Colombia, garantizamos el acceso universal, sin barreras económicas ni discriminación por condiciones de aprendizaje.
          </p>
        </div>

        {/* Legal Authority & Decree Cards */}
        <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="p-6 rounded-2xl bg-[#FAF8F5] border border-stone-200">
            <span className="text-xs font-mono font-bold text-[#8363B8]">NATURALEZA JURÍDICA</span>
            <h3 className="text-lg font-serif font-bold text-stone-900 mt-1">Institución Oficial Pública</h3>
            <p className="text-sm text-stone-600 mt-2 leading-relaxed">
              Gratuidad total en matrícula, derechos académicos, carné y certificados escolares según la Constitución Nacional de Colombia.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-[#FAF8F5] border border-stone-200">
            <span className="text-xs font-mono font-bold text-[#8363B8]">MARCO DE INCLUSIÓN</span>
            <h3 className="text-lg font-serif font-bold text-stone-900 mt-1">Decreto 1421 de 2017</h3>
            <p className="text-sm text-stone-600 mt-2 leading-relaxed">
              Garantiza la atención educativa a la población con discapacidad y barreras de aprendizaje mediante el Plan Individual de Ajustes Razonables (PIAR).
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-[#FAF8F5] border border-stone-200">
            <span className="text-xs font-mono font-bold text-[#8363B8]">AUTORIDADES COMPETENTES</span>
            <h3 className="text-lg font-serif font-bold text-stone-900 mt-1">Aprobación Oficial</h3>
            <p className="text-sm text-stone-600 mt-2 leading-relaxed">
              Avalada por la Secretaría de Educación Departamental del Quindío y la Secretaría de Educación Municipal de Armenia. Registro SIMAT oficial.
            </p>
          </div>
        </div>

        {/* 4 Steps of Enrollment */}
        <div className="mt-14">
          <h3 className="text-xl font-serif font-bold text-stone-900 mb-6">
            Paso a Paso del Proceso de Admisión y Acogida
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {MARCO_LEGAL_MATRICULA.pasosMatricula.map((paso) => (
              <div key={paso.paso} className="p-6 rounded-2xl bg-white border border-stone-200 relative">
                <span className="w-8 h-8 rounded-full bg-[#EAE3F7] text-[#5B3F8C] font-mono font-bold text-xs flex items-center justify-center mb-4">
                  0{paso.paso}
                </span>
                <h4 className="text-base font-bold text-stone-900">{paso.titulo}</h4>
                <p className="mt-2 text-xs text-stone-600 leading-relaxed">{paso.detalle}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Interactive Checklist for Parents and Guardians */}
        <div className="mt-14 p-8 rounded-3xl bg-[#FAF8F5] border border-stone-200">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
            <div>
              <h3 className="text-xl font-serif font-bold text-stone-900">
                Lista de Documentos Requeridos para Formalizar Matrícula
              </h3>
              <p className="text-xs text-stone-500 mt-1">
                Marca los documentos que tienes listos antes de acercarte a secretaría o diligenciar el formulario:
              </p>
            </div>
            <div className="flex items-center gap-3">
              <span className="text-xs font-semibold text-stone-700 tabular-nums">
                {completedCount} de {totalDocs} documentos listos
              </span>
              <button
                onClick={onOpenModal}
                className="px-4 py-2 text-xs font-semibold text-white bg-[#5B3F8C] hover:bg-[#4A3273] rounded-lg transition-colors whitespace-nowrap shadow-xs"
              >
                Iniciar Pre-registro
              </button>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {MARCO_LEGAL_MATRICULA.documentosRequeridos.map((item, idx) => {
              const isChecked = !!checkedDocs[idx];
              return (
                <div
                  key={idx}
                  onClick={() => toggleDoc(idx)}
                  className={`p-4 rounded-xl border cursor-pointer transition-all flex items-start gap-3.5 select-none ${
                    isChecked
                      ? 'bg-white border-[#5B3F8C] shadow-xs'
                      : 'bg-white/80 hover:bg-white border-stone-200'
                  }`}
                >
                  <input
                    type="checkbox"
                    checked={isChecked}
                    onChange={() => {}} // handled by parent onClick
                    className="mt-1 w-4 h-4 rounded text-[#5B3F8C] focus:ring-[#5B3F8C] cursor-pointer"
                  />
                  <div>
                    <p className={`text-xs sm:text-sm font-bold ${isChecked ? 'text-[#4C3270]' : 'text-stone-900'}`}>
                      {item.doc}
                    </p>
                    <p className="text-xs text-stone-500 mt-0.5 leading-relaxed">
                      {item.detalle}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>

          <div className="mt-6 p-4 rounded-xl bg-white border border-stone-200 text-xs text-stone-600 flex items-center justify-between">
            <span>Nota Importante: Ningún niño o niña puede ser rechazado por falta inmediata de documentación inicial. Se brinda acompañamiento para trámites de registro civil y afiliación.</span>
          </div>
        </div>
      </div>
    </section>
  );
};
