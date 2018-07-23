import { combineReducers } from 'redux';
import { reducer as fromReducer } from 'redux-form';
import currentPrice from './reducer_current_price';
import dailyPrice from './reducer_daily_price';
import recentNews from './reducer_news';
import topMovers from './reducer_topmovers';
import auth from './reducer_auth';

const rootReducer = combineReducers({
  currentPrice: currentPrice,
  data: dailyPrice,
  auth,
  recentNews,
  topMovers
});

export default rootReducer;
