import React, {useState} from 'react';
import Son from './Son';
import {Text} from 'react-native';

export default props => {
  const [num, setNum] = useState(0);

  function showValue(number) {
    setNum(number);
  }

  return (
    <>
      <Text>{num}</Text>
      <Son min={10} max={100} function={showValue} />
    </>
  );
};
