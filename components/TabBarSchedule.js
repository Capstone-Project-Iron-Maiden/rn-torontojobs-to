import React from 'react';
import { StyleSheet, View, TouchableHighlight, Linking, Text } from 'react-native';

//json file
import schedule from '../dbstore/schedule.json';
const schedulescreen = schedule.schedulescreen;

const TabBarSchedule = props => {
    return (
        <View style={styles.TabBarScheduleView}>
            <View style={styles.TextView}>
                <TouchableHighlight onPress={() => Linking.openURL(schedulescreen.tabbar.link1)}>
                    <Text style={styles.Text}>{schedulescreen.tabbar.labelbtn1}</Text>
                </TouchableHighlight>
            </View>

            <View style={styles.TextView}>
                <TouchableHighlight onPress={() => Linking.openURL(schedulescreen.tabbar.link2)}>
                    <Text style={styles.Text}>{schedulescreen.tabbar.labelbtn2}</Text>
                </TouchableHighlight>
            </View>

        </View>
    );
};

const styles = StyleSheet.create({
    TabBarScheduleView: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '100%',
        paddingLeft: 25,
        paddingRight: 25
    },
    TextView: {
        backgroundColor: '#285e8d',
        width: 157,
        height: 45,
        borderRadius: 3,
        borderColor: 'white',
        borderWidth: 1

    },
    Text: {
        color: 'white',
        textAlign: 'center',
        paddingTop: 15,
        fontSize: 13
    }
});

export default TabBarSchedule;