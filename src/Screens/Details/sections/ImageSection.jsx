import React from 'react';
import {useTheme} from '@react-navigation/native';
import {Image, View} from 'react-native';

const DetailImageSection = ({images}) => {
  const {colors} = useTheme();
  return (
    <View
      style={{
        padding: 12,
        borderColor: colors.border,
        borderWidth: 2,
        borderRadius: 10,
        width: '70%'
      }}>
      <Image
        source={{uri: images?.webp?.image_url}}
        style={{width: '100%', height: 320, borderRadius: 8}}
      />
    </View>
  );
};

export default DetailImageSection;
