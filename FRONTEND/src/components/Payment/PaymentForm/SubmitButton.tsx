import React from "react";
import { Lock } from "lucide-react";

interface SubmitButtonProps {
  total: number;
  isProcessing: boolean;
}

const SubmitButton: React.FC<SubmitButtonProps> = ({ total, isProcessing }) => {
  return (
    <div className="mt-6 space-y-4">
      <button
        type="submit"
        disabled={isProcessing}
        className={`w-full py-4 rounded-xl font-bold text-lg shadow-lg flex items-center justify-center gap-3 transition-all transform
        ${
          isProcessing
            ? "bg-gray-700 cursor-not-allowed text-gray-400"
            : "bg-[#E69100] hover:bg-white hover:text-black hover:scale-[1.02] text-black shadow-[#E69100]/20"
        }`}
      >
        {isProcessing ? (
          <>
            <svg
              className="animate-spin h-5 w-5"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
            >
              <circle
                className="opacity-25"
                cx="12"
                cy="12"
                r="10"
                stroke="currentColor"
                strokeWidth="4"
              ></circle>
              <path
                className="opacity-75"
                fill="currentColor"
                d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
              ></path>
            </svg>
            Procesando...
          </>
        ) : (
          <>Pagar ${total.toFixed(2)}</>
        )}
      </button>

      <div className="text-center">
        <p className="text-xs text-gray-500 flex items-center justify-center gap-1">
          <Lock className="w-3 h-3" /> Transacción encriptada con SSL de 256
          bits.
        </p>
      </div>
    </div>
  );
};

export default SubmitButton;
