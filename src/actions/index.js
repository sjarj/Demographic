import axios from 'axios';

export const GET_COUNTRIES = `GET_COUNTRIES`;
export const GET_RATE_EXANGE = `GET_RATE_EXANGE`;

export const fetchCountries = () => {
  return dispatch => {
    axios.get(`https://restcountries.eu/rest/v2/all`).then(axiosResponse => {
      dispatch({ type: GET_COUNTRIES, payload: axiosResponse.data });
    });
  };
};

export const fetchRateExange = country => {
  return dispatch => {
    axios
      .get(
        `https://api.exchangeratesapi.io/history?start_at=${getLastMonth()}&end_at=${formatDate(
          new Date()
        )}&base=USD&symbols=${country.currencyCode}`
      )
      .then(axiosResponse => {
        dispatch({
          type: GET_RATE_EXANGE,
          payload: { rate: axiosResponse.data.rates, ...country },
        });
      });
  };
};

const formatDate = date => {
  return date.toISOString().split(`T`)[0];
};

const getLastMonth = () => {
  let now = new Date();
  now.setMonth(now.getMonth() - 1);
  return formatDate(now);
};
