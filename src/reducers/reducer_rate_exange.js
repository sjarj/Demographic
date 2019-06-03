import { GET_RATE_EXANGE } from '../actions';

const initialState = {
  rateExangeList: [],
};

export default (rateReducerExange = initialState, action) => {
  switch (action.type) {
    case GET_RATE_EXANGE:
      return {
        ...rateReducerExange,
        rateExangeList: [action.payload, ...rateReducerExange.rateExangeList],
      };
    default:
      return rateReducerExange;
  }
};
