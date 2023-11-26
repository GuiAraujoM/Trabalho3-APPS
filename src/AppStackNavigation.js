import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import * as React from "react";

import { AuthContext } from "./Contexts/Auth/Auth";

import MainScreen from "./Screens/MainScreen";
import AuthScreen from "./Screens/AuthScreen";
import PostScreen from "./Screens/PostScreen";

const Stack = createStackNavigator();

export function AppStackNavigation() {

  const { isLogged } = React.useContext(AuthContext);

  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        {isLogged ? (
          <Stack.Screen name="MainScreen" component={MainScreen} />
        ) : (
          <Stack.Screen name="AuthScreen" component={AuthScreen} />
        )}
        <Stack.Screen
          name="PostScreen"
          component={PostScreen}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
