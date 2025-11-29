import React from "react";
import { AlertCircle, Calendar, CreditCard, Lock, User } from "lucide-react";
import PaymentInput from "./PaymentInput.tsx";

interface CardDetailsProps {
  formData: {
    cardName: string;
    cardNumber: string;
    expiry: string;
    cvc: string;
  };
  activeField: string | null;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onFocus: (field: string) => void;
  onBlur: () => void;
}

const CardDetails: React.FC<CardDetailsProps> = ({
  formData,
  activeField,
  onChange,
  onFocus,
  onBlur,
}) => {
  return (
    <div className="space-y-4 pt-4">
      <h3 className="text-sm font-bold uppercase tracking-wider text-gray-500">
        Detalles de la Tarjeta
      </h3>

      {/* Nombre Titular */}
      <PaymentInput
        name="cardName"
        placeholder="Nombre del Titular"
        value={formData.cardName}
        onChange={onChange}
        activeField={activeField}
        onFocusField={onFocus}
        onBlurField={onBlur}
        icon={User}
        className="uppercase" // Prop extra para que el texto sea mayúscula
      />

      {/* Número de Tarjeta */}
      <PaymentInput
        name="cardNumber"
        placeholder="0000 0000 0000 0000"
        maxLength={19}
        value={formData.cardNumber}
        onChange={onChange}
        activeField={activeField}
        onFocusField={onFocus}
        onBlurField={onBlur}
        icon={CreditCard}
        className="font-mono tracking-wider" // Fuente monospaced para números
        rightIcon={<Lock className="w-4 h-4 text-green-500/80" />} // Icono de seguridad extra
      />

      {/* Grid para Fecha y CVC */}
      <div className="grid grid-cols-2 gap-4">
        <PaymentInput
          name="expiry"
          placeholder="MM/YY"
          maxLength={5}
          value={formData.expiry}
          onChange={onChange}
          activeField={activeField}
          onFocusField={onFocus}
          onBlurField={onBlur}
          icon={Calendar}
          className="font-mono"
        />

        <PaymentInput
          name="cvc"
          placeholder="CVC"
          maxLength={3}
          value={formData.cvc}
          onChange={onChange}
          activeField={activeField}
          onFocusField={onFocus}
          onBlurField={onBlur}
          icon={AlertCircle}
          className="font-mono"
        />
      </div>
    </div>
  );
};

export default CardDetails;
