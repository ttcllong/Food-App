import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import React from 'react';
import { colors } from '../../global/style';
import Swiper from 'react-native-swiper';
import ButtonOrange from '../../component/ButtonOrange';
import ButtonWhite from '../../component/ButtonWhite';
import { SCREENS } from '../../global/nameScreens';

export default function SignInWelcomeScreen({navigation}) {
    
    return (
        <View style = {styles.container}>
            <View style = {styles.container_title}>
                <Text style = {styles.text_title}>DISCOVER RESTAURANTS</Text>
                <Text style = {styles.text_title}>IN YOUR AREA</Text>
            </View>
            <View style = {{flex: 4, justifyContent: 'center'}}>
                <Swiper autoplay = {true}>
                    <View style = {styles.slider1}>
                        <Image 
                            source={{uri: 'https://images.pexels.com/photos/376464/pexels-photo-376464.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'}}
                            style = {{width: '100%', height: '100%'}}
                        /> 
                    </View>
                    <View style = {styles.slider2}>
                        <Image 
                            source={{uri: 'https://images.pexels.com/photos/1640772/pexels-photo-1640772.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'}}
                            style = {{width: '100%', height: '100%'}}
                        /> 
                    </View>
                    <View style = {styles.slider3}>
                        <Image 
                            source={{uri: 'https://images.pexels.com/photos/5337730/pexels-photo-5337730.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'}}
                            style = {{width: '100%', height: '100%'}}
                        /> 
                    </View>
                    <View style = {styles.slider3}>
                        <Image 
                            source={{uri: 'https://images.pexels.com/photos/5337720/pexels-photo-5337720.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'}}
                            style = {{width: '100%', height: '100%'}}
                        /> 
                    </View>
                </Swiper>
            </View>
            <View style = {{flex: 4, justifyContent: 'flex-end'}}>
                <TouchableOpacity style = {{marginBottom: 30}}
                    onPress = {() => navigation.navigate(SCREENS.SignIn)}
                >
                    <ButtonOrange title = 'SIGN IN'/>
                </TouchableOpacity>
                <TouchableOpacity style = {{marginBottom: 30}}>
                    <ButtonWhite title = 'Create your account'/>
                </TouchableOpacity>
            </View>
             
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    container_title:{
        flex: 3,
        justifyContent: 'flex-start',
        alignItems: 'center',
        padding: 20
         
    },
    text_title: {
        fontSize: 26,
        color: colors.buttons,
        fontWeight: 'bold'
    },
    slider1: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#9DD6EB'
    },
    slider2: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#97CAE5'
    },
    slider3: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#92BBD9 '
    },

})
