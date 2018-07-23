import axios from 'axios';

import { AUTH_USER, AUTH_ERROR, RECENT_NEWS } from './types';

export const CURRENT_PRICE = 'current_price';
export const DAILY_PRICE = 'daily_price';
// export const_PRICE = 'daily_price';

// export const fetchNews = () => {
//   async dispatch => {
//     try {
//       const response = await axios.get('https://min-api.cryptocompare.com/data/v2/news/?lang=EN');
//       dispatch({type: RECENT_NEWS, payload: response.data});
//     } catch(e){
//       dispatch({type: RECENT_NEWS, payload: 'no news'});
//     }
//   }
// };

export function fetchNews() {
  const url = 'https://min-api.cryptocompare.com/data/v2/news/?lang=EN';
  const request = axios.get(url);

  return {
    type: RECENT_NEWS,
    payload: request
  };
}

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
