import React from "react";
import {
    View,
    Text,
    StyleSheet,
    useColorScheme
} from 'react-native';

function AppPro():JSX.Element{
    
    const isDarkMode = useColorScheme() === 'dark';
    return(
        <View style={styles.container}>
            <Text style={isDarkMode ? styles.whiteText: styles.blackText}>Hello</Text>
            <Text style={styles.alignment}>This is Apeksha</Text>
            <Text style={styles.alignment}>Here, You have successfully created your first ever react native application.</Text>
        </View>
    )
}

const styles = StyleSheet.create({
   container:{
    flex:1,
    alignItems: 'center',
   },

   whiteText:{
    color: '#FFFFFF'
   },

   blackText:{
    color: '#000000'
   },

   alignment:{
    marginTop:5
   }

})

export default AppPro