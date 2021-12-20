import React, { useState, useEffect }  from "react";
import {
    Text,
    View,
    TouchableOpacity,
  } from "react-native";
  import { loginUrl , credentials, apiKey} from "../constants";




function Login() {
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
      }

    const handleClick = () => {
        fetch(loginUrl,apiCallParams )
          .then(async (response) => {
            if (response.status === 201) {
              let responseJson = await response.json();
              setJwt(responseJson.data.jwt);
            }
          })
          .catch((error) => {
            console.log(error);
          });
      };

  return (
    <View>
    <TouchableOpacity >
    <Text  onPress={handleClick}>
      Login
    </Text>
  </TouchableOpacity>
  </View>
  );
}
export default Login;
