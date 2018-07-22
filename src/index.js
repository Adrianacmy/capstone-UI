import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import reduxThunk from 'redux-thunk';
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

import Welcome from './components/auth/welcome';
import Signup from './components/auth/signup';

import rootReducer from './reducers';

// const createStoreWithMiddleware = applyMiddleware(promise)(createStore);
const store = createStore(rootReducer, {}, applyMiddleware(reduxThunk));

ReactDOM.render(
  <Provider store={store}>
    <HashRouter>
      <div>
        <NavBar />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/welcome" component={Welcome} />
          <Route path="/singup" component={Signup} />
        </Switch>
      </div>
    </HashRouter>
  </Provider>,
  document.getElementById('root')
);
