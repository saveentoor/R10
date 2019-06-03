import React, { Component } from "react";
import {
  View,
  Text,
  LayoutAnimation,
  Animated,
  Platform,
  UIManager,
  TouchableOpacity
} from "react-native";
import { styles } from "./styles";
import PropTypes from "prop-types";

class Conduct extends Component {
  constructor(props) {
    super(props);
    if (Platform.OS === "android") {
      UIManager.setLayoutAnimationEnabledExperimental &&
        UIManager.setLayoutAnimationEnabledExperimental(true);
    }
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
      create: {
        type: "spring",
        property: "scaleXY",
        springDamping: 0.7,
        duration: 2000
      },
      
      delete: {
        duration: 100,
        type: "linear",
        property: "opacity"
      },
      update:{
        type: "easeInEaseOut"
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
            <Text style={styles.title}>{item.title}</Text>
          </View>
          {isOpen ? (
            <Text style={styles.description}>{item.description}</Text>
          ) : null}
        </TouchableOpacity>
      </View>
    );
  }
}
Conduct.propTypes = { item: PropTypes.object.isRequired };

export default Conduct;
