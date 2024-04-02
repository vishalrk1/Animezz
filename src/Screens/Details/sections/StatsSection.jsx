import React from 'react';
import {useTheme} from '@react-navigation/native';
import {Text, View} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';

import Icon from 'react-native-vector-icons/FontAwesome';
import StatSectionItem from './statSectionItem';

const StatsSection = ({data}) => {
  const {colors} = useTheme();
  return (
    <SafeAreaView
      style={{
        flex: 1,
        paddingLeft: 12,
        flexDirection: 'column',
        alignItems: 'flex-end',
        marginTop: 20,
      }}>
      <View
        style={{
          width: '100%',
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'flex-end',
          gap: 12,
          borderBottomColor: colors.text,
          borderBottomWidth: 1,
          paddingBottom: 8,
        }}>
        <Icon name="star" size={22} color={colors.text} />
        <Text style={{color: colors.text, fontSize: 22, fontWeight: '500'}}>
          {data?.score ? data?.score : '--'}
        </Text>
      </View>
      <StatSectionItem itemData={data?.rank} title='Rank' isHash={true}/>
      <StatSectionItem itemData={data?.popularity} title={'Popularity'} isHash={true}/>
      <StatSectionItem itemData={data?.favorites} title={'Favorites'}/>
    </SafeAreaView>
  );
};

export default StatsSection;
