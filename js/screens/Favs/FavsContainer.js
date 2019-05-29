import React, { Component } from "react";
import { View, Text, StyleSheet } from "react-native";
import Favs from "./Favs";
import FavsContainer from "../../context";

class FavsContainer extends Component {
  static navigationOptions = {
    title: "Favs"
  };
  render() {
    return <FavsContainer>{value => <Favs favs={value} />}</FavsContainer>;
  }
}

export default FavsContainer;
