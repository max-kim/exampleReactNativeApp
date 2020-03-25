import { types } from './types';

export const medicationActions = Object.freeze({
  addDrug: (payload) => ({
    type: types.ADD_DRUG,
    payload,
  }),
  updateDrug: (payload) => ({
    type: types.UPDATE_DRUG_ITEM,
    payload,
  }),
  removeDrug: (payload) => ({
    type: types.REMOVE_DRUG,
    payload,
  }),
});
