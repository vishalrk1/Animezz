import {
  GET_TOP_MANGA_FAILURE,
  GET_TOP_MANGA_REQUEST,
  GET_TOP_MANGA_SUCCESS,
} from '../actionTypes';

const initialState = {
  data: [],
  fetching: false,
  error: null,
};

export default function getTopMangaReducer(state = initialState, action) {
  switch (action.type) {
    case GET_TOP_MANGA_REQUEST:
      return {
        ...state,
        fetching: true,
      };
    case GET_TOP_MANGA_SUCCESS:
      return {
        ...state,
        fetching: false,
        data: action.payload,
      };
    case GET_TOP_MANGA_FAILURE:
      return {
        ...state,
        fetching: false,
        error: action.error,
      };
    default:
      return state;
  }
}
