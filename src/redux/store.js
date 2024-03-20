import {configureStore} from '@reduxjs/toolkit';
import {getTopAnimeReducer} from './Reducers/getTopAnimeReducer';
import getTopMoviesReducer from './Reducers/getTopMoviesReducer';
import getTopMangaReducer from './Reducers/getTopMangaReducer';

export const store = configureStore({
  reducer: {
    getTopAnime: getTopAnimeReducer,
    getTopMovies: getTopMoviesReducer,
    getTopManga: getTopMangaReducer,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      immutableCheck: {warnAfter: 128},
      serializableCheck: {warnAfter: 128},
    }),
});
