import * as React from 'react';
import { Text, View, Image } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeTabNavigation from './homeNav/HomeTabNavigation';
import {icons, images} from '../assets'
import {RouteName} from './RouteName';

function HomeScreen() {
    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <Text>Home!</Text>
        </View>
    );
}

function SettingsScreen() {
    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <Text>Settings!</Text>
        </View>
    );
}

function Feed() {
    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <Text>Feed!</Text>
        </View>
    );
}

function Cart() {
    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <Text>Cart!</Text>
        </View>
    );
}


/*----------------*/
const Tab = createBottomTabNavigator();

 const BottomTabNavigation =()=>{
    return(
        <Tab.Navigator
            initialRouteName= {RouteName.HOME_PAGE}
            tabBarOptions={{
                activeTintColor: '#9c27b0',
                inactiveTintColor: 'grey',
                labelStyle: {fontSize: 14},
                // showLabel: false,
                keyboardHidesTabBar: true,
            }}
        >
            <Tab.Screen
                options={{
                    tabBarLabel: 'Home',
                    tabBarIcon: ({ focused, color, size}) => (
                        <Image source={icons.iconHome} style={{width: size, height:size, tintColor: color}}  resizeMode={'contain'} />
                    ),
                }}
                name={RouteName.HOME_PAGE}
                component={HomeTabNavigation} />
            <Tab.Screen
                options={{
                    tabBarLabel: 'Users',
                    tabBarIcon: ({ focused, color, size}) => (
                        <Image source={icons.iconUsers} style={{width: size, height:size, tintColor: color}}  resizeMode={'contain'} />
                    ),
                }}
                name="Settings"
                component={SettingsScreen} />

            <Tab.Screen
                options={{
                    tabBarLabel: 'Photo',
                    tabBarIcon: ({ focused, color, size}) => (
                        <Image source={icons.iconCamera} style={{width: size, height:size, tintColor: color}}  resizeMode={'contain'} />
                    ),
                }}
                name="Photo"
                component={Feed}/>

            <Tab.Screen
                options={{
                    header: null,
                    tabBarLabel: 'Cart',
                    tabBarIcon: ({ focused, color, size}) => (
                        <Image source={icons.iconCart} style={{width: size, height:size, tintColor: color}}  resizeMode={'contain'} />
                    ),
                }}
                name="Cart"
                component={Cart}/>

        </Tab.Navigator>
    )
}

export default BottomTabNavigation;
