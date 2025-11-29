import background from "./about_background.jpg";
import ins_one from "./ins_one.jpeg";
import ins_two from "./ins_two.jpeg";
import ins_three from "../Home/p_two.jpeg";
import ins_four from "./ins_four.jpeg";

// types.ts
export interface Instructor {
  id: number;
  name: string;
  bio: string;
  imageUrl: string;
  backgroundUrl: string;
}

export const instructors: Instructor[] = [
  {
    id: 1,
    name: "Carlos 'Sasuke'",
    bio:
      "Maestro barbero con 15 años de experiencia. Especialista en navaja clásica y restauración de técnicas antiguas. " +
      "Curador principal de nuestro museo.",
    imageUrl: ins_one,
    backgroundUrl: background,
  },
  {
    id: 2,
    name: "Sofia Rodriguez",
    bio:
      "Pionera en técnicas de colorimetría y visagismo masculino. Su enfoque fusiona la barbería tradicional con el estilismo " +
      "moderno de vanguardia.",
    imageUrl: ins_three,
    backgroundUrl: background,
  },
  {
    id: 3,
    name: "Marco 'Old School'",
    bio:
      "Experto en cortes Fade y Pompadour. Dedicado a la formación de jóvenes talentos y embajador de nuestra causa social en " +
      "orfanatos locales.",
    imageUrl: ins_two,
    backgroundUrl: background,
  },
  {
    id: 4,
    name: "Elena Varela",
    bio:
      "Especialista en dermocosmética capilar y gestión de barberías. Enseña no solo a cortar, sino a administrar un negocio " +
      "exitoso y ético.",
    imageUrl: ins_four,
    backgroundUrl: background,
  },
];
