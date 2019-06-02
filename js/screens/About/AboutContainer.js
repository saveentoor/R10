import React, { Component } from "react";
import About from "./About";
import { Query } from "react-apollo";
import gql from "graphql-tag";
import { View, Text, ActivityIndicator } from "react-native";
import { Loader } from "../../config/styles";

class AboutContainer extends Component {
  static navigationOptions = {
    title: "About"
  };

  render() {
    return (
      <Query query={GET_CONDUCT_ITEMS}>
        {({ loading, data }) => {
          if (loading || !data)
            return (
              <View style={Loader}>
                <ActivityIndicator size="small" />
              </View>
            );
          
          return <About data={data} />;
        }}
      </Query>
    );
  }
}
const GET_CONDUCT_ITEMS = gql`
  query {
    allConducts(orderBy: order_ASC) {
      id
      description
      title
    }
  }
`;

export default AboutContainer;
