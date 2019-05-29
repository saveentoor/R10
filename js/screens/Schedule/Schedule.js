//import liraries
import React, { Component } from "react";
import { View, Text, StyleSheet, SectionList } from "react-native";

// create a component
const Schedule = ({ data }) => {

  return (
    <View>
      <SectionList
        renderItem={({ item, index, section }) => (
          <Text key={index}>{item.title}</Text>
        )}
        sections={data}
      />
    </View>
  );
};

export default Schedule;
