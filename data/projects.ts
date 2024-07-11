import { TECHNOLOGIES } from "@/enums/technologies";

interface Project {
  id: number;
  title: string;
  reference: string;
  mainImage: string;
  titleImage: string;
  screens: string;
  description: string;
  technologies: TECHNOLOGIES[];
  link: {
    url: string;
    name: string;
  };
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
    reference: 'balam',
    description: `
      Actualizacion de cuento interactivo para la plataforma EDO. Dicho cuento estaba realizado en Adobe Flash 
      y se realizo su migrado correspondiente con uso de Adobe Animate y Javascript utilizando las bibliotecas CreateJS, 
      EaseJs, PreloadJs.
    `,
    mainImage: `${basePaths.balam}/main.webp`,
    titleImage: `${basePaths.balam}/title.wepb`,
    screens: `${basePaths.balam}/screens.webp`,
    link: {
      url: 'https://www.maraserrano.com/balam/Balam.html',
      name: '',
    },
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
    reference: 'knn',
    description: `Implementacion de algoritmos de Aprendizaje Supervisado con Java y Weka (KNN y C4.5) con el fin de realizar un comparativo
      entre la eficiencia y efectividad de ambos en base a un conjunto de datos de entrenamiento y de prueba definidos previamente.
    `,
    mainImage: `${basePaths.knn}/main.webp`,
    titleImage: `${basePaths.knn}/title.wepb`,
    screens: `${basePaths.knn}/screens.webp`,
    link: {
      url: 'https://github.com/heriberto2300/Proyecto-final-Tratamiento',
      name: '',
    },
    technologies: [
      TECHNOLOGIES.JAVA,
      TECHNOLOGIES.WEKA,
    ]
  },
  {
    id: 3,
    title: 'Onoffice',
    reference: 'onoffice',
    description: `Desarrollo UX/UI en Figma, asi como colaboracion en la construccion con NextJs del sitio onoffice, sistema encargado de gestionar la trazabilidad
      de inventario para medianas empresas. Tiene la funcionalidad de autenticacion de usuarios, agregar clientes, productos, proveedores, realizar ventas,
      generar tickets de ventas y generar historial de gastos. Uso de MySQL y Prisma para Base de datos y estilizacion con Tailwind y MUI
    `,
    mainImage: `${basePaths.onoffice}/main.webp`,
    titleImage: `${basePaths.onoffice}/title.wepb`,
    screens: `${basePaths.onoffice}/screens.webp`,
    link: {
      url: 'https://onoffice.projecter.mx',
      name: '',
    },
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
    title: 'Tecnología Projecter',
    reference: 'tecnologia',
    description: `
      Desarrollo UX/UI para el sitio Tecnologia Projecter.
      `,
    mainImage: `${basePaths.tecnologia}/main.webp`,
    titleImage: `${basePaths.tecnologia}/title.wepb`,
    screens: `${basePaths.tecnologia}/screens.webp`,
    link: {
      url: '',
      name: '',
    },
    technologies: [
      TECHNOLOGIES.FIGMA,
    ]
  },
  {
    id: 5,
    title: 'Esencia del Sabor',
    reference: 'esencia',
    description: `
      Desarrollo UX/UI, asi como construccion del sitio web Esencia del Sabor. Este sitio se enfoca en la venta en linea
      de productos a granel. Incluye Implementacion de Carrito de compra, uso de Stripe como pasarela de pago para el cobro de productos y funcionalidad
      para el calculo de costo de cobertura de envio. 
      `,
    mainImage: `${basePaths.esencia}/main.webp`,
    titleImage: `${basePaths.esencia}/title.wepb`,
    screens: `${basePaths.esencia}/screens.webp`,
    link: {
      url: 'https://www.esenciadelsabor.com/',
      name: ''
    },
    technologies: [
      TECHNOLOGIES.NEXT,
      TECHNOLOGIES.FIGMA,
      TECHNOLOGIES.TAILWIND,
      TECHNOLOGIES.REACT,
    ]
  },
];