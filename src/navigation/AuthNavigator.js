import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import SignInWelcomeScreen from '../screens/authScreens/SignInWelcomeScreen';
import SignInScreen from '../screens/authScreens/SignInScreen';
import { SCREENS } from '../global/nameScreens';
import RestaurantsMapScreen from '../screens/RestaurantsMapScreen/RestaurantsMapScreen';
import DrawerNavigator from './DrawerNavigator';

const Stack = createNativeStackNavigator();


export default function AuthNavigator() {
    return (
        <Stack.Navigator>
            <Stack.Screen
                name={SCREENS.SignInWelcome}
                component={SignInWelcomeScreen}
                options={{
                    headerShown: false
                }}
            />
            <Stack.Screen
                name={SCREENS.SignIn}
                component={SignInScreen}
                options={{
                    headerShown: false
                }}
            />
            <Stack.Screen
                name={SCREENS.Drawer}
                component={DrawerNavigator}
                options={{
                    headerShown: false
                }}
            />
            <Stack.Screen
                name={SCREENS.restaurantMap}
                component={RestaurantsMapScreen}
                options={{
                    headerShown: false
                }}
            />
        </Stack.Navigator>
    );
}
