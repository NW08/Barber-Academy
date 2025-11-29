import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import { ORDER_SUMMARY } from "../components/Payment/PaymentConstants.ts";
import PaymentForm from "../components/Payment/PaymentForm.tsx";
import OrderSummary from "../components/Payment/OrderSummary.tsx";

const Checkout: React.FC = () => {
  const navigate = useNavigate();
  const [isProcessing, setIsProcessing] = useState(false);

  // Cálculo de totales
  const subtotal = ORDER_SUMMARY.items.reduce(
    (acc, item) => acc + item.price,
    0,
  );
  const total = subtotal + ORDER_SUMMARY.tax + ORDER_SUMMARY.discount;

  const handlePay = () => {
    setIsProcessing(true);

    // Simulación de proceso de pago
    setTimeout(() => {
      setIsProcessing(false);
      toast.success("¡Pago realizado con éxito! Redirigiendo...", {
        theme: "dark",
        // Usamos style para personalizar el color de la barra de progreso si es necesario
        // o classes de tailwind si el toastify está configurado así
      });

      setTimeout(() => {
        navigate("/"); // Redirigir al home o página de éxito
      }, 2000);
    }, 2500);
  };

  return (
    <div
      className="min-h-screen bg-black text-white font-sans selection:bg-[#E69100] selection:text-black flex items-center
    justify-center py-10 px-4 sm:px-6"
    >
      {/* --- BACKGROUND CON TEXTURA BARBER --- */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1585747860715-2ba37e788b70?q=80&w=2074&auto=format&fit=crop"
          alt="Barber Texture"
          className="w-full h-full object-cover opacity-40 grayscale"
        />
        <div className="absolute inset-0 bg-linear-to-br from-black via-black/90 to-black/80 backdrop-blur-sm" />
      </div>

      {/* --- CONTENEDOR PRINCIPAL --- */}
      <div className="relative z-10 w-full max-w-6xl grid grid-cols-1 lg:grid-cols-12 gap-8 animate-in fade-in zoom-in-95 duration-500">
        {/* Formulario a la izquierda */}
        <PaymentForm
          total={total}
          isProcessing={isProcessing}
          onPay={handlePay}
        />

        {/* Resumen a la derecha */}
        <OrderSummary total={total} subtotal={subtotal} />
      </div>

      <ToastContainer />
    </div>
  );
};

export default Checkout;
