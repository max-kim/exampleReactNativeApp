import { createSelector } from 'reselect';

const medicationList = (state) => state.medication;

export const getMedicationList = createSelector(
  medicationList,
  (state) => state,
);
