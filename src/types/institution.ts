export interface SedeInfo {
  id: string;
  nombre: string;
  municipio: string;
  ubicacion: string;
  estudiantesTotal: number;
  gradosOfertados: string[];
  detallesCupos: string;
  descripcion: string;
  enfoque: string;
  imagen: string;
}

export interface DirectivoDocente {
  nombre: string;
  cargo: string;
  perfil: string;
  areaEspecialidad: string;
}

export interface ReferenteTeorico {
  id: string;
  autor: string;
  corriente: string;
  conceptoClave: string;
  aplicacionAlasDeArte: string;
  ejemploPractico: string;
}

export interface EjeArteterapia {
  disciplina: string;
  propositoTerapeutico: string;
  abordajeDislexia: string;
  actividadPedagogica: string;
}
