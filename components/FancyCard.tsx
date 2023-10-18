import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'

const FancyCard = () => {
  return (
    <View>
      <Text style={styles.headingText}>First react Native Project</Text>
      <View>
        <Image
        style={styles.cardimage}
        source={{uri:'https://thumbs.dreamstime.com/b/software-development-business-process-automation-internet-technology-concept-virtual-screen-software-development-143587196.jpg'}}/>
      </View>
      <View>
        <Text style={styles.imagetext}>
            This is the First page with three different components developed by the React native.
        </Text>
        <Text style={styles.carddetails}>1.FlatCards: This is the simple and fiest componet in which I have just created 4 cards with the different color</Text>
        <Text style={styles.carddetails}>2. ElevatedCards: This is the second componets in which i have performed the ScrollView functionality of the react Native. You can scroll it horizontally</Text>
      </View>
    </View>
  )
}

export default FancyCard

const styles = StyleSheet.create({
    headingText : {
        fontSize: 24,
        fontWeight: 'bold',
        paddingHorizontal: 10,
    },
    cardimage:{
        height:200,
        width:440
    },

    imagetext:{
        fontStyle:'italic',
        fontWeight: 'bold',
        paddingBottom:5
    },

    carddetails:{
        fontStyle:'normal',
        fontWeight:'500'
    }
})