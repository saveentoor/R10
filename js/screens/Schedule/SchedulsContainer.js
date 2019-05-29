import React, { Component } from "react";
import Schedule from "./Schedule";
import { Query } from "react-apollo";
import gql from "graphql-tag";
import { Text, ActivityIndicator } from "react-native";
import Helper from "../../Helpers";
const ScheduleContainer = () => {
  return (
    <Query query={GET_ALL_SESSIONS}>
      {({ loading, data }) => {
        if (loading || !data) return <ActivityIndicator size="small" />;
        console.log(data);
        return <Schedule data={Helper(data.allSessions)} />;
      }}
    </Query>
  );
};

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
    }
  }
`;

export default ScheduleContainer;
