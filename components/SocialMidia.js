import React from 'react';
import { StyleSheet, View, TouchableHighlight, Image, Linking } from 'react-native';

import twitter from '../assets/images/twitter.png';
import instagram from '../assets/images/instagram.png';
import facebook from '../assets/images/facebook.png';
import linkedin from '../assets/images/linkedin.png';
import youtube from '../assets/images/youtube.png';

import home from '../dbstore/home.json';
const socialmedia = home.homescreen.socialmedia;

const SocialMidia = props => {
    return (
        <View style={styles.SocialMidiaView}>

            <TouchableHighlight onPress={()=> _linkPressed({"link":"fb"}) }>
                <Image
                    source={facebook}
                />
            </TouchableHighlight>

            <TouchableHighlight onPress={() => _linkPressed({"link":"tw"}) }>
                <Image
                    source={twitter}
                />
            </TouchableHighlight>

            <TouchableHighlight onPress={() => _linkPressed({"link":"in"}) }>
                <Image
                    source={instagram}
                />
            </TouchableHighlight>

            <TouchableHighlight onPress={() => _linkPressed({"link":"li"}) }>
                <Image
                    source={linkedin}
                />
            </TouchableHighlight>

            <TouchableHighlight onPress={() => _linkPressed({"link":"yo"}) }>
                <Image
                    source={youtube}
                />
            </TouchableHighlight>

        </View>
    );
};

const _linkPressed = props => {

    if (props.link == "fb"){
        Linking.openURL(socialmedia.facebook);
    }
    if (props.link == "tw"){
        Linking.openURL(socialmedia.twitter);
    }
    if (props.link == "in"){
        Linking.openURL(socialmedia.instagram);
    }
    if (props.link == "li"){
        Linking.openURL(socialmedia.linkedin);
    }
    if (props.link == "yo"){
        Linking.openURL(socialmedia.youtube);
    }
};

const styles = StyleSheet.create({
    SocialMidiaView: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '100%',
        paddingLeft: 20,
        paddingRight: 20,
        paddingTop: 10
      }
});

export default SocialMidia;