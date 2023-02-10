import {StyleSheet, SectionList, TouchableHighlight} from 'react-native';

import {Text, View} from '../components/Themed';
import {RootTabScreenProps} from '../types';

import surahs from './surahs.js';

export default function TabOneScreen({navigation}: RootTabScreenProps<'TabOne'>) {
    return (
        <View style={styles.container}>
            <SectionList
                stickySectionHeadersEnabled={true}
                sections={surahs}
                keyExtractor={(item, index) => item.number}
                renderSectionHeader={({section: {title}}) => (
                    <View style={styles.sectionContainer}>
                        <Text style={styles.sectionTitle}>{title}</Text>
                    </View>
                )}
                renderItem={({item: {name, period, verses, number}}) => (
                    <TouchableHighlight
                        onPress={() => navigation.navigate('Surah', { surahId: number })}
                        style={styles.card}
                        activeOpacity={0.9}
                        underlayColor="white"
                    >
                        <View style={{flex: 1, flexDirection: 'row'}}>
                            <View style={{justifyContent: "center", paddingRight: 20}}>
                                <Text style={{fontWeight: '400', fontSize: 20}}>
                                    {number}
                                </Text>
                            </View>
                            <View>
                                <Text style={{fontWeight: '600', fontSize: 18}}>
                                    Surah {name}
                                </Text>
                                <View>
                                    <Text style={{fontWeight: '300', fontSize: 14}}>
                                        {period} • {verses} Verses
                                    </Text>
                                </View>
                            </View>

                        </View>

                    </TouchableHighlight>
                )}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    title: {
        fontSize: 20,
        fontWeight: 'bold',
    },
    separator: {
        marginVertical: 30,
        height: 1,
        width: '80%',
    },
    card: {
        width: '100%',
        backgroundColor: '#F2FDE0',
        flex: 10,
        paddingLeft: 20,
        padding: 20,
        marginTop: 3,
        margin: 10,
        borderRadius: 8,
        elevation: 5,
    },
    container: {
        flex: 1,
        backgroundColor: '#FFFFFF',
        padding: 0,
    },
    sectionContainer: {
        backgroundColor: "#FFFFFF",
        padding: 10,
        paddingTop: 15,
        paddingBottom: 5,
    },
    sectionTitle: {
        fontWeight: "bold",
        color: "#222222",
        fontSize: 11,
        textTransform: 'uppercase'
    },
});
