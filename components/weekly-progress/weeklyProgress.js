import React, { useState } from 'react';
import { StyleSheet, Text, View, Button} from 'react-native';
import Menu from '../menu/menu';
import AsyncStorage from '@react-native-async-storage/async-storage'
import PopupMessage from '../buckets/popupMessage';


function expenseTotal(expenses){
    var total = 0
    expenses.map(expense=>{
        total += parseFloat(expense[1])
    })
    return total
}

async function saveToBrowser (){
    await AsyncStorage.setItem('monthlyBudget',JSON.stringify(monthlyBudget))
  }

function pushToBuckets(monthlyBudget, needsBudget, wantsBudget){
    const tempMonthlyBudget = {...monthlyBudget}
    Object.keys(tempMonthlyBudget.residualAllocations.wants).map(bucket=>{
        tempMonthlyBudget.buckets[bucket][0] = (parseFloat(tempMonthlyBudget.buckets[bucket][0]) + (((wantsBudget-expenseTotal(tempMonthlyBudget.weeklyExpenses.wants))*parseFloat(tempMonthlyBudget.residualAllocations.wants[bucket]))/100)).toFixed(2)
    })
    Object.keys(tempMonthlyBudget.residualAllocations.needs).map(bucket=>{
        tempMonthlyBudget.buckets[bucket][0] = (parseFloat(tempMonthlyBudget.buckets[bucket][0]) + (((needsBudget-expenseTotal(tempMonthlyBudget.weeklyExpenses.needs))*parseFloat(tempMonthlyBudget.residualAllocations.needs[bucket]))/100)).toFixed(2)
    })
    tempMonthlyBudget.bankBalance = parseFloat(tempMonthlyBudget.bankBalance) - expenseTotal(tempMonthlyBudget.weeklyExpenses.wants) - expenseTotal(tempMonthlyBudget.weeklyExpenses.needs) - (expenseTotal(tempMonthlyBudget.expenses.wants)/4) - (expenseTotal(tempMonthlyBudget.expenses.needs)/4)
    tempMonthlyBudget.weeklyExpenses.needs = []
    tempMonthlyBudget.weeklyExpenses.wants = []
    alert('Your expenses have cleared and the remaining revenue has been pushed to your buckets!')
    return tempMonthlyBudget
}

export default function WeeklyProgress({setMenuVisibility, menuVisibility, setCurrentPage, currentPage, logo, monthlyBudget, setMonthlyBudget, styles, popupSwitch, setPopupSwitch}){
    const [popupType,setPopupType] = useState('change percents')
    const [expenseType,setExpenseType] = useState('needs')

    const needsBudget = (((monthlyBudget.monthlyRevenue*monthlyBudget.percentageNeeds/100)-expenseTotal(monthlyBudget.expenses.needs))/4).toFixed(2)
    const needsExpenses = (expenseTotal(monthlyBudget.weeklyExpenses.needs)).toFixed(2)
    const wantsBudget = (((monthlyBudget.monthlyRevenue*monthlyBudget.percentageWants/100)-expenseTotal(monthlyBudget.expenses.wants))/4).toFixed(2)
    const wantsExpenses = (expenseTotal(monthlyBudget.weeklyExpenses.wants)).toFixed(2)


    return(
        <View>
            <View style = {{height:50, alignItems:'center', marginTop:'10%'}}>
                <Text style = {{fontSize:20}}>Mercurous</Text>
                <Text style = {{position:'absolute', left:5, fontSize:20}} onPress = {()=>setMenuVisibility(!menuVisibility)}>{'\u2630'}</Text>
            </View>
            <View style = {styles2.needsContainer}>
                <View>
                    <Text style = {styles2.header}>Needs</Text>
                    <Text style = {{position:'absolute', right:140, fontSize:20}} onPress = {()=>{setPopupSwitch(true); setExpenseType('needs')}}>{'\u2630'}</Text>
                </View>
                <View>
                    <Text style={styles2.label}>Total Budgeted:</Text>
                    <Text style = {styles2.amountIn}>${needsBudget}</Text>  
                </View>
                <View>
                    <Text style={styles2.label}>Expenses:</Text>
                    <Text style = {styles2.amountOut}>${needsExpenses}</Text>
                </View>
                <View>
                    <Text style={styles2.label}>Remaining:</Text>
                    <Text style = {styles2.amountIn}>${(needsBudget-needsExpenses).toFixed(2)}</Text>
                </View>
            </View>
            <View style = {styles2.wantsContainer}>
                <View>
                    <Text style={styles2.header}>Wants</Text>
                    <Text style = {{position:'absolute', right:140, fontSize:20}} onPress = {()=>{setPopupSwitch(true); setExpenseType('wants')}}>{'\u2630'}</Text>
                </View>
                <View>
                    <Text style = {styles2.label}>Total Budgeted:</Text>
                    <Text style = {styles2.amountIn}>${wantsBudget}</Text> 
                </View>
                <View >
                    <Text style={styles2.label}>Expenses:</Text>
                    <Text style = {styles2.amountOut}>${wantsExpenses}</Text>
                </View>
                <View>
                    <Text style={styles2.label}>Remaining:</Text>
                    <Text style = {styles2.amountIn}>${(wantsBudget-wantsExpenses).toFixed(2)}</Text>
                </View>                
            </View>
            <Text />
            <View style = {{elevation:1}}>
                <Button title = 'Start a new Week' onPress={()=>setMonthlyBudget(pushToBuckets(monthlyBudget, needsBudget, wantsBudget))}/>
            </View>
            <PopupMessage isVisibile={popupSwitch} monthlyBudget={monthlyBudget} page = 'weeklyProgress' type = {popupType} setPopupSwitch={setPopupSwitch} setMonthlyBudget={setMonthlyBudget} expenseType = {expenseType}/>
            <Menu visibility = {menuVisibility} setVisibility = {setMenuVisibility} setCurrentPage = {setCurrentPage} currentPage = {currentPage} logo={logo} styles={styles}/>
        </View>
    )
}

const styles2 = StyleSheet.create({
    needsContainer:{
        width:'100%',
        height:'40%',
        backgroundColor:'lightblue',
        justifyContent:"space-between",
        paddingTop:30,
        paddingBottom:50,
        borderWidth:1,
        borderColor:'black',
        borderStyle:'solid'
    },
    wantsContainer:{
        width:'100%',
        height:'40%',
        backgroundColor:'lightgreen',
        justifyContent:"space-between",
        paddingTop:30,
        paddingBottom:50,
        borderWidth:1,
        borderColor:'black',
        borderStyle:'solid'
    },
    amountIn:{
        position:'absolute',
        right:90,
        fontSize:18
    },
    amountOut:{
        position:'absolute',
        right:5,
        fontSize:18
    },
    label:{
        fontSize:18,
        left:5
    },
    header:{
        fontWeight:'bold',
        fontSize:20,
        textAlign:'center'
    }
})