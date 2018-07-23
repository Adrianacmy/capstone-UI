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
import NavBar from './components/layouts/navbar/navbar';
import Home from './components/home';

import Welcome from './components/auth/welcome';
import Signup from './components/auth/signup';
import SignOut from './components/auth/singout';
import SignIn from './components/auth/singout';
import async from './middlewares/async';

import rootReducer from './reducers';

// const createStoreWithMiddleware = applyMiddleware(promise)(createStore);
const store = createStore(
  rootReducer,
  { auth: { authenticated: localStorage.getItem('token') } },
  applyMiddleware(reduxThunk, promise)
);

ReactDOM.render(
  <Provider store={store}>
    <HashRouter>
      <div>
        <NavBar />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/welcome" component={Welcome} />
          <Route path="/signup" component={Signup} />
          <Route path="/signout" component={SignOut} />
          <Route path="/signin" component={SignIn} />
        </Switch>
      </div>
    </HashRouter>
  </Provider>,
  document.getElementById('root')
);
