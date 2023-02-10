import React, {useState} from 'react';

import {StyleSheet, Text, View, SafeAreaView, FlatList, Button} from 'react-native';

function SummaryBlock({children, title}) {

    return (
        <View style={styles.bodyContainer}>
            <Text style={styles.bodyText}>{title} </Text>
            <Text style={styles.bodyText}>{children} </Text>
        </View>
    )
}

export default SummaryBlock

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
    },
    title: {
        fontSize: 32,
    },
    yasirText: {
        fontSize: 17,
        fontWeight: 'bold',
        paddingBottom: 20,
        textAlign: 'left',
        zIndex: 1,
        lineHeight: 22
    },
    bodyContainer: {
        margin: 20,
        borderRadius: 8,
        shadowColor: "#111",
        shadowOffset: {
            width: 0,
            height: 1,
        },
        backgroundColor: '#fbf5ff',
        paddingLeft: 22,
        paddingRight: 22,
        paddingBottom: 10,
        shadowOpacity: 0.12,
        shadowRadius: 3,
        elevation: 5,
        overflow: "hidden",
    },
    bodyText: {
        fontSize: 17,
        textAlign: 'left',
        zIndex: 1,
        lineHeight: 22
    },
    header: {
        fontSize: 28,
        fontWeight: "bold",
        textAlign: 'left',
    }
});