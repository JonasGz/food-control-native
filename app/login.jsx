import { SafeAreaView, StyleSheet, Text, View } from "react-native";
import { TextInput, Button } from "@react-native-material/core";
import Ionicons from "@expo/vector-icons/Ionicons";
import { useState } from "react";

export default function LoginPage() {
  const [text, onChangeText] = useState("");
  const [number, onChangeNumber] = useState("");

  return (
    <View style={styles.container}>
      <Ionicons
        style={styles.iconLock}
        name="lock-open"
        size={92}
        color="black"
      />
      <View style={styles.containerInputs}>
        <TextInput
          variant="outlined"
          onChangeText={onChangeText}
          style={styles.input}
          value={text}
          placeholder="fulanodetal@gmail.com"
        />
        <TextInput
          variant="outlined"
          onChangeText={onChangeNumber}
          style={styles.input}
          value={number}
          keyboardType="numeric"
          placeholder="*********"
        />
      </View>
      <View style={styles.containerButtons}>
        <Button style={styles.button} title="Sign in" color="#E52323"></Button>
        <Button style={styles.button} title="Sign up" color="#ffffff"></Button>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    display: "flex",
    width: "100%",
    height: "100%",
    flexDirection: "column",
    justifyContent: "space-evenly",
    alignItems: "center",
  },
  iconLock: {},
  containerInputs: {
    display: "flex",
    flexDirection: "column",
    gap: 20,
  },
  input: {
    width: 250,
  },
  containerButtons: {
    display: "flex",
    flexDirection: "column",
    gap: 20,
  },
  button: {
    paddingRight: 50,
    paddingLeft: 50,
    paddingBottom: 10,
    paddingTop: 10,
  },
});
