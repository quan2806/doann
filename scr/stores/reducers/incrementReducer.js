const initState = {
  number: 0,
};

const incrementReducer = (state = initState, action) => {
  switch (action.type) {
    case 'UP':
      return {number: state.number + 1};
    case 'DOWN':
      return {number: state.number - 1};
    case 'CHANGE':
      return {number: action?.payload?.number};
    default:
      return state;
  }
};

export default incrementReducer;
