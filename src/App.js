import React from 'react';
import {SafeAreaView, StyleSheet} from 'react-native';

// import Componente from './components/Primeiro';
// import X, {Comp1, Comp2} from './components/Multi';
import MinMax from './components/MinMax';
import NumRandon from './components/NumRandon';

export default () => (
  <SafeAreaView style={style.App}>
    <MinMax n1={NumRandon()} n2={NumRandon()} />
    {/*<Componente />*/}
    {/*<X />*/}
    {/*<Comp1 />*/}
    {/*<Comp2 />*/}
  </SafeAreaView>
);

const style = StyleSheet.create({
  App: {
    flexGrow: 1,
    backgroundColor: 'lightblue',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
});
