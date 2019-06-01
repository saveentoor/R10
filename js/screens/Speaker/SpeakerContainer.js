import React, { Component } from "react";
import Speaker from "./Speaker";
import { withNavigation } from "react-navigation";

class SpeakerContainer extends Component {
  render() {
    const { navigation } = this.props;
    const speaker = navigation.getParam("speaker");

    return <Speaker speaker={speaker} />;
  }
}
export default withNavigation(SpeakerContainer);
