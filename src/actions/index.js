import axios from 'axios';

export const SIGLE_PRICE = 'sigle_price';

export function fetchSiglePrice() {
  const url = 'https://min-api.cryptocompare.com/data/price?fsym=BTC&tsyms=JPY';
  const request = axios.get(url);

  return {
    type: SIGLE_PRICE,
    payload: request
  };
}
