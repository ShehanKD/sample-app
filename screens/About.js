import { View, Text } from 'react-native'
import React, { useState } from 'react'
import { TextInput } from 'react-native-paper';
import { Button } from 'react-native-paper';

const About = () => {

    const[email, setEmail] = useState('')
    const[name, setName] = useState('')
    const[age, setAge] = useState('')
    
    const saveData = () => {
      fetch('https://jsonplaceholder.typicode.com/posts', {
  method: 'POST',
  body: JSON.stringify({
    title: email,
    body: 'bar',
    userId: 1,
  }),
  headers: {
    'Content-type': 'application/json; charset=UTF-8',
  },
})
  .then((response) => response.json())
  .then((json) => console.log(json));

    }
  return (
    <View>
      <TextInput
      label="Email"
      value={email}
      onChangeText={(data) => {setEmail(data)}}

     
      
    />
    <Button icon="tree" mode="outlined" onPress={saveData}>
    Save data
  </Button>
    <Text>Shehan</Text>
    </View>
  )
}

export default About