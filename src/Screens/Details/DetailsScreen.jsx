import React, {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {useTheme} from '@react-navigation/native';
import {Image, ScrollView, Text, View} from 'react-native';
import {getFullAnimeAction} from '../../redux/Actions/getFullAnimeAction';
import {SafeAreaView} from 'react-native-safe-area-context';
import DetailImageSection from './sections/ImageSection';

import Icon from 'react-native-vector-icons/FontAwesome';
import StatsSection from './sections/StatsSection';

const DetailsScreen = ({route}) => {
  const {animeId} = route.params;
  const {colors} = useTheme();
  const dispatch = useDispatch();
  const {data} = useSelector(state => state.getFullAnime);

  useEffect(() => {
    dispatch(getFullAnimeAction(animeId));
  }, [animeId]);

  return (
    <ScrollView>
      <SafeAreaView
        style={{
          flexDirection: 'row',
          paddingHorizontal: 12,
          paddingVertical: 16,
        }}>
        <DetailImageSection images={data?.images} />
        <StatsSection data={data} />
      </SafeAreaView>
    </ScrollView>
  );
};

export default DetailsScreen;
