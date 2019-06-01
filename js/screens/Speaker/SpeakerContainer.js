import React, { Component } from "react";
import Speaker from "./Speaker";
import { withNavigation } from "react-navigation";
import PropTypes from "prop-types";

class SpeakerContainer extends Component {
  render() {
    const { navigation } = this.props;
    const speaker = navigation.getParam("speaker");

    return <Speaker speaker={speaker} navigation={navigation} />;
  }
}

SpeakerContainer.protoTypes = { navigation: PropTypes.object.isRequired };

export default withNavigation(SpeakerContainer);
