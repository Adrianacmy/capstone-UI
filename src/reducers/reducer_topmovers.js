import { TOP_MOVERS } from '../actions/types';

export default function(state = [], action) {
  switch (action.type) {
    case TOP_MOVERS:
      // console.log(action.payload)
      return Object.assign([], state, action.payload.data.Data);
    default:
      return state;
  }
}
