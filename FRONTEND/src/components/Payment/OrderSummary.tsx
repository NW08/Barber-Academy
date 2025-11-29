import React from "react";
import { CheckCircle2 } from "lucide-react";
import { ORDER_SUMMARY } from "./PaymentConstants.ts";

interface OrderSummaryProps {
  total: number;
  subtotal: number;
}

const OrderSummary: React.FC<OrderSummaryProps> = ({ total, subtotal }) => {
  return (
    <div className="lg:col-span-5">
      <div className="lg:sticky lg:top-10 bg-black/60 backdrop-blur-xl border border-white/10 rounded-2xl p-6 md:p-8 shadow-2xl">
        <h3 className="text-xl font-bold text-white mb-6 border-b border-white/10 pb-4">
          Resumen del Pedido
        </h3>

        {/* Lista de Items */}
        <div className="space-y-4 mb-6">
          {ORDER_SUMMARY.items.map((item) => (
            <div key={item.id} className="flex gap-4 items-start">
              <div className="w-16 h-16 rounded-lg overflow-hidden border border-white/10 shrink-0">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="flex-1">
                <h4 className="text-sm font-bold text-white leading-tight">
                  {item.name}
                </h4>
                <p className="text-xs text-gray-400 mt-1">Cantidad: 1</p>
              </div>
              <span className="text-sm font-mono text-[#E69100]">
                ${item.price.toFixed(2)}
              </span>
            </div>
          ))}
        </div>

        {/* Totales */}
        <div className="space-y-3 border-t border-white/10 pt-4 text-sm">
          <div className="flex justify-between text-gray-400">
            <span>Subtotal</span>
            <span>${subtotal.toFixed(2)}</span>
          </div>
          <div className="flex justify-between text-gray-400">
            <span>Impuestos (IVA)</span>
            <span>${ORDER_SUMMARY.tax.toFixed(2)}</span>
          </div>
          <div className="flex justify-between text-green-400">
            <span>Descuento</span>
            <span>-${Math.abs(ORDER_SUMMARY.discount).toFixed(2)}</span>
          </div>
          <div className="flex justify-between text-white font-bold text-xl pt-4 border-t border-white/10 mt-2">
            <span>Total</span>
            <span className="text-[#E69100]">${total.toFixed(2)}</span>
          </div>
        </div>

        {/* Garantía */}
        <div className="mt-8 bg-white/5 rounded-lg p-4 flex items-start gap-3 border border-white/5">
          <CheckCircle2 className="w-5 h-5 text-[#E69100] shrink-0 mt-0.5" />
          <div>
            <h5 className="text-sm font-bold text-white">
              Garantía de Satisfacción
            </h5>
            <p className="text-xs text-gray-400 mt-1 leading-relaxed">
              Si no estás satisfecho con el contenido del curso en los primeros
              7 días, te devolvemos tu dinero.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrderSummary;
