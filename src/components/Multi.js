import React from 'react';
import {SafeAreaView, Text} from 'react-native';
import Style from './style';

function Comp() {
  return (
    <SafeAreaView>
      <Text style={Style.H3}> Main comp </Text>
    </SafeAreaView>
  );
}

function Comp1() {
  return (
    <SafeAreaView>
      <Text style={Style.H3}> Comp 1 </Text>
    </SafeAreaView>
  );
}

function Comp2() {
  return (
    <SafeAreaView>
      <Text style={Style.H3}> Comp 2 </Text>
    </SafeAreaView>
  );
}

export {Comp1, Comp2};
export default Comp;
