import axios from 'axios';
import { GET_TOP_MANGA_FAILURE, GET_TOP_MANGA_REQUEST, GET_TOP_MANGA_SUCCESS } from '../actionTypes';


export const getTopMangaAction = () => async dispatch => {
  dispatch({
    type: GET_TOP_MANGA_REQUEST,
  });
  try {
    const response = await axios.get(
      `https://api.jikan.moe/v4/top/manga?filter=bypopularity`,
    );
    if (response.status === 200) {
      dispatch({
        type: GET_TOP_MANGA_SUCCESS,
        payload: response?.data?.data,
      });
    } else {
      throw new Error('Something went wrong');
    }
  } catch (error) {
    console.log(error);
    dispatch({
      type: GET_TOP_MANGA_FAILURE,
      error: error,
    });
  }
};
