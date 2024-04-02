import {
  GET_ANIME_FAILURE,
  GET_ANIME_REQUEST,
  GET_ANIME_SUCCESS,
} from '../actionTypes';

const initinalState = {
  data: [],
  fetching: false,
  error: null,
};

export const getAnimeReducer = (state = initinalState, action) => {
  switch (action.type) {
    case GET_ANIME_REQUEST:
      return {
        ...state,
        fetching: true,
      };
    case GET_ANIME_SUCCESS:
      return {
        ...state,
        fetching: false,
        data: action.payload,
      };
    case GET_ANIME_FAILURE:
      return {
        ...state,
        fetching: false,
        error: action.error,
      };
    default:
      return state;
  }
};
