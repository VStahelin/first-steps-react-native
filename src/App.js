import React from 'react';
import {SafeAreaView, Text} from 'react-native';

import Componente from './components/Primeiro';
import X, {Comp1, Comp2} from './components/Multi'

export default () => (
  <SafeAreaView>
    <Componente></Componente>
    <X></X>
    <Comp1></Comp1>
    <Comp2></Comp2>
  </SafeAreaView>
);
