import React, { useState } from 'react';
import { Button, ScrollView, StyleSheet, Text, TextInput, TouchableNativeFeedback, TouchableOpacity, TouchableOpacityComponent, TouchableWithoutFeedback, TouchableWithoutFeedbackBase, View} from 'react-native';
import Menu from '../menu/menu';
import PopupMessage from '../buckets/popupMessage';
import AsyncStorage from '@react-native-async-storage/async-storage'

export default function Settings({popupSwitch, monthlyBudget, setMonthlyBudget, setMenuVisibility, setPopupSwitch, currentBucket, addOrSubtract, menuVisibility, setCurrentPage, currentPage, logo, styles}){
    const [popupType,setPopupType] = useState('add to bucket')
    return(
        <View style={{height:'100%'}}>
            <View>
                <View style = {{height:50, alignItems:'center', marginTop:'10%', zIndex:1}}>
                    <Text style = {{fontSize:20}}>Mercurous</Text>
                    <Text style = {{position:'absolute', left:5, fontSize:20}} onPress = {()=>setMenuVisibility(!menuVisibility)}>{'\u2630'}</Text>
                </View>
                <View>
                    <Text style = {{textAlign:'center', fontSize:20}}>Settings</Text>
                </View>
                <ScrollView>
                    <Text style = {{marginLeft:10, paddingBottom:10, fontSize:16, color:'red'}}>Personalization</Text>
                    <Text style = {{marginLeft:10, paddingBottom:10, fontSize:16, color:'red'}}>Data</Text>
                    <TouchableOpacity onPress={()=>{setPopupType('clear data'); setPopupSwitch(true)}}>
                        <Text style={{marginLeft:10, fontSize:18}}>Clear Data</Text>
                    </TouchableOpacity>
                </ScrollView>
            </View>
            <PopupMessage isVisibile={popupSwitch} monthlyBudget={monthlyBudget} page = 'settings' type = {popupType} currentBucket = {currentBucket} setPopupSwitch={setPopupSwitch} addOrSubtract={addOrSubtract} setMonthlyBudget={setMonthlyBudget}/>
            <Menu visibility = {menuVisibility} setVisibility = {setMenuVisibility} setCurrentPage = {setCurrentPage} currentPage = {currentPage} logo={logo} styles={styles}/>
        </View>
    )
}