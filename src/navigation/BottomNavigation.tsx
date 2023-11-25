import React from "react";
import AboutUs from "../screan/AboutUs/AboutUs";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Links from "../screan/Links/Links";
import Icon from "react-native-vector-icons/FontAwesome6";

const Tab = createBottomTabNavigator();
function BottomNavigation() {
  return (
    <Tab.Navigator initialRouteName={"AboutUs"}>
      <Tab.Screen name="AboutUs" component={AboutUs} options={{
        headerShown: false,
        tabBarIcon: () => (<Icon name={"envelope-open-text"} />)
      }} />
      <Tab.Screen name="Links" component={Links} options={{
        headerShown: false,
        tabBarIcon: () => (<Icon name={"link"} />)
      }} />
    </Tab.Navigator>
  );
}

export default BottomNavigation;
