import React, { Component } from "react";
import { View, Text, StyleSheet } from "react-native";
import SectionListContainer from "../SectionListItem";

class SectionListContainer extends Component {
  static navigationOptions = {
    title: "Favs"
  };
  render() {
    return (
<Text>
    Section-List
</Text>
    );
  }
}

export default SectionListContainer;
