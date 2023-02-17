import { View, Text, StyleSheet, Image,TouchableOpacity } from 'react-native';
import React from 'react';
import { colors, parameters } from '../../../global/style';
import { ICONS } from '../../../global/Images';
 

export default function AppBar({navigation}) {
    return (
        <View style = {styles.header}>
            <TouchableOpacity onPress={() => {navigation.toggleDrawer()}}>
                <Image 
                    source={ICONS.menu}
                    style = {styles.iconSize}
                />
            </TouchableOpacity>
            <Text style = {styles.textHeader}>FoodExpress</Text>
            <Image 
                source={ICONS.shopping}
                style = {styles.iconSize}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    header: {
        flexDirection: 'row',
        backgroundColor: colors.buttons,
        height: parameters.headerHeight,
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingHorizontal: 20
    },
    iconSize: {
        height: 25,
        width: 25,
        tintColor: colors.headerText
    },
    textHeader: {
        fontSize: 22,
        fontWeight: 'bold',
        color: colors.headerText,
        
    },
})