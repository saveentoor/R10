import React, { Component } from "react";
import { View, Text, LayoutAnimation } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { styles } from "./styles";

class Condex extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpen: false
    };
  }
  toggle() {
    LayoutAnimation.spring();
    this.setState({ isOpen: !this.state.isOpen });
  }
  render() {
    const { item } = this.props;
    const { isOpen } = this.state;
    return (
      <View>
        <TouchableOpacity onPress={() => this.toggle()}>
          <Text style={styles.list}>{item.title}</Text>
          {isOpen ? <Text>{item.description}</Text> : null}
        </TouchableOpacity>
      </View>
    );
  }
}

export default Condex;
