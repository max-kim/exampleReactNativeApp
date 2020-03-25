import { types } from './types';

const initialState = [];

export const calendar = (state = initialState, { type, payload }) => {
  switch (type) {
    case types.ADD_EVENT:
      return [payload, ...state];

    case types.REMOVE_EVENT:
      return state.filter((id) => id !== payload.id);

    default:
      return state;
  }
};
