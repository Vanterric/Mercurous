import React, { useState } from 'react';
import { Button, ScrollView, StyleSheet, Text, TextInput, TouchableNativeFeedback, TouchableOpacity, TouchableOpacityComponent, TouchableWithoutFeedback, TouchableWithoutFeedbackBase, View} from 'react-native';
import {deviceHeight, deviceWidth} from '../monthly-budget/monthlyBudget'
import PopupMessage from './popupMessage';
import AsyncStorage from '@react-native-async-storage/async-storage'
import Menu from '../menu/menu';


function handleSwitch(buckets, setMonthlyBudget, monthlyBudget){
    setMonthlyBudget({monthlyRevenue:monthlyBudget.monthlyRevenue, percentageNeeds:monthlyBudget.percentageNeeds, percentageWants:monthlyBudget.percentageWants, percentageSavings:monthlyBudget.percentageSavings, expenses:monthlyBudget.expenses, weeklyExpenses:monthlyBudget.weeklyExpenses, buckets:buckets, residualAllocations:monthlyBudget.residualAllocations, paychecks : monthlyBudget.paychecks, bankBalance: monthlyBudget.bankBalance})
}

function handlePress(bucket, buckets, setMonthlyBudget, monthlyBudget){
    buckets[bucket][4] = buckets[bucket][4]===0?80:0
    handleSwitch(buckets,setMonthlyBudget, monthlyBudget)
}



function CreateBuckets({buckets, setMonthlyBudget, monthlyBudget, popupSwitch, setPopupSwitch, setCurrentBucket, addOrSubtract, setAddOrSubtract, setPopupType}){
    

    const deleteBucket = (bucket)=>{
        const tempMonthlyBudget = {...monthlyBudget}
        delete tempMonthlyBudget.buckets[bucket]
        return tempMonthlyBudget
    }

    return Object.keys(buckets).map((bucket,key)=>{
        return(
            <View testID='bucket' key = {key} >
                <TouchableWithoutFeedback testID='bucketMain' onPress = {()=>handlePress(bucket, buckets, setMonthlyBudget, monthlyBudget)}>
                    <View key = {key} style = {{width:'100%', elevation:5, backgroundColor:buckets[bucket][1], borderStyle:'solid', borderColor:'black', borderWidth:1, height:100, justifyContent:'center'}}>
                        <Text key={`${bucket}-bucket-label`} style = {{fontSize:20, marginLeft:40, zIndex:2}} >{buckets[bucket][5]}</Text>
                        <Text key={`${bucket}-bucket-amount`} style = {{position:'absolute', right:0, fontSize:20, marginRight:10, zIndex:1}}>${buckets[bucket][0]}</Text>
                        
                    </View>
                </TouchableWithoutFeedback>
                <View testID='editBucketPanel' style={{backgroundColor:buckets[bucket][1], height:buckets[bucket][4], borderWidth:0, borderColor:'black',borderStyle:'solid',zIndex:1,elevation:1, transform:[{translateY:-1}]}}>
                    <TouchableOpacity testID='editNameButton' onPress={()=>{setCurrentBucket(bucket);setAddOrSubtract('Add'); setPopupType('change bucket name'); setPopupSwitch(true)}} style={{backgroundColor:'white', width:60, height:60, position:'absolute', left:10, justifyContent:'center', borderRadius:40, top:9, elevation:2}}>
                        <Text style={{fontSize:30,  textAlign:'center'}} >{'\u270f'}</Text>
                    </TouchableOpacity>
                    <TouchableOpacity testID='editColorButton' onPress={()=>{setCurrentBucket(bucket);setAddOrSubtract('Add'); setPopupType('change bucket color'); setPopupSwitch(true)}} style={{backgroundColor:'white', width:60, height:60, position:'absolute', left:80, justifyContent:'center', borderRadius:40, top:9,  elevation:2}}>
                        <Text style={{fontSize:30,  textAlign:'center', color:buckets[bucket][1], fontWeight:'bold', textShadowColor:'black', textShadowRadius:2}}>{'\u25a0'}</Text>
                    </TouchableOpacity>
                    <TouchableOpacity testID='plusButton' onPress={()=>{setCurrentBucket(bucket);setAddOrSubtract('Add'); setPopupType('add to bucket') ;setPopupSwitch(true)}} style={{backgroundColor:'white', width:60, height:60, position:'absolute', right:80, justifyContent:'center', borderRadius:40, top:9,  elevation:2}}>
                         <Text style={{fontSize:30,  textAlign:'center'}}>{'\u2795'}</Text>
                    </TouchableOpacity>
                    <TouchableOpacity testID='minusButton' onPress={()=>{setCurrentBucket(bucket);setAddOrSubtract('Subtract'); setPopupType('add to bucket'); setPopupSwitch(true)}} style={{backgroundColor:'white', width:60, height:60, position:'absolute', right:10, justifyContent:'center', borderRadius:40, top:9,  elevation:2}}>
                            <Text style={{fontSize:30,  textAlign:'center'}}>{'\u2796'}</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style = {{position:'absolute', marginLeft:5, backgroundColor:'red', borderRadius:20, height:30, width:30, marginTop:25, elevation:3, right:'46.5%'}} onPress = {()=>{setCurrentBucket(bucket); setPopupType('are you sure'); setPopupSwitch(true)}} >
                        <Text style = {{fontSize:25, position:'absolute', alignSelf:'center', transform:[{translateY:-7}]}} >{'x'}</Text>
                    </TouchableOpacity>
                    
                </View>
            </View>
            
        )
        
    })
}




export default function Buckets({menuVisibility,setMenuVisibility, setCurrentPage, currentPage, logo, monthlyBudget, setMonthlyBudget, popupSwitch, setPopupSwitch, styles}){

    function expenseTotal(expenses){
        var total = 0
        expenses.map(expense=>{
            total += parseInt(expense[1])
        })
        return total
    }

    const needsBudget = (((monthlyBudget.monthlyRevenue*monthlyBudget.percentageNeeds/100)-expenseTotal(monthlyBudget.expenses.needs))/4).toFixed(2)
    const needsExpenses = (expenseTotal(monthlyBudget.weeklyExpenses.needs)).toFixed(2)
    const wantsBudget = (((monthlyBudget.monthlyRevenue*monthlyBudget.percentageWants/100)-expenseTotal(monthlyBudget.expenses.wants))/4).toFixed(2)
    const wantsExpenses = (expenseTotal(monthlyBudget.weeklyExpenses.wants)).toFixed(2)

    function totalCash(buckets){
        var total = 0
        Object.keys(buckets).map((bucket, key)=>{
            total+=parseFloat(buckets[bucket][0])
        })
        return total
    }
    

    const addBucket = ()=>{
        const tempMonthlyBudget = {...monthlyBudget}
        const key = Object.keys(tempMonthlyBudget.buckets).length.toString()
        if(tempMonthlyBudget.buckets[key]){
            tempMonthlyBudget.buckets[key + '1'] = [0, 'lightblue', 'NA',0, 0, 'New Bucket']
            tempMonthlyBudget.residualAllocations.wants[key + '1'] = 0
            tempMonthlyBudget.residualAllocations.needs[key + '1'] = 0
        }
        else{
            tempMonthlyBudget.buckets[key] = [0, 'lightblue', 'NA',0, 0, 'New Bucket']
            tempMonthlyBudget.residualAllocations.wants[key] = 0
            tempMonthlyBudget.residualAllocations.needs[key] = 0
        }
        
        return tempMonthlyBudget
    }



    const calculateWeeklyCash = () =>{
        return ((parseFloat(needsBudget) + parseFloat(wantsBudget)) - (parseFloat(needsExpenses)+parseFloat(wantsExpenses))).toFixed(2)
        
    }


    async function saveToBrowser (){
        
        await AsyncStorage.setItem('monthlyBudget',JSON.stringify(monthlyBudget))
      }

    const [currentBucket, setCurrentBucket] = useState('Play Bucket')
    const [addOrSubtract, setAddOrSubtract] = useState('Add')
    const [popupType,setPopupType] = useState('add to bucket')
    
    saveToBrowser()
    return(
        <View style={{height:'100%'}}>
            <ScrollView>
                <View style = {{height:50, alignItems:'center', marginTop:'10%', zIndex:1}}>
                    <Text style = {{fontSize:20}}>Mercurous</Text>
                    <Text style = {{position:'absolute', left:5, fontSize:20}} onPress = {()=>setMenuVisibility(!menuVisibility)}>{'\u2630'}</Text>
                </View>
                <View key='total-cash-in-buckets' style = {{width:'100%', backgroundColor:'firebrick', borderStyle:'solid', borderColor:'black', borderWidth:1, height:100, justifyContent:'center'}}>
                    <Text style = {{fontSize:20, marginLeft:10, fontWeight:'bold'}}>Total Cash in Buckets</Text>
                    <Text style = {{position:'absolute', right:0, fontSize:20, marginRight:10, fontWeight:'bold'}}>${totalCash(monthlyBudget.buckets)}</Text>
                </View>
                <View key='total-cash-left-this-week' style = {{width:'100%', backgroundColor:'indianred', borderStyle:'solid', borderColor:'black', borderWidth:1, height:100, justifyContent:'center'}}>
                    <Text style = {{fontSize:20, marginLeft:10, fontWeight:'bold'}}>Total Cash Left This Week</Text>
                    <Text style = {{position:'absolute', right:0, fontSize:20, marginRight:10, fontWeight:'bold'}}>${calculateWeeklyCash()}</Text>
                </View>
                <CreateBuckets buckets = {monthlyBudget.buckets} setMonthlyBudget = {setMonthlyBudget} monthlyBudget = {monthlyBudget} popupSwitch={popupSwitch} setPopupSwitch={setPopupSwitch} setCurrentBucket={setCurrentBucket} setAddOrSubtract={setAddOrSubtract} addOrSubtract={addOrSubtract} setPopupType = {setPopupType}/>
            </ScrollView>
            <TouchableOpacity onPress={()=>{setMonthlyBudget(addBucket())}} style={{height:60, width:60, borderRadius:30, backgroundColor:'lightblue', justifyContent:'space-between', elevation:3, position:'absolute', bottom:30, right:30 }}>
                    <Text style={{fontSize:38, textAlign:'center'}}>{'\u2795'}</Text>
            </TouchableOpacity>
            <PopupMessage isVisibile={popupSwitch} monthlyBudget={monthlyBudget} page = 'buckets' type = {popupType} currentBucket = {currentBucket} setPopupSwitch={setPopupSwitch} addOrSubtract={addOrSubtract} setMonthlyBudget={setMonthlyBudget}/>
            <Menu visibility = {menuVisibility} setVisibility = {setMenuVisibility} setCurrentPage = {setCurrentPage} currentPage = {currentPage} logo={logo} styles={styles}/>
        </View>
        
    )
}
