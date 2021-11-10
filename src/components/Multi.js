import React from 'react';
import {SafeAreaView, Text} from 'react-native';

export default () => {
  return (
    <SafeAreaView>
      <Text> Main comp </Text>
    </SafeAreaView>
  );
};

export function Comp1() {
  return (
    <SafeAreaView>
      <Text> Comp 1 </Text>
    </SafeAreaView>
  );
}

export function Comp2() {
  return (
    <SafeAreaView>
      <Text> Comp 2 </Text>
    </SafeAreaView>
  );
}
