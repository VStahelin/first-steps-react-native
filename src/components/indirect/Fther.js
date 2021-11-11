import React from 'react';
import Son from './Son';

export default props => {
  function showValue(number) {
    console.warn(number);
  }

  return <Son min={10} max={100} function={showValue} />;
};
