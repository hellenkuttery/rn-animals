import React from 'react'
import { View ,StyleSheet,Text} from 'react-native'

const AnimalGroup = (props) => {
    return (  
    <View >
            <View style={[styles.container,{backgroundColor:props.backColor}]}>              
                <Text style={styles.title}>{props.title}</Text>
                <Text>{props.description}</Text>               
            </View> 

    </View>  
    )
}

export default AnimalGroup;

const styles=StyleSheet.create({
    container:{
        backgroundColor:"tomato",
        padding:20,
        margin:3,
        borderRadius:5,
        borderWidth:2,
        borderColor:"gray"
    },
    title:{
        fontSize:25,
    }
})