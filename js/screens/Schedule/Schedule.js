//import liraries
import React, { Component } from "react";
import {
  View,
  Text,
  StyleSheet,
  SectionList,
  TouchableOpacity,
  Platform
} from "react-native";
import moment from "moment";
import { styles } from "./styles";
// import { withNavigation } from "react-navigation";
import Icon from "react-native-vector-icons/Ionicons";
import { Colors } from "../../config/styles";

// create a component
const Schedule = ({ data, navigation, favId }) => {
  console.log(navigation);
  return (
    <View>
      <SectionList
        sections={data}
        renderItem={({ item }) => {
          return (
            <View>
              <TouchableOpacity
                onPress={() => {
                  if (!item.speaker) {
                    navigation.navigate("", {});
                  } else {
                    navigation.navigate("Session", {
                      id: item.id,
                      item: item
                    });
                  }
                }}
              >
                <View style={styles.textSpacing}>
                  <Text style={styles.h1}>{item.title}</Text>
                  <Text style={styles.h2}>{item.location}</Text>
                </View>
                <View>
                  {favId.includes(item.id) ? (
                    <Icon
                      name={Platform.select({
                        ios: "ios-heart",
                        android: "md-heart"
                      })}
                      color={Colors.red}
                    />
                  ) : (
                    <Text />
                  )}
                </View>
              </TouchableOpacity>
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
// withNavigation(Schedule)
