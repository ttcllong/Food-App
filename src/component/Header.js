import React from "react";
import { View, Text, Dimensions, StyleSheet, Image, TouchableOpacity} from "react-native"; 
import {colors, parameters} from '../global/style'
 
export default function Header(props) {
    return(
        <View style = {styles.header}>
            <TouchableOpacity
                style = {{marginLeft: 20}}
                onPress={() => {props.navigation.pop()}}>
                <Image 
                    source={props.icon}
                    style = {styles.iconSize}
                />
            </TouchableOpacity>
            <View>
                <Text style = {styles.textHeader}>{props.title}</Text>
            </View>

        </View>
    )
}

const styles = StyleSheet.create({
    header: {
        flexDirection: 'row',
        backgroundColor: colors.buttons,
        height: parameters.headerHeight,
        alignItems: 'center'
    },
    textHeader: {
        fontSize: 22,
        fontWeight: 'bold',
        color: colors.headerText,
        marginLeft: 30
    },
    iconSize: {
        height: 25,
        width: 25,
        tintColor: colors.headerText
    }
})