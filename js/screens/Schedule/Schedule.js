//import liraries
import React, { Component } from "react";
import { View, Text, StyleSheet, SectionList } from "react-native";
import moment from "moment";
import { styles } from "./styles";

// create a component
const Schedule = ({ data }) => {
  console.log(data);
  return (
    <View>
      <SectionList
        sections={data}
        renderItem={({ item }) => {
          return (
            <View>
              <View style={styles.textSpacing}>
                <Text style={styles.h1}>{item.title}</Text>
                <Text style={styles.h2}>{item.location}</Text>
              </View>
              <View style={styles.border} />
            </View>
          );
        }}
        renderSectionHeader={({ section: { title } }) => (
          <Text style={styles.scheduleText}>{moment(title).format("LT")}</Text>
        )}
        keyExtractor={item => item.id}
      />
    </View>
  );
};

export default Schedule;
