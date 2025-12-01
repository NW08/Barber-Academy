import React from "react";
import { Lock, Settings, Shield } from "lucide-react";

interface SecurityFormProps {
  passwords: {
    current: string;
    new: string;
    confirm: string;
  };
  isSaving: boolean;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onSave: (e: React.FormEvent) => void;
}

const SecurityForm: React.FC<SecurityFormProps> = ({
  passwords,
  isSaving,
  onChange,
  onSave,
}) => {
  return (
    <form
      onSubmit={onSave}
      className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500"
    >
      {/* Tarjeta de recomendación visual */}
      <div className="p-4 bg-[#E69100]/5 border border-[#E69100]/20 rounded-xl flex items-start gap-4">
        <div className="p-2 bg-[#E69100]/10 rounded-lg">
          <Shield className="w-6 h-6 text-[#E69100]" />
        </div>
        <div>
          <h4 className="text-[#E69100] font-bold text-sm uppercase tracking-wider mb-1">
            Recomendación de Seguridad
          </h4>
          <p className="text-gray-400 text-sm">
            Utiliza una contraseña de al menos 8 caracteres, combinando letras,
            números y símbolos para mayor protección.
          </p>
        </div>
      </div>

      <div className="space-y-6 max-w-md">
        {/* Campo: Contraseña Actual */}
        <div className="space-y-2">
          <label className="text-sm font-medium text-gray-300 ml-1">
            Contraseña Actual
          </label>
          <div className="relative group">
            <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
              <Lock className="w-5 h-5 text-gray-500 group-focus-within:text-[#E69100] transition-colors" />
            </div>
            <input
              type="password"
              name="current" // Coincide con el estado 'current' del hook
              value={passwords.current}
              onChange={onChange}
              className="w-full bg-black/40 border border-white/10 rounded-xl py-3 pl-12 pr-4 text-white focus:outline-none
              focus:border-[#E69100] focus:ring-1 focus:ring-[#E69100] transition-all placeholder:text-gray-600"
              placeholder="••••••••"
            />
          </div>
        </div>

        {/* Campo: Nueva Contraseña */}
        <div className="space-y-2">
          <label className="text-sm font-medium text-gray-300 ml-1">
            Nueva Contraseña
          </label>
          <div className="relative group">
            <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
              <Settings className="w-5 h-5 text-gray-500 group-focus-within:text-[#E69100] transition-colors" />
            </div>
            <input
              type="password"
              name="new" // Coincide con el estado 'new' del hook
              value={passwords.new}
              onChange={onChange}
              className="w-full bg-black/40 border border-white/10 rounded-xl py-3 pl-12 pr-4 text-white focus:outline-none
              focus:border-[#E69100] focus:ring-1 focus:ring-[#E69100] transition-all placeholder:text-gray-600"
              placeholder="Nueva contraseña (min. 8 caracteres)"
            />
          </div>
        </div>

        {/* Campo: Confirmar Contraseña */}
        <div className="space-y-2">
          <label className="text-sm font-medium text-gray-300 ml-1">
            Confirmar Nueva Contraseña
          </label>
          <div className="relative group">
            <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
              <Settings className="w-5 h-5 text-gray-500 group-focus-within:text-[#E69100] transition-colors" />
            </div>
            <input
              type="password"
              name="confirm" // Coincide con el estado 'confirm' del hook
              value={passwords.confirm}
              onChange={onChange}
              className="w-full bg-black/40 border border-white/10 rounded-xl py-3 pl-12 pr-4 text-white focus:outline-none
              focus:border-[#E69100] focus:ring-1 focus:ring-[#E69100] transition-all placeholder:text-gray-600"
              placeholder="Repite la nueva contraseña"
            />
          </div>
        </div>
      </div>

      {/* Botón de acción */}
      <div className="pt-4 flex justify-start">
        <button
          type="submit"
          disabled={isSaving}
          className="flex items-center gap-2 px-8 py-3 border border-white/20 text-white font-bold rounded-xl hover:bg-white
          hover:text-black transition-all disabled:opacity-50 disabled:cursor-not-allowed transform hover:scale-105 shadow-lg shadow-black/50"
        >
          {isSaving ? (
            <span className="animate-pulse">Actualizando...</span>
          ) : (
            "Actualizar Contraseña"
          )}
        </button>
      </div>
    </form>
  );
};

export default SecurityForm;
