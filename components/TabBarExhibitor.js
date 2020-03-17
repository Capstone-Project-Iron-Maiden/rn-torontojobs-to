import React from 'react';
import { StyleSheet, View, TouchableHighlight, Image, Linking, Text } from 'react-native';


//import registerNow from '../assets/images/registerNow.png';
//import tradeShow from '../assets/images/tradeShow.png';

const TabBarExhibitor = props => {
    return (
        <View style={styles.TabBarExhibitorView}>
            <View style={styles.TextView}>
                <TouchableHighlight onPress={() => Linking.openURL('https://www.torontoentrepreneurs.ca/exhibitor-list')}>
                    <Text style={styles.Text}>EXHIBITORS</Text>
                </TouchableHighlight>
            </View>

            <View style={styles.TextView}>
                <TouchableHighlight onPress={() => Linking.openURL('https://www.torontoentrepreneurs.ca/exhibitor-list')}>
                    <Text style={styles.Text}>SHOW YOUR BRAND</Text>
                </TouchableHighlight>
            </View>
            
        </View>
    );
};

const styles = StyleSheet.create({
    TabBarExhibitorView: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '100%',
        paddingLeft: 25,
        paddingRight: 25
    },
    TextView:{
        backgroundColor: '#999997',
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

export default TabBarExhibitor;