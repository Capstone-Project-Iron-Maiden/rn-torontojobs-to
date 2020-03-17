import React from 'react';
import {
    Image,
    ScrollView,
    StyleSheet,
    Text,
    View,
    TouchableHighlight,
    Linking
} from 'react-native';
import * as FileSystem from 'expo-file-system';

//import tickets from '../dbstore/ticket.json';
//const ticketscreen = tickets.ticketscreen;

let ticketJSONData = {};
const path = FileSystem.documentDirectory + 'ticketdata.json';
FileSystem.readAsStringAsync(path).then((data) => {

    console.log('Reading TICKET DATA from file');
    ticketJSONData = JSON.parse(data);

}).catch(function (error) {
    console.log('Error reading file:' + error);
});

export default function TicketScreen() {
    return (
        <View style={styles.container}>
            <ScrollView
                style={styles.container}
                contentContainerStyle={styles.contentContainer}>

                <View style={styles.getStartedContainer}>
                    <Tickets />
                </View>

            </ScrollView>
        </View>
    );
}

TicketScreen.navigationOptions = {
    header: null,
};

function Tickets() {

    var ticketHTML = ticketJSONData.options.map((p) =>

        <View style={styles.FotoView}>
            <View>
                <Image style={styles.Foto}
                    source={{ uri: `${p.picture}` }} />
            </View>
            <View >
                <Text style={styles.Price}>{p.value}</Text>
                <Text style={styles.Description}> {p.desc} </Text>
            </View>
            <TouchableHighlight onPress={() => Linking.openURL(p.link)}>
                <View style={styles.Button}>
                    <Text style={styles.TextButton}>{p.labelbtn}</Text>
                </View>
            </TouchableHighlight>
        </View>
    );

    return (
        <View>
            <View >
                <Text style={styles.Title}>TICKET{'\n'}OPTIONS</Text>
                <View style={styles.styleLine} />
            </View>
            <View>
                {ticketHTML}
            </View>
        </View>
    );
}

//style
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
    Price: {
        color: '#414141',
        fontSize: 40,
        lineHeight: 35,
        textAlign: 'center',
        paddingBottom: 5,
        paddingTop: 20
    },
    Description: {
        textAlign: 'center',
        marginBottom: 10
    },
    TextButton: {
        color: 'white',
        padding: 10,
        textAlign: 'center'
    },
    Button: {
        backgroundColor: '#4b4e53',
        borderRadius: 3,
        width: 165,
        height: 40
    },
    styleLine: {
        backgroundColor: '#414141',
        height: 0.5,
        width: 235,
        marginTop: 10,
        alignSelf: 'center'
    },
    contentContainer: {
        paddingTop: 30,
        paddingBottom: 30
    },
    Foto: {
        width: 250,
        height: 201,
        borderRadius: 3
    },
    FotoView: {
        width: '100%',
        paddingTop: 30,
        alignItems: 'center'
    },
    getStartedContainer: {
        alignItems: 'center',
        marginHorizontal: 50,
    }
});
