import { RECENT_NEWS } from '../actions/types';

export default function(state = [], action) {
  switch (action.type) {
    case RECENT_NEWS:
      // console.log(action.payload)
      return Object.assign([], state, action.payload.data.Data);
    default:
      return state;
  }
}
