import { createDrawerNavigator } from "@react-navigation/drawer";
import { SCREENS } from "../global/nameScreens";
import { TabBottom } from "./TabBottom";
import React from 'react'
import {View, Text, Image} from 'react-native'
import { ICONS } from "../global/Images";
import { colors } from "../global/style";

const Drawer = createDrawerNavigator();

export default function DrawerNavigator () {
    return(
        <Drawer.Navigator screenOptions={{
            headerShown: false
        }}>
            <Drawer.Screen 
                name= {SCREENS.TabBottom}
                component = {TabBottom}
                options = {{
                    title: "Client",
                    drawerIcon: ({focused}) => (
                        <Image 
                            source={ICONS.home}
                            style = {{
                                width: 24, 
                                height: 24,
                                tintColor: focused ? "#7cc" : colors.grey2
                                }}
                        />
                    )
                }}
            />
        </Drawer.Navigator>
    )
}