import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { Route, HashRouter, Switch } from 'react-router-dom';
import promise from 'redux-promise';

import CurrentPrice from './components/current_price';
import DailyPrice from './components/daily_price';
import LineChart from './components/line_chart';
import App from './App';

import rootReducer from './reducers';

const createStoreWithMiddleware = applyMiddleware(promise)(createStore);

ReactDOM.render(
  <Provider store={createStoreWithMiddleware(rootReducer)}>
    <HashRouter>
      <div>
        <Switch>
          <Route path="/current" component={CurrentPrice} />
          <Route path="/" exact component={App} />
        </Switch>
      </div>
    </HashRouter>
  </Provider>,
  document.getElementById('root')
);
