import {configureStore} from '@reduxjs/toolkit';
import {getTopAnimeReducer} from './Reducers/getTopAnimeReducer';
import getTopMoviesReducer from './Reducers/getTopMoviesReducer';
import getTopMangaReducer from './Reducers/getTopMangaReducer';
import getTopReviewReducer from './Reducers/getTopReviewReducer';
import {getAnimeReducer} from './Reducers/getAnimeReducer';
import { getFullAnimeReducer } from './Reducers/getFullAnimeReducer';

export const store = configureStore({
  reducer: {
    getTopAnime: getTopAnimeReducer,
    getTopMovies: getTopMoviesReducer,
    getTopManga: getTopMangaReducer,
    getTopReview: getTopReviewReducer,
    getAllAnime: getAnimeReducer,
    getFullAnime: getFullAnimeReducer,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      immutableCheck: {warnAfter: 200},
      serializableCheck: {warnAfter: 200},
    }),
});
