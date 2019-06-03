import React from "react";
import {
  View,
  Text,
  Linking,
  Image,
  ScrollView,
  TouchableOpacity,
  Platform
} from "react-native";
import styles from "./styles";
import { Fonts } from "../../config/styles";
import LinearGradient from "react-native-linear-gradient";
import Icon from "react-native-vector-icons/Ionicons";
import PropTypes from "prop-types";

const Speaker = ({ speaker, navigation }) => {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.title}>
        <TouchableOpacity
          onPress={() => {
            navigation.goBack();
          }}
        >
          <Icon
            name={Platform.select({ ios: "ios-close", android: "md-close" })}
            color="white"
            size={50}
            style={{ justifyContent: "flex-start" }}
          />
        </TouchableOpacity>

        <Text style={styles.speakerTitle}>About the Speaker</Text>
      </View>
      <View style={styles.speakerInfo}>
        <Image
          style={{ width: 100, height: 100, borderRadius: 50 }}
          source={{ uri: speaker.image }}
        />
        <Text style={styles.name}>{speaker.name}</Text>
        <Text style={styles.bio}>{speaker.bio}</Text>
        <TouchableOpacity
          onPress={() => {
            Linking.openURL(`${speaker.url}`);
          }}
        >
          <LinearGradient
            colors={["#9963ea", "#4583e8"]}
            start={{ x: 0.0, y: 1.0 }}
            end={{ x: 1.0, y: 0.0 }}
            style={[
              {
                height: 50,
                width: 220,
                alignItems: "center",
                justifyContent: "center",
                borderRadius: 30
              }
            ]}
          >
            <Text
              style={{
                backgroundColor: "transparent",
                fontSize: 15,
                color: "white",
                fontWeight: "bold",
                fontFamily: Fonts.light
              }}
            >
              Read More on Wikipedia
            </Text>
          </LinearGradient>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};
Speaker.propTypes = {
  navigation: PropTypes.object.isRequired,
  speaker: PropTypes.object.isRequired
};

export default Speaker;
