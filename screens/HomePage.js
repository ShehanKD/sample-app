import { Text, TextInput, View , ActivityIndicator, Switch, TouchableOpacity, StyleSheet, Image} from "react-native";
import RoundButton from "../components/RoundButton";
import { Button } from 'react-native-paper';


import {
    
    PacmanIndicator,
   
  } from 'react-native-indicators';
function HomePage(){
    const savedata = () =>{
        console.log("I love Lilly");
    }

    const showdata = () =>{
        console.log("Hello");
    }
    return(
        <View>
            <TextInput placeholder="Enter your name: "/>
            <RoundButton/>
            <PacmanIndicator color='red' />
            <Button textColor={'purple'} title="Click" onPress={savedata}/>
            <ActivityIndicator size="small" color="#0000ff" />
            <Image style={styles.img}
                source={require('../assets/1.jpg')}
            />

            <Image style={styles.img}
                source={require('../assets/sir-viv-richards.jpg')}
                />
           
            <Text style={styles.txt}>Shehan Dissanayake</Text>
            <Switch
        trackColor={{false: '#767577', true: '#81b0ff'}}
        thumbColor={'#f4f3f4'}
        ios_backgroundColor="#3e3e3e"
        />
        <TouchableOpacity style={styles.btn} onPress={showdata}>
        <Text>Press Here</Text>
      </TouchableOpacity>
      <Button icon="camera" mode="contained" onPress={() => console.log('Pressed')}>
    Press me
  </Button>
            
        </View> 
    )
}

const styles = StyleSheet.create({
    btn:{
        backgroundColor:'blue', 
        padding:30, width:'30%', 
        borderRadius:100, 
        justifyContent:'center', 
        alignItems:'center', 
        marginTop:10

    },

    txt:{
        color:'pink', 
        fontSize:20,
        fontWeight:'bold', 
        backgroundColor:'red'

    },

    img:{
        width:100,
        height:100
    }

    

})
export default HomePage;