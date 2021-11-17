import React, { useState } from 'react'
import { View, StyleSheet, Text, TouchableOpacity } from 'react-native'

export default function HeaderTabs() {
    const [activeTab, setActiveTab] = useState("Delivery")
    return (
        <View style={{ flexDirection: 'row', alignSelf: 'center', marginTop: 10 }}>
            <HeaderButton activeTab={activeTab} setActiveTab={setActiveTab} text="Delivery" btnColor="black" txtColor="white" />
            <HeaderButton activeTab={activeTab} setActiveTab={setActiveTab} text="Pickup" btnColor="white" txtColor="black" />
        </View>
    )
}

const HeaderButton = ({ text, btnColor, txtColor, activeTab, setActiveTab }) => {
    return (
        <TouchableOpacity
            style={
                {
                    backgroundColor: activeTab === text ? 'black' : "white",
                    paddingHorizontal: 16,
                    paddingVertical: 6,
                    borderRadius: 30
                }
            }
            onPress={() => setActiveTab(text)}
        >
            <Text style={{ color: activeTab === text ? 'white' : "black", }}>{text}</Text>
        </TouchableOpacity>
    )

}

const styles = StyleSheet.create({

})
