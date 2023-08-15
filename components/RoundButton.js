import React from "react";
import { StyleSheet, View } from "react-native";
import { FAB } from 'react-native-paper';

function App() {
    const [text, setText] = React.useState("");
        
    return (
        <View style={styles.container}>
            <View style={{flex: 1, backgroundColor: 'orange'}} />
            <View style={{flex: 6, backgroundColor: 'green', flexDirection: 'row', justifyContent: 'space-between'}}>
                <View style={{flex: 2, backgroundColor: 'purple'}} />
                <View style={{flex: 2, backgroundColor: 'yellow'}} />
                <View style={{flex: 2, backgroundColor: 'purple'}} />
                <View style={{flex: 2, backgroundColor: 'yellow'}}>
                    <FAB
                        icon="plus"
                        style={styles.fab}
                        onPress={() => console.log('Pressed')}
                    />
                </View>
            </View>
            <View style={{flex: 2, backgroundColor: 'blue'}} />
        </View>   
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'red'
    },
    fab: {
        position: 'absolute',
        margin: 20,
        right: 0,
        bottom: 0,
    }
});

export default App;
