import React, { useState } from 'react';
import { Text, View, TextInput, Button, ScrollView, TouchableOpacity,} from 'react-native';
import {Picker} from '@react-native-community/picker'
import Menu from '../menu/menu'
import PopupMessage from '../buckets/popupMessage'
import AsyncStorage from '@react-native-async-storage/async-storage'

function ExpenseList({expenses, setMonthlyBudget, monthlyBudget, expenseType, expenseSubType, saveToBrowser, styles}){
    var index = -1

    const [forceRender,setForceRender] = useState(true)

    const handleDelete = (expense) =>{
        var tempMonthlyBudget = monthlyBudget
        tempMonthlyBudget[expenseType][expenseSubType].map((item, key)=>{
            if (item===expense){
                tempMonthlyBudget[expenseType][expenseSubType].splice(key,1)
            }
        })
        return tempMonthlyBudget

    }

    return(
        <View>
            {expenses.map((expense,key)=>{
                index++
                return(
                    <View key = {key}>
                        <View>
                            <TouchableOpacity style = {{position:'absolute', marginLeft:5, backgroundColor:'red', borderRadius:20, height:20, width:20, marginTop:10}} onPress={()=>{setMonthlyBudget(handleDelete(expense));setForceRender(!forceRender); saveToBrowser()}}>
                                <Text style = {{fontSize:15, position:'absolute', alignSelf:'center', transform:[{translateY:-3}]}} >{'x'}</Text>
                            </TouchableOpacity>
                            <Text key = {expense[0].toString() + index} style = {{marginLeft:30, fontSize:15, marginTop:10}} >{expense[0]}</Text>
                        </View>
                        <Text key = {expense[1].toString() + index} style={{position:'absolute', right:10, fontSize:15, marginTop:10}}>${expense[1]}</Text>
                    </View> 
                )
            })}
        </View>
    )
}






export default function ExpenseOverview({menuVisibility, setMenuVisibility, currentPage, setCurrentPage, logo, monthlyBudget, setPopupSwitch, setMonthlyBudget, popupSwitch, styles}){

    const [expenseType,setExpenseType] = useState('Monthly')

    async function saveToBrowser (){
        try{
            
            await AsyncStorage.setItem('monthlyBudget',JSON.stringify(monthlyBudget))
        }
        catch(error){
            alert('failed to save data')
        }
        
      }

    
    saveToBrowser()

    return(
        <View >
            <View style = {{height:50, alignItems:'center', marginTop:'10%'}}>
                <Text style = {{fontSize:20}}>Mercurous</Text>
                <Text style = {{position:'absolute', left:5, fontSize:20}} onPress = {()=>setMenuVisibility(!menuVisibility)}>{'\u2630'}</Text>
            </View>
            <View style={{backgroundColor:'skyblue', padding:20, overflow:'scroll', height:'44%'}}>
                <Text style={{textAlign:'center', fontSize:25, left:-37}}>Fixed Monthly Expenses</Text>
                <TouchableOpacity style={{position:'absolute', top:18, right:30, backgroundColor:'white', borderRadius:30,  elevation:2, width:45}} onPress={()=>{setExpenseType('Monthly');setPopupSwitch(!popupSwitch)}}>
                    <Text style={{fontSize:30, textAlign:'center'}}>{'\u2795'}</Text>
                </TouchableOpacity>
                
                <Text style = {{fontSize:18, textDecorationLine:'underline'}}>Needs:</Text>
                <ScrollView style={{ width:'100%', borderWidth:1}}>
                    <ExpenseList expenses = {monthlyBudget.expenses.needs} setMonthlyBudget = {setMonthlyBudget} monthlyBudget = {monthlyBudget} expenseType='expenses' expenseSubType='needs' saveToBrowser ={saveToBrowser}/>
                </ScrollView>
                <Text />
                <Text style = {{fontSize:18, textDecorationLine:'underline'}}>Wants:</Text>
                <ScrollView style={{ width:'100%', borderWidth:1}}>
                    <ExpenseList expenses = {monthlyBudget.expenses.wants} setMonthlyBudget = {setMonthlyBudget} monthlyBudget = {monthlyBudget} expenseType='expenses' expenseSubType='wants' saveToBrowser ={saveToBrowser}/>
                </ScrollView>
                
            </View>
            <View style = {{backgroundColor:'indianred', padding:20,height:'44%'}}>
                <Text style={{textAlign:'center', fontSize:25,  left:-50}}>This Week's Expenses</Text>
                <TouchableOpacity style={{position:'absolute', top:18, right:30, backgroundColor:'white', borderRadius:30,  elevation:2, width:45}} onPress={()=>{setExpenseType('Weekly');setPopupSwitch(!popupSwitch)}}>
                    <Text style={{fontSize:30, textAlign:'center'}}>{'\u2795'}</Text>
                </TouchableOpacity>
                <Text style = {{fontSize:18, textDecorationLine:'underline'}}>Needs:</Text>
                <ScrollView style={{ width:'100%', borderWidth:1}}>
                    <ExpenseList expenses = {monthlyBudget.weeklyExpenses.needs} setMonthlyBudget = {setMonthlyBudget} monthlyBudget = {monthlyBudget} expenseType='weeklyExpenses' expenseSubType='needs' saveToBrowser ={saveToBrowser}/>
                </ScrollView>
                <Text />
                <Text style = {{fontSize:18, textDecorationLine:'underline'}}>Wants:</Text>
                <ScrollView style={{ width:'100%', borderWidth:1}}>
                    <ExpenseList expenses = {monthlyBudget.weeklyExpenses.wants} setMonthlyBudget = {setMonthlyBudget} monthlyBudget = {monthlyBudget} expenseType='weeklyExpenses' expenseSubType='wants' saveToBrowser ={saveToBrowser}/>
                </ScrollView>                
            </View>
            <PopupMessage page = 'expenseList' type = 'add an expense' isVisibile={popupSwitch} monthlyBudget = {monthlyBudget} setPopupSwitch = {setPopupSwitch} setMonthlyBudget = {setMonthlyBudget} expenseType = {expenseType} />
            <Menu visibility = {menuVisibility} setVisibility = {setMenuVisibility} setCurrentPage = {setCurrentPage} currentPage = {currentPage} logo={logo} styles={styles}/>
        </View>
    )
}