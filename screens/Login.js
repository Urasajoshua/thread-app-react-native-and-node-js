import { Pressable, StyleSheet, Text, TextInput, View } from 'react-native'
import React, { useState } from 'react'
import { FontAwesome6 ,MaterialIcons,Fontisto} from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

const Login = () => {

    const [email,setEmail] = useState('')
    const [password,setPassword] = useState('')

    const navigation = useNavigation()
  return (
    <View style={{flex:1,backgroundColor:'white',padding:30}}>
      {/**thread logo */}
      <View style={{alignItems:'center',justifyContent:'center',paddingTop:80}}>
      <FontAwesome6 name="threads" size={84} color="black" />
      <Text style={{fontSize:18,fontWeight:'bold',marginTop:20}}>Login To Your Account</Text>
      </View>

      {/**login form component */}
      <View style={{paddingTop:5,}}>

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
          <Fontisto
            style={{ marginLeft: 8 }}
            name="email"
            size={24}
            color="black"
          />
          <TextInput
            value={email}
            onChangeText={(text) => setEmail(text)}
            style={{ color: "gray", marginVertical: 5, width: 300 ,fontSize:email ? 16 : 16}}
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
         <MaterialIcons style={{marginLeft:8}} name="password" size={24} color="black"  />
          <TextInput
          secureTextEntry
            value={password}
            onChangeText={(text) => setPassword(text)}
            style={{ color: "gray", marginVertical: 5, width: 300, fontSize: password ? 16: 16 }}
            placeholder="write your password"
          />
        </View>
        {/**section for forget password */}
      <View style={{flexDirection:'row',alignItems:'center',justifyContent:"space-between",marginTop:15}}>
        <Text style={{fontWeight:'bold',fontSize:17}}>keep logged in</Text>
        <Text style={{fontWeight:'500',color:'#007FFF',fontSize:17}}>Forgot password</Text>
      </View>

        <View style={{alignItems:'center',justifyContent:'center',marginTop:10,}}>
        <Pressable style={{width:200,borderWidth:1,borderRadius:10,padding:10,marginTop:10,backgroundColor:'black'}}>
            <Text style={{textAlign:'center',fontSize:22,color:'white',padding:5}}>Login</Text>
        </Pressable>
        </View>
      </View>

      

      {/**for signup if someone does not have an account */}
      <View style={{alignItems:'center',justifyContent:'center',padding:10}}>
        <Pressable onPress={()=>navigation.navigate('signup')}>
            <Text style={{fontSize:18}}>Don`t have an account ? SignUp</Text>
        </Pressable>
      </View>
    </View>
  )
}

export default Login

const styles = StyleSheet.create({})