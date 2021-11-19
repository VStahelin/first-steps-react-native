import React from 'react';
import {Text} from 'react-native';
import Style from './styles';

export default props => {
  return <Text style={Style.H1}>{props.name}</Text>;
};
