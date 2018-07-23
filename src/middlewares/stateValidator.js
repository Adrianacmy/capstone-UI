import tv4 from 'tv4';
import stateSchema from './stateSchema';

export default ({ dispatch, getState }) => next => action => {
  // the action will directly go to reducer and update state
  next(action);

  let valid = tv4.validate(getState(), stateSchema);
  if (!valid) {
    cosole.warn('invalid state type');
  }
};

// then import this middleware in index.js and add it to applymiddleware()
