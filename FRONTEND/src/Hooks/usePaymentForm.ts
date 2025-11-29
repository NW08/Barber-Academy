import React, { useState } from "react";
import { toast } from "react-toastify";
import {
  formatCardNumber,
  formatExpiryDate,
  validatePaymentForm,
} from "../utils/Formatters.ts";

interface UsePaymentFormProps {
  onPay: () => void;
}

export const usePaymentForm = ({ onPay }: UsePaymentFormProps) => {
  const [activeField, setActiveField] = useState<string | null>(null);
  const [formData, setFormData] = useState({
    cardName: "",
    cardNumber: "",
    expiry: "",
    cvc: "",
    email: "",
  });

  // Manejo de Foco
  const handleFocus = (field: string) => setActiveField(field);
  const handleBlur = () => setActiveField(null);

  // Lógica de Cambio (Delegada a los formatters importados)
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    let formattedValue = value;

    switch (name) {
      case "cardNumber":
        formattedValue = formatCardNumber(value);
        break;
      case "expiry":
        formattedValue = formatExpiryDate(value);
        break;
      default:
        formattedValue = value;
    }

    setFormData((prev) => ({ ...prev, [name]: formattedValue }));
  };

  // Lógica de Envío
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const isValid = validatePaymentForm(formData);

    if (!isValid) {
      toast.error("Por favor completa todos los campos de pago.", {
        position: "top-right",
        theme: "dark",
      });
      return;
    }

    onPay();
  };

  return {
    formData,
    activeField,
    handleChange,
    handleFocus,
    handleBlur,
    handleSubmit,
  };
};
