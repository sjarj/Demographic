import axios from 'axios';

export const GET_COUNTRIES = `GET_COUNTRIES`;

export const fetchCountries = () => {
  return dispatch => {
    axios.get(`https://restcountries.eu/rest/v2/all`).then(axiosResponse => {
      dispatch({ type: GET_COUNTRIES, payload: axiosResponse.data });
    });
  };
};
