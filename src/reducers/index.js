import { combineReducers } from 'redux';
import reducer_countries from './reducer_countries';
import reducer_rate_exange from './reducer_rate_exange';

const rootReducer = combineReducers({
  countryReducer: reducer_countries,
  rateExangeReducer: reducer_rate_exange,
});

export default rootReducer;
