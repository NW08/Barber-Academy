import React from "react";
import { Mail, MapPin, Save, User } from "lucide-react";

interface UserProfile {
  name: string;
  email: string;
  city: string;
  bio: string;
}

interface ProfileFormProps {
  profile: UserProfile;
  isSaving: boolean;
  onChange: (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => void;
  onSave: (e: React.FormEvent) => void;
  fileInputRef: React.RefObject<HTMLInputElement>;
  onFileChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const ProfileForm: React.FC<ProfileFormProps> = ({
  profile,
  isSaving,
  onChange,
  onSave,
  fileInputRef,
  onFileChange,
}) => {
  return (
    <form
      onSubmit={onSave}
      className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500"
    >
      {/* Sección Avatar (Hidden Input) */}
      <input
        type="file"
        ref={fileInputRef}
        className="hidden"
        accept="image/*"
        onChange={onFileChange}
      />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Nombre */}
        <div className="space-y-2">
          <label className="text-sm font-medium text-gray-300 ml-1">
            Nombre Completo
          </label>
          <div className="relative group">
            <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
              <User className="w-5 h-5 text-gray-500 group-focus-within:text-[#E69100] transition-colors" />
            </div>
            <input
              type="text"
              name="name"
              value={profile.name}
              onChange={onChange}
              className="w-full bg-black/40 border border-white/10 rounded-xl py-3 pl-12 pr-4 text-white focus:outline-none
              focus:border-[#E69100] focus:ring-1 focus:ring-[#E69100] transition-all"
              placeholder="Tu nombre"
            />
          </div>
        </div>

        {/* Ciudad */}
        <div className="space-y-2">
          <label className="text-sm font-medium text-gray-300 ml-1">
            Ciudad / Ubicación
          </label>
          <div className="relative group">
            <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
              <MapPin className="w-5 h-5 text-gray-500 group-focus-within:text-[#E69100] transition-colors" />
            </div>
            <input
              type="text"
              name="city"
              value={profile.city}
              onChange={onChange}
              className="w-full bg-black/40 border border-white/10 rounded-xl py-3 pl-12 pr-4 text-white focus:outline-none
              focus:border-[#E69100] focus:ring-1 focus:ring-[#E69100] transition-all"
              placeholder="Ej: Madrid, España"
            />
          </div>
        </div>

        {/* email */}
        <div className="space-y-2 md:col-span-2">
          <label className="text-sm font-medium text-gray-300 ml-1">
            Correo Electrónico
          </label>
          <div className="relative group">
            <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
              <Mail className="w-5 h-5 text-gray-500 group-focus-within:text-[#E69100] transition-colors" />
            </div>
            <input
              type="email"
              name="email"
              value={profile.email}
              onChange={onChange}
              className="w-full bg-black/40 border border-white/10 rounded-xl py-3 pl-12 pr-4 text-white focus:outline-none
              focus:border-[#E69100] focus:ring-1 focus:ring-[#E69100] transition-all"
              placeholder="tu@email.com"
            />
          </div>
        </div>

        {/* Bio */}
        <div className="space-y-2 md:col-span-2">
          <label className="text-sm font-medium text-gray-300 ml-1">
            Biografía
          </label>
          <textarea
            name="bio"
            rows={4}
            value={profile.bio}
            onChange={onChange}
            className="w-full bg-black/40 border border-white/10 rounded-xl p-4 text-white focus:outline-none
            focus:border-[#E69100] focus:ring-1 focus:ring-[#E69100] transition-all resize-none"
            placeholder="Cuéntanos un poco sobre ti..."
          />
        </div>
      </div>

      <div className="pt-4 flex justify-end">
        <button
          type="submit"
          disabled={isSaving}
          className="flex items-center gap-2 px-8 py-3 bg-[#E69100] text-black font-bold rounded-xl hover:bg-white transition-all
           transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed shadow-lg shadow-[#E69100]/20"
        >
          {isSaving ? (
            <span className="animate-pulse">Guardando...</span>
          ) : (
            <>
              <Save className="w-5 h-5" /> Guardar Cambios
            </>
          )}
        </button>
      </div>
    </form>
  );
};

export default ProfileForm;
