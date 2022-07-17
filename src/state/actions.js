export const decrement = (count) => {
  return {
    type: 'DECREMENT',
    payload: count,
  };
};

export const increment = (count) => {
  return {
    type: 'INCREMENT',
    payload: count,
  };
};
