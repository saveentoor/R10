import React, { Component } from "react";
import { View, Text, StyleSheet } from "react-native";
import { ScrollView } from "react-native-gesture-handler";

const Sessions = ({ item, navigation }) => {
  return (
    <ScrollView>
      <View>
        <Text>
          {item.location}
        </Text>
      </View>
    </ScrollView>
  );
};

export default Sessions;
