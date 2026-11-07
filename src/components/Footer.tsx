import React from 'react';
import { INSTITUTION_INFO } from '../data/institutionData';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-stone-900 text-stone-300 py-16 border-t border-stone-800">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 lg:gap-12 pb-12 border-b border-stone-800">
          <div className="md:col-span-5">
            <a href="#inicio" className="text-xl font-serif font-bold text-white tracking-tight flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-[#B39CD0] inline-block" />
              <span>Institución Educativa Alas de Arte</span>
            </a>
            <p className="mt-1 text-xs text-[#B39CD0] font-medium">
              {INSTITUTION_INFO.subtitulo}
            </p>
            <p className="mt-4 text-xs text-stone-400 max-w-sm leading-relaxed">
              "{INSTITUTION_INFO.lemaPedagogico}"
            </p>
            <div className="mt-6 flex items-center gap-2 text-xs text-stone-400">
              <span className="w-3 h-3 rounded-full bg-[#8363B8]" />
              <span>Lila: Transmutación & Arte</span>
              <span aria-hidden="true" className="text-stone-600">·</span>
              <span className="w-3 h-3 rounded-full bg-stone-500" />
              <span>Gris: Calma & Pertenencia</span>
            </div>
          </div>

          <div className="md:col-span-3 text-xs space-y-3">
            <p className="uppercase tracking-wider font-semibold text-stone-200">
              Sedes en Quindío
            </p>
            <ul className="space-y-2 text-stone-400">
              <li>Sede Principal: Sur de Armenia (80 cupos)</li>
              <li>Sede Barcelona: Rural Cafetera (80 cupos)</li>
              <li>Sede Río Verde: Buenavista (Multigrado)</li>
            </ul>
            <p className="pt-2 text-stone-500">
              Aprobación Oficial SED Quindío & Armenia
            </p>
          </div>

          <div className="md:col-span-4 text-xs space-y-3">
            <p className="uppercase tracking-wider font-semibold text-stone-200">
              Contacto y Marco Legal
            </p>
            <p className="text-stone-400">
              Teléfono: <span className="text-stone-200">{INSTITUTION_INFO.contacto.telefono}</span>
            </p>
            <p className="text-stone-400">
              Rectoría: <span className="text-stone-200">{INSTITUTION_INFO.contacto.emailPrincipal}</span>
            </p>
            <p className="text-stone-400">
              Académico: <span className="text-stone-200">{INSTITUTION_INFO.contacto.emailAcademico}</span>
            </p>
            <p className="pt-2 text-stone-500">
              Decreto 1421 de 2017 (Inclusión y PIAR) · Gratuidad Oficial
            </p>
          </div>
        </div>

        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-stone-500 gap-4">
          <p>
            © {new Date().getFullYear()} Institución Educativa Alas de Arte. Todos los derechos reservados.
          </p>
          <div className="flex items-center gap-6">
            <a href="#identidad" className="hover:text-stone-300 transition-colors">Identidad</a>
            <a href="#modelo-pedagogico" className="hover:text-stone-300 transition-colors">Constructivismo</a>
            <a href="#arteterapia" className="hover:text-stone-300 transition-colors">Arteterapia</a>
            <a href="#matricula" className="hover:text-stone-300 transition-colors">Matrícula Gratuita</a>
          </div>
        </div>
      </div>
    </footer>
  );
};
