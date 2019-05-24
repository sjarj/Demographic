import { combineReducers } from 'redux';
import reducer_countries from './reducer_countries';

const rootReducer = combineReducers({
  countryReducer: reducer_countries,
});

export default rootReducer;
