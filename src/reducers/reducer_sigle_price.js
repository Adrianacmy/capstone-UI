import { SIGLE_PRICE } from '../actions/index';

export default function(state = {}, action) {
  switch (action.type) {
    case SIGLE_PRICE:
      return Object.assign({}, state, action.payload.data);
    default:
      return state;
  }
}
