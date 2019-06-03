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
import PropTypes from "prop-types";

const Schedule = ({ data, navigation, favId }) => {
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
                <View style={styles.container}>
                  <View height="100%" style={styles.text}>
                    <Text style={styles.h1}>{item.title}</Text>
                    <Text style={styles.h2}>{item.location}</Text>
                  </View>
                  <View style={styles.locationHeart}>
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

Schedule.propTypes = {
  data: PropTypes.array.isRequired,
  favId: PropTypes.arrayOf(PropTypes.string).isRequired,
  navigation: PropTypes.object.isRequired
};
export default Schedule;
