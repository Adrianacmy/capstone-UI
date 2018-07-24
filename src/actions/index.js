import axios from 'axios';

import {
  AUTH_USER,
  AUTH_ERROR,
  RECENT_NEWS,
  TOP_MOVERS,
  DAILY_PRICE_ERROR,
  CURRENT_PRICE,
  DAILY_PRICE
} from './types';

export async function fetchTopMovers() {
  const url =
    'https://min-api.cryptocompare.com/data/top/totalvol?limit=30&tsym=USD';
  const request = await axios.get(url);

  return {
    type: TOP_MOVERS,
    payload: request
  };
}

export function fetchNews() {
  const url = 'https://min-api.cryptocompare.com/data/v2/news/?lang=EN';
  const request = axios.get(url);

  return {
    type: RECENT_NEWS,
    payload: request
  };
}

export function fetchCurrentPrice() {
  const url = 'https://api.coinmarketcap.com/v1/ticker/bitcoin/';
  const request = axios.get(url);

  return {
    type: CURRENT_PRICE,
    payload: request
  };
}

export async function fetchDailyPrice(sym) {
  const url = `https://min-api.cryptocompare.com/data/histoday?fsym=${sym}&tsym=USD&limit=10`;
  const request = await axios.get(url);

  return {
    type: DAILY_PRICE,
    payload: request,
    sym: sym
  };
}

// export const fetchDailyPrice = (sym) => {
//   async dispatch => {
//     try {
//       const response = await axios.get( `https://min-api.cryptocompare.com/data/histoday?fsym=${sym}&tsym=USD&limit=10`);
//       dispatch({type: DAILY_PRICE, payload: response.data.Data, sym: sym});
//     }catch (e) {
//       dispatch({type: DAILY_PRICE_ERROR, payload: 'something is wrong' })
//     }
//   }
// }

//redux-promise can only return one object

export const signup = (formProps, callback) =>
  //redux thunk allow to return different value types from action creator
  // can return an object or a function
  // if return a function, it will be auto dispatched
  // it can return as many actions as I want, as many times as I want
  async dispatch => {
    try {
      const response = await axios.post(
        'http://enbazaar.herokuapp.com/accounts/register',
        formProps
      );
      dispatch({ type: AUTH_USER, payload: response.data.token }),
        localStorage.setItem('token', response.data.token);
      callback();
    } catch (e) {
      dispatch({ type: AUTH_ERROR, payload: 'invalid email' });
    }
  };

export const signin = (formProps, callback) => async dispatch => {
  try {
    const response = await axios.post(
      'http://enbazaar.herokuapp.com/accounts/login',
      formProps
    );
    dispatch({ type: AUTH_USER, payload: response.data.token }),
      localStorage.setItem('token', response.data.token);
    callback();
  } catch (e) {
    dispatch({ type: AUTH_ERROR, payload: 'invalid login credentials' });
  }
};

export const signout = () => {
  localStorage.removeItem('token');

  return {
    type: AUTH_USER,
    payload: ''
  };
};
