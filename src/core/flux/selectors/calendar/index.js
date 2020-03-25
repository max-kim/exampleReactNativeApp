import { createSelector } from 'reselect';

const calendar = (state) => state.calendar;

export const getEventsList = createSelector(
  calendar,
  (state) => state,
);
