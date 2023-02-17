import {
    View,
    Text,
    TouchableOpacity,
    ScrollView,
    Image,
    FlatList,
    Dimensions
} from 'react-native';
import React, { useState } from 'react';
import CountDown from 'react-native-countdown-component';
import { styles } from './style';
import AppBar from './Component/AppBar';
import { colors } from '../../global/style';
import { ICONS } from '../../global/Images';
import { filterData, restaurantsData } from '../../global/Data';
import FoodCart from './Component/FoodCart';
import { SCREENS } from '../../global/nameScreens';

const SCREEN_WIDTH = Dimensions.get('window').width;
export default function HomeScreen({ navigation }) {
    const [delivery, setDelivery] = useState(true);
    const [indexCheck, setindexCheck] = useState('0');

    const renderCategories = ({ item, index }) => (
        <TouchableOpacity
            onPress={() => {
                setindexCheck(item.id);
            }}>
            <View
                style={
                    indexCheck === item.id
                        ? { ...styles.small_card_selected }
                        : { ...styles.small_card }
                }>
                <Image
                    style={{ height: 60, width: 60, borderRadius: 30 }}
                    source={item.image}
                />
                <View style={{ marginTop: 5 }}>
                    <Text
                        style={
                            indexCheck === item.id
                                ? { ...styles.small_cardText_Selected }
                                : { ...styles.small_cardText }
                        }>
                        {item.name}
                    </Text>
                </View>
            </View>
        </TouchableOpacity>
    );

    const renderStore = ({ item, index }) => (
        <View style={{ marginRight: 10 }}>
            <FoodCart
                screenWidth={SCREEN_WIDTH * 0.82}
                images={item.images}
                restaurantName={item.restaurantName}
                farAway={item.farAway}
                businessAddress={item.businessAddress}
                averageReview={item.averageReview}
                numberOfReview={item.numberOfReview}
            />
        </View>
    );

    return (
        <View style={styles.container}>
            <AppBar navigation = {navigation}/>
            <ScrollView
                stickyHeaderIndices={[0]}
                showsVerticalScrollIndicator={false}>
                <View
                    style={{
                        backgroundColor: colors.cardbackground,
                        paddingBottom: 5
                    }}>
                    <View
                        style={{
                            marginTop: 10,
                            flexDirection: 'row',
                            justifyContent: 'space-evenly'
                        }}>
                        <TouchableOpacity
                            onPress={() => {
                                setDelivery(true);
                            }}>
                            <View
                                style={{
                                    ...styles.delivery_Button,
                                    backgroundColor: delivery
                                        ? colors.buttons
                                        : colors.grey5
                                }}>
                                <Text style={styles.delivery_Text}>
                                    Delivery
                                </Text>
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity
                            onPress={() => {
                                setDelivery(false);
                                navigation.navigate(SCREENS.restaurantMap);
                            }}>
                            <View
                                style={{
                                    ...styles.delivery_Button,
                                    backgroundColor: delivery
                                        ? colors.grey5
                                        : colors.buttons
                                }}>
                                <Text style={styles.delivery_Text}>
                                    Pick Up
                                </Text>
                            </View>
                        </TouchableOpacity>
                    </View>
                </View>

                <View style={styles.filter_View}>
                    <View style={styles.container_location}>
                        <View
                            style={{
                                flexDirection: 'row',
                                alignItems: 'center'
                            }}>
                            <Image
                                source={ICONS.location}
                                style={styles.iconSize}
                            />
                            <Text style={{ marginLeft: 5 }}>
                                22 Bessle Street
                            </Text>
                        </View>
                        <View style={styles.container_clock}>
                            <Image
                                source={ICONS.clock}
                                style={styles.iconSize}
                            />
                            <Text style={{ marginLeft: 5 }}>Now</Text>
                        </View>
                    </View>
                    <View>
                        <Image source={ICONS.tune} style={styles.iconSize} />
                    </View>
                </View>

                <View style={styles.header_textView}>
                    <Text style={styles.header_text}>Categories</Text>
                </View>

                <View>
                    <FlatList
                        horizontal
                        showsHorizontalScrollIndicator={false}
                        data={filterData}
                        keyExtractor={(item) => item.id}
                        extraData={indexCheck}
                        renderItem={renderCategories}
                    />
                </View>
                <View style={styles.header_textView}>
                    <Text style={styles.header_text}>Free Delivery Now</Text>
                </View>
                <View>
                    <View
                        style={{
                            flexDirection: 'row',
                            alignItems: 'center',
                            marginTop: 5
                        }}>
                        <Text
                            style={{
                                marginLeft: 15,
                                fontSize: 16,
                                marginTop: -10,
                                marginRight: 5
                            }}>
                            Options changing in
                        </Text>
                        <CountDown
                            until={3600}
                            size={14}
                            digitStyle={{ backgroundColor: colors.lightgreen }}
                            digitTxtStyle={{ color: colors.cardbackground }}
                            timeToShow={['M', 'S']}
                            timeLabels={{ m: 'Min', s: 'Sec' }}
                        />
                    </View>

                    <FlatList
                        style={{ marginTop: 10, marginBottom: 10 }}
                        horizontal
                        showsHorizontalScrollIndicator={false}
                        data={restaurantsData}
                        keyExtractor={(item, index) => index.toString()}
                        renderItem={renderStore}
                    />
                </View>
                <View style={styles.header_textView}>
                    <Text style={styles.header_text}>Promotions Available</Text>
                </View>
                <View>
                    <FlatList
                        style={{ marginTop: 10, marginBottom: 10 }}
                        horizontal
                        showsHorizontalScrollIndicator={false}
                        data={restaurantsData}
                        keyExtractor={(item, index) => index.toString()}
                        renderItem={renderStore}
                    />
                </View>
                <View style={styles.header_textView}>
                    <Text style={styles.header_text}>
                        Restaurants In Your Area
                    </Text>
                </View>
                <View style={{ width: SCREEN_WIDTH, paddingTop: 10 }}>
                    {restaurantsData.map((item) => (
                        <View key={item.id} style={{ paddingBottom: 20 }}>
                            <FoodCart
                                screenWidth={SCREEN_WIDTH * 0.95}
                                images={item.images}
                                restaurantName={item.restaurantName}
                                farAway={item.farAway}
                                businessAddress={item.businessAddress}
                                averageReview={item.averageReview}
                                numberOfReview={item.numberOfReview}
                            />
                        </View>
                    ))}
                </View>
            </ScrollView>
            {delivery && (
                <View style={styles.floating_button}>
                    <TouchableOpacity
                        onPress={() => {
                            navigation.navigate(SCREENS.restaurantMap);
                        }}>
                        <Image
                            source={ICONS.location}
                            style={{
                                ...styles.iconSize,
                                tintColor: colors.buttons
                            }}
                        />
                        <Text style={{ color: colors.grey2 }}>Map</Text>
                    </TouchableOpacity>
                </View>
            )}
        </View>
    );
}
