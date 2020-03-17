import * as WebBrowser from 'expo-web-browser';
import React from 'react';
import {
    Image,
    Platform,
    ScrollView,
    StyleSheet,
    Text,
    View,
    TouchableHighlight,
    Linking
} from 'react-native';

import * as FileSystem from 'expo-file-system';
import TabBarExhibitor from '../components/TabBarExhibitor';
//import exhibitors from '../dbstore/exhibitor.json';

let exhibitorJSONData = {};
const path = FileSystem.documentDirectory + 'exhibitordata.json';
FileSystem.readAsStringAsync(path).then((data) => {
  
  console.log('Reading EXHIBITOR DATA from file');
  exhibitorJSONData = JSON.parse(data);

}).catch(function (error) {
  console.log('Error reading file:' + error);
});

export default function ExhibitorScreen() {
    return (
        <View style={styles.container}>
            <ScrollView
                style={styles.container}
                contentContainerStyle={styles.contentContainer}>
                <View>
                    <Exibitor />
                </View>
            </ScrollView>
            <View style={styles.tabBarInfoContainer}>
                <TabBarExhibitor />
            </View>
        </View>
    );
}

ExhibitorScreen.navigationOptions = {
    header: null,
};

function Exibitor() {

    var jp = require('jsonpath');

    var sponsor = jp.query(exhibitorJSONData, '$.exibitor[?(@.sponsor==true)]');
    var sponsorTrueHTML = "";
    var sponsorTrueHTML = sponsor.map((p) =>
        <View>
            <TouchableHighlight onPress={() => Linking.openURL(p.link)}>
                <Image style={styles.logo} source={{ uri: `${p.logo}` }} />
            </TouchableHighlight>
        </View>
    );


    var sponsor = jp.query(exhibitorJSONData, '$.exibitor[?(@.sponsor==false)]');
    var sponsorFalseHTML = "";
    var sponsorFalseHTML = sponsor.map((p) =>
        <View>
            <TouchableHighlight onPress={() => Linking.openURL(p.link)}>
                <Image style={styles.logo} source={{ uri: `${p.logo}` }} />
            </TouchableHighlight>
        </View>
    );

    return (
        <View>
            <View style={styles.getStartedContainer}>
                <Text style={styles.Title}>SPONSORS & EXHIBITORS</Text>
                <View style={styles.styleLine} />
                <Text style={styles.Venue}>{exhibitorJSONData.general.subtitle}</Text>
            </View>
            <View style={styles.getStartedContainer}>
                <Text style={styles.exibitorSubTitle}>EVENT SPONSORS</Text>
                {sponsorTrueHTML}
            </View>
            <View style={styles.getStartedContainer}>
                <Text style={styles.exibitorSubTitle}>EVENT EXIBITORS</Text>
                {sponsorFalseHTML}
            </View>
        </View>
    );
}

//Style
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff'
    },
    exibitorSubTitle: {
        color: 'black',
        //backgroundColor: '#356c8c',
        backgroundColor: 'lightgray',
        fontSize: 20,
        lineHeight: 30,
        textAlign: 'center',
        marginTop: 30,
        width: '100%'
    },
    logo: {
        width: 300,
        height: 100,
        borderRadius: 150,
        overflow: "hidden",
        alignContent: 'center',
        alignSelf: 'center',
        resizeMode: 'contain'
    },
    Title: {
        color: '#414141',
        fontSize: 30,
        lineHeight: 35,
        textAlign: 'center',
        marginTop: 30,
        paddingBottom: 5
    },
    SponsorTitle: {
        color: '#779eb9',
        fontSize: 14,
        lineHeight: 35,
        textAlign: 'center',
        paddingBottom: 5
    },
    Venue: {
        textAlign: 'center',
        justifyContent: 'center',
        color: '#414141',
        fontSize: 16,
        padding: 10
    },
    styleLine: {
        backgroundColor: '#414141',
        height: 0.5,
        width: 235,
        marginTop: 10
    },
    styleLine2: {
        backgroundColor: '#779eb9',
        height: 0.5,
        width: 100,
        marginTop: 10
    },
    contentContainer: {
        paddingTop: 30,
        paddingBottom: 100
    },
    sponsors: {
        backgroundColor: '#e0e0e0',
        width: 265,
        height: 100,
        marginBottom: 100
    },
    getStartedContainer: {
        alignItems: 'center',
        marginHorizontal: 50,
    },
    tabBarInfoContainer: {
        position: 'absolute',
        bottom: 0,
        left: 0,
        right: 0,
        ...Platform.select({
            ios: {
                shadowColor: 'black',
                shadowOffset: { width: 0, height: -3 },
                shadowOpacity: 0.1,
                shadowRadius: 3,
            },
            android: {
                elevation: 20,
            },
        }),
        alignItems: 'center',
        backgroundColor: '#fbfbfb',
        paddingVertical: 10,
    }
});
