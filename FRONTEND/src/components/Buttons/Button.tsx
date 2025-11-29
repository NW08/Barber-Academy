import React from "react";
import ButtonSvg from "./ButtonSvg.tsx";

interface ButtonProps {
  className?: string;
  href?: string;
  onClick?: () => void;
  children: React.ReactNode;
  px?: string;
  backgroundColor?: string;
  borderColor?: string;
  textColor?: string;
}

const Button: React.FC<ButtonProps> = ({
  className = "",
  href,
  onClick,
  children,
  px = "px-7",
  backgroundColor,
  borderColor,
  textColor = "text-white",
}) => {
  const classes = `
    button relative items-center justify-center 
    h-11 transition-colors hover:text-[#E69100]
    ${px} ${textColor} ${className}
  `;

  const content = (
    <>
      <span className="relative z-10">{children}</span>
      <ButtonSvg backgroundColor={backgroundColor} borderColor={borderColor} />
    </>
  );

  if (href) {
    return (
      <a className={`${classes} no-underline`} href={href} onClick={onClick}>
        {content}
      </a>
    );
  }

  return (
    <button className={classes} onClick={onClick}>
      {content}
    </button>
  );
};

export default Button;
