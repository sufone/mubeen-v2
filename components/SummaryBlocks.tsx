import React, {useState} from 'react';

import {StyleSheet, Text, View, SafeAreaView, FlatList, Button} from 'react-native';

//import MenuComp from './MenuCompFav'
// from render block before <text>
// <MenuComp breakdown={summaryData} content={summaryData.details}
//     surahName={surahsOld[props.surah].name} title={props.surah}
//     index={props.block} update={props.update}/>

//    let summaryData = summaries[props.surah].summary.breakdown[props.block]

//                <MenuComp breakdown={breakdown} content={breakdown.details} surahName={surahsOld[title].name} title={title} index={index}/>


function SummaryBlocks({children, title}) {
    return (
        <View style={styles.bodyContainer}>

            {children.map((breakdown, index) => {
                return (
                    <View key={index} >
                        {breakdown.details.map((detail, index) => {
                            console.log(detail[1])
                            if (detail[1] !== undefined) {
                                return (
                                    <Text key={index} style={styles.yasirText}>
                                        {detail[0] + ' (YQ. ' + detail[1] + ')'}
                                    </Text>
                                )
                            } else {
                                return (
                                    <Text key={index} style={styles.bodyText}>
                                        {detail[0]}
                                    </Text>
                                )
                            }
                        })}
                    </View>
                )
            })}
        </View>
    )
}

export default SummaryBlocks

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