import React from 'react';
import {FlatList, Image, Text, TouchableOpacity} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';

const HomeScreenLane = ({title, data}) => {
  return (
    <SafeAreaView>
      <Text
        style={{
          fontSize: 18,
          fontWeight: 'bold',
          textAlign: 'left',
          marginTop: 16,
          marginLeft: 16,
          color: 'white',
        }}>
        {title}
      </Text>
      <FlatList
        horizontal
        style={{marginTop: 16, marginLeft: 16, gap: 3}}
        showsHorizontalScrollIndicator={false}
        data={data}
        renderItem={({item}) => {
          return (
            <TouchableOpacity
              style={{
                borderRadius: 8,
                alignItems: 'flex-start',
                width: 120,
              }}
              onPress={() => {}}>
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
        }}
      />
    </SafeAreaView>
  );
};

export default HomeScreenLane;
