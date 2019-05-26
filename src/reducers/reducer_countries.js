import { GET_COUNTRIES } from '../actions';

const initialState = { countries: [] };

export default (state = initialState, action) => {
  switch (action.type) {
    case GET_COUNTRIES:
      return { ...state, countries: getCountriesInfo(action.payload) };

    default:
      return state;
  }
};

const getCountriesInfo = data => {
  return data
    .map(c => {
      return {
        name: c.name,
        currencyCode: c.currencies[0].code,
        flag: c.flag,
        code: c.alpha3Code,
      };
    })
    .filter(c => {
      return c.currencyCode !== `USD`;
    });
};