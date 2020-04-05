export const initialState = {
  isStarted: false,
  counter: 0,
  delay: 1000
};

export const counterReducer = (state, action) => {
  switch (action.type) {
    case 'START_COUNTER':
      return {
        ...state,
        isStarted: !state.isStarted
      };
    case 'STOP_COUNTER':
      return initialState;
    case 'ADD_NUMBER':
      return {
        ...state,
        counter: state.counter + 1
      };
    case 'SET_INTERVAL':
      return {
        ...state,
        delay: action.interval
      };
    default:
      return state;
  }
};