import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Provider } from "react-redux";
import { store } from "./redux/store";
import Login from "./components/login";
import Scan from "./components/scan";

const Stack = createNativeStackNavigator();
export default function App() {
  
  return (
  <Provider store={store}>
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Scan" component={Scan} />
      </Stack.Navigator>
    </NavigationContainer>
    </Provider>
  );
}

