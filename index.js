import Freecurrencyapi from '@everapi/freecurrencyapi-js';
const freecurrencyapi = new Freecurrencyapi('fca_live_KAY2J6BaPimIXwNPNJQVAjNkcllX2vywDkYHHabi');
convertCurrency("INR","USD",3);
export async function convertCurrency(fromCurrency,toCurrency,unit){




const res=await freecurrencyapi.latest({
    base_currency: fromCurrency,
    currencies: toCurrency
});
const multiplier=res.data[toCurrency];
return multiplier*unit;
console.log(multiplier);
}