import { types } from './types';

export const messagesActions = Object.freeze({
  addMessage: (payload) => ({
    type: types.ADD_MESSAGE,
    payload,
  }),
  removeMessage: (payload) => ({
    type: types.REMOVE_MESSAGE,
    payload,
  }),
});
