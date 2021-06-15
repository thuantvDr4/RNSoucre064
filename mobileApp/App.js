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
import {Provider} from 'react-redux';
import store from './src/redux/store';


const App = () => {

    return (
        <Provider store={store}>
            <RootNav/>
        </Provider>
    );
};


export default App;
