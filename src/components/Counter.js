import React, {useState} from 'react';
import {Text, Button} from 'react-native';
import Styles from './styles';

export default props => {
  const [number, setNumber] = useState(props.initial);

  const increment = () => setNumber(number + 1);
  const decrement = () => setNumber(number - 1);

  return (
    <>
      <Text style={Styles.H1}>{number}</Text>
      <Button title="+" onPress={increment} />
      <Button title="-" onPress={decrement} />
    </>
  );
};
