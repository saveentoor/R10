//import liraries
import React, { Component } from "react";
import moment from "moment";
import { TouchableOpacity } from "react-native-gesture-handler";
import { View, Text, StyleSheet, SectionList, Platform } from "react-native";
import Icon from "react-native-vector-icons/Ionicons";
import { Colors } from "../../config/styles";
import { styles } from "../Schedule/styles";

const Favs = ({ sessions = [], navigation }) => {
  return (
    <View>
      {sessions.length <= 0 ? (
        <View>
          <Text>There are no favorites</Text>
        </View>
      ) : (
        <SectionList
          sections={sessions}
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
                    {sessions ? (
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
            <Text style={styles.scheduleText}>
              {moment(title).format("LT")}
            </Text>
          )}
          keyExtractor={item => item.id}
        />
      )}
    </View>
  );
};

export default Favs;
