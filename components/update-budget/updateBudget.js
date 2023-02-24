import React from 'react';
import { Text, View, TextInput, Button} from 'react-native';
import Menu from '../menu/menu'
import AsyncStorage from '@react-native-async-storage/async-storage'


export default function UpdateBudget({menuVisibility, setMenuVisibility, setCurrentPage, currentPage, logo, monthlyBudget, setMonthlyBudget, monthlyRevenue, setMonthlyRevenue, yearlyRevenue, setYearlyRevenue, styles}){

   
    async function saveToBrowser (){
        await AsyncStorage.setItem('monthlyBudget',JSON.stringify(monthlyBudget))
        alert('Changes Saved')
      }
    

    

    return (
        <View>
            <View style = {{height:50, alignItems:'center', marginTop:'10%'}}>
                <Text style = {{fontSize:20}}>Mercurous</Text>
                <Text style = {{position:'absolute', left:5, fontSize:20}} onPress = {()=>setMenuVisibility(!menuVisibility)}>{'\u2630'}</Text>
            </View>
            <Text style = {{textAlign:'center', fontSize:30, marginTop:10}}>Update Monthly Revenue</Text>
            <View>
                <Text style = {{textAlign:'center', fontSize:30, position:'absolute', left:100}}>$</Text>
                <TextInput style = {{textAlign:'center', fontSize:30}} placeholder='Amount' keyboardType='number-pad' onChangeText = {text=>{setYearlyRevenue(parseInt(text)*12);setMonthlyRevenue(parseInt(text))}}>{monthlyRevenue}</TextInput>
            </View>
            <Text style = {{textAlign:'center', fontSize:30, marginTop:40}}>Update Yearly Revenue</Text>
            <View>
                <Text style = {{textAlign:'center', fontSize:30, position:'absolute', left:100}}>$</Text>
                <TextInput style = {{textAlign:'center', fontSize:30}} placeholder='Amount' keyboardType='number-pad'  onChangeText = {text=>{setYearlyRevenue(parseInt(text));setMonthlyRevenue((parseInt(text)/12).toFixed(2))}} >{yearlyRevenue}</TextInput>
            </View>
            <Text style = {{textAlign:'center', fontSize:30, marginTop:40}}>Estimate Average</Text>
            <Text style = {{textAlign:'center', fontSize:15}}>Seperate Monthly Amounts by Using a Space</Text>
            <TextInput keyboardType='default' style = {{textAlign:'center', fontSize:30, borderWidth:1, height:70}}  onChangeText = {text=>{
                                                                                                                var modifiedText = text.split(' ')
                                                                                                                var total = 0
                                                                                                                modifiedText.map(number=>{
                                                                                                                    total += parseInt(number)
                                                                                                                })
                                                                                                                var mrev = total/modifiedText.length 
                                                                                                                setMonthlyRevenue(mrev.toFixed(2))
                                                                                                                setYearlyRevenue((mrev*12).toFixed(2))
                                                                                                            }} />
            <Text />
            <Text />
            <Text/>
            <View style = {{elevation:1}}>
                <Button disabled = {parseInt(monthlyRevenue)?false:true} title = 'Save Changes' onPress = {()=>{setMonthlyBudget({
                                                                            monthlyRevenue:monthlyRevenue,
                                                                            percentageNeeds:monthlyBudget.percentageNeeds,
                                                                            percentageWants:monthlyBudget.percentageWants,
                                                                            percentageSavings: monthlyBudget.percentageSavings,
                                                                            expenses:monthlyBudget.expenses,
                                                                            weeklyExpenses:monthlyBudget.weeklyExpenses,
                                                                            buckets:monthlyBudget.buckets,
                                                                            residualAllocations:monthlyBudget.residualAllocations, 
                                                                            paychecks: monthlyBudget.paychecks, 
                                                                            bankBalance:monthlyBudget.bankBalance
                                                                            }
                );saveToBrowser()}}/>
            </View>
            
            <Menu visibility = {menuVisibility} setVisibility = {setMenuVisibility} setCurrentPage = {setCurrentPage} currentPage = {currentPage} logo={logo} styles={styles}/>
        </View>
    )
}