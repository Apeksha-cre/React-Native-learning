/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import { 
    View,
    Text,
    SafeAreaView,
    ScrollView
} from 'react-native';
import FlatCards from './components/FlatCards';
import ElevatedCards from './components/ElevatedCards';
import FancyCard from './components/FancyCard';

function App(){
    return(
        <SafeAreaView>
        <ScrollView>
        <View>
        <FlatCards/>
        <ElevatedCards/>
        <FancyCard/>
        </View>
        </ScrollView>
        </SafeAreaView>)
}
export default App; 
