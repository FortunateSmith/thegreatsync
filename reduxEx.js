// Initial state
const initialState = {
    counter: 0,
  };
  
  // Action type handlers
  const actionHandlers = {
    INCREMENT: (state) => ({
      ...state,
      counter: state.counter + 1,
    }),
    DECREMENT: (state) => ({
      ...state,
      counter: state.counter - 1,
    }),
  };
  
  // Reducer function
  const counterReducer = (state = initialState, action) => {
  
    const actionHandler = actionHandlers[action.type];
  
    return actionHandler ? actionHandler(state) : state;
  };

  console.log(counterReducer(initialState, 1));