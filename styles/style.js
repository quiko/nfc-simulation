import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
  },
  formContainer: {
    top: 50,
  },
  scanContainer: {
      top: 150
  },
  input: {
    width: "90%",
    padding: 15,
    marginBottom: 10,
  },
  button: {
    backgroundColor: "#B19A64",
    height: 80,
    width: 80,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 80,
  },
  buttonText: {
    color: "white",
  },
  logo: {
    resizeMode: "stretch",
    top: 20,
    height: "13%",
    width: "90%",
  },
  name: {
    height: 100,
    top: 50,
    textAlign: "center",
    color: "#573004",
    fontSize: 25,
  },
  productInfo: {
    height: 50,
  },
  text: {
    color: "#573004",
  },
  image: {
    top: 30,
    height: "20%",
    width: "13%",
    alignSelf: "center",
  },
});
