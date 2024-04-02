import axios from 'axios';
import {
  GET_ANIME_FAILURE,
  GET_ANIME_REQUEST,
  GET_ANIME_SUCCESS,
} from '../actionTypes';

export const getAnimeAction =
  (filter, rating, type, isHentai = false, page) =>
  async dispatch => {
    dispatch({
      type: GET_ANIME_REQUEST,
    });

    try {
      const response = !isHentai
        ? await axios.get(
            `https://api.jikan.moe/v4/top/anime?filter=${filter}&rating=${rating}&type=${type}&page=${page}`,
          )
        : await axios.get(
            `https://api.jikan.moe/v4/top/anime?filter=airing&rating=rx&page=${page}`,
          );
      if (response.status === 200) {
        dispatch({
          type: GET_ANIME_SUCCESS,
          payload: response?.data?.data,
        });
      } else {
        throw new Error('Something went wrong');
      }
    } catch (error) {
      console.log(error);
      dispatch({
        type: GET_ANIME_FAILURE,
        error: error,
      });
    }
  };
