// --- DATOS DE EJEMPLO (TSX) ---

import UserIcon from "./UserIcon.tsx";
import PaletteIcon from "./PaletteIcon.tsx";
import SparklesIcon from "./SparklesIcon.tsx";
import SmileIcon from "./SmileIcon.tsx";
import { Scissors, Star } from "lucide-react";
import type { JSX } from "react";

import corte_classic from "../../assets/pages/Barber/corte_1.jpg";
import barba from "../../assets/pages/Barber/corte_2.jpg";
import combo from "../../assets/pages/Barber/corte_3.jpg";
import tinturado from "../../assets/pages/Barber/corte_4.jpeg";
import exfoliacion from "../../assets/pages/Barber/corte_5.jpeg";
import junior from "../../assets/pages/Barber/corte_6.jpeg";

// ----------------------
// TIPOS
// ----------------------

export interface Service {
  title: string;
  price: string;
  description: string;
  icon: JSX.Element;
}

// ----------------------
// DATA
// ----------------------

export const services: Service[] = [
  {
    title: "Corte Clásico / Moderno",
    price: "$15.00",
    description:
      "Asesoría de imagen personalizada, lavado, corte con tijera o máquina y peinado final con productos premium.",
    icon: <Scissors className="w-6 h-6" />,
  },
  {
    title: "Arreglo de Barba",
    price: "$10.00",
    description:
      "Ritual de toalla caliente, perfilado con navaja, recorte, hidratación con aceites esenciales y masaje facial.",
    icon: <UserIcon />,
  },
  {
    title: "Corte & Barba (Combo)",
    price: "$22.00",
    description:
      "La experiencia completa. Renovación total de tu estilo con el máximo cuidado y detalle en cada paso.",
    icon: <Star className="w-6 h-6" />,
  },
  {
    title: "Tinturado & Color",
    price: "$35.00+",
    description:
      "Desde cubrir canas hasta platinados modernos. Usamos productos sin amoniaco que cuidan tu cuero cabelludo.",
    icon: <PaletteIcon />,
  },
  {
    title: "Exfoliación Facial",
    price: "$12.00",
    description:
      "Limpieza profunda para eliminar impurezas y puntos negros. Incluye mascarilla negra y vapor.",
    icon: <SparklesIcon />,
  },
  {
    title: "Corte Junior (Niños)",
    price: "$12.00",
    description:
      "Paciencia y estilo para los más pequeños. Incluye diseño suave y acabado con gel.",
    icon: <SmileIcon />,
  },
];

export const galleryImages: string[] = [
  corte_classic,
  barba,
  combo,
  tinturado,
  exfoliacion,
  junior,
];

export const mapUrl: string =
  "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3989.796788554236!2d-78.48083888524675!3d-0.17646533544520922!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x91d59a60e8d90477%3A0x67a216960840b37!2sQuicentro%20Shopping!5e0!3m2!1ses!2sec!4v1647898234891!5m2!1ses!2sec";
