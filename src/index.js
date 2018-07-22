import React from '../../../../.cache/typescript/2.9/node_modules/@types/react';
import ReactDOM from '../../../../.cache/typescript/2.9/node_modules/@types/react-dom';
import { Provider } from '../../../../.cache/typescript/2.9/node_modules/@types/react-redux';
import {
  createStore,
  applyMiddleware
} from '../../../../.cache/typescript/2.9/node_modules/redux';
import reduxThunk from 'redux-thunk';
import {
  Route,
  HashRouter,
  Switch
} from '../../../../.cache/typescript/2.9/node_modules/@types/react-router-dom';
import promise from '../../../../.cache/typescript/2.9/node_modules/@types/redux-promise';

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
import SingOut from './components/auth/singout';

import rootReducer from './reducers';

// const createStoreWithMiddleware = applyMiddleware(promise)(createStore);
const store = createStore(
  rootReducer,
  { auth: { authenticated: localStorage.getItem('token') } },
  applyMiddleware(reduxThunk)
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
          <Route path="/signout" component={SingOut} />
        </Switch>
      </div>
    </HashRouter>
  </Provider>,
  document.getElementById('root')
);
