import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import AuthNavigator from './AuthNavigator';
 


export default function NavigatorContainer() {
    return (
        <NavigationContainer>
            <AuthNavigator />
        </NavigationContainer>
    );
}
