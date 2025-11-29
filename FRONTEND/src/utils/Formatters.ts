// Formatea el número de tarjeta (agrega espacios cada 4 dígitos)
export const formatCardNumber = (value: string): string => {
  const v = value.replace(/\s+/g, "").replace(/[^0-9]/gi, "");
  const parts = [];
  for (let i = 0; i < v.length; i += 4) {
    parts.push(v.substring(i, i + 4));
  }
  return parts.length ? parts.join(" ") : value;
};

// Formatea la fecha de expiración (MM/YY)
export const formatExpiryDate = (value: string): string => {
  const v = value.replace(/\s+/g, "").replace(/[^0-9]/gi, "");
  return v.length >= 2 ? `${v.substring(0, 2)}/${v.substring(2, 4)}` : v;
};

// Válida que todos los campos del objeto tengan valor
export const validatePaymentForm = (
  formData: Record<string, string>,
): boolean => {
  return Object.values(formData).every((val) => val.trim() !== "");
};
