import React from 'react';
import {Image, Text, TouchableOpacity} from 'react-native';
import {useNavigation} from '@react-navigation/native';

const AnimeCard = ({item}) => {
  const navigation = useNavigation();
  return (
    <TouchableOpacity
      style={{
        borderRadius: 8,
        alignItems: 'flex-start',
        width: 120,
        marginVertical: 12,
      }}
      onPress={() => {
        // console.log(item.mal_id)
        navigation.navigate('Detail', {animeId: item.mal_id});
      }}>
      <Image
        source={{uri: item?.images?.webp?.image_url}}
        style={{width: 100, height: 140, borderRadius: 8}}
      />
      <Text
        style={{
          color: 'white',
          textAlign: 'left',
          fontSize: 12,
          fontWeight: '300',
          marginTop: 3,
          paddingRight: 8,
        }}
        numberOfLines={2}>
        {item.title}
      </Text>
    </TouchableOpacity>
  );
};

export default AnimeCard;
