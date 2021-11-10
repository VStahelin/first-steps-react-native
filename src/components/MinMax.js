import React from 'react';
import {Text} from 'react-native';
import Style from './style';

export default props => {
  const max = 0;
  const min = 0;
  if (props.n1 > props.n2) {
    this.max = props.n1;
    this.min = props.n2;
  } else {
    this.max = props.n2;
    this.min = props.n1;
  }
  return (
    <Text style={Style.H2}>
      O valor {this.max} eh maior que o valo {this.min}
    </Text>
  );
};
