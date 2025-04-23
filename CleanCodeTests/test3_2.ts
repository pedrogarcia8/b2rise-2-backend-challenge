// Refatoração de Lógica Complexa

const calculatePriceWithDiscountPercent = (price: number, discountPercent: number): number => {
  return price * (100 - discountPercent) / 100;
} 

const calculateTotalPriceIfIsPremium = (price: number): number => {
  if (price > 100) 
    return calculatePriceWithDiscountPercent(price, 20);
  
  return calculatePriceWithDiscountPercent(price, 10);
}

const calculateTotalPriceIfIsNotPremium = (price: number): number => {
  if (price > 100)
    return calculatePriceWithDiscountPercent(price, 10);

  return price;
}

const calculateTotalPrice = (price: number, isPremium: boolean): number => {
  if (isPremium) 
    return calculateTotalPriceIfIsPremium(price);
  
  return calculateTotalPriceIfIsNotPremium(price);
}
