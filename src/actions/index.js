import axios from 'axios';

export const CURRENT_PRICE = 'current_price';
export const DAILY_PRICE = 'daily_price';
// export const_PRICE = 'daily_price';

export function fetchCurrentPrice() {
  const url = 'https://api.coinmarketcap.com/v1/ticker/bitcoin/';
  const request = axios.get(url);

  return {
    type: CURRENT_PRICE,
    payload: request
  };
}

export function fetchDailyPrice() {
  // const url = 'https://min-api.cryptocompare.com/data/histoday?fsym=BTC&tsym=USD&limit=10';
  const url = 'https://api.coindesk.com/v1/bpi/historical/close.json';
  const request = axios.get(url);

  return {
    type: DAILY_PRICE,
    payload: request
  };
}
