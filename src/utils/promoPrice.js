export const promoPrice = (price, promo) => {
  let priceParse = Number(price.replace('$', '').replace(',', '')).toFixed(1);
  if(priceParse == null || promo == null || 
  isNaN(priceParse) || isNaN(promo) || priceParse < 0 || promo < 0) {
    return null;
  } else {
    const discountPrice = priceParse * (100 - promo) / 100;
    return discountPrice.toLocaleString('en-US');
  }
};