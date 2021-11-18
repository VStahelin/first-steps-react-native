import React from 'react';
import {SafeAreaView, StyleSheet} from 'react-native';

// import Componente from './components/Primeiro';
// import X, {Comp1, Comp2} from './components/Multi';
//import MinMax from './components/MinMax';
//import NumRandon from './components/NumRandon';
//import Title from './components/Title';
//import Button from './components/Button';
//import Counter from './components/Counter';
// import Fther from './components/indirect/Fther';
import OSCheck from './components/OSCheck';

export default () => (
  <SafeAreaView style={style.App}>
    <OSCheck />
    {/*
    <Fther />
    <Counter initial={10} />
    <Button/>
    <Title title="THE BIG TITLE" subtitle="Little subtitle" />
    <MinMax n1={NumRandon()} n2={NumRandon()} />
    <Componente />
    <X />
    <Comp1 />
    <Comp2 />
    */}
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
