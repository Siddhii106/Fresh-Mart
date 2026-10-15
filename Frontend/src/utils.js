// Reads the first number in a price string, so "₹110/kg" becomes 110.
export function getPriceValue(price) {
  const match = price.match(/\d+/);
  return match ? Number(match[0]) : 0;
}