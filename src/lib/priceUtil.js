// We'll use 2 decimals to present AND PARSE price
const NUM_DECIMALS = 2;
const DECIMAL_SEPARATOR = '.';

export const parsePrice = (priceString) => {
  const decimalPart = priceString.split(DECIMAL_SEPARATOR)[1] || '';

  const multiplier = 10 ** Math.max(0, NUM_DECIMALS - decimalPart.length);

  return priceString.replace(/\D/g, '') * (multiplier);
};


export const formatPrice = priceNumber => (priceNumber / 100).toLocaleString('en-US', { style: 'currency', currency: 'USD' });
