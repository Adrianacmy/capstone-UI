import { CURRENT_PRICE } from '../actions';

export default function(state = [], action) {
  switch (action.type) {
    case CURRENT_PRICE:
      // console.log(action.payload.data)
      return Object.assign([], state, action.payload.data);
    default:
      return state;
  }
}
