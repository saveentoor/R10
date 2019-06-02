import React, { Component } from "react";
import Schedule from "./Schedule";
import { Query } from "react-apollo";
import gql from "graphql-tag";
import { View, Text, ActivityIndicator } from "react-native";
import { formatSessionData } from "../../Helpers/helpers";
import FavsContext from "../../context/FavesContext";
import { Loader } from "../../config/styles";
// import PropTypes from "prop-types";

class ScheduleContainer extends Component {
  static navigationOptions = {
    title: "Schedule"
  };
  render() {
    return (
      <Query query={GET_ALL_SESSIONS}>
        {({ loading, data }) => {
          if (loading || !data)
            return (
              <View style={Loader}>
                <ActivityIndicator size="small" />
              </View>
            );
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
// ScheduleContainer.propTypes = { navigation: PropTypes.object.isRequired };
export default ScheduleContainer;
