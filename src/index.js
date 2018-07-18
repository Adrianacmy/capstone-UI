import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { Route, HashRouter, Switch } from 'react-router-dom';
import promise from 'redux-promise';

import './index.css';

// import CurrentPrice from './components/current_price';
// import DailyPrice from './components/daily_price';
// import LineChart from './components/line_chart';
import line_chart from './components/charts/line_chart';
import info from './components/charts/info';
import NavBar from './components/navbar/navbar';
import Home from './components/home';

import rootReducer from './reducers';

const createStoreWithMiddleware = applyMiddleware(promise)(createStore);

ReactDOM.render(
  <Provider store={createStoreWithMiddleware(rootReducer)}>
    <HashRouter>
      <div>
        <NavBar />
        <Switch>
          <Route path="/" exact component={Home} />
        </Switch>
      </div>
    </HashRouter>
  </Provider>,
  document.getElementById('root')
);
