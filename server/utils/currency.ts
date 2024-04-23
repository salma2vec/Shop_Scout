import { Currency } from "../interfaces/Currency";

export const AVAILABLE_CURRENCIES: Currency[] = [
  {
    code: "USD",
    symbol: "$",
    defaultCountry: "US",
    defaultLocale: "en_US"
  },
  {
    code: "INR",
    symbol: "₹",
    defaultCountry: "IN",
    defaultLocale: "en_IN"
  },
  {
    code: "EUR",
    symbol: "€",
    defaultCountry: "FR",
    defaultLocale: "fr_FR"
  },
  {
    code: "JPY",
    symbol: "¥",
    defaultCountry: "JP",
    defaultLocale: "ja_JP"
  },
  {
    code: "GBP",
    symbol: "£",
    defaultCountry: "GB",
    defaultLocale: "en_GB"
  },
]

/*
* This function converts the price from one currency to another.
* The conversion rate is hardcoded for now, but we probably want to
* fetch the latest conversion rate from an API in the future.
* 
* @param {number} price - The price to be converted.
* @param {string} from_currency - The currency of the price.
* @param {string} to_currency - The currency to convert to.
* 
* @returns {number} - The converted price.
*/
export const convertCurrency = (price, from_currency, to_currency) => {
  const from_currency_symbol = AVAILABLE_CURRENCIES[from_currency];
  const to_currency_symbol = AVAILABLE_CURRENCIES[to_currency];

  if (from_currency_symbol === to_currency_symbol) {
    return price;
  }

  const conversion_rate = 0.014; // just a random number for now
  return (price * conversion_rate).toFixed(2);
};