import React, { Component } from "react";
import { View, Text, LayoutAnimation, Animated } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { styles } from "./styles";

class Conduct extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpen: false,
      isPlusSign: true,
      rotate: new Animated.Value(0)
    };
  }
  toggle() {
    if (this.state.isOpen) {
      Animated.timing(this.state.rotate, {
        toValue: 0,
        duration: 900
      }).start(animation => {
        if (animation.finished) {
          this.setState({ isPlusSign: !this.state.isPlusSign });
        }
      });
    } else {
      Animated.timing(this.state.rotate, {
        toValue: 1,
        duration: 900
      }).start(animation => {
        if (animation.finished) {
          this.setState({ isPlusSign: !this.state.isPlusSign });
        }
      });
    }

    const animationConfig = {
      duration: 2000,
      create: {
        type: "spring",
        property: "scaleXY",
        springDamping: 0.7
      },
      delete: {
        type: "linear",
        property: "opacity"
      }
    };
    LayoutAnimation.configureNext(animationConfig);
    this.setState({ isOpen: !this.state.isOpen });
  }

  render() {
    const { item } = this.props;
    const { isOpen, rotate, isPlusSign } = this.state;

    const deg = rotate.interpolate({
      inputRange: [0, 1],
      outputRange: ["0deg", "360deg"]
    });
    const animatedStyles = {
      transform: [{ rotate: deg }]
    };

    return (
      <View>
        <TouchableOpacity onPress={() => this.toggle()}>
          <View style={styles.plusSign}>
            <Animated.Text style={[styles.list, animatedStyles]}>
              {isPlusSign ? "+" : "-"}
            </Animated.Text>
            <Text>{item.title}</Text>
          </View>
          {isOpen ? <Text>{item.description}</Text> : null}
        </TouchableOpacity>
      </View>
    );
  }
}

export default Conduct;
