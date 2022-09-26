import { createStore, combineReducers } from 'redux';
import registrationReducer from './reducers/registrationReducer';
import cardsReducer from './reducers/cardsReducer';

const rootReducer = combineReducers({
  registrationReducer,
  cardsReducer
});

const store = createStore(rootReducer);

export default store;