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
import { Provider as PaperProvider } from 'react-native-paper';

const App = () => {

    return (
        <Provider store={store}>
            <PaperProvider>
                <RootNav/>
            </PaperProvider>
        </Provider>
    );
};


export default App;
