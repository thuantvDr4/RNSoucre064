import * as React from 'react';
import {Text, View, SafeAreaView} from 'react-native';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';


function Tab_1() {
    return (
        <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
            <Text>Home!</Text>
        </View>
    );
}

function Tab_2() {
    return (
        <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
            <Text>Settings!</Text>
        </View>
    );
}

function Tab_3() {
    return (
        <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
            <Text>Settings!</Text>
        </View>
    );
}

function Tab_4() {
    return (
        <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
            <Text>Settings!</Text>
        </View>
    );
}


const TabBar_option = {
    tabStyle: {width: 'auto',},
    scrollEnabled: true,
    activeTintColor: '#ffffff',
    inactiveTintColor: 'grey',
    labelStyle: { fontSize: 15, fontWeight:'500', textTransform: 'none',},
    style: { backgroundColor: '#ffffff', height:50,},
    indicatorStyle: {
        height: 30,
        borderRadius: 30,
        position: 'absolute',
        left: 0,
        top: 10,
        backgroundColor: '#af52bf',
        justifyContent: 'center',
        alignSelf:'center',
    },
};


const Tab = createMaterialTopTabNavigator();

const HomeTabNavigation = () => {
    return (
        <SafeAreaView style={{flex: 1, backgroundColor: 'white'}}>
            <Tab.Navigator
                initialRouteName="TAB 1"
                tabBarOptions={TabBar_option}
            >
                <Tab.Screen name="TAB 1" component={Tab_1}/>
                <Tab.Screen name="tab 2" component={Tab_2}/>
                <Tab.Screen name="tab 3" component={Tab_3}/>
                <Tab.Screen name="tab 4" component={Tab_4}/>
                <Tab.Screen name="tab 5" component={Tab_4}/>
                <Tab.Screen name="tab 6" component={Tab_4}/>
                <Tab.Screen name="tab 7" component={Tab_4}/>
                <Tab.Screen name="tab 8" component={Tab_4}/>
            </Tab.Navigator>
        </SafeAreaView>
    );
};

export default HomeTabNavigation;
