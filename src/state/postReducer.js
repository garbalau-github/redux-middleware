const initState = [];

export const postReducer = (state = initState, action) => {
  switch (action.type) {
    case 'FETCH_POSTS':
      return state;
    default:
      return state;
  }
};
