import React, {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {
  FlatList,
  Image,
  ScrollView,
  Text,
  Touchable,
  TouchableOpacity,
} from 'react-native';
import {useTheme} from '@react-navigation/native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {getTopAnimeAction} from '../../redux/Actions/getTopAnimeAction';
import HomeScreenLane from '../../Components/lanes/HomeCatLanke';
import {getTopMoviesAction} from '../../redux/Actions/getTopMoviesAction';
import {getTopMangaAction} from '../../redux/Actions/getTopMangaAction';
import {getTopReviewsAction} from '../../redux/Actions/getTopReviewsAction';
import HomeReviewLane from '../../Components/lanes/HomeReviewLane';

const DiscoverScreen = () => {
  const {colors} = useTheme();
  const dispatch = useDispatch();
  const {data, fetching} = useSelector(state => state.getTopAnime);
  const {data: moviesData, fetching: moviesFetching} = useSelector(
    state => state.getTopMovies,
  );
  const {data: mangaData} = useSelector(state => state.getTopManga);
  const {data: reviewData} = useSelector(state => state.getTopReview);

  useEffect(() => {
    console.log(data.length)
    if (data?.length === 0) {
      dispatch(getTopAnimeAction('bypopularity', 'pg13'));
    } else if (moviesData?.length === 0) {
      dispatch(getTopMoviesAction('bypopularity'));
    } else if (mangaData?.length === 0) {
      dispatch(getTopMangaAction());
    } else if (reviewData?.length === 0) {
      dispatch(getTopReviewsAction());
    }
  }, [data, moviesData, mangaData, reviewData]);

  return (
    <ScrollView>
      <HomeScreenLane title={'Top Anime'} data={data} />
      <HomeScreenLane title={'Top Movies'} data={moviesData} />
      <HomeScreenLane title={'Top Manga'} data={mangaData} />
      <HomeReviewLane reviewData={reviewData} />
    </ScrollView>
  );
};

export default DiscoverScreen;
