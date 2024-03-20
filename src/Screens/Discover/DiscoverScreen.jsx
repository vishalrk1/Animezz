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

const DiscoverScreen = () => {
  const {colors} = useTheme();
  const dispatch = useDispatch();
  const {data, fetching} = useSelector(state => state.getTopAnime);
  const {data: moviesData, fetching: moviesFetching} = useSelector(
    state => state.getTopMovies,
  );
  const {data: mangaData} = useSelector(state => state.getTopManga);

  useEffect(() => {
    if (data.length === 0) {
      dispatch(getTopAnimeAction('airing'));
    } else if (moviesData.length === 0) {
      dispatch(getTopMoviesAction('airing'));
    } else if (mangaData.length === 0) {
      dispatch(getTopMangaAction());
    }
  }, [data, moviesData, mangaData]);

  return (
    <ScrollView>
      <HomeScreenLane title={'Top Anime'} data={data} />
      <HomeScreenLane title={'Top Movies'} data={moviesData} />
      <HomeScreenLane title={'Top Manga'} data={mangaData} />
      <SafeAreaView>
        
      </SafeAreaView>
    </ScrollView>
  );
};

export default DiscoverScreen;