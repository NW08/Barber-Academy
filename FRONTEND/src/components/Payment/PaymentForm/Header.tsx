import React from "react";
import { ShieldCheck } from "lucide-react";
import { MasterCardLogo, VisaLogo } from "../PaymentsIcons.tsx";

const PaymentHeader: React.FC = () => {
  return (
    <div className="flex items-center justify-between mb-8">
      <h2 className="text-2xl font-bold flex items-center gap-3">
        <ShieldCheck className="text-[#E69100]" />
        Pago Seguro
      </h2>
      <div className="flex gap-2 opacity-70 grayscale hover:grayscale-0 transition-all">
        <VisaLogo />
        <MasterCardLogo />
      </div>
    </div>
  );
};

export default PaymentHeader;
