//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';


// create a component
class SpeakerContainer extends Component {
    render() {
        return (
            <View style={styles.container}>
                <Text>Speaker</Text>
            </View>
        );
    }
}


//make this component available to the app
export default SpeakerContainer;
