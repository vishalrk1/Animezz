import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {useTheme} from '@react-navigation/native';
import {
  ActivityIndicator,
  FlatList,
  Image,
  ScrollView,
  Text,
  TouchableHighlight,
  TouchableOpacity,
  View,
} from 'react-native';
import {getAnimeAction} from '../../redux/Actions/getAnimeAction';
import {SafeAreaView} from 'react-native-safe-area-context';
import AnimeCard from '../../Components/Cards/AnimeCard';

const ExploreScreen = () => {
  const {colors} = useTheme();
  const dispatch = useDispatch();
  const [selectedFilter, setSelectedFilter] = useState('airing');
  const [page, setPage] = useState(1);
  const filters = ['airing', 'upcoming', 'bypopularity', 'Adult'];
  const {data, fetching} = useSelector(state => state.getAllAnime);

  useEffect(() => {
    if (selectedFilter === 'Adult') {
      dispatch(getAnimeAction('airing', 'rx', 'tv', true, page));
    } else {
      dispatch(getAnimeAction(selectedFilter, 'pg13', 'tv', false, page));
    }
  }, [selectedFilter]);

  return (
    <View>
      <View
        style={{
          backgroundColor: colors.card,
          paddingHorizontal: 12,
          paddingVertical: 4,
        }}>
        <FlatList
          data={filters}
          renderItem={({item}) => {
            return (
              <TouchableHighlight
                onPress={() => {
                  setSelectedFilter(item);
                }}
                underlayColor={colors.background}
                style={{
                  paddingVertical: 10,
                  paddingHorizontal: 16,
                  borderRadius: 10,
                  backgroundColor: colors.background,
                  marginHorizontal: 5,
                  marginVertical: 5,
                  borderWidth: 1,
                  borderColor:
                    item === selectedFilter ? colors.yelloColor : colors.border,
                }}>
                <Text
                  style={{
                    color: colors.text,
                    fontSize: 14,
                    fontWeight: '500',
                  }}>
                  {item}
                </Text>
              </TouchableHighlight>
            );
          }}
          horizontal={true}
          showsHorizontalScrollIndicator={false}
        />
      </View>
      {fetching ? (
        <View
          style={{
            justifyContent: 'center',
            alignItems: 'center',
            height: '100%',
          }}>
          <ActivityIndicator size="large" color={colors.yelloColor} />
        </View>
      ) : (
        <FlatList
          numColumns={3}
          style={{marginTop: 16, marginLeft: 16, gap: 3, marginBottom: 50}}
          showsHorizontalScrollIndicator={false}
          showsVerticalScrollIndicator={false}
          data={data}
          renderItem={({item}) => {
            return <AnimeCard item={item} />;
          }}
        />
      )}
    </View>
  );
};

export default ExploreScreen;
