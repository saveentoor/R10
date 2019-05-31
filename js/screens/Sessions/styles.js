import { StyleSheet } from "react-native";
import { Colors, Fonts } from "../../config/styles";

export const styles = StyleSheet.create({
  locationName: {
    fontSize: 15,
    color: Colors.mediumGrey,
    fontFamily: Fonts.regular,
    margin: 10,
    paddingTop: 10
  },
  titleName: {
    fontSize: 25,
    fontWeight: "600",
    fontFamily: Fonts.light,
    margin: 10
  },
  timeName: {
    fontSize: 15,
    color: Colors.red,
    fontWeight: "bold",
    fontFamily: Fonts.regular,
    margin: 10
  },
  descriptionName: {
    fontSize: 15,
    fontFamily: Fonts.light,
    margin: 10,
    paddingBottom: 15
  },
  presentedBy: {
    fontSize: 15,
    color: Colors.mediumGrey,
    fontFamily: Fonts.regular,
    margin: 10
  },
  speakerName: {
    fontSize: 15,
    fontFamily: Fonts.regular,
    margin: 10
  },
  border: {
    borderBottomWidth: 1.5,
    borderColor: Colors.lightGrey
  }
});
