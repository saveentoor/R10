import React, { Component } from "react";
import { View, Text, StyleSheet, Image } from "react-native";
import { ScrollView, TouchableOpacity } from "react-native-gesture-handler";
import moment from "moment";

const Sessions = ({ item, navigation }) => {
  return (
    <ScrollView>
      <View>
        <Text>{item.location}</Text>
        <Text>{item.title}</Text>
        <Text>{moment(item.startTime).format("LT")}</Text>
      </View>
      <View>
        <Text>{item.description}</Text>
      </View>
      <View>
        <Text>Presented by:</Text>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate("Speaker", {
              name: item.speaker.name,
              bio: item.speaker.bio,
              url: item.speaker.url,
              image: item.speaker.image,
              id: item.speaker.id
            });
          }}
        >
          <Image
            style={{ width: 100, height: 100, borderRadius: 50 }}
            source={{ uri: item.speaker.image }}
          />
          <Text>{item.speaker.name}</Text>
        </TouchableOpacity>
        <TouchableOpacity />
      </View>
    </ScrollView>
  );
};

export default Sessions;
