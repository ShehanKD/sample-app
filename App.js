import { View, StyleSheet } from 'react-native'
import React from 'react' 
import Frontend from './screens/Frontend'


const App = () => {
  return (
    <View style={{flex:1}}>
      
       
      <Frontend/>
      
    </View>
  )
}

export default App

const style = StyleSheet.create({
line:{
 marginBottom:20
}

})