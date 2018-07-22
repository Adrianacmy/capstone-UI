import { combineReducers } from '../../../../../.cache/typescript/2.9/node_modules/redux';
import { reducer as fromReducer } from 'redux-form';
import currentPrice from './reducer_current_price';
import dailyPrice from './reducer_daily_price';
import auth from './auth';

const rootReducer = combineReducers({
  currentPrice: currentPrice,
  data: dailyPrice,
  auth
});

export default rootReducer;
