import React, { Component } from "react";
import { View, Text, StyleSheet, Image } from "react-native";
import { ScrollView, TouchableOpacity } from "react-native-gesture-handler";
import moment from "moment";
import { styles } from "./styles";
import { withNavigation } from "react-navigation";

const Sessions = ({
  item,
  navigation,
  getFavedSession,
  addFaveSession,
  removeFaveSession,
  favId
}) => {
  return (
    <ScrollView>
      <View>
        <Text style={styles.locationName}>{item.location}</Text>
        <Text style={styles.titleName}>{item.title}</Text>
        <Text style={styles.timeName}>
          {moment(item.startTime).format("LT")}
        </Text>
      </View>
      <View style={styles.textSpacing}>
        <Text style={styles.descriptionName}>{item.description}</Text>
      </View>
      <View>
        <Text style={styles.presentedBy}>Presented by:</Text>
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
            style={{ width: 100, height: 100, borderRadius: 50, margin: 10 }}
            source={{ uri: item.speaker.image }}
          />
          <Text style={styles.speakerName}>{item.speaker.name}</Text>
        </TouchableOpacity>
        <View>
          {favId.includes(item.id) ? (
            <TouchableOpacity
              onPress={() => {
                removeFaveSession(item.id);
              }}
            >
              <Text>Remove from Favs</Text>
            </TouchableOpacity>
          ) : (
            <TouchableOpacity
              onPress={() => {
                addFaveSession(item.id);
              }}
            >
              <Text>Add to Favs</Text>
            </TouchableOpacity>
          )}
        </View>
      </View>
    </ScrollView>
  );
};

export default withNavigation(Sessions);
