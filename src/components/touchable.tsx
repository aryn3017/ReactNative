import { useState } from "react";
import { StyleSheet, Text, TouchableHighlight, TouchableOpacity, View } from "react-native";

function Touchables() {
    const [opacityCount,setOpacityCount]=useState(0)
    return(<View style={styles.container }>
        <Text style={{margin:'auto',marginBottom:10}}>Touchables</Text>
        <TouchableOpacity
        onPress={()=> setOpacityCount(opacityCount+0.10)}
        style={[styles.btn,{}]}>
        <Text style={{color:'white',margin:'auto'}}>TouchableOpacity</Text>
        </TouchableOpacity>
        <TouchableHighlight
        underlayColor={'green'}
        onPress={()=> setOpacityCount(opacityCount+1)}
        style={[styles.btn,{marginTop:10}]}>
        <Text style={{color:'white',margin:'auto'}}>TouchableHighlight</Text>
        </TouchableHighlight>
    </View>
    )
}

const styles = StyleSheet.create({
    container:{
        borderWidth:1,borderColor:'blue', marginTop:10, padding:10,
    },
    btn:{
        padding:10,
        backgroundColor:'black'
    },

})

export default Touchables;