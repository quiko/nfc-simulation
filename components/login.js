import React, { useState } from "react";
import { Text, View, TouchableOpacity, StyleSheet } from "react-native";
import { loginUrl, credentials, apiKey } from "../constants";

function Login({ navigation }) {
  const [jwt, setJwt] = useState("");
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

  const handleClick = () => {
    fetch(loginUrl, apiCallParams)
      .then(async (response) => {
        if (response.status === 201) {
          let responseJson = await response.json();
          setJwt(responseJson.data.jwt);
        }
      })
      .catch((error) => {
        console.log(error);
      });
    navigation.push("Scan");
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity>
        <Text onPress={handleClick}>Login</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});

export default Login;
