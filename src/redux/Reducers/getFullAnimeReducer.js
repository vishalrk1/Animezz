import {
  GET_ANIME_FAILURE,
  GET_ANIME_REQUEST,
  GET_ANIME_SUCCESS,
  GET_FULL_ANIME_FAILURE,
  GET_FULL_ANIME_REQUEST,
  GET_FULL_ANIME_SUCCESS,
} from '../actionTypes';

const initialState = {
  data: {},
  fetching: false,
  error: null,
};

export const getFullAnimeReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_FULL_ANIME_REQUEST:
      return {
        ...state,
        fetching: true,
      };
    case GET_FULL_ANIME_SUCCESS:
      return {
        ...state,
        fetching: false,
        data: action.payload,
      };
    case GET_FULL_ANIME_FAILURE:
      return {
        ...state,
        fetching: false,
        error: action.error,
      };
    default:
      return state;
  }
};
