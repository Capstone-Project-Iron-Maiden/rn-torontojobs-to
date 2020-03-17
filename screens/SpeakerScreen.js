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
import TabBarIcon from '../components/TabBarIcon';

//https://www.npmjs.com/package/jsonpath
//npm install jsonpath
//instead of IMPORT .... use REQUIRE ... example: var jp = require('jsonpath');

//import speakers from '../dbstore/speaker.json';
//const speakerscreen = speakers.speakerscreen;

let speakerJSONData = {};
const path = FileSystem.documentDirectory + 'speakerdata.json';
FileSystem.readAsStringAsync(path).then((data) => {

    console.log('Reading SPEAKER DATA from file');
    speakerJSONData = JSON.parse(data);

}).catch(function (error) {
    console.log('Error reading file:' + error);
});


export default function SpeakerScreen() {
    return (
        <View style={styles.container}>
            <ScrollView
                style={styles.container}
                contentContainerStyle={styles.contentContainer}>
                <View style={styles.getStartedContainer}>
                    <Speakers />
                </View>
            </ScrollView>
        </View>
    );
} //end of function SpeakerScreen

SpeakerScreen.navigationOptions = {
    header: null,
};

function Speakers() {

    var jp = require('jsonpath');

    var keynote = jp.query(speakerJSONData, '$.speaker[?(@.keynotespeaker==true)]');
    var keyspeakersTRUE = "";
    var keyspeakersTRUE = keynote.map((p) =>
        <View>
            <View>
                <View style={styles.PictureView}>
                    <TouchableHighlight onPress={() => Linking.openURL(p.link)}>
                        <Image style={styles.imageStyle}
                            source={{ uri: `${p.picture}` }} />
                    </TouchableHighlight>
                </View>
                <Quote />
            </View>
            <View>
                <Text style={styles.name}>{p.name}</Text>
                <Text style={styles.speakerTitle}>{p.title}</Text>
                <Text style={styles.company}>{p.company}</Text>
            </View>
        </View>
    );

    var keynote = jp.query(speakerJSONData, '$.speaker[?(@.keynotespeaker==false)]');
    var keyspeakersFALSE = "";
    var keyspeakersFALSE = keynote.map((p) =>
        <View>
            <View>
                <View style={styles.PictureView}>
                    <TouchableHighlight onPress={() => Linking.openURL(p.link)}>
                        <Image style={styles.imageStyle}
                            source={{ uri: `${p.picture}` }} />
                    </TouchableHighlight>
                </View>
            </View>
            <View>
                <Text style={styles.name}>{p.name}</Text>
                <Text style={styles.speakerTitle}>{p.title}</Text>
                <Text style={styles.company}>{p.company}</Text>
            </View>
        </View>
    );

    return (
        <View>
            <View >
                <Text style={styles.Title}>KEYNOTE{'\n'}SPEAKERS</Text>
                <View style={styles.styleLine} />
            </View>
            {keyspeakersTRUE}
            <View >
                <Text style={styles.TitleSpeaker}>SPEAKERS</Text>
                <View style={styles.styleLine} />
            </View>
            {keyspeakersFALSE}
        </View>

    );
}

function Quote() {
    return (
        <View style={styles.styleQuote}>
            <TabBarIcon
                name={
                    Platform.OS === 'ios'
                        ? 'ios-quote'
                        : 'md-quote'
                }
            />
        </View>
    );
}


//Style
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff'
    },
    Title: {
        color: '#414141',
        fontSize: 30,
        lineHeight: 35,
        textAlign: 'center',
        marginTop: 30,
        paddingBottom: 5
    },
    TitleSpeaker: {
        color: '#356c8c',
        fontSize: 30,
        lineHeight: 35,
        textAlign: 'center',
        marginTop: 30,
        paddingBottom: 5
    },
    name: {
        color: '#779eb9',
        fontSize: 14,
        lineHeight: 20,
        textAlign: 'right'
    },
    speakerTitle: {
        color: '#779eb9',
        fontSize: 14,
        lineHeight: 20,
        textAlign: 'right'
    },
    company: {
        color: '#779eb9',
        fontSize: 14,
        lineHeight: 20,
        textAlign: 'right'
    },
    styleLine: {
        backgroundColor: '#414141',
        height: 0.5,
        width: 235,
        marginTop: 10,
        alignSelf: 'center'
    },
    styleQuote: {
        color: '#414141',
        fontSize: 60,
        alignSelf: 'flex-end',
        //transform: [{ rotateY: '360deg' }],
        paddingTop: 10

    },
    contentContainer: {
        paddingTop: 30,
        paddingBottom: 30
    },
    imageStyle: {
        width: 200,
        height: 200
    },
    PictureView: {
        width: 200,
        height: 200,
        borderRadius: 150,
        overflow: "hidden",
        marginTop: 10,
        alignContent: 'center',
        alignSelf: 'center'
    },
    getStartedContainer: {
        //alignItems: 'center',
        marginHorizontal: 50,
    }
});
