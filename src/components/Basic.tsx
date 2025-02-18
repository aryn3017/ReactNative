import { useState } from 'react';
import {
  Button,
  Image,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TextInput,
  useColorScheme,
  View,
} from 'react-native';

function Basics() {
    const [count, setCount] = useState<number>(0)
    const [value, setvalue] = useState(' ')
    console.log(value);
    return(
            <View style={styles.boc}>
                      <View style={styles.container}>
                          <View style={styles.redBox} ><Text>hiowo</Text></View>
                          <View style={styles.blueBox} ><Text>hiowo</Text></View>
                          <View style={styles.greenBox} ><Text>hiowo</Text></View>
                      </View>
                          
                          
                          <Image style={styles.image} source={{uri: 'https://fastly.picsum.photos/id/237/200/300.jpg?hmac=TmmQSbShHz9CdQm0NkEjx1Dyh_Y984R9LpNrpvH2D_U'}}/>
                          <Image style={styles.image} source={require('../../assets/sc.png')}/>
            
                          <Button color={'green'} title='click' onPress={()=>{setCount(count +1)}}/>
                          <Text>coutn is {count}</Text>
                          <TextInput placeholder='type here' value={value} style={styles.input} onChangeText={setvalue}/>
                    </View>
    )
}

const styles = StyleSheet.create({
    input:{
        borderWidth:1,
        borderColor: 'black',
    },
  boc:{
    marginTop:20,
    // backgroundColor: 'black',
  },
  container: {marginBottom: 20,
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  
  redBox: {
    width: 50,
    height:50,
    backgroundColor: 'red',
  },
  blueBox: {
    width: 50,
    height:50,
    backgroundColor: 'blue',
  },
  greenBox: {
    width: 50,
    height:50,
    backgroundColor: 'green',
  },
  image: {
    width: 150,
    zIndex: 1,
    height: 150,
    resizeMode: 'contain',
    marginBottom: 20,
  }
})

export default Basics;