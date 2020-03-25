import { createSelector } from 'reselect';

const user = (state) => state.user;

export const getUserData = createSelector(
  user,
  (userData) => userData,
);
