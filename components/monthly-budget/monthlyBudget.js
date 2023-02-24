import React, { useState } from 'react';
import { StyleSheet, Text, View, Dimensions, TextInput, TouchableOpacity, ScrollView} from 'react-native';
import Menu from '../menu/menu'
import AsyncStorage from '@react-native-async-storage/async-storage'
import PopupMessage from '../buckets/popupMessage';

export const deviceHeight = Dimensions.get('window').height
export const deviceWidth = Dimensions.get('window').width







function ExpenseTotal({expenses}){
    var total = 0
    expenses.map(expense=>{
        total += expense[1]
    })
    return <Text style = {{position:'absolute', fontSize:20, right:10}}>${total.toFixed(0)}</Text>
}

export default function MonthlyBudget({monthlyBudget,menuVisibility, setMenuVisibility, setCurrentPage, currentPage, logo, setMonthlyBudget, styles, popupSwitch, setPopupSwitch}){
    
    const [forceRender,setForceRender] = useState(true)
    const [popupType,setPopupType] = useState('add a paycheck')

    async function saveToBrowser (){
        
        await AsyncStorage.setItem('monthlyBudget',JSON.stringify(monthlyBudget))
      }

    const handleRevenueChange = (e)=>{
        var tempMonthlyBudget = monthlyBudget
        tempMonthlyBudget.monthlyRevenue = parseInt(e)
        return tempMonthlyBudget
    }

    const handlePercentageChange = (e,percentType, nextPercentType, backup) =>{
        const tempMonthlyBudget = {...monthlyBudget}
        tempMonthlyBudget[percentType] = parseInt(e)
        if (parseInt(tempMonthlyBudget.percentageNeeds) + parseInt(tempMonthlyBudget.percentageWants) + parseInt(tempMonthlyBudget.percentageSavings)>100){
            var excess = parseInt(tempMonthlyBudget.percentageNeeds) + parseInt(tempMonthlyBudget.percentageWants) + parseInt(tempMonthlyBudget.percentageSavings) - 100
            if (tempMonthlyBudget[nextPercentType]>=excess){
                tempMonthlyBudget[nextPercentType] = parseInt(tempMonthlyBudget[nextPercentType]) - excess
            }
            else{
                tempMonthlyBudget[backup] = parseInt(tempMonthlyBudget[backup]) - excess
            }
            
            return tempMonthlyBudget
        }
        else return monthlyBudget

    }

    



    
    return(
        <View>
            <View style = {{height:50, alignItems:'center', marginTop:'10%'}}>
                <Text style = {{fontSize:20}}>Mercurous</Text>
                <Text style = {{position:'absolute', left:5, fontSize:20}} onPress = {()=>setMenuVisibility(!menuVisibility)}>{'\u2630'}</Text>
            </View>
            <View style = {{position:'absolute', backgroundColor:'lightblue', top:100, elevation:1, height:180, width:180, left:20}}>
                <Text style = {{fontSize:20, textAlign:'center', fontWeight:'bold', marginTop:5}}>Average Monthly Revenue</Text>
                <Text style = {{textAlign:'center', fontSize:30, margin:20}}>${monthlyBudget.monthlyRevenue.toFixed(2)}</Text>
            </View>
            <View style = {{position:'absolute', backgroundColor:'lightskyblue', top:100, elevation:1, height:180, width:180, right:20}}>
                <Text style = {{fontSize:20, textAlign:'center', fontWeight:'bold', marginTop:5}}>Allocation Percentages</Text>
                <View>
                    <Text style = {{fontSize:20, marginLeft:10, marginBottom:10}}>Needs:</Text>
                    <TextInput onChangeText={(e)=>{setMonthlyBudget(handlePercentageChange(e,'percentageNeeds', 'percentageWants', 'percentageSavings')); setForceRender(!forceRender); saveToBrowser()}} style = {{position:'absolute', fontSize:20, right:30, textDecorationLine:'underline'}}>{monthlyBudget.percentageNeeds}</TextInput>
                    <Text style ={{position:'absolute', fontSize:20, right:12}}>%</Text>
                </View>
                <View>
                    <Text style = {{fontSize:20, marginLeft:10, marginBottom:10}}>Wants:</Text>
                    <TextInput onChangeText={(e)=>{setMonthlyBudget(handlePercentageChange(e, 'percentageWants', 'percentageSavings','percentageNeeds')); setForceRender(!forceRender); saveToBrowser()}} style = {{position:'absolute', fontSize:20, right:30, textDecorationLine:'underline'}}>{monthlyBudget.percentageWants}</TextInput>
                    <Text style ={{position:'absolute', fontSize:20, right:12}}>%</Text>
                </View>
                <View>
                    <Text style = {{fontSize:20, marginLeft:10, marginBottom:10}}>Savings:</Text>
                    <TextInput onChangeText={(e)=>{setMonthlyBudget(handlePercentageChange(e, 'percentageSavings','percentageNeeds', 'percentageWants')); setForceRender(!forceRender); saveToBrowser()}} style = {{position:'absolute', fontSize:20, right:30, textDecorationLine:'underline'}}>{monthlyBudget.percentageSavings}</TextInput>
                    <Text style ={{position:'absolute', fontSize:20, right:12}}>%</Text>
                </View>
            </View>
            <View style = {{position:'absolute', backgroundColor:'chartreuse', top:295, elevation:1, height:180, width:180, left:20}}>
                <Text style = {{fontSize:20, textAlign:'center', fontWeight:'bold', marginTop:5}}>Monthly Fixed Expenses</Text>
                <View style = {{marginBottom:10, marginTop:10}}>
                    <Text style = {{fontSize:20, marginLeft:10, marginBottom:10}}>Needs:</Text>
                    <ExpenseTotal expenses = {monthlyBudget.expenses.needs}/>
                </View>
                <View>
                    <Text style = {{fontSize:20, marginLeft:10, marginBottom:10}}>Wants:</Text>
                    <ExpenseTotal expenses = {monthlyBudget.expenses.wants}/>
                </View>
            </View>
            <View style = {{position:'absolute', backgroundColor:'darkseagreen', top:295, elevation:1, height:180, width:180, right:20}}>
                <Text  style = {{fontSize:20, textAlign:'center', fontWeight:'bold', marginTop:5}}>Savings per Month</Text>
                <Text style = {{textAlign:'center', fontSize:30, margin:20}}>${(monthlyBudget.monthlyRevenue*(monthlyBudget.percentageSavings/100)).toFixed(2)}</Text>
            </View>
            <TouchableOpacity  style = {{position:'absolute', backgroundColor:'red', top:490, elevation:1, height:180, width:180, right:20}} onPress={()=>{setPopupSwitch(true); setPopupType('add a paycheck')}}>
                    <Text style={{fontSize:30, textAlign:'center',fontWeight:'bold', top:'25%'}}>Add New Paycheck</Text>
            </TouchableOpacity>
            <View style = {{position:'absolute', backgroundColor:'indianred', top:490, elevation:1, height:180, width:180, left:20}}>
                <Text  style = {{fontSize:20, textAlign:'center', fontWeight:'bold', marginTop:5}}>Bank Balance</Text>
                <Text style = {{textAlign:'center'}}>*Estimate</Text>
                <View>
                    <Text style={{fontSize:30, position:'absolute', bottom:0, left:5}}>$</Text>
                    <Text style = {{textAlign:'center', fontSize:30, marginTop:20, textDecorationLine:'underline'}} onPress={()=>{setPopupSwitch(true); setPopupType('update bank balance')}}>{monthlyBudget.bankBalance}</Text>
                </View>
            </View>
            <PopupMessage isVisibile={popupSwitch} monthlyBudget={monthlyBudget} page = 'monthlyBudget' type = {popupType} setPopupSwitch={setPopupSwitch} setMonthlyBudget={setMonthlyBudget}/>
            <Menu visibility = {menuVisibility} setVisibility = {setMenuVisibility} setCurrentPage = {setCurrentPage} currentPage = {currentPage} logo={logo} deviceHeight={deviceHeight} deviceWidth = {deviceWidth} styles = {styles}/>
        </View>
    )
}



 