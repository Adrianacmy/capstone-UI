import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { Route, HashRouter, Switch } from 'react-router-dom';
import promise from 'redux-promise';

import SinglePrice from './components/single_price';

import rootReducer from './reducers';

const createStoreWithMiddleware = applyMiddleware(promise)(createStore);

ReactDOM.render(
  <Provider store={createStoreWithMiddleware(rootReducer)}>
    <HashRouter>
      <div>
        <Switch>
          <Route path="/" component={SinglePrice} />
        </Switch>
      </div>
    </HashRouter>
  </Provider>,
  document.getElementById('root')
);
