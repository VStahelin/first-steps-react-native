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
// import OSCheck from './components/OSCheck';
//import ConditionalRender from './components/ConditionalRender';
// import Family from './components/PropsChildren/Family';
// import Member from './components/PropsChildren/Member';

import LogedUsers from './components/LogedUsers';

export default () => (
  <SafeAreaView style={style.App}>
    <LogedUsers user={{username: 'joao', email: 'jao@email.com'}} />
    <LogedUsers user={{username: 'vitor', email: 'vitor@email.com'}} />
    <LogedUsers user={{username: 'vitor'}} />
    <LogedUsers user={{email: 'vitor@email.com'}} />
    <LogedUsers user={null} />
    <LogedUsers user={{}} />

    {/*
    <Family>
      <Member name="Arthur" />
      <Member name="Samuel" />
      <Member name="Gabriel" />
      <Member name="Rafa" />
      <Member name="Italo" />
    </Family>
    <ConditionalRender num={3} />
    <OSCheck />
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
