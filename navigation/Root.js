import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';


import Home from '../screens/Home/Home';
import HomeHeader from '../components/HomeHeader/HomeHeader';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

const HomeStack = () => {
    return(
        <Stack.Navigator>
            <Stack.Screen name="Home" component={Home} options={{headerTitle: (props) => <HomeHeader {...props} /> }}/>
        </Stack.Navigator>
    )
}

const Root = () => {
    return(
        <Tab.Navigator>
            <Tab.Screen name="HomeStack" component={HomeStack} options={{ headerShown: false }}/>
        </Tab.Navigator>
    )
}

export default Root