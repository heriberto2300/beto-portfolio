import { TECHNOLOGIES } from "../enums/technologies";

interface Project {
  id: number;
  defaultImage: string;
  title: string;
  baseDescription: string;
  description: string;
  images: string[];
  technologies: TECHNOLOGIES[];
  link: string | 'N/A';
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
    description: `
      Actualizacion de cuento interactivo para la plataforma EDO. Dicho cuento estaba realizado en Adobe Flash 
      y se realizo su migrado correspondiente con uso de Adobe Animate y Javascript utilizando las bibliotecas CreateJS, 
      EaseJs, PreloadJs.
    `,
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
      TECHNOLOGIES.HTML,
      TECHNOLOGIES.CSS,
    ]
  },
  {
    id: 2,
    title: 'KNN e ID3',
    basePath: basePaths.knn,
    baseDescription: 'Machine Learnig',
    description: `Implementacion de algoritmos de Aprendizaje Supervisado con Java y Weka (KNN y C4.5) con el fin de realizar un comparativo
      entre la eficiencia y efectividad de ambos en base a un conjunto de datos de entrenamiento y de prueba definidos previamente.
    `,
    defaultImage: `${basePaths.knn}/main.png`,
    images: [
      `${basePaths.knn}/1.png`,
      `${basePaths.knn}/2.png`,
      `${basePaths.knn}/3.png`,
      `${basePaths.knn}/4.png`,
    ],
    link: 'https://github.com/heriberto2300/Proyecto-final-Tratamiento',
    period: 'Mayo 2022 - Marzo 2023',
    technologies: [
      TECHNOLOGIES.JAVA,
      TECHNOLOGIES.WEKA,
    ]
  },
  {
    id: 3,
    title: 'Onoffice',
    basePath: basePaths.onoffice,
    baseDescription: 'Trazabilidad de Inventario',
    description: `Desarrollo UX/UI en Figma, asi como colaboracion en la construccion con NextJs del sitio onoffice, sistema encargado de gestionar la trazabilidad
      de inventario para medianas empresas. Tiene la funcionalidad de autenticacion de usuarios, agregar clientes, productos, proveedores, realizar ventas,
      generar tickets de ventas y generar historial de gastos. Uso de MySQL y Prisma para Base de datos y estilizacion con Tailwind y MUI
    `,
    defaultImage: `${basePaths.onoffice}/main.png`,
    images: [
      `${basePaths.onoffice}/1.png`,
      `${basePaths.onoffice}/2.png`,
      `${basePaths.onoffice}/3.png`,
      `${basePaths.onoffice}/4.png`,
    ],
    link: 'https://onoffice.projecter.mx',
    period: 'Mayo 2022 - Marzo 2023',
    technologies: [
      TECHNOLOGIES.NEXT,
      TECHNOLOGIES.PRISMA,
      TECHNOLOGIES.FIGMA,
      TECHNOLOGIES.TAILWIND,
      TECHNOLOGIES.REACT
    ]
  },
  {
    id: 4,
    title: 'Acadia',
    basePath: basePaths.acadia,
    baseDescription: 'Aplicacion web para la gestión de asistencias en Escuelas',
    description: `
      Aplicacion enfocada a la gestion de asistencias de estudiantes de educacion media-superior. Desarrollo en NextJs, migracion
      de MySQL2 a Prisma ORM, estilizacion con TailwindCSS y MUI. 
    `,
    defaultImage: `${basePaths.acadia}/main.png`,
    images: [
      `${basePaths.acadia}/1.png`,
    ],
    link: 'N/A',
    period: 'Mayo 2022 - Marzo 2023',
    technologies: [
      TECHNOLOGIES.NEXT,
      TECHNOLOGIES.PRISMA,
      TECHNOLOGIES.TAILWIND
    ]
  },
  {
    id: 5,
    title: 'Tecnología Projecter',
    basePath: basePaths.tecnologia,
    baseDescription: 'SPA',
    description: `
      Desarrollo UX/UI para el sitio Tecnologia Projecter.
      `,
    defaultImage: `${basePaths.tecnologia}/main.png`,
    images: [
      `${basePaths.tecnologia}/1.png`,
      `${basePaths.tecnologia}/2.png`,
      `${basePaths.tecnologia}/3.png`,
      `${basePaths.tecnologia}/4.png`,
    ],
    link: 'N/A',
    period: 'Mayo 2022 - Marzo 2023',
    technologies: [
      TECHNOLOGIES.FIGMA,
    ]
  },
  {
    id: 6,
    title: 'Esencia del Sabor',
    basePath: basePaths.esencia,
    baseDescription: 'Página web para la compra de productos a Granel',
    description: `
      Desarrollo UX/UI, asi como construccion del sitio web Esencia del Sabor. Este sitio se enfoca en la venta en linea
      de productos a granel. Incluye Implementacion de Carrito de compra, uso de Stripe como pasarela de pago para el cobro de productos y funcionalidad
      para el calculo de costo de cobertura de envio. 
      `,
    defaultImage: `${basePaths.esencia}/main.png`,
    images: [
      `${basePaths.esencia}/1.png`,
      `${basePaths.esencia}/2.png`,
      `${basePaths.esencia}/3.png`,
      `${basePaths.esencia}/4.png`,
    ],
    link: 'https://www.esenciadelsabor.com/',
    period: 'Mayo 2022 - Marzo 2023',
    technologies: [
      TECHNOLOGIES.NEXT,
      TECHNOLOGIES.FIGMA,
      TECHNOLOGIES.TAILWIND,
      TECHNOLOGIES.REACT,
    ]
  },
];