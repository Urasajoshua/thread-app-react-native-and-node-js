import { StyleSheet, Text, View ,ScrollView, TouchableOpacity} from 'react-native'
import React, { useContext, useEffect, useState } from 'react'
import AsyncStorage from '@react-native-async-storage/async-storage'
import {jwtDecode} from 'jwt-decode'
import axios from 'axios'
import { UserType } from '../UserContext'

const ActiveScreen = () => {

  const [selectedButton,setSelectedButton] = useState("People")
  const [content,setContent] = useState('People Content')
  const [users,setUsers] = useState([])
  const {userId,setUserId}=useContext(UserType)

  const handleButtonClick = (buttonName)=>{
    setSelectedButton(buttonName)
  }


  useEffect(()=>{
    const fetchedUser = async()=>{
      const token = await AsyncStorage.getItem('token')
      const decodedToken = jwtDecode(token)
      const userId = decodedToken.userId
      setUserId(userId)


      axios.get(`http://192.168.43.228:3000/users/${userId}`).then((response)=>{
        setUsers(response.data)
      }).catch((error)=>{
        console.log(error);
      })
    }

    fetchedUser()
  },[])

  console.log('users',users);



  return (
    <ScrollView style={{marginTop:50}}>
      <View>
        <Text style={{fontSize:18,fontWeight:'bold',textAlign:'center'}}>activity</Text>
      </View>

      <View style={{flexDirection:'row',alignItems:'center',gap:10,marginTop:12}}>
        <TouchableOpacity onPress={()=> handleButtonClick('People')} style={[{
          flex:1,
          paddingVertical:10,
          paddingHorizontal:20,
          backgroundColor:'white',
          borderColor:"#D0D0D0",
          borderRadius:6,
          borderWidth:0.7
        },
        selectedButton === 'People' ? {backgroundColor:'black'} : null]}>
          <Text style={[{
            textAlign:'center',
            fontWeight:'bold'
          },
          selectedButton === 'People' ? {color:'white'} : {color:'black'}]}>People</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={()=> handleButtonClick('All')} style={[{
          flex:1,
          paddingVertical:10,
          paddingHorizontal:20,
          backgroundColor:'white',
          borderColor:"#D0D0D0",
          borderRadius:6,
          borderWidth:0.7
        },
        selectedButton === 'All' ? {backgroundColor:'black'} : null]}>
          <Text style={[{
            textAlign:'center',
            fontWeight:'bold'
          },
          selectedButton === 'All' ? {color:'white'} : {color:'black'}]}>All</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={()=> handleButtonClick('Request')} style={[{
          flex:1,
          paddingVertical:10,
          paddingHorizontal:20,
          backgroundColor:'white',
          borderColor:"#D0D0D0",
          borderRadius:6,
          borderWidth:0.7
        },
        selectedButton === 'Request' ? {backgroundColor:'black'} : null]}>
          <Text style={[{
            textAlign:'center',
            fontWeight:'bold'
          },
          selectedButton === 'Request' ? {color:'white'} : {color:'black'}]}>Request</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  )
}

export default ActiveScreen

const styles = StyleSheet.create({})