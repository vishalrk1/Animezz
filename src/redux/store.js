import {configureStore} from '@reduxjs/toolkit';
import {getTopAnimeReducer} from './Reducers/getTopAnimeReducer';
import getTopMoviesReducer from './Reducers/getTopMoviesReducer';
import getTopMangaReducer from './Reducers/getTopMangaReducer';
import getTopReviewReducer from './Reducers/getTopReviewReducer';

export const store = configureStore({
  reducer: {
    getTopAnime: getTopAnimeReducer,
    getTopMovies: getTopMoviesReducer,
    getTopManga: getTopMangaReducer,
    getTopReview: getTopReviewReducer,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      immutableCheck: {warnAfter: 128},
      serializableCheck: {warnAfter: 128},
    }),
});
