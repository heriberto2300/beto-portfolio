import { TECHNOLOGIES } from "../enums/technologies";

interface Project {
  id: number;
  defaultImage: string;
  title: string;
  baseDescription: string;
  description: string;
  images: string[];
  technologies: string[];
  link: string | null | string[];
  period: string;
  basePath: string;
}

const basePaths = {
  balam: `/images/balam/`,
  knn: `/images/knn/`,
  onoffice: `/images/onoffice`,
  acadia: `/images/acadia`,
  tecnologia: `/images/tecnologia`,
  esencia: `/images/esencia`,
}

export const projects: Project[] = [
  {
    id: 1,
    title: 'When the Jaguar lost its spots',
    basePath: basePaths.balam,
    baseDescription: 'Cuento Interactivo',
    description: 'Este trabajo fue desarrollado con Adobe Animate y Javascript utilizando las biblitecas CreateJS, EaseJs, PrelaodJs. Esto con el fin de migrar el contenido original Flash a las tecnologías actuales.',
    defaultImage: `${basePaths.balam}/main.png`,
    images: [
      `${basePaths.balam}/1.png`,
      `${basePaths.balam}/2.png`,
      `${basePaths.balam}/3.png`,
      `${basePaths.balam}/4.png`,
    ],
    link: 'https://www.maraserrano.com/balam/Balam.html',
    period: 'Mayo 2022 - Marzo 2023',
    technologies: [
      TECHNOLOGIES.JS,
      TECHNOLOGIES.ANIMATE,
    ] 
  },
  {
    id: 2,
    title: 'KNN e ID3',
    basePath: basePaths.knn,
    baseDescription: 'Machine Learnig',
    description: 'Proyecto orientado a Machine Learnig y a comparar diversas tecnicas para el analisis de datos a partir de conjuntos de datos etiquetados',
    defaultImage: `${basePaths.knn}/main.png`,
    images: [
      `${basePaths.knn}/1.png`,
      `${basePaths.knn}/2.png`,
      `${basePaths.knn}/3.png`,
      `${basePaths.knn}/4.png`,
    ],
    link: '',
    period: 'Mayo 2022 - Marzo 2023',
    technologies: [
      TECHNOLOGIES.JAVA,
    ] 
  },
  {
    id: 3,
    title: 'Onoffice',
    basePath: basePaths.onoffice,
    baseDescription: 'Trazabilidad de Inventario',
    description: 'Diseño UX/UI y parte de desarrollo de aplicación web enfocada a la trazabilidad de productos, inventario, ventas, gastos, clientes, proveedores.',
    defaultImage: `${basePaths.onoffice}/main.png`,
    images: [
      `${basePaths.onoffice}/1.png`,
      `${basePaths.onoffice}/2.png`,
      `${basePaths.onoffice}/3.png`,
      `${basePaths.onoffice}/4.png`,
    ],
    link: 'https://www.maraserrano.com/balam/Balam.html',
    period: 'Mayo 2022 - Marzo 2023',
    technologies: [
      TECHNOLOGIES.JS,
      TECHNOLOGIES.ANIMATE,
    ] 
  },
  {
    id: 4,
    title: 'Acadia',
    basePath: basePaths.acadia,
    baseDescription: 'Aplicacion web para la gestión de asistencias en Escuelas',
    description: 'Este trabajo fue desarrollado con Adobe Animate y Javascript utilizando las biblitecas CreateJS, EaseJs, PrelaodJs. Esto con el fin de migrar el contenido original Flash a las tecnologías actuales.',
    defaultImage: `${basePaths.acadia}/main.png`,
    images: [
      `${basePaths.acadia}/1.png`,
      `${basePaths.acadia}/2.png`,
      `${basePaths.acadia}/3.png`,
      `${basePaths.acadia}/4.png`,
    ],
    link: 'https://www.maraserrano.com/balam/Balam.html',
    period: 'Mayo 2022 - Marzo 2023',
    technologies: [
      TECHNOLOGIES.JS,
      TECHNOLOGIES.ANIMATE,
    ] 
  },
  {
    id: 5,
    title: 'Tecnología Projecter',
    basePath: basePaths.tecnologia,
    baseDescription: 'SPA',
    description: 'Este trabajo fue desarrollado con Adobe Animate y Javascript utilizando las biblitecas CreateJS, EaseJs, PrelaodJs. Esto con el fin de migrar el contenido original Flash a las tecnologías actuales.',
    defaultImage: `${basePaths.tecnologia}/main.png`,
    images: [
      `${basePaths.tecnologia}/1.png`,
      `${basePaths.tecnologia}/2.png`,
      `${basePaths.tecnologia}/3.png`,
      `${basePaths.tecnologia}/4.png`,
    ],
    link: 'https://www.maraserrano.com/balam/Balam.html',
    period: 'Mayo 2022 - Marzo 2023',
    technologies: [
      TECHNOLOGIES.JS,
      TECHNOLOGIES.ANIMATE,
    ] 
  },
  {
    id: 6,
    title: 'Esencia del Sabor',
    basePath: basePaths.esencia,
    baseDescription: 'Página web para la compra de productos a Granel',
    description: 'Este trabajo fue desarrollado con Adobe Animate y Javascript utilizando las biblitecas CreateJS, EaseJs, PrelaodJs. Esto con el fin de migrar el contenido original Flash a las tecnologías actuales.',
    defaultImage: `${basePaths.esencia}/main.png`,
    images: [
      `${basePaths.esencia}/1.png`,
      `${basePaths.esencia}/2.png`,
      `${basePaths.esencia}/3.png`,
      `${basePaths.esencia}/4.png`,
    ],
    link: 'https://www.maraserrano.com/balam/Balam.html',
    period: 'Mayo 2022 - Marzo 2023',
    technologies: [
      TECHNOLOGIES.JS,
      TECHNOLOGIES.ANIMATE,
    ] 
  },
];

/*
    Lista de proyectos:
    //El de tratamiento de la información
    //El de balam
    //Disenio en figma de onoffice y desarrollo
    //Disenio en figma de acadia y desarrollo
    //Disenio y desarrollo de tecnologia projecter
    //Disenio y desarrollo de Esencia del sabor
  */