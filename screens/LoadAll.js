import { View, Text, StyleSheet, FlatList,Image } from 'react-native'
import React, { useEffect, useState } from 'react'
import { Button, TextInput} from 'react-native-paper'
import {PacmanIndicator} from 'react-native-indicators'


const LoadAll = () => {

    const [data, setData] = useState([]);
    const [name, setName] = useState('');
    const [isloaded, setIsloaded] = useState(false);

    useEffect(()=>{
      loadData ();
      
    },[])

    const loadData = () => {
        fetch('https://imdb-top-100-movies.p.rapidapi.com/',{
          method: 'GET',
          headers: {
            'X-RapidAPI-Key': '22a5e46415msh3abf45ca591a327p188462jsna5e2c6ceda2b',
            'X-RapidAPI-Host': 'imdb-top-100-movies.p.rapidapi.com'
          }
    })
        .then((response) => response.json())
        .then((json) => {
          setData(json);
          setIsloaded(true);
        });

    }
  return (
    <View style={styles.container}>
      {isloaded ? <View>
        <TextInput placeholder='Enter your name' mode='outlined' value={name} onChangeText={(t)=>{setName(t)}}/>
      <Text style={styles.txt}>LoadAll</Text>
      <Button mode='contained' onPress={loadData}>Load Data</Button>

    <FlatList
        data={data}
        renderItem={({ item }) => {return(
            <View style={styles.item} >
            <Text style={{fontWeight:'bold',marginBottom:5}}>{item.title }</Text>
            <Text>{item.rating}</Text>
            <Text>{item.year}</Text>
            <Image
        style={styles.img}
        source={{
          uri: 'https://m.media-amazon.com/images/M/MV5BM2MyNjYxNmUtYTAwNi00MTYxLWJmNWYtYzZlODY3ZTk3OTFlXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_QL75_UY562_CR8,0,380,562_.jpg',
        }}
      />

           
            </View>
        )}}
        keyExtractor={item => item.id}
      />
      </View>:<PacmanIndicator color='blue' />}
     
    </View>
  )
}

export default LoadAll

const styles = StyleSheet.create({
    container:{
        flex:1,
        alignItems:'center',
        marginTop:'5%',
        backgroundColor:'yellow'
    },

    txt:{
        fontSize:20,
        color: 'red'
    },
    item:{
        marginTop:'5%',
        borderWidth:1,
        borderColor:'red',
        padding:'3%'

    },

    img:{
      width:100,
      height:100
    }

})