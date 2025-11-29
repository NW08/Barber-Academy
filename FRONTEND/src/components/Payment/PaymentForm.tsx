import React from "react";
import { Link } from "react-router-dom";
import { ChevronLeft } from "lucide-react";

// Hooks Personalizados y Contexto
import { usePaymentForm } from "../../Hooks/usePaymentForm.ts";
import { useAuth } from "../../context/AuthContext";

// Componentes Modulares
import PaymentHeader from "./PaymentForm/Header";
import ContactInfo from "./PaymentForm/ContactInfo";
import CardDetails from "./PaymentForm/CardDetails";
import SubmitButton from "./PaymentForm/SubmitButton";
import AuthGuard from "../Guest/Guest"; // Asegúrate de que esta ruta sea correcta para tu AuthGuard

interface PaymentFormProps {
  total: number;
  isProcessing: boolean;
  onPay: () => void;
}

const PaymentForm: React.FC<PaymentFormProps> = ({
  total,
  isProcessing,
  onPay,
}) => {
  const { isLoggedIn } = useAuth();

  // Extraemos toda la lógica del formulario de nuestro Hook personalizado
  const {
    formData,
    activeField,
    handleChange,
    handleFocus,
    handleBlur,
    handleSubmit,
  } = usePaymentForm({ onPay });

  return (
    <div className="lg:col-span-7 flex flex-col gap-6 relative">
      {/* Botón de regreso (Solo visible en móviles) */}
      <div className="lg:hidden mb-4">
        <Link
          to="/"
          className="flex items-center text-gray-400 hover:text-white transition-colors gap-2"
        >
          <ChevronLeft className="w-5 h-5" /> Volver a la tienda
        </Link>
      </div>

      {/* Contenedor del Formulario (Glassmorphism) */}
      <div className="bg-zinc-900/80 backdrop-blur-md border border-white/10 rounded-2xl p-6 md:p-10 shadow-2xl">
        {/* 1. Cabecera con iconos */}
        <PaymentHeader />

        <form onSubmit={handleSubmit} className="space-y-6">
          {/* 2. Sección de Contacto */}
          <ContactInfo
            email={formData.email}
            activeField={activeField}
            onChange={handleChange}
            onFocus={handleFocus}
            onBlur={handleBlur}
          />

          {/* 3. Sección de Tarjeta */}
          <CardDetails
            formData={formData}
            activeField={activeField}
            onChange={handleChange}
            onFocus={handleFocus}
            onBlur={handleBlur}
          />

          {/* 4. Botón de Pago */}
          <SubmitButton total={total} isProcessing={isProcessing} />
        </form>
      </div>

      {/* Bloqueo para usuarios no logueados */}
      {!isLoggedIn && <AuthGuard />}
    </div>
  );
};

export default PaymentForm;
