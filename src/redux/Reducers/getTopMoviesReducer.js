import {
  GET_MOVIE_FAILURE,
  GET_MOVIE_REQUEST,
  GET_MOVIE_SUCCESS,
} from '../actionTypes';

const initialState = {
  data: [],
  fetching: false,
  error: null,
};
export default function getTopMoviesReducer(state = initialState, action) {
  switch (action.type) {
    case GET_MOVIE_REQUEST:
      return {
        ...state,
        fetching: true,
      };
    case GET_MOVIE_SUCCESS:
      return {
        ...state,
        fetching: false,
        data: action.payload,
      };
    case GET_MOVIE_FAILURE:
      return {
        ...state,
        fetching: false,
        error: action.error,
      };
    default:
      return state;
  }
}
