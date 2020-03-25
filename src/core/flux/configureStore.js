import { createStore, combineReducers } from 'redux';

import { user } from './store/user/reducer';
import { messages } from './store/messages/reducer';
import { medication } from './store/medication/reducer';
import { calendar } from './store/calendar/reducer';

const rootReducer = combineReducers({
  user,
  messages,
  medication,
  calendar,
});

const store = createStore(rootReducer);

export default store;
