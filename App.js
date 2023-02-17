import { View, Text, StyleSheet, StatusBar } from 'react-native'
import React from 'react'
import {colors} from './src/global/style'
import SignInScreen from './src/screens/authScreens/SignInScreen'
import SignInWelcomeScreen from './src/screens/authScreens/SignInWelcomeScreen'
import NavigatorContainer from './src/navigation/NavigatorContainer'

export default function App() {
    return (
        <View style = {styles.container}>
            <StatusBar 
                barStyle= "light-content"
                backgroundColor={colors.statusBar}
            />
            <NavigatorContainer />
        </View>
    )
}


const styles = StyleSheet.create({
    container: {
        flex: 1
    }
})