import React, { useState } from 'react';
import { Text, View, TextInput, Button} from 'react-native';
import {Picker} from '@react-native-community/picker'
import Menu from '../menu/menu'
import AsyncStorage from '@react-native-async-storage/async-storage'

export default function IncurExpense({menuVisibility,setMenuVisibility, setCurrentPage, currentPage, logo, monthlyBudget, setMonthlyBudget, styles}){

    const [state, setState] = useState({
        expense:['', ''],
        location:'',
    })

    async function saveToBrowser (){
        await AsyncStorage.setItem('monthlyBudget',JSON.stringify(monthlyBudget))
      }

    const handleSubmit = () =>{

        if (state.location==='Weekly Needs'){
            var weeklyExpenses = monthlyBudget.weeklyExpenses
            weeklyExpenses.needs.push([state.expense[0], parseInt(state.expense[1])])
            setMonthlyBudget({monthlyRevenue:monthlyBudget.monthlyRevenue, percentageNeeds:monthlyBudget.percentageNeeds, percentageWants:monthlyBudget.percentageWants, percentageSavings:monthlyBudget.percentageSavings, expenses:monthlyBudget.expenses, weeklyExpenses:weeklyExpenses, buckets:monthlyBudget.buckets, residualAllocations:monthlyBudget.residualAllocations, paychecks : monthlyBudget.paychecks, bankBalance:monthlyBudget.bankBalance})
        }
        else if (state.location==='Weekly Wants'){
            var weeklyExpenses = monthlyBudget.weeklyExpenses
            weeklyExpenses.wants.push([state.expense[0], parseInt(state.expense[1])])
            setMonthlyBudget({monthlyRevenue:monthlyBudget.monthlyRevenue, percentageNeeds:monthlyBudget.percentageNeeds, percentageWants:monthlyBudget.percentageWants, percentageSavings:monthlyBudget.percentageSavings, expenses:monthlyBudget.expenses, weeklyExpenses:weeklyExpenses, buckets:monthlyBudget.buckets, residualAllocations:monthlyBudget.residualAllocations, paychecks : monthlyBudget.paychecks, bankBalance:monthlyBudget.bankBalance})
        }
        else if (state.location==='Monthly Needs'){
            var monthlyExpenses = monthlyBudget.expenses
            monthlyExpenses.needs.push([state.expense[0], parseInt(state.expense[1])])
            setMonthlyBudget({monthlyRevenue:monthlyBudget.monthlyRevenue, percentageNeeds:monthlyBudget.percentageNeeds, percentageWants:monthlyBudget.percentageWants, percentageSavings:monthlyBudget.percentageSavings, expenses:monthlyExpenses, weeklyExpenses:monthlyBudget.weeklyExpenses, buckets:monthlyBudget.buckets, residualAllocations:monthlyBudget.residualAllocations, paychecks : monthlyBudget.paychecks, bankBalance:monthlyBudget.bankBalance})
        }
        else if (state.location==='Monthly Wants'){
            var monthlyExpenses = monthlyBudget.expenses
            monthlyExpenses.wants.push([state.expense[0], parseInt(state.expense[1])])
            setMonthlyBudget({monthlyRevenue:monthlyBudget.monthlyRevenue, percentageNeeds:monthlyBudget.percentageNeeds, percentageWants:monthlyBudget.percentageWants, percentageSavings:monthlyBudget.percentageSavings, expenses:monthlyExpenses, weeklyExpenses:monthlyBudget.weeklyExpenses, buckets:monthlyBudget.buckets, residualAllocations:monthlyBudget.residualAllocations, paychecks : monthlyBudget.paychecks, bankBalance:monthlyBudget.bankBalance})
        }
        else{
            var buckets = monthlyBudget.buckets
            var refinedLocation = state.location.split(' ')
            refinedLocation.pop()
            buckets[refinedLocation][0] = parseInt(buckets[refinedLocation][0]) - parseInt(state.expense[1])
            setMonthlyBudget({monthlyRevenue:monthlyBudget.monthlyRevenue, percentageNeeds:monthlyBudget.percentageNeeds, percentageWants:monthlyBudget.percentageWants, percentageSavings:monthlyBudget.percentageSavings, expenses:monthlyBudget.expenses, weeklyExpenses:monthlyBudget.weeklyExpenses, buckets:buckets, residualAllocations:monthlyBudget.residualAllocations, paychecks : monthlyBudget.paychecks, bankBalance:monthlyBudget.bankBalance})
        }

        alert(`You have successfully expensed the following item: \n\nAmount: ${state.expense[0]} \nDescription: ${state.expense[1]} \nfrom your ${state.location}`)
        return null
    }

    const ListPickerItems = () =>{
        var items =[]
        var tempBuckets = monthlyBudget.buckets

        Object.keys(tempBuckets).map((item,key)=>items.push(item))

        return (
            <Picker style={{width:'50%'}} selectedValue = {state.location} onValueChange = {(itemValue,itemIndex)=>{setState({expense:state.expense, location:itemValue})}}>
                <Picker.Item  label="Select a Location" value="None" />
                <Picker.Item  label="Weekly Needs" value="Weekly Needs" />
                <Picker.Item  label="Weekly Wants" value="Weekly Wants" />
                <Picker.Item  label="Monthly Needs" value="Monthly Needs" />
                <Picker.Item  label="Monthly Wants" value="Monthly Wants" />
                {items.map((item,key)=>{return <Picker.Item key = {key} label = {`${item} Bucket`} value= {`${item} Bucket`}/>})}
            </Picker>       
        )
    }

    return(
        <View>
            <View style = {{height:50, alignItems:'center', marginTop:'10%'}}>
                <Text style = {{fontSize:20}}>Mercurous</Text>
                <Text style = {{position:'absolute', left:5, fontSize:20}} onPress = {()=>setMenuVisibility(!menuVisibility)}>{'\u2630'}</Text>
            </View>
            <Text style = {{textAlign:'center', fontSize:30, marginTop:50}}>Incur an Expense</Text>
            <Text />
            <View style = {{alignItems:'center'}}>
                <TextInput style = {{fontSize:30, textAlign:'center'}} value = {state.expense[1]} placeholder='Amount' onChangeText = {(e)=>{setState({expense:[state.expense[0],e]})}}></TextInput>
                <Text />
                <TextInput style = {{fontSize:30, textAlign:'center'}}  value = {state.expense[0]} placeholder='Description' onChangeText = {(e)=>{setState({expense:[e,state.expense[1]]})}}></TextInput>
                <Text />
                <ListPickerItems />
            </View>
            <Text />
            <Text />
            <View style = {{elevation:1}}>
                <Button onPress={()=>{handleSubmit(); saveToBrowser()}} disabled={parseInt(state.expense[1]) && state.expense[1]!=='' && state.location!=='' && state.location!=='None' && state.expense[0]!==''?false:true} title = 'Incur Expense'/>
            </View>
            <Menu visibility = {menuVisibility} setVisibility = {setMenuVisibility} setCurrentPage = {setCurrentPage} currentPage = {currentPage} logo={logo} styles={styles}/>
        </View>
    )
}