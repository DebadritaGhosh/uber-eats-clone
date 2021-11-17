import React, { useState, useEffect } from 'react'
import Constants from "expo-constants";
import { View, Text, SafeAreaView, StyleSheet, ScrollView } from 'react-native'
//Components
import HeaderTabs from '../components/HeaderTabs'
import SearchBar from '../components/SearchBar';
import Categories from '../components/Categories';
import RestaurantItem, { localRestaurants } from '../components/RestaurantItem';

//API KEY
const YELP_API_KEY = "n07bBL-rse_XCytNgk8JrHr2ikpSboeaEIXMg0l5I-3413zKYGBIl-Cv2pyhWprkwMCHXLmAiVwOEM8TL68nF6mQS4Z4_qyOjAbUcFriRgAxzQqvON9QMPTqwQUrX3Yx";


export default function Home() {
    const [restaurantData, setRestaurantData] = useState(localRestaurants);

    const getRestaurantsFromYelp = () => {
        const yelpUrl = `https://api.yelp.com/v3/businesses/search?term=restaurants&location=sanDiego`;

        const apiOptions = {
            headers: {
                Authorization: `Bearer ${YELP_API_KEY}`,
            },
        };

        return fetch(yelpUrl, apiOptions)
            .then((res) => res.json())
            .then((json) => setRestaurantData(json.businesses))
    };

    useEffect(() => {
        getRestaurantsFromYelp();
    }, [])

    return (
        <SafeAreaView style={styles.screen}>
            <View style={{ backgroundColor: 'white', padding: 15 }} >
                <HeaderTabs style={styles.view} />
                <SearchBar />
            </View>
            <ScrollView showsHorizontalScrollIndicator={false} showsVerticalScrollIndicator={false}>
                <Categories />
                <RestaurantItem
                    restaurantData={restaurantData}
                />
            </ScrollView>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    screen: {
        paddingTop: Constants.statusBarHeight,
        flex: 1,
        backgroundColor: '#eee'
    },
    view: {
        flex: 1,
    },
});