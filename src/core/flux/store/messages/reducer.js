import { types } from './types';

const initialState = [];

export const messages = (state = initialState, { type, payload }) => {
  switch (type) {
    case types.ADD_MESSAGE:
      return [payload, ...state];

    case types.REMOVE_MESSAGE:
      return state.filter((id) => id !== payload.id);

    default:
      return state;
  }
};
