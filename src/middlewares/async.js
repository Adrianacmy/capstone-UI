// middleware boilerplate

export default ({ dispatch }) =>
  // next is the reference to the next middleware inside the chain
  next =>
    // action is the real action returned from the aciton creator
    action => {
      // check to see if the action has a promise on its payload
      // if it does, then wait for it to resolve
      // if it doesnot, the send the action to the next middleware

      if (!action.payload || !action.payload.then) {
        // if it is not a promise
        return next(action);
      }
      action.payload.then(response => {
        const newAction = { ...action, payload: response };
        dispatch(newAction);
      });
    };
