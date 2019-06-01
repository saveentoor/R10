import { StyleSheet } from "react-native";
import { Fonts, Colors } from "../../config/styles";

export const styles = StyleSheet.create({
  list: {
    margin: 10,
    fontSize: 30,
    fontFamily: Fonts.regular,
    color: Colors.purple,
    
  },
  plusSign: {
    flexDirection: "row",
    flex: 1,
    alignItems: 'center'

  },
  title: {
    color: Colors.purple
  },
  description:{
      color: 'red'
  }
});
