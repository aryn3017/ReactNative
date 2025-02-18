import { StyleSheet, Text, View } from "react-native";
// inline styling

function Combsty() {
    return(
        <View>
            <View style={[styles.first,{justifyContent:'center',flexDirection:'row'}]}><Text style={[styles.first,{}]}>HOW TO IMPLEMENT</Text></View>
            <View style={styles.first}><Text style={[styles.first,{marginLeft:80}]}>INLINE STYLES</Text></View>
        </View>
    )
}
const styles = StyleSheet.create ({
    first:{
        backgroundColor:'black',
        height:100,
        color:'white',
    }
})
export default Combsty;