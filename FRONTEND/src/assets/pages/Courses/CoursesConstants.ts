import icon_one from "./icon_one.svg";
import icon_two from "./icon_two.svg";
import icon_three from "./icon_three.svg";
import icon_four from "./icon_four.svg";
import course_one from "./course_one.jpeg";
import course_two from "./course_two.jpeg";
import course_three from "./course_three.jpeg";
import course_four from "./course_four.jpeg";
import course_five from "./course_five.jpeg";
import course_six from "./course_six.jpeg";

export interface BenefitItem {
  id: string;
  title: string;
  text: string;
  iconUrl: string;
  imageUrl?: string;
  light?: boolean;
}

export const benefits: BenefitItem[] = [
  {
    id: "0",
    title: "TÉCNICAS BÁSICAS DE PELUQUERÍA",
    text:
      "Aprende los fundamentos esenciales del cuidado capilar, manejo correcto de herramientas y protocolo de higiene. Ideal " +
      "para comenzar en el mundo de la peluquería con bases sólidas y prácticas seguras.",
    iconUrl: icon_one,
    imageUrl: course_one,
  },
  {
    id: "1",
    title: "CORTE PROFESIONAL PARA HOMBRES",
    text:
      "Descubre técnicas modernas de barbería, manejo de máquinas y tijeras, desvanecidos y acabados. Incluye normas " +
      "de desinfección, ergonomía y experiencia al cliente.",
    iconUrl: icon_two,
    imageUrl: course_two,
    light: true,
  },
  {
    id: "2",
    title: "ATENCIÓN AL CLIENTE",
    text:
      "Desarrolla habilidades de comunicación, trato profesional, gestión de citas y fidelización. Aprende cómo crear una " +
      "experiencia agradable desde la llegada del cliente hasta su salida.",
    iconUrl: icon_three,
    imageUrl: course_three,
  },
  {
    id: "3",
    title: "ESTILISMO Y CUIDADO DEL CABELLO",
    text:
      "Conoce técnicas de corte, peinado, brushing y tratamientos esenciales para mujeres. Incluye buenas prácticas de limpieza de " +
      "herramientas y cuidado del entorno de trabajo.",
    iconUrl: icon_four,
    imageUrl: course_four,
    light: true,
  },
  {
    id: "4",
    title: "TÉCNICAS AVANZADAS EN UNISEX",
    text:
      "Perfecciona cortes, correcciones de forma y estilos personalizados para todo tipo de cabello. Ideal para quienes " +
      "buscan elevar su nivel profesional.",
    iconUrl: icon_one,
    imageUrl: course_five,
  },
  {
    id: "5",
    title: "LIMPIEZA, SEGURIDAD E HIGIENE PERSONAL",
    text:
      "Curso centrado en la desinfección de instrumentos, manejo correcto de productos químicos, normas sanitarias y " +
      "bioseguridad en salones de belleza y barberías.",
    iconUrl: icon_three,
    imageUrl: course_six,
  },
];
