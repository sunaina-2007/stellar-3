import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import DailyPicScreen from './screens/DailyPic';
import SpaceCraftsScreen from './screens/SpaceCrafts';
import StartMapScreen from './screens/StartMap';
import HomeScreen from './screens/HomeScreen';

const Stack = createStackNavigator()
function App(){
return(
<NavigationContainer>
<Stack.Navigator initialRouteName = "Home" screenOptions = {{
headerShown: false  
}}>  
<Stack.Screen name = "DailyPic" component = {DailyPicScreen}/>
<Stack.Screen name = "SpaceCrafts" component = {SpaceCraftsScreen}/>
<Stack.Screen name = "StarMap" component = {StartMapScreen}/>
</Stack.Navigator>
</NavigationContainer>
)  
}

export default App;

