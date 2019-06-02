import { StyleSheet } from "react-native";
import { Fonts, Colors } from "../../config/styles";

export const styles = StyleSheet.create({
  logo: {
    display: "flex",
    alignItems: "center",
    padding: 10
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
    fontSize: 17,
    fontFamily: Fonts.light
  },
  borderLine: {
    borderBottomWidth: 1.5,
    borderColor: Colors.lightGrey,
    paddingBottom: 5,
    width: "90%",
    margin: 15
  },
  aboutPage: {
    display: "flex",
    justifyContent: "space-around"
  },
  list:{
    fontSize: 60
  },
  borderLine2: {
    borderBottomWidth: 1.5,
    borderColor: Colors.lightGrey,
    width: "90%",
   margin: 15
  },
  copyright:{
    fontSize: 17,
    fontFamily: Fonts.light,
    paddingBottom: 10,
    margin: 15

    }
});
