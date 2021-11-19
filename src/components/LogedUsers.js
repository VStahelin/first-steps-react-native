import React from 'react';
import {Text} from 'react-native';
import If from './If';
import Style from './styles';

export default props => {
  const user = props.user || {};
  return (
    <>
      <If valid={user && user.username && user.email}>
        <Text style={Style.H1}>Validated User:</Text>
        <Text style={Style.H2}>
          {user.username} - {user.email}
        </Text>
      </If>
    </>
  );
};
