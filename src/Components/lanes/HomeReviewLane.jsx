import React from 'react';
import {
  FlatList,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';

import {useTheme} from '@react-navigation/native';

const HomeReviewLane = ({reviewData}) => {
  const {colors} = useTheme();
  return (
    <SafeAreaView>
      <Text style={styles.title}>{'Recent Reviews'}</Text>
      <FlatList
        horizontal
        showsHorizontalScrollIndicator={false}
        style={styles.laneList}
        data={reviewData}
        renderItem={({item}) => {
          return (
            <TouchableOpacity
              activeOpacity={0.98}
              style={{
                ...styles.reviewContainer,
                backgroundColor: colors.onSurfaceVariant,
              }}>
              <View style={styles.userContainer}>
                <Image
                  source={{uri: item?.user?.images?.jpg?.image_url}}
                  style={styles.userpfp}
                />
                <View
                  style={{
                    flexDirection: 'column',
                    gap: 2,
                  }}>
                  <Text style={styles.userName}>{item?.user?.username}</Text>
                  <Text style={styles.userDate}>
                    {new Date(item?.date).toLocaleDateString('en-US', {
                      day: 'numeric',
                      month: 'short',
                      year: 'numeric',
                    })}
                  </Text>
                </View>
              </View>
              <Text numberOfLines={8} style={styles.reviewText}>
                {item.review}
              </Text>
            </TouchableOpacity>
          );
        }}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'left',
    marginTop: 16,
    marginLeft: 16,
    color: 'white',
  },
  laneList: {
    marginBottom: 16,
    gap: 4,
    marginHorizontal: 8,
  },
  reviewContainer: {
    flexDirection: 'column',
    justifyContent: 'center',
    width: 300,
    borderRadius: 10,
    padding: 8,
    margin: 8,
  },
  reviewText: {
    fontSize: 10,
    fontWeight: '400',
    marginTop: 8,
    color: 'white',
  },
  userContainer: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    gap: 12,
  },
  userpfp: {
    height: 40,
    width: 40,
    borderRadius: 50,
  },
  userName: {fontSize: 16, fontWeight: 'bold', color: 'white'},
  userDate: {fontSize: 11, color: 'white'},
});

export default HomeReviewLane;
