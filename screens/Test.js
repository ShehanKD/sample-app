import { View, Text,Image,StyleSheet } from 'react-native'
import React from 'react'

const Test = () => {
  return (
    <View style={{flex:1}}>
      <Text>Test</Text>
      <Image
        style={styles.stretch}
        source={{
          uri: 'https://m.media-amazon.com/images/M/MV5BMDFkYTc0MGEtZmNhMC00ZDIzLWFmNTEtODM1ZmRlYWMwMWFmXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_QL75_UX380_CR0,1,380,562_.jpg',
        }}
      />
    </View>
  )
}

export default Test

const styles = StyleSheet.create({
    container: {
      paddingTop: 50,
    },
    stretch: {
      width: 50,
      height: 200,
      resizeMode: 'stretch',
    },
  });