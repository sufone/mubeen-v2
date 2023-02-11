import {StatusBar} from 'expo-status-bar';
import {Platform, StyleSheet, SafeAreaView, ScrollView} from 'react-native';

import {Text, View} from '../components/Themed';
import SummaryBlocks from '../components/SummaryBlocks';
import SimpleBlock from '../components/SimpleBlock';

import summaries from './summaries.js';


export default function SurahScreen({route}) {
    const {surahId} = route.params;
    const currentSurah = surahId - 1
    console.log();

    return (
        <SafeAreaView style={styles.container}>
            <ScrollView>
                <Text style={styles.title}>{summaries[currentSurah].name} </Text>
                <SimpleBlock title="Period">{summaries[currentSurah].summary.period}</SimpleBlock>
                <SimpleBlock title="Context">{summaries[currentSurah].summary.context}</SimpleBlock>
                <SimpleBlock title="Theme">{summaries[currentSurah].summary.theme}</SimpleBlock>
                <SummaryBlocks>{summaries[currentSurah].summary.breakdown}</SummaryBlocks>
            </ScrollView>


            {/* Use a light status bar on iOS to account for the black space above the modal */}
            <StatusBar style={Platform.OS === 'ios' ? 'light' : 'auto'}/>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    title: {
        fontSize: 20,
        fontWeight: 'bold',
    },
    separator: {
        marginVertical: 30,
        height: 1,
        width: '80%',
    },
});
