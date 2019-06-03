import React from "react";
import {
  createStackNavigator,
  createBottomTabNavigator
} from "react-navigation";
import AboutScreen from "../screens/About";
import ScheduleScreen from "../screens/Schedule";
import SessionScreen from "../screens/Sessions";
import FavsScreen from "../screens/Favs";
import MapsScreen from "../screens/Maps";
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
const MapsStack = createStackNavigator(
  {
    Maps: MapsScreen
  },
  {
    defaultNavigationOptions: ({ navigation }) => ({
      ...sharedNavigationOptions(navigation)
    })
  }
);

export default createBottomTabNavigator(
  {
    Schedule: ScheduleStack,
    Maps: MapsStack,
    Favs: FavsStack,
    About: AboutStack
  },
  {
    defaultNavigationOptions: ({ navigation }) => ({
      tabBarIcon: ({ focused, horizontal, tintColor }) => {
        const { routeName } = navigation.state;
        let IconComponent = Ionicons;
        let iconName;
        if (routeName === "Schedule") {
          iconName = `ios-calendar`;
        } else if (routeName === "About") {
          iconName = "ios-information-circle";
        } else if (routeName === "Favs") {
          iconName = "ios-heart";
        } else if (routeName === "Maps") {
          iconName = "ios-map";
        }

        return <IconComponent name={iconName} size={25} color={tintColor} />;
      }
    }),

    tabBarOptions: {
      activeTintColor: "#ffffff",
      inactiveTintColor: "#999999",
      labelStyle: { fontFamily: "Montserrat", fontSize: 12 },
      style: { backgroundColor: "#000000", paddingTop: 10 }
    }
  }
);
