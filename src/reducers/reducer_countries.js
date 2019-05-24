import { GET_COUNTRIES } from '../actions';

const initialState = { countries: [] };

export default (state = initialState, action) => {
  console.log(state);
  switch (action.type) {
    case GET_COUNTRIES:
      return { ...state, countries: action.payload };

    default:
      return state;
  }
};
