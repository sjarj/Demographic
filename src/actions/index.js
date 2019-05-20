import axios from 'axios';

const GET_COUNTIRS = `GET_COUNTIRS`;
export const fetchCountries = () => {
  return dispatch => {
    axios.get(`https://restcountries.eu/rest/v2/all`).then(axiosResponse => {
      dispatch({ type: GET_COUNTIRS, payload: axiosResponse.data });
    });
  };
};
