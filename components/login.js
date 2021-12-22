import React from "react";
import { useDispatch } from "react-redux";
import { Text, View, TouchableOpacity, StyleSheet } from "react-native";
import { loginUrl, credentials, apiKey } from "../constants";
import { callApi, login } from "../redux/actions";
import { styles } from "../styles/style";

function Login({ navigation }) {
  const dispatch = useDispatch();

  const apiCallParams = {
    method: "POST",
    mode: "no-cors",
    headers: {
      accept: "application/json",
      "X-Selinko-App": apiKey,
      "Content-Type": "application/json",
    },
    body: JSON.stringify(credentials),
  };

  const handlePress = () => {
    dispatch(callApi(loginUrl, apiCallParams, login));
    navigation.push("Scan");
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity>
        <Text onPress={handlePress}>Login</Text>
      </TouchableOpacity>
    </View>
  );
}


export default Login;
