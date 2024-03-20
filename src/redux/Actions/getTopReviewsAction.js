import {
  GET_TOP_REVIEWS_FAILURE,
  GET_TOP_REVIEWS_REQUEST,
  GET_TOP_REVIEWS_SUCCESS,
} from '../actionTypes';
import axios from 'axios';

export const getTopReviewsAction = () => async dispatch => {
  dispatch({
    type: GET_TOP_REVIEWS_REQUEST,
  });
  try {
    const response = await axios.get('https://api.jikan.moe/v4/top/reviews');
    if (response.status === 200) {
      dispatch({
        type: GET_TOP_REVIEWS_SUCCESS,
        payload: response?.data?.data,
      });
    } else {
      throw new Error('Something went wrong');
    }
  } catch (error) {
    dispatch({
      type: GET_TOP_REVIEWS_FAILURE,
      payload: error,
    });
  }
};
