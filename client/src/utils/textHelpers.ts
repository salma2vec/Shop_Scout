

export const capitalize = (text) => {
  return text.charAt(0).toUpperCase() + text.slice(1);
};

export const formatPrice = (price) => {
  return `$${price.toFixed(2)}`;
};

