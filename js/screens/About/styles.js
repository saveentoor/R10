import { StyleSheet } from "react-native";
import { Fonts, Colors } from "../../config/styles";

export const styles = StyleSheet.create({
  logo: {
    display: "flex",
    alignItems: "center",
    padding: 50
  },
  h1: {
    fontSize: 20,
    fontWeight: "bold",
    margin: 10
    // fontFamily: Fonts.regular
  },
  h2: {
    margin: 10
  },
  borderLine: {
    borderBottomColor: Colors.lightGrey,
    borderBottomWidth: 1,
    width: "90%"
  },
  aboutPage: {
    display: "flex",
    justifyContent: "space-around"
  }
});
