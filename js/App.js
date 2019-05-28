/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from "react";

import About from "./screens/About";
import { ApolloProvider } from "react-apollo";
import client from "./config/api";

export default class App extends Component {
  render() {
    return (
      <ApolloProvider client={client}>
        <About />
      </ApolloProvider>
    );
  }
}
