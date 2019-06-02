import { StyleSheet } from "react-native";
import { Fonts, Colors } from "../../config/styles";

export const styles = StyleSheet.create({
  list: {
    fontSize: 15,
    // flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center",
    color: Colors.purple
  },
  plusSign: {
    flexDirection: "row",
    flex: 1,
    margin: 10
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
