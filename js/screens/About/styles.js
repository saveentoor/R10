import { StyleSheet } from "react-native";
import { Fonts, Colors } from "../../config/styles";

export const styles = StyleSheet.create({
  logo: {
    display: "flex",
    alignItems: "center",
    padding: 40
  },
  h1: {
    fontSize: 22,
    fontWeight: "bold",
    margin: 10,
    fontFamily: Fonts.regular,
    color: "black"
  },
  h2: {
    margin: 10,
    fontSize: 16,
    fontFamily: Fonts.light
  },
  borderLine: {
    borderBottomWidth: 1.5,
    borderColor: Colors.lightGrey,
    paddingBottom: 10,
    width: "90%",
   
  },
  aboutPage: {
    display: "flex",
    justifyContent: "space-around"
  },
  list:{
    fontSize: 60
  }
});
