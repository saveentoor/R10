import React, { Component } from "react";
import { View, Text, StyleSheet } from "react-native";
import Favs from "./Favs";
import FavsContext from "../../context/FavesContext";
import { format } from "path";
import { formatSessionData } from "../../Helpers/helpers";

class FavsContainer extends Component {
  static navigationOptions = {
    title: "Favs"
  };
  render() {
    return (
      <Query query={GET_ALL_SESSIONS}>
        {({ loading, data }) => {
          if (loading || !data) return <ActivityIndicator size="small" />;
          console.log(data);
          return (
            <FavsContext.Consumer>
              {({ value }) => {
                let filterSessions = data.allSessions.filter(sessions => {
                  return value.include(sessions.id);
                });
                return (
                  <Favs
                    sessions={formatSessionData(filterSessions)}
                    navigation={this.props.navigation}
                    favId={value}
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
  query {
    allSessions {
      id
      description
      location
      speaker {
        id
        bio
        image
        name
        url
      }
      startTime
      title
    }
  }
`;
export default FavsContainer;
