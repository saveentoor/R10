import React, { Component } from "react";
import { ApolloProvider } from "react-apollo";
import client from "./config/api";
import RootStackNavigator from "./navigation/RootStackNavigator";
import Faves, { FavesProvider } from "./context/FavesContext";

export default class App extends Component {
  render() {
    return (
      <ApolloProvider client={client}>
        <FavesProvider>
        <RootStackNavigator />
        </FavesProvider>
      </ApolloProvider>
    );
  }
}
