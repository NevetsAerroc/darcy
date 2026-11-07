import React from 'react';

interface HeaderProps {
  onOpenMatricula: () => void;
}

export const Header: React.FC<HeaderProps> = ({ onOpenMatricula }) => {
  return (
    <header className="sticky top-0 z-40 bg-[#FAF8F5]/95 backdrop-blur-md border-b border-stone-200/80 transition-all">
      <div className="max-w-7xl mx-auto flex items-center justify-between gap-8 px-6 lg:px-12 py-4">
        {/* Zone 1: Single text element wordmark */}
        <a 
          href="#inicio" 
          className="text-lg lg:text-xl font-serif font-bold tracking-tight text-stone-900 hover:text-[#5B3F8C] transition-colors whitespace-nowrap shrink-0 flex items-center gap-2.5"
        >
          <span className="w-2.5 h-2.5 rounded-full bg-[#8363B8] inline-block shrink-0" aria-hidden="true" />
          <span>I.E. Alas de Arte</span>
        </a>

        {/* Zone 2: 4-5 concise single-line text navigation links */}
        <nav className="hidden md:flex items-center gap-7 text-sm font-medium text-stone-600">
          <a href="#identidad" className="hover:text-stone-900 transition-colors whitespace-nowrap shrink-0">
            Identidad
          </a>
          <a href="#modelo-pedagogico" className="hover:text-stone-900 transition-colors whitespace-nowrap shrink-0">
            Modelo Pedagógico
          </a>
          <a href="#arteterapia" className="hover:text-stone-900 transition-colors whitespace-nowrap shrink-0">
            Arteterapia & PIAR
          </a>
          <a href="#sedes" className="hover:text-stone-900 transition-colors whitespace-nowrap shrink-0">
            Oferta y Sedes
          </a>
          <a href="#matricula" className="hover:text-stone-900 transition-colors whitespace-nowrap shrink-0">
            Matrícula Oficial
          </a>
          <a href="#contacto" className="hover:text-stone-900 transition-colors whitespace-nowrap shrink-0">
            Contacto
          </a>
        </nav>

        {/* Zone 3: 1 primary action */}
        <div className="flex items-center gap-3 shrink-0">
          <button
            onClick={onOpenMatricula}
            className="px-4 py-2 text-xs font-semibold text-white bg-[#5B3F8C] hover:bg-[#4A3273] active:bg-[#3C2760] rounded-lg transition-colors shadow-sm whitespace-nowrap shrink-0"
          >
            Solicitar Cupo Gratuito
          </button>
        </div>
      </div>
    </header>
  );
};
