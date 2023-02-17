import {
    View,
    Text,
    StyleSheet,
    TextInput,
    Image,
    TouchableOpacity
} from 'react-native';
import React, { useState, useRef } from 'react';
import Header from '../../component/Header';
import { ICONS } from '../../global/Images';
import { titleText } from '../../global/style';
import { colors } from '../../global/style';
import * as Animatable from 'react-native-animatable';
import { SCREENS } from '../../global/nameScreens';
export default function SignInScreen({navigation}) {
    const [TextInputFocus2, setTextInputFocus2] = useState(false);
    const [isSecureEntry, setisSecureEntry] = useState(true);
    const textInput1 = useRef(1);
    const textInput2 = useRef(2);
    return (
        <View style={styles.container}>
            <Header 
                icon={ICONS.back}
                title="MY ACCOUNT" 
                navigation = {navigation}
                />
            <View style={{ padding: 20 }}>
                <Text style={titleText}>Sign-In</Text>
            </View>
            <View style={{ alignItems: 'center' }}>
                <Text style={styles.text1}>
                    Please enter the email and password
                </Text>
                <Text style={styles.text1}>registered with your account</Text>
            </View>
            <View style={{ marginTop: 20 }}>
                <View>
                    <TextInput
                        style={styles.TextInput1}
                        placeholder="Email..."
                        ref={textInput1}
                    />
                </View>
                <View style={styles.TextInput2}>
                    <Animatable.View
                        animation={TextInputFocus2 ? '' : 'fadeInLeft'}
                        duration={400}>
                        <Image
                            source={ICONS.password}
                            style={styles.iconSize}
                        />
                    </Animatable.View>
                    <TextInput
                        style={{ width: '80%' }}
                        placeholder="Password..."
                        secureTextEntry={isSecureEntry}
                        ref={textInput2}
                        onFocus={() => {
                            setTextInputFocus2(false);
                        }}
                        onBlur={() => {
                            setTextInputFocus2(true);
                        }}
                    />
                    <Animatable.View
                        animation={TextInputFocus2 ? '' : 'fadeInLeft'}
                        duration={400}>
                        <TouchableOpacity
                            onPress={() => {
                                setisSecureEntry((prev) => !prev);
                            }}>
                            {isSecureEntry ? (
                                <Image
                                    source={ICONS.eyeon}
                                    style={[
                                        styles.iconSize,
                                        { marginRight: 10 }
                                    ]}
                                />
                            ) : (
                                <Image
                                    source={ICONS.eyeoff}
                                    style={[
                                        styles.iconSize,
                                        { marginRight: 10 }
                                    ]}
                                />
                            )}
                        </TouchableOpacity>
                    </Animatable.View>
                </View>
            </View>
            <TouchableOpacity 
                style={styles.signin_Button}
                onPress = {() => navigation.navigate(SCREENS.Drawer)}
            >
                <Text style={styles.text_Button}>SIGN IN</Text>
            </TouchableOpacity>
            <TouchableOpacity style={{ alignItems: 'center', marginTop: 15 }}>
                <Text style={styles.text_forgot}>Forgot Password ?</Text>
            </TouchableOpacity>
            <View
                style={{
                    alignItems: 'center',
                    marginTop: 20,
                    marginBottom: 20
                }}>
                <Text style={styles.text_or}>OR</Text>
            </View>
            <TouchableOpacity style={styles.facebook_button}>
                <Image
                    source={ICONS.facebook}
                    style={{ width: 30, height: 30 }}
                />
                <Text style={styles.text_facebookgoogle}>
                    Sign In With Facebook
                </Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.google_button}>
                <Image
                    source={ICONS.google}
                    style={{ width: 25, height: 25, tintColor: 'white' }}
                />
                <Text style={styles.text_facebookgoogle}>
                    Sign In With Google
                </Text>
            </TouchableOpacity>
            <TouchableOpacity style={{ marginHorizontal: 20, marginTop: 20 }}>
                <Text>New on XpressFood ?</Text>
            </TouchableOpacity>
            <TouchableOpacity style={{ alignItems: 'flex-end' }}>
                <View style={styles.createAccount_button}>
                    <Text style={styles.createAccount_title}>
                        create an account
                    </Text>
                </View>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    text1: {
        color: colors.grey3,
        fontSize: 16
    },
    TextInput1: {
        borderWidth: 1,
        borderColor: '#86939e',
        marginHorizontal: 20,
        borderRadius: 12,
        marginBottom: 20,
        paddingLeft: 15
    },
    TextInput2: {
        borderWidth: 1,
        borderRadius: 12,
        marginHorizontal: 20,
        borderColor: '#86939e',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignContent: 'center',
        alignItems: 'center',
        paddingLeft: 15
    },
    iconSize: {
        width: 25,
        height: 25,
        tintColor: colors.grey3
    },
    signin_Button: {
        backgroundColor: colors.buttons,
        alignItems: 'center',
        marginTop: 25,
        marginHorizontal: 20,
        paddingVertical: 10,
        borderRadius: 12
    },
    text_Button: {
        fontSize: 20,
        color: 'white',
        fontWeight: 'bold'
    },
    text_forgot: {
        textDecorationLine: 'underline',
        color: colors.grey3,
        fontSize: 16
    },
    text_or: {
        fontWeight: 'bold',
        fontSize: 20,
        color: 'black'
    },
    facebook_button: {
        alignItems: 'center',
        flexDirection: 'row',
        justifyContent: 'center',
        marginHorizontal: 20,
        backgroundColor: '#3F51B5',
        paddingVertical: 10,
        borderRadius: 12,
        marginBottom: 20
    },
    text_facebookgoogle: {
        fontSize: 14,
        color: 'white',
        fontWeight: 'bold',
        marginLeft: 10
    },
    google_button: {
        alignItems: 'center',
        flexDirection: 'row',
        justifyContent: 'center',
        marginHorizontal: 20,
        backgroundColor: '#D70F0F',
        paddingVertical: 10,
        borderRadius: 12
    },
    createAccount_button: {
        borderWidth: 2,
        alignItems: 'center',
        borderColor: colors.buttons,
        backgroundColor: 'white',
        paddingVertical: 10,
        paddingHorizontal: 20,
        borderRadius: 12,
        marginRight: 20,
        marginTop: 10
    },
    createAccount_title: {
        fontSize: 16,
        fontWeight: 'bold',
        color: colors.buttons
    }
});
