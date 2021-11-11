import React from 'react';
import {Button} from 'react-native';

export default props => {
  function randomNumb(min, max) {
    return Math.floor(Math.random * (max - min + 1) + min);
  }

  return (
    <Button
      title="Exec"
      onPress={function () {
        const n = randomNumb(props.min, props.max);
        props.function(n);
      }}
    />
  );
};
