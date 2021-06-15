/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */
import 'react-native-gesture-handler';
import React from 'react';
import {RootNav} from './src/navigation/rootNavigation';
import {
    View,
} from 'react-native';



const App = () => {

  return (
    <View style={{flex:1}}>
      <RootNav/>
    </View>
  );
};


export default App;
