import { combineReducers } from 'redux';

import singlePrice from './reducer_sigle_price';

const rootReducer = combineReducers({
  singlePrice: singlePrice
});

export default rootReducer;
