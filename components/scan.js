import React from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { Text, View, TouchableOpacity, StyleSheet } from "react-native";
import { scanUrl, shortUrl, apiKey } from "../constants";
import { callApi, scan } from "../redux/actions";
import { styles } from "../styles/style";

function Scan({ navigation }) {
  let jwt = useSelector((state) => state);
  const dispatch = useDispatch();
  const apiCallParams = {
    method: "POST",
    mode: "no-cors",
    headers: {
      accept: "application/json",
      "X-Selinko-App": apiKey,
      "Content-Type": "application/json",
      Authorization: `Bearer ${jwt}`,
    },
    body: JSON.stringify({
      short_url: shortUrl,
      location: { lng: 2.3847, lat: 1.34848 },
    }),
  };
  function handlePress() {
    dispatch(callApi(scanUrl, apiCallParams, scan));
    navigation.push("Product");
  }
  return (
    <View style={styles.container}>
      <TouchableOpacity>
        <Text onPress={handlePress}>Scan</Text>
      </TouchableOpacity>
    </View>
  );
}
export default Scan;
