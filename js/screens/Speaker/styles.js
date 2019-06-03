import { StyleSheet, Dimensions } from "react-native";
import { Fonts, Colors } from "../../config/styles";

const styles = StyleSheet.create({
  container: {
    height: Dimensions.get("window").height,
    padding: 30,
    backgroundColor: "black"
  },
  speakerTitle: {
    padding: 60,
    color: "white",
    fontSize: 18,
    fontWeight: "bold"
    // paddingRight: 100,
    // paddingBottom: 50,
  },
  speakerInfo: {
    backgroundColor: "white",
    padding: 10,
    fontSize: 50,
    flex: 1,
    alignItems: "center",
    height: 650,
    borderRadius: 15
  },
  name: {
    padding: 10,
    fontSize: 25,
    fontWeight: "bold"
  },
  bio: {
    padding: 10,
    fontSize: 15,
    margin: 10,
    fontFamily: Fonts.light,
    color: "black",
    lineHeight: 30
  },
  title: {
    width: "100%",
    flexDirection: "row",
    // justifyContent: "space-between",
    alignItems: "center"
  }
});

export default styles;
