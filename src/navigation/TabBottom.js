import React from 'react'
import {View, Image} from 'react-native'
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { SCREENS } from '../global/nameScreens';
import HomeScreen from '../screens/HomeScreen/HomeScreen';
import SearchScreen from '../screens/SearchScreen/SearchScreen'
import OrderScreen from '../screens/OrderScreen/OrderScreen';
import UserScreen from '../screens/UserScreen/UserScreen';
import { colors } from '../global/style';
import { ICONS } from '../global/Images';

const Tab = createBottomTabNavigator()

export const TabBottom = () => {
    return(
        <Tab.Navigator 
            screenOptions={{
                headerShown: false,
                tabBarActiveTintColor: colors.buttons
            }}>
            <Tab.Screen 
                name= {SCREENS.MainHome}
                component = {HomeScreen}
                options = {{
                    tabBarLabel: 'Home',
                    tabBarIcon: ({focused}) => (
                        <Image 
                            source={ICONS.home}
                            style = {{
                                width: 25, 
                                height: 25,
                                tintColor: focused ? colors.buttons : colors.grey4
                            }}
                        />
                    )
                }}
            />
            <Tab.Screen 
                name= {SCREENS.search}
                component = {SearchScreen}
                options = {{
                    tabBarLabel: 'Search',
                    tabBarIcon: ({focused}) => (
                        <Image 
                            source={ICONS.search}
                            style = {{
                                width: 25, 
                                height: 25,
                                tintColor: focused ? colors.buttons : colors.grey4
                            }}
                        />
                    )
                }}
            />
            <Tab.Screen 
                name= {SCREENS.order}
                component = {OrderScreen}
                options = {{
                    tabBarLabel: 'My order',
                    tabBarIcon: ({focused}) => (
                        <Image 
                            source={ICONS.order}
                            style = {{
                                width: 25, 
                                height: 25,
                                tintColor: focused ? colors.buttons : colors.grey4
                            }}
                        />
                    )
                }}
            />
            <Tab.Screen 
                name= {SCREENS.user}
                component = {UserScreen}
                options = {{
                    tabBarLabel: 'User',
                    tabBarIcon: ({focused}) => (
                        <Image 
                            source={ICONS.user}
                            style = {{
                                width: 25, 
                                height: 25,
                                tintColor: focused ? colors.buttons : colors.grey4
                            }}
                        />
                    )
                }}
            />
             
        </Tab.Navigator>
    )
}