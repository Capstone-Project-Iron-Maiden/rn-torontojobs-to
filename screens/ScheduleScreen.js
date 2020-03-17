import * as WebBrowser from 'expo-web-browser';
import React from 'react';
import {
    Platform,
    ScrollView,
    StyleSheet,
    Text,
    View,
    TouchableHighlight,
    Linking
} from 'react-native';
import * as FileSystem from 'expo-file-system';
import TabBarSchedule from '../components/TabBarSchedule';

//json file
//import schedule from '../dbstore/schedule.json';
//const schedulescreen = schedule.schedulescreen;

let scheduleJSONData = {};
const path = FileSystem.documentDirectory + 'scheduledata.json';
FileSystem.readAsStringAsync(path).then((data) => {

    console.log('Reading SCHEDULE DATA from file');
    scheduleJSONData = JSON.parse(data);

}).catch(function (error) {
    console.log('Error reading file:' + error);
});

export default function ScheduleScreen() {
    return (
        <View style={styles.container}>
            <ScrollView
                style={styles.container}
                contentContainerStyle={styles.contentContainer}>
                <View style={styles.getStartedContainer}>
                    <Event />
                </View>
            </ScrollView>
            <View style={styles.tabBarInfoContainer}>
                <TabBarSchedule />
            </View>
        </View>
    );
}//end of ScheduleScreen

ScheduleScreen.navigationOptions = {
    header: null,
};

function Event() {

    let topicHTML = [];

    scheduleJSONData.topic.forEach(p => {
        if (p.networking == false) {

            topicHTML.push(
                <View >
                    <View>
                        <Text style={styles.Venue}>{p.start} - {p.end}  |  {p.room}</Text>
                    </View>
                    <View style={styles.Box}>
                        <Text style={styles.TextBox}>{p.eventdesc}</Text>
                        <View style={styles.styleLine} />
                        <Text style={styles.TextBox}>{p.speakerdesc}</Text>
                        <TouchableHighlight onPress={() => Linking.openURL(p.learnmore)}>
                            <Text style={styles.Link}>Learn More</Text>
                        </TouchableHighlight>
                    </View>
                </View>);

        }
        else {
            topicHTML.push(
                <View >
                    <View>
                        <Text style={styles.Venue2}>{p.start} - {p.end}</Text>
                    </View>
                    <View style={styles.BoxMidle}>
                        <Text style={styles.TextBox}>{p.eventdesc}</Text>
                    </View>
                </View>);
        }
    });

    return (
        <View>
            <View >
                <Text style={styles.Title1}>EVENT{'\n'}SCHEDULE</Text>
                <View style={styles.styleLine1} />
            </View>
            {topicHTML}
        </View>

    );
}

//Style
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff'
    },
    Title1: {
        color: '#356c8c',
        fontSize: 30,
        lineHeight: 35,
        textAlign: 'center',
        marginTop: 30,
        paddingBottom: 5
    },
    Venue: {
        textAlign: 'center',
        justifyContent: 'center',
        color: '#779eb9',
        fontSize: 14,
        padding: 10
    },
    Venue2: {
        textAlign: 'center',
        justifyContent: 'center',
        color: '#aeaead',
        fontSize: 14,
        padding: 10
    },
    Box: {
        backgroundColor: '#779eb9',
        width: '100%',
        padding: 20,
        borderRadius: 3
    },
    BoxMidle: {
        backgroundColor: '#aeaead',
        width: '100%',
        padding: 10,
        borderRadius: 3
    },
    TextBox: {
        color: 'white',
        fontSize: 14,
        padding: 10,
        textAlign: 'center'
    },
    Link: {
        fontSize: 14,
        color: 'white',
        textAlign: 'justify',
        paddingBottom: 5,
        textAlign: 'center'
    },
    styleLine1: {
        backgroundColor: '#356c8c',
        height: 0.5,
        width: 235,
        marginTop: 10,
        alignSelf: 'center'
    },
    styleLine: {
        backgroundColor: 'white',
        height: 0.5,
        width: 235,
        marginTop: 10
    },
    contentContainer: {
        paddingTop: 30,
        paddingBottom: 100
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
