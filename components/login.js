import React, { useState} from "react";
import { useDispatch } from "react-redux";
import { Text,TextInput, View, TouchableOpacity } from "react-native";
import { loginUrl,apiKey } from "../constants";
import { callApi, login } from "../redux/actions";
import { styles } from "../styles/style";

function Login({ navigation }) {
  const dispatch = useDispatch();
  const [email, setEmail] = useState("");
  const [password, setPassword ] = useState("");

  const apiCallParams = {
    method: "POST",
    mode: "no-cors",
    headers: {
      accept: "application/json",
      "X-Selinko-App": apiKey,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({email: email , password: password}),
  };

  const handleSubmit = () => {
    dispatch(callApi(loginUrl, apiCallParams, login));
    navigation.push("Scan");
  };


  return (
    <View style={styles.container}>
 
        <TextInput
          style ={styles.input}
          keyboardType="email-address"
          placeholder="Email"
          value={email}
          onChangeText={e => setEmail(e)}
        />
        <TextInput
          style ={styles.input}
          secureTextEntry
          placeholder="Password"
          value={password}
          onChangeText={e => setPassword(e)}
        />
      <TouchableOpacity style={styles.button}>
        <Text  style={styles.buttonText}  onPress={handleSubmit}>Login</Text>
      </TouchableOpacity>

    </View>
  );
}


export default Login;
