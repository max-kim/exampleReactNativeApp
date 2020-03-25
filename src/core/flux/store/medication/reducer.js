import { types } from './types';

const initialState = [
  {
    id: 'mock1', title: 'analgin', time: '12:03', checked: true,
  },
  {
    id: 'mock2', title: 'aspirin', time: '09:00', checked: true,
  },
  {
    id: 'mock3', title: 'paracetamol', time: '08:30', checked: false,
  },
];

export const medication = (state = initialState, { type, payload }) => {
  switch (type) {
    case types.ADD_DRUG:
      return [payload, ...state];

    case types.UPDATE_DRUG_ITEM:
      return state.map((item) => (
        item.id === payload.id ? { ...item, ...payload } : item
      ));

    case types.REMOVE_DRUG:
      return state.filter((id) => id !== payload.id);

    default:
      return state;
  }
};
