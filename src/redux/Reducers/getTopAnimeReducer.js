import {
  GET_TOP_ANIME_FAILURE,
  GET_TOP_ANIME_REQUEST,
  GET_TOP_ANIME_SUCCESS,
} from '../actionTypes';

const initinalState = {
  data: [],
  fetching: false,
  error: null,
};

export const getTopAnimeReducer = (state = initinalState, action) => {
  switch (action.type) {
    case GET_TOP_ANIME_REQUEST:
      return {
        ...state,
        fetching: true,
      };
    case GET_TOP_ANIME_SUCCESS:
      return {
        ...state,
        fetching: false,
        data: action.payload,
      };
    case GET_TOP_ANIME_FAILURE:
      return {
        ...state,
        fetching: false,
        error: action.error,
      };
    default:
      return state;
  }
};
