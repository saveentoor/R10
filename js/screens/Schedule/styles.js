import { StyleSheet } from "react-native";
import { Colors, Fonts } from "../../config/styles";

export const styles = StyleSheet.create({
  h1: {
    fontSize: 17,
    fontWeight: "600",
    fontFamily: Fonts.light,
    paddingBottom: 10
  },
  h2: {
    fontSize: 16,
    color: Colors.mediumGrey,
    fontFamily: Fonts.regular
  },
  scheduleText: {
    backgroundColor: Colors.lightGrey,
    fontWeight: "600",
    paddingLeft: 20,
    fontSize: 15,
    fontFamily: Fonts.regular
  },
  textSpacing: {
    height: "100%"
  },
  border: {
    borderBottomWidth: 1.5,
    borderColor: Colors.lightGrey
  },
  locationHeart: {
    display: "flex",
    justifyContent: "flex-end"
  },
  container: {
    flex: 1,
    flexDirection: "row",
    padding: 20,
    justifyContent: "space-between"
  },
  text: {
    justifyContent: "flex-end"
  }
});
