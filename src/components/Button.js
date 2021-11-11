import React from 'react';
import {Button} from 'react-native';

export default props => {
  function exec() {
    console.warn('Exec 1!!');
  }

  return (
    <>
      <Button title="Btn 1" onPress={exec} />
      <Button
        title="Btn 2"
        onPress={function () {
          console.warn('Exec 2!!');
        }}
      />
    </>
  );
};
