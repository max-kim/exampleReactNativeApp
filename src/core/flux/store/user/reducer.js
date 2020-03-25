import { types } from './types';

const initialState = {
  userName: 'Eugene',
};

export const user = (state = initialState, action) => {
  switch (action.type) {
    case types.SET_USER_NAME:
      return {
        ...state,
        userName: action.payload,
      };

    default:
      return state;
  }
};
