import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import { colors } from '../global/style'

export default function ButtonWhite(prop) {
  return (
    <View style = {styles.container}>
      <Text style = {styles.title_button}>{prop.title}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'white',
        borderColor: colors.buttons,
        alignItems: 'center',
        borderWidth: 1,
        marginHorizontal: 20,
        paddingVertical: 10,
        borderRadius: 12
    },
    title_button:{
        fontSize: 20,
        color: colors.buttons,
        fontWeight: 'bold'
    }
})