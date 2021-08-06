export const onUpNumber = payload => {
  return {
    type: 'UP',
  };
};

export const onDownNumber = payload => {
  return {
    type: 'DOWN',
  };
};

export const onChangeNumber = payload => {
  return {
    type: 'CHANGE',
    payload: payload,
  };
};
