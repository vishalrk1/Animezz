import axios from 'axios';
import {
  GET_TOP_ANIME_FAILURE,
  GET_TOP_ANIME_REQUEST,
  GET_TOP_ANIME_SUCCESS,
} from '../actionTypes';

export const getTopAnimeAction = (filter, rating) => async dispatch => {
  dispatch({
    type: GET_TOP_ANIME_REQUEST,
  });
  try {
    const response = await axios.get(
      `https://api.jikan.moe/v4/top/anime?filter=${filter}&rating=${rating}&type=tv`,
    );
    if (response.status === 200) {
      dispatch({
        type: GET_TOP_ANIME_SUCCESS,
        payload: response?.data?.data,
      });
    } else {
      throw new Error('Something went wrong');
    }
  } catch (error) {
    console.log(error);
    dispatch({
      type: GET_TOP_ANIME_FAILURE,
      error: error,
    });
  }
};
