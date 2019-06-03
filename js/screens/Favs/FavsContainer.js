import React, { Component } from "react";
import { View, ActivityIndicator } from "react-native";
import Favs from "./Favs";
import FavsContext from "../../context/FavesContext";
import { formatSessionData } from "../../Helpers/helpers";
import gql from "graphql-tag";
import { Query } from "react-apollo";
import { Loader } from "../../config/styles";
import PropTypes from "prop-types";

class FavsContainer extends Component {
  static navigationOptions = {
    title: "Favs"
  };
  render() {
    return (
      <Query query={GET_ALL_FAVS}>
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
                let filterSessions = data.allSessions.filter(sessions => {
                  return faveIds.includes(sessions.id);
                });
                return (
                  <Favs
                    sessions={formatSessionData(filterSessions)}
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

const GET_ALL_FAVS = gql`
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

FavsContainer.propTypes = { navigation: PropTypes.object.isRequired };
export default FavsContainer;
