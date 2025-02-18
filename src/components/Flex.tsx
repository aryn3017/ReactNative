import { StyleSheet, Text, View } from "react-native";



function Flex() {
    return (
        <View style={[styles.container, { borderColor: 'red', borderWidth: 1 }]}>
            <View><Text style={[{marginHorizontal:"auto", fontSize: 30, fontWeight: "bold", textDecorationLine: "underline", borderColor: 'red', borderWidth: 1 }]}>Flex Layouting</Text></View>
            <View
                style={[styles.container, { flexDirection: "row",justifyContent:"center"}]}
            >
                <View
                    style={styles.part1}
                >
                    <Text>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quisquam error incidunt alias officiis explicabo nemo commodi. Eveniet nihil ab magnam nemo quaerat non, excepturi perferendis maxime aut praesentium blanditiis itaque provident iure! Officiis tempora ducimus officia beatae quia cum quisquam, enim, accusantium possimus aliquam assumenda saepe explicabo quos tenetur nostrum.</Text>
                </View>
                <View
                    style={styles.part1}
                >
                    <Text>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Numquam doloremque possimus ducimus accusamus laboriosam quas itaque voluptas sequi nisi impedit provident atque molestias repudiandae error amet dignissimos, commodi nulla esse non optio sint. Vel atque, magni animi corporis nulla illum eveniet laboriosam tempore reprehenderit aspernatur possimus, dolore nostrum odio voluptatem distinctio cupiditate temporibus quas saepe numquam. Minus odio soluta tenetur.</Text>

                </View>

            </View></View>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'grey',
        marginTop: 50,
        borderColor: 'red', borderWidth: 1,
        justifyContent:'space-between',
        flexWrap:'wrap'
    },
    part1: {
        borderColor: 'black', borderWidth: 1,
    },
})

export default Flex;