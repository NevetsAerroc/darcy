import React, { useState } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { IdentidadSeccion } from './components/IdentidadSeccion';
import { JustificacionFundacion } from './components/JustificacionFundacion';
import { PropositosObjetivos } from './components/PropositosObjetivos';
import { ModeloPedagogico } from './components/ModeloPedagogico';
import { ArteterapiaPiar } from './components/ArteterapiaPiar';
import { OfertaYSedes } from './components/OfertaYSedes';
import { TalentoHumano } from './components/TalentoHumano';
import { PoblacionAtendida } from './components/PoblacionAtendida';
import { RequisitosMatricula } from './components/RequisitosMatricula';
import { ContactoUbicacion } from './components/ContactoUbicacion';
import { Footer } from './components/Footer';
import { PreRegistroModal } from './components/PreRegistroModal';

export default function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedSedeForModal, setSelectedSedeForModal] = useState<string>('Sede Principal (Sur de Armenia)');

  const handleOpenModal = (sede?: string) => {
    if (sede) {
      setSelectedSedeForModal(sede);
    }
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#FAF8F5] text-stone-800 antialiased selection:bg-[#E2D9F3] selection:text-[#3B2865]">
      {/* 1. Encabezado institucional */}
      <Header onOpenMatricula={() => handleOpenModal()} />

      {/* Main Content Sections */}
      <main className="flex-1">
        {/* 1. Presentación & Hero */}
        <Hero onOpenMatricula={() => handleOpenModal()} />

        {/* 2. Identidad Institucional (Misión, Visión 2035, Filosofía) */}
        <IdentidadSeccion />

        {/* 3. Justificación de Fundación (Contexto Rural Quindío & Refugio) */}
        <JustificacionFundacion />

        {/* 4. Propósitos y Objetivos Institucionales */}
        <PropositosObjetivos />

        {/* 7. Modelo y Método Pedagógico (Constructivista, Ausubel, Bruner, Vygotsky, Gardner) */}
        <ModeloPedagogico />

        {/* 7 & 4. Proyecto Transversal ARTETERAPIA & Abordaje Multisensorial Dislexia */}
        <ArteterapiaPiar />

        {/* 5. Oferta Educativa y Sedes (Armenia, Barcelona, Río Verde) */}
        <OfertaYSedes onSelectSede={(sede) => handleOpenModal(sede)} />

        {/* 6. Talento Humano y Organización Administrativa */}
        <TalentoHumano />

        {/* 8. Descripción de la Población y Atención en el Medio */}
        <PoblacionAtendida />

        {/* 9. Requisitos Legales y Matrícula Oficial Gratuita */}
        <RequisitosMatricula onOpenModal={() => handleOpenModal()} />

        {/* 10. Contacto y Ubicación */}
        <ContactoUbicacion />
      </main>

      {/* Pie de Página Institucional */}
      <Footer />

      {/* Modal de Solicitud de Cupo y Acogida */}
      <PreRegistroModal 
        isOpen={isModalOpen} 
        onClose={handleCloseModal}
        defaultSede={selectedSedeForModal}
      />
    </div>
  );
}
