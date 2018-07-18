import { combineReducers } from '../../../../../.cache/typescript/2.9/node_modules/redux';

import currentPrice from './reducer_current_price';
import dailyPrice from './reducer_daily_price';

const rootReducer = combineReducers({
  currentPrice: currentPrice,
  data: dailyPrice
});

export default rootReducer;
