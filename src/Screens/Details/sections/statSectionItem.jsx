import React from 'react';
import {useTheme} from '@react-navigation/native';
import {Text, View} from 'react-native';

const StatSectionItem = ({title, itemData, isHash=false}) => {
  const {colors} = useTheme();
  return (
    <View
      style={{
        marginTop: 12,
        flexDirection: 'column',
        alignItems: 'flex-end',
        justifyContent: 'flex-end',
      }}>
      <Text style={{color: colors.text, fontSize: 18, fontWeight: '500'}}>
        {title}
      </Text>
      <Text style={{color: colors.primary, fontSize: 16, fontWeight: '400'}}>
        {itemData ? `${isHash ? '#' : ''}${itemData}` : '-'}
      </Text>
    </View>
  );
};

export default StatSectionItem;
