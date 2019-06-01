import React, { Component } from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  Platform,
  Button
} from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import moment from "moment";
import { styles } from "./styles";
import { withNavigation } from "react-navigation";
import Icon from "react-native-vector-icons/Ionicons";
import { Colors } from "../../config/styles";
import { conditionalExpression } from "@babel/types";
import LinearGradient from "react-native-linear-gradient";

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
      <View
        style={{
          flex: 1,
          flexDirection: "row"
        }}
      >
        <View width="50%" height="100%" style={{ justifyContent: "flex-end" }}>
          <Text style={styles.locationName}>{item.location}</Text>
        </View>
        <View
          width="50%"
          style={{
            justifyContent: "flex-end",
            alignItems: "flex-end",
            paddingRight: 20,
            paddingBottom: 15
          }}
        >
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
      <View>
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
              speaker: item.speaker
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
              style={{ alignItems: "center", marginTop: 20 }}
            >
              <LinearGradient
                colors={["#cf392a", "#9963ea"]}
                start={{ x: 0.0, y: 1.0 }}
                end={{ x: 1.0, y: 0.0 }}
                style={[
                  {
                    height: 45,
                    width: "40%",
                    alignItems: "center",
                    justifyContent: "center",
                    borderRadius: 20
                  }
                ]}
              >
                <Text
                  style={{
                    backgroundColor: "transparent",
                    fontSize: 15,
                    color: "white"
                  }}
                >
                  Remove from Favs
                </Text>
              </LinearGradient>
            </TouchableOpacity>
          ) : (
            <TouchableOpacity
              onPress={() => {
                addFaveSession(item.id);
              }}
              style={{ alignItems: "center", marginTop: 20 }}
            >
              <LinearGradient
                colors={["#cf392a", "#9963ea"]}
                start={{ x: 0.0, y: 1.0 }}
                end={{ x: 1.0, y: 0.0 }}
                style={[
                  {
                    height: 45,
                    width: "40%",
                    alignItems: "center",
                    justifyContent: "center",
                    borderRadius: 20
                  }
                ]}
              >
                <Text
                  style={{
                    backgroundColor: "transparent",
                    fontSize: 15,
                    color: "white"
                  }}
                >
                  Add to Favs
                </Text>
              </LinearGradient>
            </TouchableOpacity>
          )}
          <View style={styles.border} />
        </View>
      </View>
    </ScrollView>
  );
};

export default withNavigation(Sessions);
