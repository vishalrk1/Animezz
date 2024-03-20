import axios from 'axios';
import {
  GET_MOVIE_FAILURE,
  GET_MOVIE_REQUEST,
  GET_MOVIE_SUCCESS,
} from '../actionTypes';

export const getTopMoviesAction = filter => async dispatch => {
  dispatch({
    type: GET_MOVIE_REQUEST,
  });
  try {
    const response = await axios.get(
      `https://api.jikan.moe/v4/top/anime?type=movie`,
    );
    if (response.status === 200) {
      dispatch({
        type: GET_MOVIE_SUCCESS,
        payload: response?.data?.data,
      });
    } else {
      throw new Error('Something went wrong');
    }
  } catch (error) {
    console.log(error);
    dispatch({
      type: GET_MOVIE_FAILURE,
      error: error,
    });
  }
};
