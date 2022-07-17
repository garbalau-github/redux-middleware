export const countReducer = (state = 0, action) => {
  console.log('Yay, countReducer ran!');
  switch (action.type) {
    case 'DECREMENT':
      return state - 1;
    case 'INCREMENT':
      return (state = state + 1);
    default:
      return state;
  }
};
