import React,{Component} from 'react';
import { StyleSheet, Text, View, SafeAreaView, TouchableOpacity, Platform, StatusBar, ImageBackground, Image } from 'react-native';

export default class HomeScreen extends Component {
    render(){
    return(
        <View style = {styles.container}>
        <SafeAreaView style = {styles.droidSafeArea}/>  
        <ImageBackground source = {require('../assets/space.gif')} style = {styles.backgroundImage}>
        <View style = {styles.titleBar}>
        <Text style = {styles.titleText}>Stellar App </Text>
        </View>
        
        <TouchableOpacity style = {styles.routeCard} onPress = { ()=> {
        this.props.navigation.navigate("DailyPic")
        }}>
        <Text style = {styles.routeText}>Daily Pictures</Text>
        <Text style = {styles.knowMore}>{"know More...>"}</Text>
        <Text style = {styles.bgDigit}>1</Text>
        <Image source = {require('../assets/daily_pictures.png')} style = {styles.iconImage}/>
        </TouchableOpacity>
        
        <TouchableOpacity style = {styles.routeCard} onPress = { ()=> {
        this.props.navigation.navigate("SpaceCrafts")
        }}>
        <Text style = {styles.routeText}>Space Crafts </Text>
        <Text style = {styles.knowMore}>{"know More...>"}</Text>
        <Text style = {styles.bgDigit}>2</Text>
        <Image source = {require('../assets/spacecraft.png')} style = {styles.iconImage}/>
        </TouchableOpacity>
        
        <TouchableOpacity style = {styles.routeCard} onPress = { ()=> {
        this.props.navigation.navigate("StartMap")
        }}>
        <Text style = {styles.routeText}>Start Map</Text>
        <Text style = {styles.knowMore}>{"know More...>"}</Text>
        <Text style = {styles.bgDigit}>3</Text>
        <Image source = {require('../images/assets/star_map.png')} style = {styles.iconImage}/>
        </TouchableOpacity>
        </ImageBackground>
        </View>
    )    
    }    
    }

    const styles = StyleSheet.create({
        container: {
        flex: 1
        },
        droidSafeArea:{
        marginTop: Platform.OS ===   "android"? StatusBar.currentHeight: 0
        },
        titleBar: {
        flex: 0.15,
        justifyContent: 'center',
        alignItems: 'center'  
        },
        routeCard: {
        flex: 0.2,
        justifyContent: 'center',
        alignItems: 'center',
        marginLeft: 10,
        marginRight: 10,
        marginTop: 5,
        borderRadius: 10,
        backgroundColor: 'white',
        borderWidth: 3
        },
        
        routeText: {
        fontSize: 35,
        fontWeight: 'bold',
        color: 'black',
        marginTop: 75,
        paddingLeft: 30,
        
        },
        
        titleText: {
        fontSize: 40,
        fontWeight: 'bold',
        color: 'white',  
        },
        
        backgroundImage: {
        flex: 1,
        resizeMode: 'cover'  
        },
        
        iconImage : {
        position: "absolute",
        height: 180,
        width: 180,
        resizeMode: "contain",
        right: 20,
        top: -60
        },
        
        knowMore: {
        paddingLeft: 30,
        color: 'red',
        fontSize: 15 ,
        marginBottom: 30
         },
        
        bgDigit: {
        position: "absolute",
        color: 'rgba(183,183,183,0.5)',
        fontSize: 100,
        right: 20,
        bottom: -15,
        zIndex: -1 
        },
        })