import axios from 'axios';
import {GET_FULL_ANIME_FAILURE, GET_FULL_ANIME_REQUEST, GET_FULL_ANIME_SUCCESS} from '../actionTypes';

export const getFullAnimeAction = id => async dispatch => {
  dispatch({
    type: GET_FULL_ANIME_REQUEST,
  });
  try {
    const response = await axios.get(
      `https://api.jikan.moe/v4/anime/${id}/full`,
    );
    if (response.status === 200) {
      dispatch({
        type: GET_FULL_ANIME_SUCCESS,
        payload: response?.data?.data
      });
    }
  } catch (error) {
    dispatch({
      type: GET_FULL_ANIME_FAILURE,
      payload: error,
    });
  }
};
