import React, { Component } from "react";
import { View, Text, StyleSheet } from "react-native";
import Sessions from "./Sessions";
import gql from "graphql-tag";

class SessionsContainer extends Component {
  static navigationOptions = {
    title: "Schedule"
  };
  render() {
    let { navigation } = this.props;
    let itemID = navigation.getParam("id");
    let item = navigation.getParam("item");
    return (
      <View style={styles.container}>
        <Text>SessionsContainer</Text>
      </View>
    );
  }
}

export default SessionsContainer;
