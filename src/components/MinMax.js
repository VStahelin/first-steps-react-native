import React from 'react';
import {Text} from 'react-native';
import Style from './styles';

export default ({n1, n2}) => {
  const max = n1 > n2 ? n1 : n2;
  const min = n1 < n2 ? n1 : n2;
  return (
    <Text style={Style.H2}>
      O valor {max} eh maior que o valor {min}
    </Text>
  );
};
