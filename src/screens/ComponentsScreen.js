import React from 'react'
import { Text, StyleSheet, View } from 'react-native'

const ComponentsScreen = () => {

    const name = "Slim Shady"
    return (
        <View>
        <Text style = {styles.textStyle}>
            Getting started with React Native !  
        </Text>
        <Text style = {styles.subHeaderStyle}>
             Hi, my name is what ? My name is who ? My name is chk chk {name} 
        </Text>
    </View>
    )
}

const styles = StyleSheet.create({
    textStyle : {
        fontSize:30
    },
    subHeaderStyle : {
        fontSize: 40
        
    }
})

export default ComponentsScreen
