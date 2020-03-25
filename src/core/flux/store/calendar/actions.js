import { types } from './types';

export const calendarActions = Object.freeze({
  addEvent: (payload) => ({
    type: types.ADD_EVENT,
    payload,
  }),
  removeEvent: (payload) => ({
    type: types.REMOVE_EVENT,
    payload,
  }),
});
