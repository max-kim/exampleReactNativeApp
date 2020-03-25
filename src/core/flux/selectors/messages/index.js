import { createSelector } from 'reselect';

const messages = (state) => state.messages;

export const getMessagesList = createSelector(
  messages,
  (messagesList) => messagesList,
);
