import React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import TabNavigator from './navigation/TabNavigator';
import Profile from '../components/Profile';
import StackNavigator from './navigation/StackNavigator';

const Drawer = createDrawerNavigator();

const DrawerNavigator = () => {
    return(
        <Drawer.Navigator>
            <Drawer.Screen name = "Home" component ={StackNavigator}/>
            <Drawer.Screen name = "Profile" component={Profile}/>
        </Drawer.Navigator>
    )
}

export default DrawerNavigator;