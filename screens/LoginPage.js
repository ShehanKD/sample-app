import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import React from 'react'



export default Dinithi =(props) =>{
  return (
    <View>
      <TouchableOpacity style = {{...styles.btn,backgroundColor:props.color}}>

      <Text style = {styles.txt}>{props.name} </Text>
      </TouchableOpacity>
      
    
    </View>
  )
}

const styles = StyleSheet.create({
  btn:{
    backgroundColor: 'red',
    borderRadius: 100,
    padding:20,
    width:"50%",
    alignSelf:'center',
    alignItems:'center'
  },

  txt:{
    color: 'white',
    fontSize: 20,

  }
})