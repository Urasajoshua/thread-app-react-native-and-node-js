import {
  StyleSheet,
  Text,
  View,
  Pressable,
  TextInput,
  SafeAreaView,
} from "react-native";
import React, { useState } from "react";
import { useNavigation } from "@react-navigation/native";
import { FontAwesome6, Fontisto ,MaterialIcons} from "@expo/vector-icons";

const SignUp = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name,setName] = useState("")

  const navigation = useNavigation();
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "white", padding: 30 }}>
      {/**thread logo */}
      <View
        style={{
          alignItems: "center",
          justifyContent: "center",
          paddingTop: 80,
        }}
      >
        <FontAwesome6 name="threads" size={84} color="black" />
        <Text style={{ fontSize: 18, fontWeight: "bold", marginTop: 20 }}>
          Create Your Account
        </Text>
      </View>

      {/**login form component */}
      <View
        style={{
          paddingTop: 5,
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <View
          style={{
            borderWidth: 1,
            width: 320,
            padding: 10,
            fontSize: 20,
            borderRadius: 15,
            flexDirection: "row",
            alignItems: "center",
            gap: 25,
          }}
        >
         <FontAwesome6 name="person" size={24} color="black" style={{ marginLeft: 8 }} />
          <TextInput
            value={name}
            onChangeText={(text) => setName(text)}
            style={{ color: "gray", marginVertical: 5, width: 300 }}
            placeholder="write your name"
          />
        </View>
        <View
          style={{
            borderWidth: 1,
            width: 320,
            padding: 10,
            fontSize: 20,
            borderRadius: 15,
            flexDirection: "row",
            alignItems: "center",
            gap: 25,
            marginTop:10
          }}
        >
          <Fontisto
            style={{ marginLeft: 8 }}
            name="email"
            size={24}
            color="black"
          />
          <TextInput
            value={email}
            onChangeText={(text) => setEmail(text)}
            style={{ color: "gray", marginVertical: 5, width: 300 }}
            placeholder="write your email"
          />
        </View>

        <View
          style={{
            borderWidth: 1,
            width: 320,
            padding: 10,
            fontSize: 20,
            borderRadius: 15,
            flexDirection: "row",
            alignItems: "center",
            gap: 25,
            marginTop: 10
          }}
        >
         <MaterialIcons style={{marginLeft:8}} name="password" size={24} color="black" />
          <TextInput
          secureTextEntry
            value={password}
            onChangeText={(text) => setPassword(text)}
            style={{ color: "gray", marginVertical: 5, width: 300 }}
            placeholder="write your password"
          />
        </View>

        <Pressable
          style={{ width: 200, borderWidth: 1, borderRadius: 10, padding: 10, margin: 10 ,backgroundColor:'black'}}
        >
          <Text style={{ textAlign: "center", fontSize: 22,color:'white' }}>SignUp</Text>
        </Pressable>
      </View>

      {/**already have account direct him to login */}
      <View
        style={{ alignItems: "center", justifyContent: "center", padding: 10 }}
      >
        <Pressable onPress={() => navigation.navigate("login")}>
          <Text style={{ fontSize: 18 }}>Already have an account ? login</Text>
        </Pressable>
      </View>
    </SafeAreaView>
  );
};

export default SignUp;

const styles = StyleSheet.create({});
