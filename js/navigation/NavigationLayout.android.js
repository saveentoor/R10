import React from "react";
import {
  createStackNavigator,
  createBottomTabNavigator,
  createDrawerNavigator
} from "react-navigation";
import AboutScreen from "../screens/About";
import ScheduleScreen from "../screens/Schedule";
import SessionScreen from "../screens/Sessions";
import FavsScreen from "../screens/Favs";
import Ionicons from "react-native-vector-icons/Ionicons";
import { sharedNavigationOptions } from "./config";

const AboutStack = createStackNavigator(
  {
    About: AboutScreen
  },
  {
    defaultNavigationOptions: ({ navigation }) => ({
      ...sharedNavigationOptions(navigation)
    })
  }
);
const ScheduleStack = createStackNavigator(
  {
    Schedule: ScheduleScreen,
    Session: SessionScreen
  },
  {
    defaultNavigationOptions: ({ navigation }) => ({
      ...sharedNavigationOptions(navigation)
    })
  }
);
const FavsStack = createStackNavigator(
  {
    Favs: FavsScreen,
    Session: SessionScreen
  },
  {
    defaultNavigationOptions: ({ navigation }) => ({
      ...sharedNavigationOptions(navigation)
    })
  }
);

export default createDrawerNavigator(
  {
    Schedule: ScheduleStack,
    Favs: FavsStack,
    About: AboutStack
  },
  {
    defaultNavigationOptions: ({ navigation }) => ({
      drawerIcon: ({ focused, horizontal, tintColor }) => {
        const { routeName } = navigation.state;
        let IconComponent = Ionicons;
        let iconName;
        if (routeName === "Schedule") {
          iconName = `md-calendar`;
        } else if (routeName === "About") {
          iconName = "md-information-circle";
        } else if (routeName === "Favs") {
          iconName = "md-heart";
        }

        return <IconComponent name={iconName} size={25} color={tintColor} />;
      }
    }),

    tabBarOptions: {
      activeTintColor: "#ffffff",
      inactiveTintColor: "#999999",
      labelStyle: { fontFamily: "Montserrat", fontSize: 10 },
      style: { backgroundColor: "#000000" }
    }
  }
);
