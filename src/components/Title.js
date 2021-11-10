import React, {Fragment} from 'react';
import {Text} from 'react-native';
import styles from './styles';

export default props => (
  <Fragment>
    <Text style={styles.H1}>{props.title}</Text>
    <Text style={styles.H3}>{props.subtitle}</Text>
  </Fragment>
);
