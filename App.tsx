import { useState } from 'react';
import {ScrollView, ScrollViewComponent, StyleSheet, Touchable, View} from 'react-native';

import Basics from './src/components/Basic';
import ScrollViewComp from './src/components/Scrollcomp';
import Combsty from './src/components/combinedStyle';
import Flex from './src/components/Flex';
import Touchables from './src/components/touchable';


function App(): React.JSX.Element {
  return (
        <View>
          <ScrollView nestedScrollEnabled={true} contentContainerStyle={styles.scrollcomp}>

          <Basics/>
          <ScrollViewComp/>
          <Combsty/>
          <Flex/>
          <Touchables/>
          </ScrollView>
        </View>
  );
} 

const styles = StyleSheet.create({
  scrollcomp:{
    padding:20
  }
})

export default App;
