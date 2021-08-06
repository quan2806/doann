const initState = {
  idUser: 0,
};

const userReducer = (state = initState, action) => {
  switch (action.type) {
    case 'ACCOUNT':
      return {idUser: action?.idUser};
    default:
      return state;
  }
};

export default userReducer;
