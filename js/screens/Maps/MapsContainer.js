import React, { Component } from "react";
import Maps from "./Maps";

class MapsContainer extends Component {
  static navigationOptions = {
    title: "Maps"
  };
  render() {
    return <Maps />;
  }
}

export default MapsContainer;
