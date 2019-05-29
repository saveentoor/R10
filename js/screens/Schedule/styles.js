import { StyleSheet } from "react-native";
import { Colors, Fonts } from "../../config/styles";

export const styles = StyleSheet.create({
  h1: {
    fontSize: 20,
    fontWeight: "600",
    fontFamily: Fonts.light
  },
  h2: {
    fontSize: 15,
    color: Colors.mediumGrey,
    fontFamily: Fonts.regular
  },
  scheduleText: {
    backgroundColor: Colors.lightGrey,
    padding: 5,
    fontWeight: "600"
  },
  textSpacing: {
    margin: 15
  },
  border: {
    borderBottomWidth: 1.5,
    borderColor: Colors.lightGrey
  }
});
