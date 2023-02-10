import {StatusBar} from 'expo-status-bar';
import {Platform, StyleSheet, SafeAreaView, ScrollView} from 'react-native';

import EditScreenInfo from '../components/EditScreenInfo';
import {Text, View} from '../components/Themed';
import SimpleBlock from '../components/SimpleBlock';

import summaries from './summaries.js';


export default function SurahScreen({route}) {
    const {surahId} = route.params;
    console.log();

    return (
            <SafeAreaView style={styles.container} >
                <ScrollView >
                    <Text style={styles.title}>{summaries[surahId-1].name} </Text>
                    <SimpleBlock title="Period">{summaries[surahId-1].summary.period}</SimpleBlock>
                    <SimpleBlock title="Context">{summaries[surahId-1].summary.context}</SimpleBlock>
                    <SimpleBlock title="Theme">{summaries[surahId-1].summary.theme}</SimpleBlock>

                    <EditScreenInfo path="/screens/ModalScreen.tsx"/>
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
