import React, { Component } from "react";
import Speaker from "./Speaker";

class SpeakerContainer extends Component {
  render() {
    let navigation = this.prop;

    return (
      <Speaker
        navigation={navigation}
        name={navigation.getParam("name")}
        bio={navigation.getParam("bio")}
        url={navigation.getParam("url")}
        image={navigation.getParam("image")}
        id={navigation.getParam("id")}
      />
    );
  }
}

export default SpeakerContainer;
