import React from "react";
import { StyleSheet, View, TouchableOpacity, Platform } from "react-native";
import { Header } from "react-navigation";
import LinearGradient from "react-native-linear-gradient";
import Icon from "react-native-vector-icons/Ionicons";

const GradientHeader = props => (
  <View style={{ backgroundColor: "white", overflow: "hidden" }}>
    <LinearGradient
      colors={["#cf392a", "#9963ea"]}
      start={{ x: 0.0, y: 1.0 }}
      end={{ x: 1.0, y: 0.0 }}
      style={[StyleSheet.absoluteFill, { width: "100%" }]}
    />
    <Header {...props} />
  </View>
);

export const sharedNavigationOptions = navigation => ({
  headerBackTitle: null,
  header: props => <GradientHeader {...props} />,
  headerStyle: {
    backgroundColor: "transparent"
  },
  headerTintColor: "white",
  headerTitleStyle: { color: "white", fontFamily: "Montserrat" },
  headerLeft: Platform.OS === "android" &&
    navigation.state.routeName !== "Session" && (
      <TouchableOpacity
        onPress={() => {
          navigation.toggleDrawer();
        }}
      >
        <Icon name="md-menu" size={25} color="white" paddingRight={30} />
      </TouchableOpacity>
    )
});
