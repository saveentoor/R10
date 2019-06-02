import { StyleSheet } from "react-native";
import { Fonts, Colors } from "../../config/styles";

export const styles = StyleSheet.create({
  list: {
    margin: 10,
    fontSize: 15,
    // flexDirection: "row",
    justifyContent: "flex-start",
    alignSelf: "center",
    color: Colors.purple
  },
  plusSign: {
    flexDirection: "row",
    flex: 1
    // alignItems: "flex-end"
  },
  title: {
    color: Colors.purple,
    fontSize: 18,
    fontWeight: "bold",
    fontFamily: Fonts.regular
    // lineHeight: 0
  },
  description: {
    fontFamily: Fonts.light,
    fontSize: 16,
    margin: 15
  }
});
