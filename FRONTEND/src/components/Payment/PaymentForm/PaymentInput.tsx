import React from "react";
import type { LucideIcon } from "lucide-react";

interface PaymentInputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  name: string; // Obligatorio para identificar el campo
  icon: LucideIcon;
  activeField: string | null;
  onFocusField: (field: string) => void;
  onBlurField: () => void;
  rightIcon?: React.ReactNode; // Para el candado extra
}

const PaymentInput: React.FC<PaymentInputProps> = ({
  name,
  icon: Icon,
  activeField,
  onFocusField,
  onBlurField,
  className = "",
  rightIcon,
  ...props
}) => {
  const isActive = activeField === name;

  return (
    <div
      className={`relative transition-all duration-300 ${
        isActive ? "scale-[1.01]" : ""
      }`}
    >
      {/* Icono Izquierdo */}
      <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
        <Icon
          className={`w-5 h-5 transition-colors ${
            isActive ? "text-[#E69100]" : "text-gray-500"
          }`}
        />
      </div>

      {/* Input */}
      <input
        name={name}
        onFocus={() => onFocusField(name)}
        onBlur={onBlurField}
        className={`w-full bg-black/40 border border-white/10 rounded-xl py-4 pl-12 pr-4 text-white placeholder-gray-600 
        focus:outline-none focus:border-[#E69100] focus:ring-1 focus:ring-[#E69100] transition-all ${className}`}
        {...props}
      />

      {/* Icono Derecho Opcional (ej.: Candado) */}
      {rightIcon && (
        <div className="absolute inset-y-0 right-4 flex items-center pointer-events-none">
          {rightIcon}
        </div>
      )}
    </div>
  );
};

export default PaymentInput;
