import {
  GET_TOP_REVIEWS_FAILURE,
  GET_TOP_REVIEWS_REQUEST,
  GET_TOP_REVIEWS_SUCCESS,
} from '../actionTypes';

const initialState = {
  data: [],
  fetching: false,
  error: null,
};

export default function getTopReviewReducer(state = initialState, action) {
  switch (action.type) {
    case GET_TOP_REVIEWS_REQUEST:
      return {...state, fetching: true};
    case GET_TOP_REVIEWS_SUCCESS:
      return {...state, data: action.payload, fetching: false};
    case GET_TOP_REVIEWS_FAILURE:
      return {...state, error: action.error, fetching: false};
    default:
      return state;
  }
}
