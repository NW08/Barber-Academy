interface NavItem {
  id: string;
  title: string;
  url: string;
  onlyMobile?: boolean;
}

// Exportamos el array tipado
export const navigation: NavItem[] = [
  {
    id: "0",
    title: "Cursos",
    url: "/courses",
  },
  {
    id: "1",
    title: "Comunidad",
    url: "/community",
  },
  {
    id: "2",
    title: "Nosotros",
    url: "/about",
  },
  {
    id: "3",
    title: "Paz & Miño",
    url: "/barber",
  },
  {
    id: "4",
    title: "Regístrate",
    url: "/signup",
    onlyMobile: true,
  },
  {
    id: "5",
    title: "Inicia Sesión",
    url: "/login",
    onlyMobile: true,
  },
];
