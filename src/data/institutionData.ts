import { SedeInfo, DirectivoDocente, ReferenteTeorico, EjeArteterapia } from '../types/institution';

export const INSTITUTION_INFO = {
  nombre: "Institución Educativa Alas de Arte",
  subtitulo: "Educación pública rural de calidad",
  lemaPrincipal: "Donde cada talento encuentra su forma de volar",
  lemaPedagogico: "A través del aprendizaje significativo, social y artístico, construimos un refugio donde el arte enseña a volar.",
  naturaleza: "Institución Educativa Oficial (Pública)",
  caracter: "Gratuita - Sector Oficial",
  coberturaTotal: "160+ estudiantes activos",
  niveles: "Unidad Infantil (Pre-jardín, Jardín, Transición) y Básica Primaria (1.º a 5.º)",
  coloresIdentidad: {
    lila: "Transmutación, sensibilidad artística y florecimiento",
    gris: "Calma, serenidad, templanza y refugio seguro"
  },
  contacto: {
    telefono: "(606) 7359300",
    emailPrincipal: "contacto@alasdearte.edu.co",
    emailAcademico: "rlbustamante@uniquindio.edu.co",
    atencionHorario: "Lunes a Viernes: 7:00 a.m. a 3:00 p.m."
  }
};

export const IDENTIDAD = {
  mision: "Brindar una educación integral, inclusiva y sensible a niños y niñas desde prejardín hasta quinto de primaria. A través del arte, la danza, el teatro y la música, busca fortalecer el desarrollo emocional, social, cognitivo y comunicativo, promoviendo espacios seguros para superar barreras de aprendizaje.",
  vision: "Para el año 2035, ser reconocidos como una institución educativa inclusiva e innovadora que utiliza el arte como herramienta para transformar vidas y favorecer el desarrollo integral, siendo un espacio seguro frente a situaciones de vulnerabilidad.",
  filosofia: "Educación basada en la transmutación, la calma y el sentido de pertenencia (tonos distintivos lila y gris). Prioriza la empatía, convivencia, inclusión, creatividad y arte como ejes vertebradores de toda experiencia formativa."
};

export const JUSTIFICACION_FUNDACION = {
  titulo: "Un Refugio Pedagógico para el Quindío Rural",
  sintesis: "El colegio se fundó para dar respuesta a realidades complejas del sector rural del Quindío: ausencia parental por trabajo o migración, afectación por el conflicto armado y presencia de barreras para el aprendizaje.",
  propositoCentral: "Constituirse en un refugio pedagógico donde el arte actúe como motor de resiliencia y vehículo para la inclusión socioemocional, transformando la vulnerabilidad en potencial creativo.",
  realidadesAtendidas: [
    {
      titulo: "Ausencia Parental por Jornadas Rurales o Migración",
      descripcion: "Hogares donde cuidadores o abuelos asumen la crianza mientras los padres laboran extensas jornadas en faenas cafeteras o han migrado en busca de sustento. La escuela actúa como segundo hogar afectivo."
    },
    {
      titulo: "Secuelas del Conflicto y Vulnerabilidad Territorial",
      descripcion: "Territorios que han transitado tensiones sociales y requieren espacios de paz donde la palabra, el juego y la expresión sanen memorias y restauren el tejido comunitario."
    },
    {
      titulo: "Barreras para el Aprendizaje y la Participación",
      descripcion: "Diagnósticos de dislexia, TDAH y ritmos diversos que antes generaban deserción o frustración, hoy son acogidos mediante adaptaciones curriculares y estimulación multisensorial."
    }
  ]
};

export const PROPOSITOS_OBJETIVOS = [
  {
    numero: "01",
    titulo: "Modelo Pedagógico Artístico e Inclusivo",
    descripcion: "Implementar un modelo donde el arte, la música, la danza y el teatro sean metodologías transversales de cognición y no asignaturas aisladas."
  },
  {
    numero: "02",
    titulo: "Cualificación Docente Permanente",
    descripcion: "Capacitar continuamente al equipo docente en expresiones artísticas (danza, teatro, música, literatura, artes plásticas) como herramientas pedagógicas transformadoras."
  },
  {
    numero: "03",
    titulo: "Estrategias Adaptadas y PIAR Real",
    descripcion: "Diseñar planes individuales de ajustes razonables (PIAR) para responder a las necesidades socioemocionales, cognitivas y físicas de cada niño y niña según el Decreto 1421."
  },
  {
    numero: "04",
    titulo: "Convivencia Pacífica y ARTETERAPIA",
    descripcion: "Fomentar la resolución empática de conflictos, la autorregulación emocional y el arraigo comunitario a través del proyecto transversal de ARTETERAPIA."
  }
];

export const SEDES_DATA: SedeInfo[] = [
  {
    id: "sede-armenia",
    nombre: "Sede Principal (Sur de Armenia)",
    municipio: "Armenia, Quindío",
    ubicacion: "Comuna del Sur, entorno urbano-rural articulado a huertas pedagógicas",
    estudiantesTotal: 80,
    gradosOfertados: ["Pre-jardín", "Jardín", "Transición", "1.º Primaria", "2.º Primaria", "3.º Primaria", "4.º Primaria", "5.º Primaria"],
    detallesCupos: "50 cupos en Básica Primaria + 30 cupos en Unidad Infantil",
    descripcion: "Nodo central administrativo y articulador del modelo. Cuenta con taller central de plásticas, aula lúdica sensorial y sala de expresión corporal.",
    enfoque: "Atención a primera infancia y transición armónica hacia la básica primaria con énfasis en estimulación sensorial.",
    imagen: "/src/assets/images/hero_alas_de_arte_1794007516359.jpg"
  },
  {
    id: "sede-barcelona",
    nombre: "Sede Rural Barcelona",
    municipio: "Corregimiento de Barcelona, Quindío",
    ubicacion: "Entorno rural cafetero, fácil acceso para veredas aledañas",
    estudiantesTotal: 80,
    gradosOfertados: ["1.º Primaria", "2.º Primaria", "3.º Primaria", "4.º Primaria", "5.º Primaria"],
    detallesCupos: "Énfasis especializado en básica primaria con 80 niños matriculados",
    descripcion: "Corazón rural de la institución con amplias zonas verdes, corredor pedagógico al aire libre y huerto etnobotánico para la articulación artística y ambiental.",
    enfoque: "Fortalecimiento de habilidades de lectoescritura, cálculo vivencial y arteterapia vinculada a la cultura campesina y cafetera.",
    imagen: "/src/assets/images/sede_rural_quindio_1794007518054.jpg"
  },
  {
    id: "sede-rioverde",
    nombre: "Sede Rural Río Verde",
    municipio: "Municipio de Buenavista / Río Verde, Quindío",
    ubicacion: "Zona de cordillera y piedemonte, cuenca de Río Verde",
    estudiantesTotal: 25,
    gradosOfertados: ["Multigrado Infantil y Básica Primaria Rural"],
    detallesCupos: "Grupos multigrado de atención personalizada y cercana",
    descripcion: "Espacio de pedagogía comunitaria de montaña donde el sonido del río y el bosque alimentan la creación poética y el teatro de títeres.",
    enfoque: "Resguardo biocultural, música autóctona y apoyo prioritario a familias campesinas recolectoras.",
    imagen: "/src/assets/images/expresion_artistica_ninos_1794007517357.jpg"
  }
];

export const DIRECTIVOS_DOCENTES: DirectivoDocente[] = [
  {
    nombre: "Angie Valentina Carrillo Estupiñán",
    cargo: "Rectoría Institucional",
    perfil: "Líder pedagógica con profunda vocación por la educación pública rural inclusiva, la gestión comunitaria y el liderazgo transformador.",
    areaEspecialidad: "Gestión Directiva, Política Pública Inclusiva y Redes Territoriales"
  },
  {
    nombre: "Juliana Marcela Delgado Sosa",
    cargo: "Coordinación Pedagógica y de Convivencia",
    perfil: "Especialista en mediación pedagógica, seguimiento curricular constructivista y articulación del bienestar socioemocional estudiantil.",
    areaEspecialidad: "Coordinación Curricular, Arteterapia y Clima Escolar"
  }
];

export const EQUIPO_DOCENTE_RESUMEN = {
  totalDocentes: 8,
  perfilDocente: "Profesionales sensibles a la diversidad, altamente capacitados en pedagogías activas, mediación artística, diseño e implementación de PIAR (Planes Individuales de Ajustes Razonables) y contención socioemocional.",
  especialidades: [
    { area: "Artes Plásticas y Modelado Sensorial", aplicacion: "Estimulación motriz fina, modelado en arcilla y pintura táctil" },
    { area: "Música y Ritmo Corporal", aplicacion: "Procesamiento fonológico, lateralidad y armonización auditiva" },
    { area: "Teatro, Títeres y Dramatización", aplicacion: "Resolución de conflictos, expresión de emociones y lenguaje oral" },
    { area: "Danza y Movimiento Consciente", aplicacion: "Conciencia espacial, equilibrio, relajación y esquema corporal" },
    { area: "Literatura Infantil y Poética Oral", aplicacion: "Desarrollo del pensamiento metafórico y lectoescritura significativa" },
    { area: "Educación Especial y PIAR", aplicacion: "Ajustes razonables para dislexia, TDAH y neurodiversidad" },
    { area: "Ciencias Naturales y Agroarte", aplicacion: "Huertas pedagógicas, pigmentos naturales y botánica creativa" },
    { area: "Matemáticas Vivenciales y Geometría Creativa", aplicacion: "Mandalas, proporciones visuales y pensamiento lógico lúdico" }
  ]
};

export const REFERENTES_TEORICOS: ReferenteTeorico[] = [
  {
    id: "ausubel",
    autor: "David Ausubel",
    corriente: "Aprendizaje Significativo",
    conceptoClave: "Anclaje en saberes previos y contexto rural",
    aplicacionAlasDeArte: "Los conceptos no se memorizan mecánicamente; se conectan con la vivencia del campo, las plantas, los animales y las tradiciones familiares.",
    ejemploPractico: "Aprender fracciones y sumas repartiendo semillas de café o calculando proporciones en la mezcla de colores para un mural."
  },
  {
    id: "bruner",
    autor: "Jerome Bruner",
    corriente: "Aprendizaje por Descubrimiento",
    conceptoClave: "Exploración activa y andamiaje pedagógico",
    aplicacionAlasDeArte: "El estudiante es protagonista activo que experimenta con materiales, texturas y sonidos antes de formalizar la teoría.",
    ejemploPractico: "Descubrir la física del sonido tocando tubos de bambú y cuerdas de guitarra construidas artesanalmente en el aula."
  },
  {
    id: "vygotsky",
    autor: "Lev Vygotsky",
    corriente: "Constructivismo Social",
    conceptoClave: "Zona de Desarrollo Próximo e Interacción Comunitaria",
    aplicacionAlasDeArte: "El aprendizaje ocurre en colaboración recíproca con compañeros, docentes y abuelos de la comunidad campesina.",
    ejemploPractico: "Montajes teatrales colectivos donde los niños mayores orientan a los más pequeños en la expresión gestual y la dramaturgia."
  },
  {
    id: "gardner",
    autor: "Howard Gardner",
    corriente: "Inteligencias Múltiples",
    conceptoClave: "El arte como vehículo integral de desarrollo",
    aplicacionAlasDeArte: "Cada mente es única. Se potencian de manera prioritaria las inteligencias espacial, musical, corporal-cinestésica e interpersonal.",
    ejemploPractico: "Un niño que presenta dificultad en el trazo alfabético tradicional consolida su confianza y lectoescritura a través del ritmo sonoro y la escultura."
  }
];

export const ARTETERAPIA_DETALLE: EjeArteterapia[] = [
  {
    disciplina: "Modelado en Arcilla y Texturas Táctiles",
    propositoTerapeutico: "Canalización de ansiedad, regulación del sistema nervioso y descarga emocional segura.",
    abordajeDislexia: "Fortalecimiento de la memoria propioceptiva y grafomotriz tridimensional: moldear letras con arcilla ayuda a fijar orientación espacial y superar confusiones b/d y p/q.",
    actividadPedagogica: "Taller 'Las Letras de la Tierra' con barro traído de las riveras de la vereda."
  },
  {
    disciplina: "Ritmopercepción y Canto Comunitario",
    propositoTerapeutico: "Generar estados de calma, pertenencia colectiva y sintonía vincular.",
    abordajeDislexia: "Entrenamiento de la discriminación fonológica, segmentación silábica y cadencia del habla a través de percusión y rondas tradicionales.",
    actividadPedagogica: "Círculo sonoro matutino con maracas artesanales y versos campesinos rítmicos."
  },
  {
    disciplina: "Pintura Expresiva y Acuarelas Orgánicas",
    propositoTerapeutico: "Simbolización de emociones no verbalizadas (duelos por migración, temores o ausencias familiares).",
    abordajeDislexia: "Desarrollo de la orientación visuoespacial, seguimiento de trayectorias izquierda-derecha y coordinación oculomanual.",
    actividadPedagogica: "Elaboración de cartografías emocionales con tintes de achiote, café y remolacha."
  },
  {
    disciplina: "Teatro del Abrazo y Dramatización",
    propositoTerapeutico: "Construcción de empatía, superación de la timidez y resolución dialogada de desacuerdos cotidianos.",
    abordajeDislexia: "Fortalecimiento de la expresión verbal, vocabulario enriquecido y desculpabilización del error lector.",
    actividadPedagogica: "Puesta en escena de cuentos populares donde cada estudiante asume un rol protagónico seguro."
  }
];

export const MARCO_LEGAL_MATRICULA = {
  naturaleza: "Institución Educativa Oficial (Pública)",
  gratuidad: "100% Gratuita (Sin cobro de matrícula, mensualidad o derechos académicos)",
  marcoInclusivo: "Decreto 1421 de 2017 de Inclusión Educativa - Ministerio de Educación Nacional de Colombia",
  avalAutoridades: [
    "Secretaría de Educación Departamental del Quindío",
    "Secretaría de Educación Municipal de Armenia"
  ],
  herramientaCentral: "Plan Individual de Ajustes Razonables (PIAR) y Diseño Universal para el Aprendizaje (DUA)",
  documentosRequeridos: [
    { doc: "Documento de identidad del estudiante", detalle: "Registro civil de nacimiento o tarjeta de identidad (según la edad)." },
    { doc: "Documento de identidad de padres o acudiente", detalle: "Cédula de ciudadanía o documento de permanencia legal del cuidador responsable." },
    { doc: "Certificado de afiliación a salud", detalle: "FOSYGA / ADRES o carné de EPS / Sisbén (Régimen Subsidiado o Contributivo)." },
    { doc: "Certificados de escolaridad previos", detalle: "Boletines del último año aprobado (aplica para básica primaria de 2.º a 5.º; no requerido para prejardín)." },
    { doc: "Diagnóstico o valoración médica/psicopedagógica previa", detalle: "En caso de contar con ella (no es obligatoria ni excluyente para el ingreso; permite calibrar el PIAR desde el primer día)." },
    { doc: "Certificado de residencia o factura de servicios", detalle: "Para constancia de proximidad territorial en Armenia, Barcelona o Río Verde." }
  ],
  pasosMatricula: [
    {
      paso: "1",
      titulo: "Solicitud o Diligenciamiento de Pre-registro",
      detalle: "Completar el formulario en línea o acercarse a la secretaría de la sede principal o sedes rurales."
    },
    {
      paso: "2",
      titulo: "Entrevista Sensible de Acogida Familiar",
      detalle: "Diálogo con el equipo de Rectoría, Coordinación y Orientación para conocer los talentos, ritmos e historia socioemocional del niño."
    },
    {
      paso: "3",
      titulo: "Valoración Pedagógica Artística Inicial",
      detalle: "Un espacio lúdico de juego y pintura (no un examen) para identificar estilos de aprendizaje e intereses creativos."
    },
    {
      paso: "4",
      titulo: "Formalización en SIMAT y Diseño de PIAR",
      detalle: "Asignación del cupo oficial oficializado ante la Secretaría de Educación y calibración de ajustes pedagógicos personalizados."
    }
  ]
};
