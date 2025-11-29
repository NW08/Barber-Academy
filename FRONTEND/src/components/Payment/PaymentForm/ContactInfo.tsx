import React from "react";
import { Mail } from "lucide-react";

interface ContactInfoProps {
  email: string;
  activeField: string | null;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onFocus: (field: string) => void;
  onBlur: () => void;
}

const ContactInfo: React.FC<ContactInfoProps> = ({
  email,
  activeField,
  onChange,
  onFocus,
  onBlur,
}) => {
  return (
    <div className="space-y-4">
      <h3 className="text-sm font-bold uppercase tracking-wider text-gray-500">
        Información de Contacto
      </h3>
      <div
        className={`relative group transition-all duration-300 ${
          activeField === "email" ? "scale-[1.01]" : ""
        }`}
      >
        <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
          <Mail
            className={`w-5 h-5 transition-colors ${
              activeField === "email" ? "text-[#E69100]" : "text-gray-500"
            }`}
          />
        </div>
        <input
          type="email"
          name="email"
          placeholder="tucorreo@ejemplo.com"
          value={email}
          onChange={onChange}
          onFocus={() => onFocus("email")}
          onBlur={onBlur}
          className="w-full bg-black/40 border border-white/10 rounded-xl py-4 pl-12 pr-4 text-white placeholder-gray-600
          focus:outline-none focus:border-[#E69100] focus:ring-1 focus:ring-[#E69100] transition-all"
        />
      </div>
    </div>
  );
};

export default ContactInfo;
