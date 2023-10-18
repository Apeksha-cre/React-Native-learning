import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function FlatCards() {
  return (
    <View>
      <Text style={styles.headingText}>FlatCards</Text>
      <View style={styles.containers}>
        <View style={[styles.card, styles.cardone]} >
            <Text>Red</Text>
        </View>

        <View style={[styles.card, styles.cardtwo]}>
            <Text>brown</Text>
        </View>

        <View style={[styles.card, styles.cardthree]}>
            <Text>maroon</Text>
        </View>

        <View style={[styles.card, styles.cardfour]}>
            <Text>gray</Text>
        </View>

      </View>
    </View>
  )
}

const styles = StyleSheet.create({
    headingText : {
        fontSize: 24,
        fontWeight: 'bold',
        paddingHorizontal: 10,
    },

    containers:{
       flex:1,
       flexDirection:'row',
      marginBottom:5

    },
    card:{
        flex:2,
        justifyContent:'center',
        alignItems:'center',
        borderRadius:6,
        marginTop:5,
        marginLeft:10,
        height:100,
        width:100
    },
    cardone:{
        backgroundColor:'#EF5354'
    },

    cardtwo:{
        backgroundColor:'#a52a2a'
    },

    cardthree:{
      backgroundColor:'#dc143c'

    },

    cardfour:{
      backgroundColor:'#696969'
    }

})

