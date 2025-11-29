import type { FC } from "react";

interface ArrowProps {
  color?: string; // opcional, por si quieres un color por defecto
}

const Arrow: FC<ArrowProps> = ({ color = "#FFF" }) => {
  return (
    <svg
      className="ml-5"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill={color} // aplica el color aquí
    >
      <path d="M8.293 5.293a1 1 0 0 1 1.414 0l6 6a1 1 0 0 1 0 1.414l-6 6a1 1 0 0 1-1.414-1.414L13.586 12 8.293 6.707a1 1 0 0 1 0-1.414z" />
    </svg>
  );
};

export default Arrow;
