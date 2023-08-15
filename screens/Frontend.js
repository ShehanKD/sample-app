import { View, Text, StyleSheet, Button } from 'react-native'
import React, { useState } from 'react'
import { TextInput } from 'react-native-paper';

const frontend = () => {

    const[std_id,SetStd_id] = useState ('');
    const[name,setName] = useState ('');
    const[address,SetAddress] = useState ('');
    const[contact,SetContact] = useState ('');
    const[weight,SetWeight] = useState ();

    fetch('localhost:3000/student', {
        method: 'POST',
        body: JSON.stringify({
          std_id: std_id,
          name: name,
          address: address,
          contact: contact,
          weight: weight
        }),
        headers: {
          'Content-type': 'application/json; charset=UTF-8',
        },
      })
        .then((response) => response.json())
        .then((json) => console.log(json));

  return (
    <View style={styles.back}>
        
        <View style={styles.txt}>
        <TextInput mode='outlined' label="std_id" value={std_id} onChangeText={(data)=>{SetStd_id(data)}}/>
        <Button icon="camera" mode="contained" onPress={() => console.log(std_id)} title='Press me'></Button>
    
  
        

        </View>

        <View style={styles.txt}>
        <TextInput mode='outlined' label="name" value={name} onChangeText={(t)=>{setName(t)}} />
        </View>

        <View style={styles.txt}>
            <TextInput mode='outlined' label="address" value={address} onChangeText={(t)=>{SetAddress(t)}} />
        </View>

        <View style={styles.txt}>
            <TextInput mode='outlined' label="contact" value={contact} onChangeText={(t)=>{SetContact(t)}}/>
        </View>

        <View style={styles.txt}>
            <TextInput mode='outlined' label="weight" value={weight} onChangeText={(t)=>{SetWeight(t)}}/>
        </View>

    </View>
  )
}

export default frontend

const styles = StyleSheet.create({

    back:{
        backgroundColor:'yellow',
        flex:1

    },

    txt:{
        padding:20
    }
})