import { ScrollView, StyleSheet,Text,View } from "react-native"

function ScrollViewComp() {
    return(
        <View style={abcd.container}>
            <Text>Scroll view component</Text>
            <ScrollView showsVerticalScrollIndicator={true} nestedScrollEnabled={true} style={abcd.scrollview} contentContainerStyle={abcd.scrollviewcomponent} bounces={true}>
                {[...Array(20)].map((_,index)=>(
                    <View key={index} style={abcd.box}>
                        <Text style={abcd.boxtext}>{index+1}</Text>
                    </View>
                ))}

                
            </ScrollView>
        </View>
    )
}

const abcd = StyleSheet.create ({
    container:{
        marginBottom:10,
    },
    scrollview:{
        backgroundColor:'black',
        height:200,
    },
    scrollviewcomponent:{
        padding:20,
    },
    box:{
        height:20,
        backgroundColor: 'green',
        marginBottom: 10,
        justifyContent: 'center',
    }

})

export default ScrollViewComp;