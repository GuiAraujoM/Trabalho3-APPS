import * as React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { MaterialCommunityIcons, AntDesign } from "@expo/vector-icons";
import { AuthContext } from "../Contexts/Auth/Auth";

import Home from "../Components/Home/Home";
import ProfilePhoto from "../Components/Home/ProfilePhoto";
import CustomTitle from "../Components/Home/CustomTitle";

const Tab = createBottomTabNavigator();

export default function MainScreen({ navigation }) {
  const { user, signOut } = React.useContext(AuthContext);
  console.log(JSON.stringify(user));  

  return (
    <Tab.Navigator
      initialRouteName="Home"
      screenOptions={{
        tabBarShowLabel: false,
        tabBarStyle: {
          borderWidth: 0,
        },
      }}
      tabBarOptions={{
        activeTintColor: "#1d9bf0",
        inactiveTintColor: "white",
        activeBackgroundColor: "black",
        inactiveBackgroundColor: "black",
        style: {
          backgroundColor: "black",
        },
      }}
    >
      <Tab.Screen
        name="Home"
        component={Home}
        options={homeOptions(user.profileimage)}
      />
      <Tab.Screen name="Search" component={Home} options={searchOptions} />
      <Tab.Screen
        name="Notifications"
        component={Home}
        options={notificationsOptions}
      />
      <Tab.Screen name="Messages" component={Home} options={messagesOptions} />
    </Tab.Navigator>
  );
}

const homeOptions = (image) => { return {
  tabBarIcon: ({ size, color }) => (
    <MaterialCommunityIcons name="home" size={size} color={color} />
  ),
  title: "Home",
  headerTitle: (props) => <CustomTitle></CustomTitle>,
  headerTintColor: "white",
  headerStyle: {
    backgroundColor: "black",
  },
  headerLeft: () => <ProfilePhoto image={image}></ProfilePhoto>,
  headerRight: () => headerRight,
  headerTitleAlign: "center",
};
};

const searchOptions = {
  tabBarIcon: ({ size, color }) => (
    <MaterialCommunityIcons name="magnify" size={size} color={color} />
  ),
  title: "Home",
  headerTitle: (props) => <CustomTitle></CustomTitle>,
  headerTintColor: "white",
  headerStyle: {
    backgroundColor: "black",
  },
  headerLeft: () => <ProfilePhoto></ProfilePhoto>,
  headerRight: () => headerRight,
  headerTitleAlign: "center",
};

const notificationsOptions = {
  tabBarIcon: ({ size, color }) => (
    <MaterialCommunityIcons name="bell-outline" size={size} color={color} />
  ),
  title: "Home",
  headerTitle: (props) => <CustomTitle></CustomTitle>,
  headerTintColor: "white",
  headerStyle: {
    backgroundColor: "black",
  },
  headerLeft: () => <ProfilePhoto></ProfilePhoto>,
  headerRight: () => headerRight,
  headerTitleAlign: "center",
};

const messagesOptions = {
  tabBarIcon: ({ size, color }) => (
    <MaterialCommunityIcons name="email-outline" size={size} color={color} />
  ),
  title: "Home",
  headerTitle: (props) => <CustomTitle></CustomTitle>,
  headerTintColor: "white",
  headerStyle: {
    backgroundColor: "black",
  },
  headerLeft: () => <ProfilePhoto></ProfilePhoto>,
  headerRight: () => headerRight,
  headerTitleAlign: "center",
};

const headerRight = (
  <AntDesign
    name="setting"
    size={18}
    color={"white"}
    style={{ marginHorizontal: 10 }}
  />
);
