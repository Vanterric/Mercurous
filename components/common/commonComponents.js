import React, { useState } from 'react';
import { Button, Image, ScrollView, StyleSheet, Text, TextInput, TouchableNativeFeedback, TouchableOpacity, TouchableOpacityComponent, TouchableWithoutFeedback, TouchableWithoutFeedbackBase, View} from 'react-native';
import Menu from '../menu/menu';

export default function commonComponents(request){
    
    const componentList = [['floatPlusBR', floatplusBR], ['mastheadMain', mastheadMain], ['deleteButtonSmall', deletButtonSmall]]

    /* Floating "+" buttion on the bottom right */
    function floatplusBR(){
        return(
            <TouchableOpacity  style={{height:60, width:60, borderRadius:30, backgroundColor:'lightblue', justifyContent:'space-between', elevation:0, position:'absolute', bottom:30, right:30 }} >
                <Text style={{fontSize:38, textAlign:'center'}}>{'\u2795'}</Text>
            </TouchableOpacity>
    )}

    /* Masthead with App Name and Menu Button */
    function mastheadMain(){
        return(
            <View style = {{height:50, alignItems:'center', marginTop:'10%', zIndex:1}}>
                <Text style = {{fontSize:20}}>Mercurous</Text>
                <Text style = {{position:'absolute', left:5, fontSize:20}} onPress = {()=>setMenuVisibility(!menuVisibility)}>{'\u2630'}</Text>
            </View>
    )}

    function deletButtonSmall(){
        return(
            <TouchableOpacity style = {{position:'absolute', marginLeft:5, backgroundColor:'red', borderRadius:20, height:30, width:30, marginTop:25, elevation:3, right:'46.5%'}} onPress = {()=>{setCurrentBucket(bucket); setPopupType('are you sure'); setPopupSwitch(true)}} >
                <Text style = {{fontSize:25, position:'absolute', alignSelf:'center', transform:[{translateY:-7}]}} >{'x'}</Text>
            </TouchableOpacity>
        )
    }


    //One could technically import this file and call these assets from it... but it wasn't made with that intent soo use at your own risk
    return componentList.map(component=>{
        if(component[0]===request){
            return component[1]()
            
        }
    })

}