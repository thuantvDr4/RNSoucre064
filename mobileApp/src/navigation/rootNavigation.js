

import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import { createStackNavigator, TransitionPresets } from "@react-navigation/stack";
import BottomTabNav from './BottomTabNavigation';
import {RouteName} from './RouteName';


import {View, Text} from 'react-native'


// Config for stack - transition
const stack_conf = {
    mode: 'card',
    headerMode: 'float',
    ...TransitionPresets.SlideFromRightIOS
};

const stack_options = {

}

const non_header ={
    headerShown: false,
}

const splashPage =()=>{
    return(
        <View style={{flex:1}}>
            <Text>{'SLASH SCREEN'}</Text>
        </View>
    )
}


const Stack = createStackNavigator();

export const RootNav =()=> {
    return(
        <NavigationContainer>
            <Stack.Navigator
                initialRouteName={RouteName.HOME_PAGE}>
                    {/*...FOR-STACK...*/}
                    <Stack.Screen
                        name={RouteName.SPLASH_PAGE}
                        component={splashPage}
                        options={{...non_header}}
                    />
                {/*--------Bottom-Tab-----*/}
                <Stack.Screen
                    name={RouteName.HOME_PAGE}
                    component={BottomTabNav}
                    options={{...non_header}}
                />

            </Stack.Navigator>
        </NavigationContainer>
    )
}

