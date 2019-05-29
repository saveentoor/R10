import React, { Component } from "react";
import About from "./About";
import { Query } from "react-apollo";
import gql from "graphql-tag";
import { Text, ActivityIndicator } from "react-native";

class AboutContainer extends Component {
  static navigationOptions = {
    title: "About"
  };

  //   headerTintColor: "",
  //   headerTitleStyle: {
  //     fontSize: 20,
  //     color: "#fff"
  //   }
  // };

  render() {
    return (
      <Query query={GET_CONDUCT_ITEMS}>
        {({ loading, data }) => {
          if (loading || !data) return <ActivityIndicator size="small" />;
          console.log(data);
          return <About data={data} />;
        }}
      </Query>
    );
  }
}
const GET_CONDUCT_ITEMS = gql`
  query {
    allConducts {
      id
      description
      title
      o
    }
  }
`;

export default AboutContainer;
