import { StyleSheet } from "react-native";
import { Fonts, Colors } from "../../config/styles";

export const styles = StyleSheet.create({
  logo: {
    display: "flex",
    alignItems: "center",
    padding: 40
  },
  h1: {
    fontSize: 30,
    fontWeight: "bold",
    margin: 10,
    fontFamily: Fonts.regular,
    color: 'black'
  },
  h2: {
    margin: 10,
    fontSize: 18,
    fontFamily: Fonts.regular,
    color: 'black'
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
