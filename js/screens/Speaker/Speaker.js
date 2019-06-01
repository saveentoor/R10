import React from "react";
import {
  View,
  Text,
  Linking,
  Image,
  ScrollView,
  TouchableOpacity
} from "react-native";
import styles from "./styles";
import { Fonts, Colors } from "../../config/styles";
import LinearGradient from "react-native-linear-gradient";

const Speaker = ({ speaker }) => {
  console.log(speaker);
  return (
    <ScrollView style={styles.container}>
      <View>
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
            colors={["#cf392a", "#9963ea"]}
            start={{ x: 0.0, y: 1.0 }}
            end={{ x: 1.0, y: 0.0 }}
            style={[
              {
                height: 50,
                width: 220,
                alignItems: "center",
                justifyContent: "center",
                borderRadius: 30,
                
              }
            ]}
          >
            <Text
              style={{
                backgroundColor: "transparent",
                fontSize: 15,
                color: "white",
                fontWeight: 'bold',
                fontFamily: Fonts.light,
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

export default Speaker;
