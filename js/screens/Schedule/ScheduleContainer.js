import React, { Component } from "react";
import Schedule from "./Schedule";
import { Query } from "react-apollo";
import gql from "graphql-tag";
import { Text, ActivityIndicator } from "react-native";
import { formatSessionData } from "../../Helpers/helpers";
import FavsContext from "../../context/FavesContext";

class ScheduleContainer extends Component {
  static navigationOptions = {
    title: "Schedule"
  };
  render() {
    return (
      <Query query={GET_ALL_SESSIONS}>
        {({ loading, data }) => {
          if (loading || !data) return <ActivityIndicator size="small" />;
          console.log(data);
          return (
            <FavsContext.Consumer>
              {({ faveIds }) => {
                return (
                  <Schedule
                    data={formatSessionData(data.allSessions)}
                    navigation={this.props.navigation}
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

export default ScheduleContainer;