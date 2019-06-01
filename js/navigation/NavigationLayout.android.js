import React from "react";
import {
  createStackNavigator,
  createDrawerNavigator
} from "react-navigation";
import AboutScreen from "../screens/About";
import ScheduleScreen from "../screens/Schedule";
import SessionScreen from "../screens/Sessions";
import FavsScreen from "../screens/Favs";
import MapsScreen from "../screens/Maps";
import Ionicons from "react-native-vector-icons/Ionicons";
import { sharedNavigationOptions } from "./config";
import { Colors } from "../config/styles";

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
    About: MapsScreen
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
    Maps: MapsStack,
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
        } else if (routeName === "Maps") {
          iconName = "md-map";
        }

        return <IconComponent name={iconName} size={30} color={tintColor} />;
      }
    }),

    contentOptions: {
      activeTintColor: Colors.purple,
      inactiveTintColor: Colors.mediumGrey,
      labelStyle: { fontFamily: "Montserrat", fontSize: 20 },
      style: { backgroundColor: "#000000" }
    }
  }
);
