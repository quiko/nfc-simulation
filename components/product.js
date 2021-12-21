import React from "react";
import { useSelector } from "react-redux";
import { Text, View, StyleSheet } from "react-native";

export default function Product() {
  let product = useSelector((state) => state);

  return (
    <View style={styles.container}>
      <Text>Product</Text>
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
