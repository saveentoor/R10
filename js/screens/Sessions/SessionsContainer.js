import React, { Component } from "react";
import { View, Text, StyleSheet, ActivityIndicator } from "react-native";
import Sessions from "./Sessions";
import gql from "graphql-tag";
import { Query } from "react-apollo";
import FavsContext from "../../context/FavesContext";
import { Loader } from "../../config/styles";
import PropTypes from "prop-types";

class SessionsContainer extends Component {
  static navigationOptions = {
    title: "Sessions"
  };
  render() {
    let { navigation } = this.props;
    let itemID = navigation.getParam("id");
    let item = navigation.getParam("item");
    return (
      <Query variables={{ id: itemID }} query={GET_ALL_SESSIONS}>
        {({ loading, data }) => {
          if (loading || !data)
            return (
              <View style={Loader}>
                <ActivityIndicator size="small" />
              </View>
            );
          console.log(data);
          return (
            <FavsContext.Consumer>
              {({
                getFavedSessionIds,
                addFaveSession,
                removeFaveSession,
                faveIds
              }) => {
                return (
                  <Sessions
                    itemID={itemID}
                    item={item}
                    navigation={this.props.navigation}
                    data={data.allSpeaker}
                    getFavedSessionIds={getFavedSessionIds}
                    addFaveSession={addFaveSession}
                    removeFaveSession={removeFaveSession}
                    favId={faveIds}
                  />
                );
              }}
            </FavsContext.Consumer>
          );
        }}
      </Query>
    );
  }
}
const GET_ALL_SESSIONS = gql`
  query allSessions($id: ID) {
    allSpeakers(filter: { id: $id }) {
      id
      bio
      image
      url
      name
    }
  }
`;
Sessions.protoTypes = {
  navigation: PropTypes.object.isRequired
};

export default SessionsContainer;
