import { View, Text , StyleSheet } from 'react-native'
import React from 'react'
import { TextInput, Button } from 'react-native-paper';
import LinearGradient from 'react-native-linear-gradient';



const New = () => {
  return (
    <View style={{flex:1}}>
      <LinearGradient colors={['#4c669f', '#3b5998', '#192f6a']} style={styles.linearGradient}>
  <Text style={styles.txt}>
    JOB HUB
  </Text>

       
        <View style={styles.user}>
        <TextInput
      label="UserID"/>
      </View>

        <View style={styles.pswrd}>
        <TextInput label="Password"/>        
      </View>
   <View style={styles.log}>
        <Button icon="camera" mode="contained" onPress={() => console.log('Pressed')}>
    Login
  </Button>
        </View>
        </LinearGradient>

  <View style={style.line}>
      <LoginPage name ="Login" color='black' />
      </View>

      <View style={style.line}>
      <LoginPage name="Sign Up" color='grey' />
      </View>

      <View style={style.line}>
      <LoginPage name="Contact Us" color='skyblue' />
      </View>
    </View>
    
     
  )
}

const styles = StyleSheet.create({

  user:{
    flex: 1,
    width: 300,
    marginTop: 100,
    alignSelf: 'center',
    borderRadius: 100
    
  },

  pswrd: {
    flex: 3,
    marginTop:50,
    width: 300,
    alignSelf: 'center',
    borderRadius: 10
  },

  log: {
    flex: 6,
    width: 300,
    alignSelf: 'center'
  },
  linearGradient: {
    flex: 1,
    paddingLeft: 15,
    paddingRight: 15,
    borderRadius: 5
  },
  txt: {
    fontSize: 28,
    fontFamily: 'Gill Sans',
    textAlign: 'center',
    margin: 30,
    color: '#001735',
    backgroundColor: 'transparent',
  },
})

export default New
