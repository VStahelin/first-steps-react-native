import React from 'react';
import {SafeAreaView, StyleSheet} from 'react-native';

import Componente from './components/Primeiro';
import X, {Comp1, Comp2} from './components/Multi';

export default () => (
  <SafeAreaView style={style.App}>
    <Componente />
    <X />
    <Comp1 />
    <Comp2 />
  </SafeAreaView>
);

const style = StyleSheet.create({
  App: {
    flexGrow: 1,
    backgroundColor: 'lightblue',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
