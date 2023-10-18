 import { ScrollView, StyleSheet, Text, View } from 'react-native'
 import React from 'react'
 
 export default function ElevatedCards (){
   return (
     <View>
       <Text style={styles.headingText}>ElevatedCards</Text>
       <ScrollView horizontal={true} style={styles.container}>
        <View style={[styles.elevatecardone, styles.card]}>
          <Text>Scroll</Text>
        </View>

        <View style={[styles.elevatecardone, styles.card]}>
          <Text>it </Text>
        </View>

        <View style={[styles.elevatecardone, styles.card]}>
          <Text>to</Text>
        </View>

        <View style={[styles.elevatecardone, styles.card]}>
          <Text>right</Text>
        </View>

        <View style={[styles.elevatecardone, styles.card]}>
          <Text>made</Text>
        </View>

        <View style={[styles.elevatecardone, styles.card]}>
          <Text>of</Text>
        </View>

        <View style={[styles.elevatecardone, styles.card]}>
          <Text>using</Text>
        </View>

        <View style={[styles.elevatecardone, styles.card]}>
          <Text>ScrollView</Text>
        </View>
       </ScrollView>
     </View>
   )
 }
 
 const styles = StyleSheet.create({
  headingText : {
    fontSize: 24,
    fontWeight: 'bold',
    paddingHorizontal: 10,
},
container:{},
card:{
  alignItems:'center',
  justifyContent:'center',
  margin:2,
  width:100,
  height:100,
  backgroundColor:'#f08080',
  borderRadius:8
},
elevatecardone:{
  elevation:4,
  shadowOffset:{
    width:1,
    height:1
  },

  shadowColor:'#a52a2a',
  shadowRadius:4
}

 })