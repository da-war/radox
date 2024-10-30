import { Pressable, StyleSheet, Text, TextInput, View } from "react-native";
import React, { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";

const index = () => {
  const [user, setUser] = useState<null | User>(null);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const handleSignUp = () => {
    // API call to sign up
    if (name != "" || email != "") {
      setUser({
        id: 1,
        name: name,
        email: email,
      });

      console.log("hello", user);
    }
    console.log("runnibg");
  };

  return (
    <SafeAreaView style={styles.container}>
      {!user && (
        <View style={styles.container}>
          <Text style={styles.title}>Sign Up for the app</Text>
          <TextInput
            placeholder="Enter your name"
            onChangeText={(text) => setName(text)}
            style={styles.input}
          />

          <TextInput
            placeholder="Enter your email"
            onChangeText={(text) => setEmail(text)}
            style={styles.input}
            autoCapitalize="none"
            autoCorrect={false}
          />

          <Pressable onPress={handleSignUp} style={styles.button}>
            <Text style={styles.buttonText}>Sign Up</Text>
          </Pressable>
        </View>
      )}

      {user && (
        <View style={styles.container}>
          <Text style={styles.title}>Welcome {user.name}</Text>
        </View>
      )}
    </SafeAreaView>
  );
};

export default index;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  input: {
    borderWidth: 1,
    borderColor: "black",
    margin: 10,
    padding: 10,
  },
  button: {
    backgroundColor: "blue",
    padding: 10,
    margin: 10,
    alignItems: "center",
  },
  buttonText: {
    color: "white",
  },
  title: {
    fontSize: 24,
    textAlign: "center",
    margin: 10,
    fontWeight: "bold",
  },
});
