import React from "react";
import { View, Text, Linking } from "react-native";
import SpeakerContainer from "./SpeakerContainer";
import { ScrollView, TouchableOpacity } from "react-native-gesture-handler";
import { typeAlias } from "@babel/types";
import { styles } from "../Sessions/styles";

const Speaker = (navigation, name, bio, url, image) => {
  return (
    <ScrollView>
      <View>
        <Text>About the Speaker</Text>
      </View>
      <View>
        <Image source={image} />
        <Text>{name}</Text>
        <Text>{bio}</Text>
        <TouchableOpacity
          onPress={() => {
            Linking.openURL(`${url}`);
          }}
        />
      </View>
    </ScrollView>
  );
};

export default Speaker;
