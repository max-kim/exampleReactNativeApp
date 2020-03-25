import { types } from './types';

export const userActions = Object.freeze({
  setUserName: (payload) => ({
    type: types.SET_USER_NAME,
    payload,
  }),
});
