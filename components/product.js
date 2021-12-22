import React from "react";
import { useSelector } from "react-redux";
import { Text, ScrollView, View,Image } from "react-native";
import { styles } from "../styles/style";


export default function Product() {
  let product = useSelector((state) => state);

  return (
    <View style={styles.container}>
      <Image source={logo} style={styles.logo} />
      <ScrollView>
        {product.product_image_url ? (
          <Image
            source={{ uri: product.product_image_url }}
            style={styles.image}
          />
        ) : null}

        <Text style={styles.name}>{product.name}</Text>
        {product.datasheet ? (
          product.datasheet.data.map((info) => (
            <ScrollView style={styles.productInfo} key={info.label}>
              <Text style={styles.text}>
                {info.label} : {info.value}
              </Text>
            </ScrollView>
          ))
        ) : (
          <Text>waiting...</Text>
        )}
      </ScrollView>
    </View>
  );
}

const logo = {
  uri: "https://www.liger-belair.fr/wp-content/uploads/2018/11/ligerbelair_logo.png",
};
