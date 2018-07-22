import { combineReducers } from '../../../../../.cache/typescript/2.9/node_modules/redux';
import { reducer as fromReducer } from '../../../../../.cache/typescript/2.9/node_modules/@types/redux-form';
import currentPrice from './reducer_current_price';
import dailyPrice from './reducer_daily_price';
import auth from './reducer_auth';

const rootReducer = combineReducers({
  currentPrice: currentPrice,
  data: dailyPrice,
  auth
});

export default rootReducer;
