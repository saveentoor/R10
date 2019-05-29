//import liraries
import React, { Component } from "react";
import { View, Text, StyleSheet, SectionList } from "react-native";


// create a component
const Schedule = ({ data }) => {
  console.log(data)
  return (
    <View>
      <SectionList
        sections={data}
        renderItem={({ item }) => <Text>{item.title}</Text>}
      />
    </View>
  );
};

export default Schedule;
