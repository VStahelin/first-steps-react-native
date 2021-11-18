import React from 'react';
import {Text, Platform, View} from 'react-native';

export default ({num = 0}) => {
  return (
    <View>
      <Text>The result is: </Text>
      <Text>{num % 2 === 0 ? 'Even' : 'Odd'}</Text>
    </View>
  );
};
