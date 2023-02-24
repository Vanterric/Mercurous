import { StatusBar } from 'expo-status-bar';
import React, {useEffect, useState} from 'react';
import { StyleSheet, Text, View, Dimensions, Button } from 'react-native';

export default function Tutorial({setCurrentPage, page, setPage}){
    if (page === 'start'){
        return(
                <View style = {{justifyContent:'center', height:'95%'}}>
                    <Text style={{fontSize:30, textAlign:'center', margin:10}}>Welcome to the Mercurous Tutorial!</Text>
                    <Text/>
                    <Text/>
                    <Button title = 'Click here to begin' onPress = {()=>setPage('monthly budget start')} />
                    <Text/>
                    <Text/>
                    <Button title = 'Click here to Cancel' color='red' onPress={()=>setCurrentPage('Monthly Budget')}/>
                </View>
        )
    }
    else if (page === 'monthly budget start'){
        return(
            <View>
            <View style = {{height:50, alignItems:'center', marginTop:'10%'}}>
                <Text style = {{fontSize:20}}>This is the Monthly Budget page.</Text>
            </View>
            <View style = {{position:'absolute', backgroundColor:'lightblue', top:100, elevation:1, height:180, width:180, left:20}}>
                <Text style = {{fontSize:20, textAlign:'center', fontWeight:'bold', marginTop:5}}>Average Monthly Revenue</Text>
                <Text style = {{textAlign:'center', fontSize:30, margin:20}}>$1000</Text>
            </View>
            <View style = {{position:'absolute', backgroundColor:'lightskyblue', top:100, elevation:1, height:180, width:180, right:20}}>
                <Text style = {{fontSize:20, textAlign:'center', fontWeight:'bold', marginTop:5}}>Allocation Percentages</Text>
                <View>
                    <Text style = {{fontSize:20, marginLeft:10, marginBottom:10}}>Needs:</Text>
                    <Text style = {{position:'absolute', fontSize:20, right:30, textDecorationLine:'underline'}}>50</Text>
                    <Text style ={{position:'absolute', fontSize:20, right:12}}>%</Text>
                </View>
                <View>
                    <Text style = {{fontSize:20, marginLeft:10, marginBottom:10}}>Wants:</Text>
                    <Text  style = {{position:'absolute', fontSize:20, right:30, textDecorationLine:'underline'}}>30</Text>
                    <Text style ={{position:'absolute', fontSize:20, right:12}}>%</Text>
                </View>
                <View>
                    <Text style = {{fontSize:20, marginLeft:10, marginBottom:10}}>Savings:</Text>
                    <Text  style = {{position:'absolute', fontSize:20, right:30, textDecorationLine:'underline'}}>20</Text>
                    <Text style ={{position:'absolute', fontSize:20, right:12}}>%</Text>
                </View>
            </View>
            <View style = {{position:'absolute', backgroundColor:'chartreuse', top:295, elevation:1, height:180, width:180, left:20}}>
                <Text style = {{fontSize:20, textAlign:'center', fontWeight:'bold', marginTop:5}}>Monthly Fixed Expenses</Text>
                <View style = {{marginBottom:10, marginTop:10}}>
                    <Text style = {{fontSize:20, marginLeft:10, marginBottom:10}}>Needs:     $100</Text>
                    
                </View>
                <View>
                    <Text style = {{fontSize:20, marginLeft:10, marginBottom:10}}>Wants:     $100</Text>
                    
                </View>
            </View>
            <View style = {{position:'absolute', backgroundColor:'darkseagreen', top:295, elevation:1, height:180, width:180, right:20}}>
                <Text  style = {{fontSize:20, textAlign:'center', fontWeight:'bold', marginTop:5}}>Savings per Month</Text>
                <Text style = {{textAlign:'center', fontSize:30, margin:20}}>$200</Text>
            </View>
            <View  style = {{position:'absolute', backgroundColor:'red', top:490, elevation:1, height:180, width:180, right:20}} >
                    <Text style={{fontSize:30, textAlign:'center',fontWeight:'bold', top:'25%'}}>Add New Paycheck</Text>
            </View>
            <View style = {{position:'absolute', backgroundColor:'indianred', top:490, elevation:1, height:180, width:180, left:20}}>
                <Text  style = {{fontSize:20, textAlign:'center', fontWeight:'bold', marginTop:5}}>Bank Balance</Text>
                <Text style = {{textAlign:'center'}}>*Estimate</Text>
                <View>
                    <Text style={{fontSize:30, position:'absolute', bottom:0, left:5}}>$</Text>
                    <Text style = {{textAlign:'center', fontSize:30, marginTop:20, textDecorationLine:'underline'}} >4000</Text>
                </View>
            </View>
            <View style={{position:'absolute', bottom:-650, width:'100%'}}>
                <Button title='-->   Continue   -->' onPress={()=>setPage('monthly budget 2')}/>
            </View>
        </View>
        )
    }
    else if (page === 'monthly budget 2'){
        return(
            <View>
            <View style = {{height:50, alignItems:'center', marginTop:'10%'}}>
                <Text style = {{fontSize:20}}>This is your average monthly revenue.</Text>
            </View>
            <Text style={{position:'absolute', fontSize:50, color:'black', top:165, elevation:5}}>&#10146;</Text>
            <View style = {{position:'absolute', backgroundColor:'lightblue', top:100, elevation:1, height:180, width:180, left:20}}>
                <Text style = {{fontSize:20, textAlign:'center', fontWeight:'bold', marginTop:5}}>Average Monthly Revenue</Text>
                <Text style = {{textAlign:'center', fontSize:30, margin:20}}>$1000</Text>
            </View>
            <View style = {{position:'absolute', backgroundColor:'lightskyblue', top:100, elevation:1, height:180, width:180, right:20}}>
                <Text style = {{fontSize:20, textAlign:'center', fontWeight:'bold', marginTop:5}}>Allocation Percentages</Text>
                <View>
                    <Text style = {{fontSize:20, marginLeft:10, marginBottom:10}}>Needs:</Text>
                    <Text style = {{position:'absolute', fontSize:20, right:30, textDecorationLine:'underline'}}>50</Text>
                    <Text style ={{position:'absolute', fontSize:20, right:12}}>%</Text>
                </View>
                <View>
                    <Text style = {{fontSize:20, marginLeft:10, marginBottom:10}}>Wants:</Text>
                    <Text  style = {{position:'absolute', fontSize:20, right:30, textDecorationLine:'underline'}}>30</Text>
                    <Text style ={{position:'absolute', fontSize:20, right:12}}>%</Text>
                </View>
                <View>
                    <Text style = {{fontSize:20, marginLeft:10, marginBottom:10}}>Savings:</Text>
                    <Text  style = {{position:'absolute', fontSize:20, right:30, textDecorationLine:'underline'}}>20</Text>
                    <Text style ={{position:'absolute', fontSize:20, right:12}}>%</Text>
                </View>
            </View>
            <View style = {{position:'absolute', backgroundColor:'chartreuse', top:295, elevation:1, height:180, width:180, left:20}}>
                <Text style = {{fontSize:20, textAlign:'center', fontWeight:'bold', marginTop:5}}>Monthly Fixed Expenses</Text>
                <View style = {{marginBottom:10, marginTop:10}}>
                    <Text style = {{fontSize:20, marginLeft:10, marginBottom:10}}>Needs:     $100</Text>
                    
                </View>
                <View>
                    <Text style = {{fontSize:20, marginLeft:10, marginBottom:10}}>Wants:     $100</Text>
                    
                </View>
            </View>
            <View style = {{position:'absolute', backgroundColor:'darkseagreen', top:295, elevation:1, height:180, width:180, right:20}}>
                <Text  style = {{fontSize:20, textAlign:'center', fontWeight:'bold', marginTop:5}}>Savings per Month</Text>
                <Text style = {{textAlign:'center', fontSize:30, margin:20}}>$200</Text>
            </View>
            <View  style = {{position:'absolute', backgroundColor:'red', top:490, elevation:1, height:180, width:180, right:20}} >
                    <Text style={{fontSize:30, textAlign:'center',fontWeight:'bold', top:'25%'}}>Add New Paycheck</Text>
            </View>
            <View style = {{position:'absolute', backgroundColor:'indianred', top:490, elevation:1, height:180, width:180, left:20}}>
                <Text  style = {{fontSize:20, textAlign:'center', fontWeight:'bold', marginTop:5}}>Bank Balance</Text>
                <Text style = {{textAlign:'center'}}>*Estimate</Text>
                <View>
                    <Text style={{fontSize:30, position:'absolute', bottom:0, left:5}}>$</Text>
                    <Text style = {{textAlign:'center', fontSize:30, marginTop:20, textDecorationLine:'underline'}} >4000</Text>
                </View>
            </View>
            <View style={{position:'absolute', bottom:-650, width:'100%'}}>
                <Button title='-->   Continue   -->' onPress={()=>setPage('monthly budget 3')}/>
            </View>
        </View>
        )
    }
    else if (page === 'monthly budget 3'){
        return(
            <View>
            <View style = {{height:50, alignItems:'center', marginTop:'5%'}}>
                <Text style = {{fontSize:20, textAlign:'center'}}>This amount is caculated based on the paychecks you input.</Text>
            </View>
            <Text style={{position:'absolute', fontSize:50, color:'black', top:165, elevation:5}}>&#10146;</Text>
            <View style = {{position:'absolute', backgroundColor:'lightblue', top:100, elevation:1, height:180, width:180, left:20}}>
                <Text style = {{fontSize:20, textAlign:'center', fontWeight:'bold', marginTop:5}}>Average Monthly Revenue</Text>
                <Text style = {{textAlign:'center', fontSize:30, margin:20}}>$1000</Text>
            </View>
            <View style = {{position:'absolute', backgroundColor:'lightskyblue', top:100, elevation:1, height:180, width:180, right:20}}>
                <Text style = {{fontSize:20, textAlign:'center', fontWeight:'bold', marginTop:5}}>Allocation Percentages</Text>
                <View>
                    <Text style = {{fontSize:20, marginLeft:10, marginBottom:10}}>Needs:</Text>
                    <Text style = {{position:'absolute', fontSize:20, right:30, textDecorationLine:'underline'}}>50</Text>
                    <Text style ={{position:'absolute', fontSize:20, right:12}}>%</Text>
                </View>
                <View>
                    <Text style = {{fontSize:20, marginLeft:10, marginBottom:10}}>Wants:</Text>
                    <Text  style = {{position:'absolute', fontSize:20, right:30, textDecorationLine:'underline'}}>30</Text>
                    <Text style ={{position:'absolute', fontSize:20, right:12}}>%</Text>
                </View>
                <View>
                    <Text style = {{fontSize:20, marginLeft:10, marginBottom:10}}>Savings:</Text>
                    <Text  style = {{position:'absolute', fontSize:20, right:30, textDecorationLine:'underline'}}>20</Text>
                    <Text style ={{position:'absolute', fontSize:20, right:12}}>%</Text>
                </View>
            </View>
            <View style = {{position:'absolute', backgroundColor:'chartreuse', top:295, elevation:1, height:180, width:180, left:20}}>
                <Text style = {{fontSize:20, textAlign:'center', fontWeight:'bold', marginTop:5}}>Monthly Fixed Expenses</Text>
                <View style = {{marginBottom:10, marginTop:10}}>
                    <Text style = {{fontSize:20, marginLeft:10, marginBottom:10}}>Needs:     $100</Text>
                    
                </View>
                <View>
                    <Text style = {{fontSize:20, marginLeft:10, marginBottom:10}}>Wants:     $100</Text>
                    
                </View>
            </View>
            <View style = {{position:'absolute', backgroundColor:'darkseagreen', top:295, elevation:1, height:180, width:180, right:20}}>
                <Text  style = {{fontSize:20, textAlign:'center', fontWeight:'bold', marginTop:5}}>Savings per Month</Text>
                <Text style = {{textAlign:'center', fontSize:30, margin:20}}>$200</Text>
            </View>
            <View  style = {{position:'absolute', backgroundColor:'red', top:490, elevation:1, height:180, width:180, right:20}} >
                    <Text style={{fontSize:30, textAlign:'center',fontWeight:'bold', top:'25%'}}>Add New Paycheck</Text>
            </View>
            <View style = {{position:'absolute', backgroundColor:'indianred', top:490, elevation:1, height:180, width:180, left:20}}>
                <Text  style = {{fontSize:20, textAlign:'center', fontWeight:'bold', marginTop:5}}>Bank Balance</Text>
                <Text style = {{textAlign:'center'}}>*Estimate</Text>
                <View>
                    <Text style={{fontSize:30, position:'absolute', bottom:0, left:5}}>$</Text>
                    <Text style = {{textAlign:'center', fontSize:30, marginTop:20, textDecorationLine:'underline'}} >4000</Text>
                </View>
            </View>
            <Text/>
            <View style={{position:'absolute', bottom:-650, width:'100%'}}>
                <Button title='-->   Continue   -->' onPress={()=>setPage('monthly budget 4')}/>
            </View>
        </View>
        )
    }
    else if (page === 'monthly budget 4'){
        return(
            <View>
            <View style = {{height:50, alignItems:'center', marginTop:'5%', marginRight:5, marginLeft:5}}>
                <Text style = {{fontSize:20, textAlign:'center'}}>Clicking here will allow you to add a new paycheck.</Text>
            </View>
            <Text style={{position:'absolute', fontSize:50, color:'black', top:540, left:170, elevation:5}}>&#10146;</Text>
            <View style = {{position:'absolute', backgroundColor:'lightblue', top:100, elevation:1, height:180, width:180, left:20}}>
                <Text style = {{fontSize:20, textAlign:'center', fontWeight:'bold', marginTop:5}}>Average Monthly Revenue</Text>
                <Text style = {{textAlign:'center', fontSize:30, margin:20}}>$1000</Text>
            </View>
            <View style = {{position:'absolute', backgroundColor:'lightskyblue', top:100, elevation:1, height:180, width:180, right:20}}>
                <Text style = {{fontSize:20, textAlign:'center', fontWeight:'bold', marginTop:5}}>Allocation Percentages</Text>
                <View>
                    <Text style = {{fontSize:20, marginLeft:10, marginBottom:10}}>Needs:</Text>
                    <Text style = {{position:'absolute', fontSize:20, right:30, textDecorationLine:'underline'}}>50</Text>
                    <Text style ={{position:'absolute', fontSize:20, right:12}}>%</Text>
                </View>
                <View>
                    <Text style = {{fontSize:20, marginLeft:10, marginBottom:10}}>Wants:</Text>
                    <Text  style = {{position:'absolute', fontSize:20, right:30, textDecorationLine:'underline'}}>30</Text>
                    <Text style ={{position:'absolute', fontSize:20, right:12}}>%</Text>
                </View>
                <View>
                    <Text style = {{fontSize:20, marginLeft:10, marginBottom:10}}>Savings:</Text>
                    <Text  style = {{position:'absolute', fontSize:20, right:30, textDecorationLine:'underline'}}>20</Text>
                    <Text style ={{position:'absolute', fontSize:20, right:12}}>%</Text>
                </View>
            </View>
            <View style = {{position:'absolute', backgroundColor:'chartreuse', top:295, elevation:1, height:180, width:180, left:20}}>
                <Text style = {{fontSize:20, textAlign:'center', fontWeight:'bold', marginTop:5}}>Monthly Fixed Expenses</Text>
                <View style = {{marginBottom:10, marginTop:10}}>
                    <Text style = {{fontSize:20, marginLeft:10, marginBottom:10}}>Needs:     $100</Text>
                    
                </View>
                <View>
                    <Text style = {{fontSize:20, marginLeft:10, marginBottom:10}}>Wants:     $100</Text>
                    
                </View>
            </View>
            <View style = {{position:'absolute', backgroundColor:'darkseagreen', top:295, elevation:1, height:180, width:180, right:20}}>
                <Text  style = {{fontSize:20, textAlign:'center', fontWeight:'bold', marginTop:5}}>Savings per Month</Text>
                <Text style = {{textAlign:'center', fontSize:30, margin:20}}>$200</Text>
            </View>
            <View  style = {{position:'absolute', backgroundColor:'red', top:490, elevation:1, height:180, width:180, right:20}} >
                    <Text style={{fontSize:30, textAlign:'center',fontWeight:'bold', top:'25%'}}>Add New Paycheck</Text>
            </View>
            <View style = {{position:'absolute', backgroundColor:'indianred', top:490, elevation:1, height:180, width:180, left:20}}>
                <Text  style = {{fontSize:20, textAlign:'center', fontWeight:'bold', marginTop:5}}>Bank Balance</Text>
                <Text style = {{textAlign:'center'}}>*Estimate</Text>
                <View>
                    <Text style={{fontSize:30, position:'absolute', bottom:0, left:5}}>$</Text>
                    <Text style = {{textAlign:'center', fontSize:30, marginTop:20, textDecorationLine:'underline'}} >4000</Text>
                </View>
            </View>
            <Text/>
            <View style={{position:'absolute', bottom:-650, width:'100%'}}>
                <Button title='-->   Continue   -->' onPress={()=>setPage('monthly budget 5')}/>
            </View>
        </View>
        )
    }
    else if (page === 'monthly budget 5'){
        return(
            <View>
            <View style = {{height:50, alignItems:'center', marginTop:'5%', marginRight:5, marginLeft:5}}>
                <Text style = {{fontSize:20, textAlign:'center'}}>Here you can find how your monthly budget is split up.</Text>
            </View>
            <Text style={{position:'absolute', fontSize:50, color:'black', top:120, left:170, elevation:5}}>&#10146;</Text>
            <View style = {{position:'absolute', backgroundColor:'lightblue', top:100, elevation:1, height:180, width:180, left:20}}>
                <Text style = {{fontSize:20, textAlign:'center', fontWeight:'bold', marginTop:5}}>Average Monthly Revenue</Text>
                <Text style = {{textAlign:'center', fontSize:30, margin:20}}>$1000</Text>
            </View>
            <View style = {{position:'absolute', backgroundColor:'lightskyblue', top:100, elevation:1, height:180, width:180, right:20}}>
                <Text style = {{fontSize:20, textAlign:'center', fontWeight:'bold', marginTop:5}}>Allocation Percentages</Text>
                <View>
                    <Text style = {{fontSize:20, marginLeft:10, marginBottom:10}}>Needs:</Text>
                    <Text style = {{position:'absolute', fontSize:20, right:30, textDecorationLine:'underline'}}>50</Text>
                    <Text style ={{position:'absolute', fontSize:20, right:12}}>%</Text>
                </View>
                <View>
                    <Text style = {{fontSize:20, marginLeft:10, marginBottom:10}}>Wants:</Text>
                    <Text  style = {{position:'absolute', fontSize:20, right:30, textDecorationLine:'underline'}}>30</Text>
                    <Text style ={{position:'absolute', fontSize:20, right:12}}>%</Text>
                </View>
                <View>
                    <Text style = {{fontSize:20, marginLeft:10, marginBottom:10}}>Savings:</Text>
                    <Text  style = {{position:'absolute', fontSize:20, right:30, textDecorationLine:'underline'}}>20</Text>
                    <Text style ={{position:'absolute', fontSize:20, right:12}}>%</Text>
                </View>
            </View>
            <View style = {{position:'absolute', backgroundColor:'chartreuse', top:295, elevation:1, height:180, width:180, left:20}}>
                <Text style = {{fontSize:20, textAlign:'center', fontWeight:'bold', marginTop:5}}>Monthly Fixed Expenses</Text>
                <View style = {{marginBottom:10, marginTop:10}}>
                    <Text style = {{fontSize:20, marginLeft:10, marginBottom:10}}>Needs:     $100</Text>
                    
                </View>
                <View>
                    <Text style = {{fontSize:20, marginLeft:10, marginBottom:10}}>Wants:     $100</Text>
                    
                </View>
            </View>
            <View style = {{position:'absolute', backgroundColor:'darkseagreen', top:295, elevation:1, height:180, width:180, right:20}}>
                <Text  style = {{fontSize:20, textAlign:'center', fontWeight:'bold', marginTop:5}}>Savings per Month</Text>
                <Text style = {{textAlign:'center', fontSize:30, margin:20}}>$200</Text>
            </View>
            <View  style = {{position:'absolute', backgroundColor:'red', top:490, elevation:1, height:180, width:180, right:20}} >
                    <Text style={{fontSize:30, textAlign:'center',fontWeight:'bold', top:'25%'}}>Add New Paycheck</Text>
            </View>
            <View style = {{position:'absolute', backgroundColor:'indianred', top:490, elevation:1, height:180, width:180, left:20}}>
                <Text  style = {{fontSize:20, textAlign:'center', fontWeight:'bold', marginTop:5}}>Bank Balance</Text>
                <Text style = {{textAlign:'center'}}>*Estimate</Text>
                <View>
                    <Text style={{fontSize:30, position:'absolute', bottom:0, left:5}}>$</Text>
                    <Text style = {{textAlign:'center', fontSize:30, marginTop:20, textDecorationLine:'underline'}} >4000</Text>
                </View>
            </View>
            <Text/>
            <View style={{position:'absolute', bottom:-650, width:'100%'}}>
                <Button title='-->   Continue   -->' onPress={()=>setPage('monthly budget 6')}/>
            </View>
        </View>
        )
    }
    else if (page === 'monthly budget 6'){
        return(
            <View>
            <View style = {{height:50, alignItems:'center', marginTop:'5%', marginRight:5, marginLeft:5}}>
                <Text style = {{fontSize:20, textAlign:'center'}}>Each of the underlined numbers is editable. Just type how much of your budget you'd like to allocate to each!</Text>
            </View>
            <Text style={{position:'absolute', fontSize:50, color:'black', top:120, left:170, elevation:5}}>&#10146;</Text>
            <View style = {{position:'absolute', backgroundColor:'lightblue', top:100, elevation:1, height:180, width:180, left:20}}>
                <Text style = {{fontSize:20, textAlign:'center', fontWeight:'bold', marginTop:5}}>Average Monthly Revenue</Text>
                <Text style = {{textAlign:'center', fontSize:30, margin:20}}>$1000</Text>
            </View>
            <View style = {{position:'absolute', backgroundColor:'lightskyblue', top:100, elevation:1, height:180, width:180, right:20}}>
                <Text style = {{fontSize:20, textAlign:'center', fontWeight:'bold', marginTop:5}}>Allocation Percentages</Text>
                <View>
                    <Text style = {{fontSize:20, marginLeft:10, marginBottom:10}}>Needs:</Text>
                    <Text style = {{position:'absolute', fontSize:20, right:30, textDecorationLine:'underline'}}>50</Text>
                    <Text style ={{position:'absolute', fontSize:20, right:12}}>%</Text>
                </View>
                <View>
                    <Text style = {{fontSize:20, marginLeft:10, marginBottom:10}}>Wants:</Text>
                    <Text  style = {{position:'absolute', fontSize:20, right:30, textDecorationLine:'underline'}}>30</Text>
                    <Text style ={{position:'absolute', fontSize:20, right:12}}>%</Text>
                </View>
                <View>
                    <Text style = {{fontSize:20, marginLeft:10, marginBottom:10}}>Savings:</Text>
                    <Text  style = {{position:'absolute', fontSize:20, right:30, textDecorationLine:'underline'}}>20</Text>
                    <Text style ={{position:'absolute', fontSize:20, right:12}}>%</Text>
                </View>
            </View>
            <View style = {{position:'absolute', backgroundColor:'chartreuse', top:295, elevation:1, height:180, width:180, left:20}}>
                <Text style = {{fontSize:20, textAlign:'center', fontWeight:'bold', marginTop:5}}>Monthly Fixed Expenses</Text>
                <View style = {{marginBottom:10, marginTop:10}}>
                    <Text style = {{fontSize:20, marginLeft:10, marginBottom:10}}>Needs:     $100</Text>
                    
                </View>
                <View>
                    <Text style = {{fontSize:20, marginLeft:10, marginBottom:10}}>Wants:     $100</Text>
                    
                </View>
            </View>
            <View style = {{position:'absolute', backgroundColor:'darkseagreen', top:295, elevation:1, height:180, width:180, right:20}}>
                <Text  style = {{fontSize:20, textAlign:'center', fontWeight:'bold', marginTop:5}}>Savings per Month</Text>
                <Text style = {{textAlign:'center', fontSize:30, margin:20}}>$200</Text>
            </View>
            <View  style = {{position:'absolute', backgroundColor:'red', top:490, elevation:1, height:180, width:180, right:20}} >
                    <Text style={{fontSize:30, textAlign:'center',fontWeight:'bold', top:'25%'}}>Add New Paycheck</Text>
            </View>
            <View style = {{position:'absolute', backgroundColor:'indianred', top:490, elevation:1, height:180, width:180, left:20}}>
                <Text  style = {{fontSize:20, textAlign:'center', fontWeight:'bold', marginTop:5}}>Bank Balance</Text>
                <Text style = {{textAlign:'center'}}>*Estimate</Text>
                <View>
                    <Text style={{fontSize:30, position:'absolute', bottom:0, left:5}}>$</Text>
                    <Text style = {{textAlign:'center', fontSize:30, marginTop:20, textDecorationLine:'underline'}} >4000</Text>
                </View>
            </View>
            <Text/>
            <View style={{position:'absolute', bottom:-650, width:'100%'}}>
                <Button title='-->   Continue   -->' onPress={()=>setPage('monthly budget 7')}/>
            </View>
        </View>
        )
    }
    else if (page === 'monthly budget 7'){
        return(
            <View>
            <View style = {{height:50, alignItems:'center', marginTop:'5%', marginRight:5, marginLeft:5}}>
                <Text style = {{fontSize:20, textAlign:'center'}}>This is the dollar amount of your monthly revenue that goes to savings</Text>
            </View>
            <Text style={{position:'absolute', fontSize:50, color:'black', top:360, left:200, elevation:5}}>&#10146;</Text>
            <View style = {{position:'absolute', backgroundColor:'lightblue', top:100, elevation:1, height:180, width:180, left:20}}>
                <Text style = {{fontSize:20, textAlign:'center', fontWeight:'bold', marginTop:5}}>Average Monthly Revenue</Text>
                <Text style = {{textAlign:'center', fontSize:30, margin:20}}>$1000</Text>
            </View>
            <View style = {{position:'absolute', backgroundColor:'lightskyblue', top:100, elevation:1, height:180, width:180, right:20}}>
                <Text style = {{fontSize:20, textAlign:'center', fontWeight:'bold', marginTop:5}}>Allocation Percentages</Text>
                <View>
                    <Text style = {{fontSize:20, marginLeft:10, marginBottom:10}}>Needs:</Text>
                    <Text style = {{position:'absolute', fontSize:20, right:30, textDecorationLine:'underline'}}>50</Text>
                    <Text style ={{position:'absolute', fontSize:20, right:12}}>%</Text>
                </View>
                <View>
                    <Text style = {{fontSize:20, marginLeft:10, marginBottom:10}}>Wants:</Text>
                    <Text  style = {{position:'absolute', fontSize:20, right:30, textDecorationLine:'underline'}}>30</Text>
                    <Text style ={{position:'absolute', fontSize:20, right:12}}>%</Text>
                </View>
                <View>
                    <Text style = {{fontSize:20, marginLeft:10, marginBottom:10}}>Savings:</Text>
                    <Text  style = {{position:'absolute', fontSize:20, right:30, textDecorationLine:'underline'}}>20</Text>
                    <Text style ={{position:'absolute', fontSize:20, right:12}}>%</Text>
                </View>
            </View>
            <View style = {{position:'absolute', backgroundColor:'chartreuse', top:295, elevation:1, height:180, width:180, left:20}}>
                <Text style = {{fontSize:20, textAlign:'center', fontWeight:'bold', marginTop:5}}>Monthly Fixed Expenses</Text>
                <View style = {{marginBottom:10, marginTop:10}}>
                    <Text style = {{fontSize:20, marginLeft:10, marginBottom:10}}>Needs:     $100</Text>
                    
                </View>
                <View>
                    <Text style = {{fontSize:20, marginLeft:10, marginBottom:10}}>Wants:     $100</Text>
                    
                </View>
            </View>
            <View style = {{position:'absolute', backgroundColor:'darkseagreen', top:295, elevation:1, height:180, width:180, right:20}}>
                <Text  style = {{fontSize:20, textAlign:'center', fontWeight:'bold', marginTop:5}}>Savings per Month</Text>
                <Text style = {{textAlign:'center', fontSize:30, margin:20}}>$200</Text>
            </View>
            <View  style = {{position:'absolute', backgroundColor:'red', top:490, elevation:1, height:180, width:180, right:20}} >
                    <Text style={{fontSize:30, textAlign:'center',fontWeight:'bold', top:'25%'}}>Add New Paycheck</Text>
            </View>
            <View style = {{position:'absolute', backgroundColor:'indianred', top:490, elevation:1, height:180, width:180, left:20}}>
                <Text  style = {{fontSize:20, textAlign:'center', fontWeight:'bold', marginTop:5}}>Bank Balance</Text>
                <Text style = {{textAlign:'center'}}>*Estimate</Text>
                <View>
                    <Text style={{fontSize:30, position:'absolute', bottom:0, left:5}}>$</Text>
                    <Text style = {{textAlign:'center', fontSize:30, marginTop:20, textDecorationLine:'underline'}} >4000</Text>
                </View>
            </View>
            <Text/>
            <View style={{position:'absolute', bottom:-650, width:'100%'}}>
                <Button title='-->   Continue   -->' onPress={()=>setPage('monthly budget 8')}/>
            </View>
        </View>
        )
    }
    else if (page === 'monthly budget 8'){
        return(
            <View>
            <View style = {{height:50, alignItems:'center', marginTop:'5%', marginRight:5, marginLeft:5}}>
                <Text style = {{fontSize:20, textAlign:'center'}}>This is an overview of your monthly fixed expenses.</Text>
            </View>
            <Text style={{position:'absolute', fontSize:50, color:'black', top:360, left:0, elevation:5}}>&#10146;</Text>
            <View style = {{position:'absolute', backgroundColor:'lightblue', top:100, elevation:1, height:180, width:180, left:20}}>
                <Text style = {{fontSize:20, textAlign:'center', fontWeight:'bold', marginTop:5}}>Average Monthly Revenue</Text>
                <Text style = {{textAlign:'center', fontSize:30, margin:20}}>$1000</Text>
            </View>
            <View style = {{position:'absolute', backgroundColor:'lightskyblue', top:100, elevation:1, height:180, width:180, right:20}}>
                <Text style = {{fontSize:20, textAlign:'center', fontWeight:'bold', marginTop:5}}>Allocation Percentages</Text>
                <View>
                    <Text style = {{fontSize:20, marginLeft:10, marginBottom:10}}>Needs:</Text>
                    <Text style = {{position:'absolute', fontSize:20, right:30, textDecorationLine:'underline'}}>50</Text>
                    <Text style ={{position:'absolute', fontSize:20, right:12}}>%</Text>
                </View>
                <View>
                    <Text style = {{fontSize:20, marginLeft:10, marginBottom:10}}>Wants:</Text>
                    <Text  style = {{position:'absolute', fontSize:20, right:30, textDecorationLine:'underline'}}>30</Text>
                    <Text style ={{position:'absolute', fontSize:20, right:12}}>%</Text>
                </View>
                <View>
                    <Text style = {{fontSize:20, marginLeft:10, marginBottom:10}}>Savings:</Text>
                    <Text  style = {{position:'absolute', fontSize:20, right:30, textDecorationLine:'underline'}}>20</Text>
                    <Text style ={{position:'absolute', fontSize:20, right:12}}>%</Text>
                </View>
            </View>
            <View style = {{position:'absolute', backgroundColor:'chartreuse', top:295, elevation:1, height:180, width:180, left:20}}>
                <Text style = {{fontSize:20, textAlign:'center', fontWeight:'bold', marginTop:5}}>Monthly Fixed Expenses</Text>
                <View style = {{marginBottom:10, marginTop:10}}>
                    <Text style = {{fontSize:20, marginLeft:10, marginBottom:10}}>Needs:     $100</Text>
                    
                </View>
                <View>
                    <Text style = {{fontSize:20, marginLeft:10, marginBottom:10}}>Wants:     $100</Text>
                    
                </View>
            </View>
            <View style = {{position:'absolute', backgroundColor:'darkseagreen', top:295, elevation:1, height:180, width:180, right:20}}>
                <Text  style = {{fontSize:20, textAlign:'center', fontWeight:'bold', marginTop:5}}>Savings per Month</Text>
                <Text style = {{textAlign:'center', fontSize:30, margin:20}}>$200</Text>
            </View>
            <View  style = {{position:'absolute', backgroundColor:'red', top:490, elevation:1, height:180, width:180, right:20}} >
                    <Text style={{fontSize:30, textAlign:'center',fontWeight:'bold', top:'25%'}}>Add New Paycheck</Text>
            </View>
            <View style = {{position:'absolute', backgroundColor:'indianred', top:490, elevation:1, height:180, width:180, left:20}}>
                <Text  style = {{fontSize:20, textAlign:'center', fontWeight:'bold', marginTop:5}}>Bank Balance</Text>
                <Text style = {{textAlign:'center'}}>*Estimate</Text>
                <View>
                    <Text style={{fontSize:30, position:'absolute', bottom:0, left:5}}>$</Text>
                    <Text style = {{textAlign:'center', fontSize:30, marginTop:20, textDecorationLine:'underline'}} >4000</Text>
                </View>
            </View>
            <Text/>
            <View style={{position:'absolute', bottom:-650, width:'100%'}}>
                <Button title='-->   Continue   -->' onPress={()=>setPage('monthly budget 9')}/>
            </View>
        </View>
        )
    }
    else if (page === 'monthly budget 9'){
        return(
            <View>
            <View style = {{height:50, alignItems:'center', marginTop:'5%', marginRight:5, marginLeft:5}}>
                <Text style = {{fontSize:20, textAlign:'center'}}>This is an estimate of your bank balance based on your activity within Mercurous.</Text>
            </View>
            <Text style={{position:'absolute', fontSize:50, color:'black', top:500, left:0, elevation:5}}>&#10146;</Text>
            <View style = {{position:'absolute', backgroundColor:'lightblue', top:100, elevation:1, height:180, width:180, left:20}}>
                <Text style = {{fontSize:20, textAlign:'center', fontWeight:'bold', marginTop:5}}>Average Monthly Revenue</Text>
                <Text style = {{textAlign:'center', fontSize:30, margin:20}}>$1000</Text>
            </View>
            <View style = {{position:'absolute', backgroundColor:'lightskyblue', top:100, elevation:1, height:180, width:180, right:20}}>
                <Text style = {{fontSize:20, textAlign:'center', fontWeight:'bold', marginTop:5}}>Allocation Percentages</Text>
                <View>
                    <Text style = {{fontSize:20, marginLeft:10, marginBottom:10}}>Needs:</Text>
                    <Text style = {{position:'absolute', fontSize:20, right:30, textDecorationLine:'underline'}}>50</Text>
                    <Text style ={{position:'absolute', fontSize:20, right:12}}>%</Text>
                </View>
                <View>
                    <Text style = {{fontSize:20, marginLeft:10, marginBottom:10}}>Wants:</Text>
                    <Text  style = {{position:'absolute', fontSize:20, right:30, textDecorationLine:'underline'}}>30</Text>
                    <Text style ={{position:'absolute', fontSize:20, right:12}}>%</Text>
                </View>
                <View>
                    <Text style = {{fontSize:20, marginLeft:10, marginBottom:10}}>Savings:</Text>
                    <Text  style = {{position:'absolute', fontSize:20, right:30, textDecorationLine:'underline'}}>20</Text>
                    <Text style ={{position:'absolute', fontSize:20, right:12}}>%</Text>
                </View>
            </View>
            <View style = {{position:'absolute', backgroundColor:'chartreuse', top:295, elevation:1, height:180, width:180, left:20}}>
                <Text style = {{fontSize:20, textAlign:'center', fontWeight:'bold', marginTop:5}}>Monthly Fixed Expenses</Text>
                <View style = {{marginBottom:10, marginTop:10}}>
                    <Text style = {{fontSize:20, marginLeft:10, marginBottom:10}}>Needs:     $100</Text>
                    
                </View>
                <View>
                    <Text style = {{fontSize:20, marginLeft:10, marginBottom:10}}>Wants:     $100</Text>
                    
                </View>
            </View>
            <View style = {{position:'absolute', backgroundColor:'darkseagreen', top:295, elevation:1, height:180, width:180, right:20}}>
                <Text  style = {{fontSize:20, textAlign:'center', fontWeight:'bold', marginTop:5}}>Savings per Month</Text>
                <Text style = {{textAlign:'center', fontSize:30, margin:20}}>$200</Text>
            </View>
            <View  style = {{position:'absolute', backgroundColor:'red', top:490, elevation:1, height:180, width:180, right:20}} >
                    <Text style={{fontSize:30, textAlign:'center',fontWeight:'bold', top:'25%'}}>Add New Paycheck</Text>
            </View>
            <View style = {{position:'absolute', backgroundColor:'indianred', top:490, elevation:1, height:180, width:180, left:20}}>
                <Text  style = {{fontSize:20, textAlign:'center', fontWeight:'bold', marginTop:5}}>Bank Balance</Text>
                <Text style = {{textAlign:'center'}}>*Estimate</Text>
                <View>
                    <Text style={{fontSize:30, position:'absolute', bottom:0, left:5}}>$</Text>
                    <Text style = {{textAlign:'center', fontSize:30, marginTop:20, textDecorationLine:'underline'}} >4000</Text>
                </View>
            </View>
            <Text/>
            <View style={{position:'absolute', bottom:-650, width:'100%'}}>
                <Button title='-->   Continue   -->' onPress={()=>setPage('monthly budget 10')}/>
            </View>
        </View>
        )
    }
    else if (page === 'monthly budget 10'){
        return(
            <View>
            <View style = {{height:50, alignItems:'center', marginTop:'5%', marginRight:5, marginLeft:5}}>
                <Text style = {{fontSize:20, textAlign:'center'}}>You can click on the underlined amount to manually set your bank balance.</Text>
            </View>
            <Text style={{position:'absolute', fontSize:50, color:'black', top:500, left:0, elevation:5}}>&#10146;</Text>
            <View style = {{position:'absolute', backgroundColor:'lightblue', top:100, elevation:1, height:180, width:180, left:20}}>
                <Text style = {{fontSize:20, textAlign:'center', fontWeight:'bold', marginTop:5}}>Average Monthly Revenue</Text>
                <Text style = {{textAlign:'center', fontSize:30, margin:20}}>$1000</Text>
            </View>
            <View style = {{position:'absolute', backgroundColor:'lightskyblue', top:100, elevation:1, height:180, width:180, right:20}}>
                <Text style = {{fontSize:20, textAlign:'center', fontWeight:'bold', marginTop:5}}>Allocation Percentages</Text>
                <View>
                    <Text style = {{fontSize:20, marginLeft:10, marginBottom:10}}>Needs:</Text>
                    <Text style = {{position:'absolute', fontSize:20, right:30, textDecorationLine:'underline'}}>50</Text>
                    <Text style ={{position:'absolute', fontSize:20, right:12}}>%</Text>
                </View>
                <View>
                    <Text style = {{fontSize:20, marginLeft:10, marginBottom:10}}>Wants:</Text>
                    <Text  style = {{position:'absolute', fontSize:20, right:30, textDecorationLine:'underline'}}>30</Text>
                    <Text style ={{position:'absolute', fontSize:20, right:12}}>%</Text>
                </View>
                <View>
                    <Text style = {{fontSize:20, marginLeft:10, marginBottom:10}}>Savings:</Text>
                    <Text  style = {{position:'absolute', fontSize:20, right:30, textDecorationLine:'underline'}}>20</Text>
                    <Text style ={{position:'absolute', fontSize:20, right:12}}>%</Text>
                </View>
            </View>
            <View style = {{position:'absolute', backgroundColor:'chartreuse', top:295, elevation:1, height:180, width:180, left:20}}>
                <Text style = {{fontSize:20, textAlign:'center', fontWeight:'bold', marginTop:5}}>Monthly Fixed Expenses</Text>
                <View style = {{marginBottom:10, marginTop:10}}>
                    <Text style = {{fontSize:20, marginLeft:10, marginBottom:10}}>Needs:     $100</Text>
                    
                </View>
                <View>
                    <Text style = {{fontSize:20, marginLeft:10, marginBottom:10}}>Wants:     $100</Text>
                    
                </View>
            </View>
            <View style = {{position:'absolute', backgroundColor:'darkseagreen', top:295, elevation:1, height:180, width:180, right:20}}>
                <Text  style = {{fontSize:20, textAlign:'center', fontWeight:'bold', marginTop:5}}>Savings per Month</Text>
                <Text style = {{textAlign:'center', fontSize:30, margin:20}}>$200</Text>
            </View>
            <View  style = {{position:'absolute', backgroundColor:'red', top:490, elevation:1, height:180, width:180, right:20}} >
                    <Text style={{fontSize:30, textAlign:'center',fontWeight:'bold', top:'25%'}}>Add New Paycheck</Text>
            </View>
            <View style = {{position:'absolute', backgroundColor:'indianred', top:490, elevation:1, height:180, width:180, left:20}}>
                <Text  style = {{fontSize:20, textAlign:'center', fontWeight:'bold', marginTop:5}}>Bank Balance</Text>
                <Text style = {{textAlign:'center'}}>*Estimate</Text>
                <View>
                    <Text style={{fontSize:30, position:'absolute', bottom:0, left:5}}>$</Text>
                    <Text style = {{textAlign:'center', fontSize:30, marginTop:20, textDecorationLine:'underline'}} >4000</Text>
                </View>
            </View>
            <Text/>
            <View style={{position:'absolute', bottom:-650, width:'100%'}}>
                <Button title='-->   Continue   -->' onPress={()=>setPage('Buckets')}/>
            </View>
        </View>
        )
    }
    else if(page === 'Buckets'){
        return(
            <View style={{height:'100%'}}>
                <View>
                    <View style = {{height:50, alignItems:'center', marginTop:'10%', zIndex:1}}>
                        <Text style = {{fontSize:20}}>This is the Buckets Page!</Text>
                
                    </View>
                    <View key='total-cash-in-buckets' style = {{width:'100%', backgroundColor:'firebrick', borderStyle:'solid', borderColor:'black', borderWidth:1, height:100, justifyContent:'center'}}>
                        <Text style = {{fontSize:20, marginLeft:10, fontWeight:'bold'}}>Total Cash in Buckets</Text>
                        <Text style = {{position:'absolute', right:0, fontSize:20, marginRight:10, fontWeight:'bold'}}>$400</Text>
                    </View>
                    <View key='total-cash-left-this-week' style = {{width:'100%', backgroundColor:'indianred', borderStyle:'solid', borderColor:'black', borderWidth:1, height:100, justifyContent:'center'}}>
                        <Text style = {{fontSize:20, marginLeft:10, fontWeight:'bold'}}>Total Cash Left This Week</Text>
                        <Text style = {{position:'absolute', right:0, fontSize:20, marginRight:10, fontWeight:'bold'}}>$103</Text>
                    </View>
                    <View key='savings' style = {{width:'100%', backgroundColor:'yellow', borderStyle:'solid', borderColor:'black', borderWidth:1, height:100, justifyContent:'center'}}>
                        <Text style = {{fontSize:20, marginLeft:40, zIndex:2}}>Savings</Text>
                        <Text style = {{position:'absolute', right:0, fontSize:20, marginRight:10, fontWeight:'bold'}}>$400</Text>
                        <View style = {{position:'absolute', marginLeft:5, backgroundColor:'red', borderRadius:20, height:30, width:30, marginTop:10, elevation:3}} onPress = {()=>{setCurrentBucket(bucket); setPopupType('are you sure'); setPopupSwitch(true)}} >
                            <Text style = {{fontSize:25, position:'absolute', alignSelf:'center', transform:[{translateY:-7}]}} >{'x'}</Text>
                        </View>
                    </View>
                    </View>
                <View  style={{height:60, width:60, borderRadius:30, backgroundColor:'lightblue', justifyContent:'space-between', elevation:3, position:'absolute', bottom:100, right:30 }}>
                        <Text style={{fontSize:38, textAlign:'center'}}>{'\u2795'}</Text>
                </View>
                <View style={{position:'absolute', bottom:30, width:'100%'}}>
                    <Button title='-->   Continue   -->' onPress={()=>setPage('Buckets 1')}/>
                </View>
                </View> 
        )
    }
    else if(page === 'Buckets 1'){
        return(
            <View style={{height:'100%'}}>
                <View>
                    <View style = {{height:50, alignItems:'center', marginTop:'5%', zIndex:1, marginRight:5, marginLeft:5}}>
                        <Text style = {{fontSize:20, textAlign:'center'}}>Here you can create and edit buckets to help you organize your finances.</Text>
                
                    </View>
                    <Text/>
                    <View key='total-cash-in-buckets' style = {{width:'100%', backgroundColor:'firebrick', borderStyle:'solid', borderColor:'black', borderWidth:1, height:100, justifyContent:'center'}}>
                        <Text style = {{fontSize:20, marginLeft:10, fontWeight:'bold'}}>Total Cash in Buckets</Text>
                        <Text style = {{position:'absolute', right:0, fontSize:20, marginRight:10, fontWeight:'bold'}}>$400</Text>
                    </View>
                    <View key='total-cash-left-this-week' style = {{width:'100%', backgroundColor:'indianred', borderStyle:'solid', borderColor:'black', borderWidth:1, height:100, justifyContent:'center'}}>
                        <Text style = {{fontSize:20, marginLeft:10, fontWeight:'bold'}}>Total Cash Left This Week</Text>
                        <Text style = {{position:'absolute', right:0, fontSize:20, marginRight:10, fontWeight:'bold'}}>$103</Text>
                    </View>
                    <View key='savings' style = {{width:'100%', backgroundColor:'yellow', borderStyle:'solid', borderColor:'black', borderWidth:1, height:100, justifyContent:'center'}}>
                        <Text style = {{fontSize:20, marginLeft:40, zIndex:2}}>Savings</Text>
                        <Text style = {{position:'absolute', right:0, fontSize:20, marginRight:10, fontWeight:'bold'}}>$400</Text>
                        <View style = {{position:'absolute', marginLeft:5, backgroundColor:'red', borderRadius:20, height:30, width:30, marginTop:10, elevation:3}} onPress = {()=>{setCurrentBucket(bucket); setPopupType('are you sure'); setPopupSwitch(true)}} >
                            <Text style = {{fontSize:25, position:'absolute', alignSelf:'center', transform:[{translateY:-7}]}} >{'x'}</Text>
                        </View>
                    </View>
                    </View>
                <View  style={{height:60, width:60, borderRadius:30, backgroundColor:'lightblue', justifyContent:'space-between', elevation:3, position:'absolute', bottom:100, right:30 }}>
                        <Text style={{fontSize:38, textAlign:'center'}}>{'\u2795'}</Text>
                </View>
                <View style={{position:'absolute', bottom:30, width:'100%'}}>
                    <Button title='-->   Continue   -->' onPress={()=>setPage('Buckets 2')}/>
                </View>
                </View> 
        )
    }
    else if(page === 'Buckets 2'){
        return(
            <View style={{height:'100%'}}>
                <View>
                    <View style = {{height:50, alignItems:'center', marginTop:'5%', zIndex:1, marginRight:5, marginLeft:5}}>
                        <Text style = {{fontSize:20, textAlign:'center'}}>Pressing this button allows you to add a bucket.</Text>
                    </View>
                    <Text style={{position:'absolute', fontSize:50, color:'black', top:620, left:270, elevation:5}}>&#10146;</Text>
                    <Text/>
                    <View key='total-cash-in-buckets' style = {{width:'100%', backgroundColor:'firebrick', borderStyle:'solid', borderColor:'black', borderWidth:1, height:100, justifyContent:'center'}}>
                        <Text style = {{fontSize:20, marginLeft:10, fontWeight:'bold'}}>Total Cash in Buckets</Text>
                        <Text style = {{position:'absolute', right:0, fontSize:20, marginRight:10, fontWeight:'bold'}}>$400</Text>
                    </View>
                    <View key='total-cash-left-this-week' style = {{width:'100%', backgroundColor:'indianred', borderStyle:'solid', borderColor:'black', borderWidth:1, height:100, justifyContent:'center'}}>
                        <Text style = {{fontSize:20, marginLeft:10, fontWeight:'bold'}}>Total Cash Left This Week</Text>
                        <Text style = {{position:'absolute', right:0, fontSize:20, marginRight:10, fontWeight:'bold'}}>$103</Text>
                    </View>
                    <View key='savings' style = {{width:'100%', backgroundColor:'yellow', borderStyle:'solid', borderColor:'black', borderWidth:1, height:100, justifyContent:'center'}}>
                        <Text style = {{fontSize:20, marginLeft:40, zIndex:2}}>Savings</Text>
                        <Text style = {{position:'absolute', right:0, fontSize:20, marginRight:10, fontWeight:'bold'}}>$400</Text>
                        <View style = {{position:'absolute', marginLeft:5, backgroundColor:'red', borderRadius:20, height:30, width:30, marginTop:10, elevation:3}} onPress = {()=>{setCurrentBucket(bucket); setPopupType('are you sure'); setPopupSwitch(true)}} >
                            <Text style = {{fontSize:25, position:'absolute', alignSelf:'center', transform:[{translateY:-7}]}} >{'x'}</Text>
                        </View>
                    </View>
                    </View>
                <View  style={{height:60, width:60, borderRadius:30, backgroundColor:'lightblue', justifyContent:'space-between', elevation:3, position:'absolute', bottom:100, right:30 }}>
                        <Text style={{fontSize:38, textAlign:'center'}}>{'\u2795'}</Text>
                </View>
                <View style={{position:'absolute', bottom:30, width:'100%'}}>
                    <Button title='-->   Continue   -->' onPress={()=>setPage('Buckets 3')}/>
                </View>
                </View> 
        )
    }
    else if(page === 'Buckets 3'){
        return(
            <View style={{height:'100%'}}>
                <View>
                    <View style = {{height:50, alignItems:'center', marginTop:'5%', zIndex:1, marginRight:5, marginLeft:5}}>
                        <Text style = {{fontSize:20, textAlign:'center'}}>Pressing this button allows you to delete a bucket.</Text>
                    </View>
                    <Text style={{position:'absolute', fontSize:50, color:'black', top:350, left:10, elevation:5, transform:[{rotateZ:'-120deg'}]}}>&#10146;</Text>
                    <Text/>
                    <View key='total-cash-in-buckets' style = {{width:'100%', backgroundColor:'firebrick', borderStyle:'solid', borderColor:'black', borderWidth:1, height:100, justifyContent:'center'}}>
                        <Text style = {{fontSize:20, marginLeft:10, fontWeight:'bold'}}>Total Cash in Buckets</Text>
                        <Text style = {{position:'absolute', right:0, fontSize:20, marginRight:10, fontWeight:'bold'}}>$400</Text>
                    </View>
                    <View key='total-cash-left-this-week' style = {{width:'100%', backgroundColor:'indianred', borderStyle:'solid', borderColor:'black', borderWidth:1, height:100, justifyContent:'center'}}>
                        <Text style = {{fontSize:20, marginLeft:10, fontWeight:'bold'}}>Total Cash Left This Week</Text>
                        <Text style = {{position:'absolute', right:0, fontSize:20, marginRight:10, fontWeight:'bold'}}>$103</Text>
                    </View>
                    <View key='savings' style = {{width:'100%', backgroundColor:'yellow', borderStyle:'solid', borderColor:'black', borderWidth:1, height:100, justifyContent:'center'}}>
                        <Text style = {{fontSize:20, marginLeft:40, zIndex:2}}>Savings</Text>
                        <Text style = {{position:'absolute', right:0, fontSize:20, marginRight:10, fontWeight:'bold'}}>$400</Text>
                        <View style = {{position:'absolute', marginLeft:5, backgroundColor:'red', borderRadius:20, height:30, width:30, marginTop:10, elevation:3}} onPress = {()=>{setCurrentBucket(bucket); setPopupType('are you sure'); setPopupSwitch(true)}} >
                            <Text style = {{fontSize:25, position:'absolute', alignSelf:'center', transform:[{translateY:-7}]}} >{'x'}</Text>
                        </View>
                    </View>
                    </View>
                <View  style={{height:60, width:60, borderRadius:30, backgroundColor:'lightblue', justifyContent:'space-between', elevation:3, position:'absolute', bottom:100, right:30 }}>
                        <Text style={{fontSize:38, textAlign:'center'}}>{'\u2795'}</Text>
                </View>
                <View style={{position:'absolute', bottom:30, width:'100%'}}>
                    <Button title='-->   Continue   -->' onPress={()=>setPage('Buckets 4')}/>
                </View>
                </View> 
        )
    }
    else if(page === 'Buckets 4'){
        return(
            <View style={{height:'100%'}}>
                <View>
                    <View style = {{height:50, alignItems:'center', marginTop:'5%', zIndex:1, marginRight:5, marginLeft:5}}>
                        <Text style = {{fontSize:20, textAlign:'center'}}>Clicking on a bucket expands the bucket editor.</Text>
                    </View>
                    <Text style={{position:'absolute', fontSize:50, color:'black', top:350, left:170, elevation:5, transform:[{rotateZ:'-90deg'}]}}>&#10146;</Text>
                    <Text/>
                    <View key='total-cash-in-buckets' style = {{width:'100%', backgroundColor:'firebrick', borderStyle:'solid', borderColor:'black', borderWidth:1, height:100, justifyContent:'center'}}>
                        <Text style = {{fontSize:20, marginLeft:10, fontWeight:'bold'}}>Total Cash in Buckets</Text>
                        <Text style = {{position:'absolute', right:0, fontSize:20, marginRight:10, fontWeight:'bold'}}>$400</Text>
                    </View>
                    <View key='total-cash-left-this-week' style = {{width:'100%', backgroundColor:'indianred', borderStyle:'solid', borderColor:'black', borderWidth:1, height:100, justifyContent:'center'}}>
                        <Text style = {{fontSize:20, marginLeft:10, fontWeight:'bold'}}>Total Cash Left This Week</Text>
                        <Text style = {{position:'absolute', right:0, fontSize:20, marginRight:10, fontWeight:'bold'}}>$103</Text>
                    </View>
                    <View key='savings' style = {{width:'100%', backgroundColor:'yellow', borderStyle:'solid', borderColor:'black', borderWidth:1, height:100, justifyContent:'center'}}>
                        <Text style = {{fontSize:20, marginLeft:40, zIndex:2}}>Savings</Text>
                        <Text style = {{position:'absolute', right:0, fontSize:20, marginRight:10, fontWeight:'bold'}}>$400</Text>
                        <View style = {{position:'absolute', marginLeft:5, backgroundColor:'red', borderRadius:20, height:30, width:30, marginTop:10, elevation:3}} onPress = {()=>{setCurrentBucket(bucket); setPopupType('are you sure'); setPopupSwitch(true)}} >
                            <Text style = {{fontSize:25, position:'absolute', alignSelf:'center', transform:[{translateY:-7}]}} >{'x'}</Text>
                        </View>
                    </View>
                    </View>
                <View  style={{height:60, width:60, borderRadius:30, backgroundColor:'lightblue', justifyContent:'space-between', elevation:3, position:'absolute', bottom:100, right:30 }}>
                        <Text style={{fontSize:38, textAlign:'center'}}>{'\u2795'}</Text>
                </View>
                <View style={{position:'absolute', bottom:30, width:'100%'}}>
                    <Button title='-->   Continue   -->' onPress={()=>setPage('Buckets 5')}/>
                </View>
                </View> 
        )
    }
    else if(page === 'Buckets 5'){
        return(
            <View style={{height:'100%'}}>
                <View>
                    <View style = {{height:50, alignItems:'center', marginTop:'5%', zIndex:1, marginRight:5, marginLeft:5}}>
                        <Text style = {{fontSize:20, textAlign:'center'}}>This is the bucket editor.</Text>
                    </View>
                    <Text style={{position:'absolute', fontSize:50, color:'black', top:450, left:170, elevation:5, transform:[{rotateZ:'-90deg'}]}}>&#10146;</Text>
                    <Text/>
                    <View key='total-cash-in-buckets' style = {{width:'100%', backgroundColor:'firebrick', borderStyle:'solid', borderColor:'black', borderWidth:1, height:100, justifyContent:'center'}}>
                        <Text style = {{fontSize:20, marginLeft:10, fontWeight:'bold'}}>Total Cash in Buckets</Text>
                        <Text style = {{position:'absolute', right:0, fontSize:20, marginRight:10, fontWeight:'bold'}}>$400</Text>
                    </View>
                    <View key='total-cash-left-this-week' style = {{width:'100%', backgroundColor:'indianred', borderStyle:'solid', borderColor:'black', borderWidth:1, height:100, justifyContent:'center'}}>
                        <Text style = {{fontSize:20, marginLeft:10, fontWeight:'bold'}}>Total Cash Left This Week</Text>
                        <Text style = {{position:'absolute', right:0, fontSize:20, marginRight:10, fontWeight:'bold'}}>$103</Text>
                    </View>
                    <View key='savings' style = {{width:'100%', backgroundColor:'yellow', borderStyle:'solid', borderColor:'black', borderWidth:1, height:100, justifyContent:'center'}}>
                        <Text style = {{fontSize:20, marginLeft:40, zIndex:2,}}>Savings</Text>
                        <Text style = {{position:'absolute', right:0, fontSize:20, marginRight:10, fontWeight:'bold'}}>$400</Text>
                        <View style = {{position:'absolute', marginLeft:5, backgroundColor:'red', borderRadius:20, height:30, width:30, marginTop:10, elevation:3}} onPress = {()=>{setCurrentBucket(bucket); setPopupType('are you sure'); setPopupSwitch(true)}} >
                            <Text style = {{fontSize:25, position:'absolute', alignSelf:'center', transform:[{translateY:-7}]}} >{'x'}</Text>
                        </View>
                    </View>
                    <View testID='editBucketPanel' style={{backgroundColor:'yellow', height:80, borderWidth:0, borderColor:'black',borderStyle:'solid',zIndex:1,elevation:1, transform:[{translateY:-1}]}}>
                    <View testID='editNameButton'  style={{backgroundColor:'white', width:60, height:60, position:'absolute', left:10, justifyContent:'center', borderRadius:40, top:9, elevation:2}}>
                        <Text style={{fontSize:30,  textAlign:'center'}} >{'\u270f'}</Text>
                    </View>
                    <View testID='editColorButton'  style={{backgroundColor:'white', width:60, height:60, position:'absolute', left:80, justifyContent:'center', borderRadius:40, top:9,  elevation:2}}>
                        <Text style={{fontSize:30,  textAlign:'center', color:'yellow', fontWeight:'bold', textShadowColor:'black', textShadowRadius:2}}>{'\u25a0'}</Text>
                    </View>
                    <View testID='plusButton'  style={{backgroundColor:'white', width:60, height:60, position:'absolute', right:80, justifyContent:'center', borderRadius:40, top:9,  elevation:2}}>
                         <Text style={{fontSize:30,  textAlign:'center'}}>{'\u2795'}</Text>
                    </View>
                    <View testID='minusButton'  style={{backgroundColor:'white', width:60, height:60, position:'absolute', right:10, justifyContent:'center', borderRadius:40, top:9,  elevation:2}}>
                            <Text style={{fontSize:30,  textAlign:'center'}}>{'\u2796'}</Text>
                    </View>
                </View>
                    </View>
                <View  style={{height:60, width:60, borderRadius:30, backgroundColor:'lightblue', justifyContent:'space-between', elevation:3, position:'absolute', bottom:100, right:30 }}>
                        <Text style={{fontSize:38, textAlign:'center'}}>{'\u2795'}</Text>
                </View>
                <View style={{position:'absolute', bottom:30, width:'100%'}}>
                    <Button title='-->   Continue   -->' onPress={()=>setPage('Buckets 6')}/>
                </View>
                </View> 
        )
    }
    else if(page === 'Buckets 6'){
        return(
            <View style={{height:'100%'}}>
                <View>
                    <View style = {{height:50, alignItems:'center', marginTop:'5%', zIndex:1, marginRight:5, marginLeft:5}}>
                        <Text style = {{fontSize:20, textAlign:'center'}}>Pressing this button allows you to change the bucket name.</Text>
                    </View>
                    <Text style={{position:'absolute', fontSize:50, color:'black', top:450, left:10, elevation:5, transform:[{rotateZ:'-90deg'}]}}>&#10146;</Text>
                    <Text/>
                    <View key='total-cash-in-buckets' style = {{width:'100%', backgroundColor:'firebrick', borderStyle:'solid', borderColor:'black', borderWidth:1, height:100, justifyContent:'center'}}>
                        <Text style = {{fontSize:20, marginLeft:10, fontWeight:'bold'}}>Total Cash in Buckets</Text>
                        <Text style = {{position:'absolute', right:0, fontSize:20, marginRight:10, fontWeight:'bold'}}>$400</Text>
                    </View>
                    <View key='total-cash-left-this-week' style = {{width:'100%', backgroundColor:'indianred', borderStyle:'solid', borderColor:'black', borderWidth:1, height:100, justifyContent:'center'}}>
                        <Text style = {{fontSize:20, marginLeft:10, fontWeight:'bold'}}>Total Cash Left This Week</Text>
                        <Text style = {{position:'absolute', right:0, fontSize:20, marginRight:10, fontWeight:'bold'}}>$103</Text>
                    </View>
                    <View key='savings' style = {{width:'100%', backgroundColor:'yellow', borderStyle:'solid', borderColor:'black', borderWidth:1, height:100, justifyContent:'center'}}>
                        <Text style = {{fontSize:20, marginLeft:40, zIndex:2,}}>Savings</Text>
                        <Text style = {{position:'absolute', right:0, fontSize:20, marginRight:10, fontWeight:'bold'}}>$400</Text>
                        <View style = {{position:'absolute', marginLeft:5, backgroundColor:'red', borderRadius:20, height:30, width:30, marginTop:10, elevation:3}} onPress = {()=>{setCurrentBucket(bucket); setPopupType('are you sure'); setPopupSwitch(true)}} >
                            <Text style = {{fontSize:25, position:'absolute', alignSelf:'center', transform:[{translateY:-7}]}} >{'x'}</Text>
                        </View>
                    </View>
                    <View testID='editBucketPanel' style={{backgroundColor:'yellow', height:80, borderWidth:0, borderColor:'black',borderStyle:'solid',zIndex:1,elevation:1, transform:[{translateY:-1}]}}>
                    <View testID='editNameButton'  style={{backgroundColor:'white', width:60, height:60, position:'absolute', left:10, justifyContent:'center', borderRadius:40, top:9, elevation:2}}>
                        <Text style={{fontSize:30,  textAlign:'center'}} >{'\u270f'}</Text>
                    </View>
                    <View testID='editColorButton'  style={{backgroundColor:'white', width:60, height:60, position:'absolute', left:80, justifyContent:'center', borderRadius:40, top:9,  elevation:2}}>
                        <Text style={{fontSize:30,  textAlign:'center', color:'yellow', fontWeight:'bold', textShadowColor:'black', textShadowRadius:2}}>{'\u25a0'}</Text>
                    </View>
                    <View testID='plusButton'  style={{backgroundColor:'white', width:60, height:60, position:'absolute', right:80, justifyContent:'center', borderRadius:40, top:9,  elevation:2}}>
                         <Text style={{fontSize:30,  textAlign:'center'}}>{'\u2795'}</Text>
                    </View>
                    <View testID='minusButton'  style={{backgroundColor:'white', width:60, height:60, position:'absolute', right:10, justifyContent:'center', borderRadius:40, top:9,  elevation:2}}>
                            <Text style={{fontSize:30,  textAlign:'center'}}>{'\u2796'}</Text>
                    </View>
                </View>
                    </View>
                <View  style={{height:60, width:60, borderRadius:30, backgroundColor:'lightblue', justifyContent:'space-between', elevation:3, position:'absolute', bottom:100, right:30 }}>
                        <Text style={{fontSize:38, textAlign:'center'}}>{'\u2795'}</Text>
                </View>
                <View style={{position:'absolute', bottom:30, width:'100%'}}>
                    <Button title='-->   Continue   -->' onPress={()=>setPage('Buckets 7')}/>
                </View>
                </View> 
        )
    }
    else if(page === 'Buckets 7'){
        return(
            <View style={{height:'100%'}}>
                <View>
                    <View style = {{height:50, alignItems:'center', marginTop:'5%', zIndex:1, marginRight:5, marginLeft:5}}>
                        <Text style = {{fontSize:20, textAlign:'center'}}>Pressing this button allows you to change the bucket color.</Text>
                    </View>
                    <Text style={{position:'absolute', fontSize:50, color:'black', top:450, left:80, elevation:5, transform:[{rotateZ:'-90deg'}]}}>&#10146;</Text>
                    <Text/>
                    <View key='total-cash-in-buckets' style = {{width:'100%', backgroundColor:'firebrick', borderStyle:'solid', borderColor:'black', borderWidth:1, height:100, justifyContent:'center'}}>
                        <Text style = {{fontSize:20, marginLeft:10, fontWeight:'bold'}}>Total Cash in Buckets</Text>
                        <Text style = {{position:'absolute', right:0, fontSize:20, marginRight:10, fontWeight:'bold'}}>$400</Text>
                    </View>
                    <View key='total-cash-left-this-week' style = {{width:'100%', backgroundColor:'indianred', borderStyle:'solid', borderColor:'black', borderWidth:1, height:100, justifyContent:'center'}}>
                        <Text style = {{fontSize:20, marginLeft:10, fontWeight:'bold'}}>Total Cash Left This Week</Text>
                        <Text style = {{position:'absolute', right:0, fontSize:20, marginRight:10, fontWeight:'bold'}}>$103</Text>
                    </View>
                    <View key='savings' style = {{width:'100%', backgroundColor:'yellow', borderStyle:'solid', borderColor:'black', borderWidth:1, height:100, justifyContent:'center'}}>
                        <Text style = {{fontSize:20, marginLeft:40, zIndex:2,}}>Savings</Text>
                        <Text style = {{position:'absolute', right:0, fontSize:20, marginRight:10, fontWeight:'bold'}}>$400</Text>
                        <View style = {{position:'absolute', marginLeft:5, backgroundColor:'red', borderRadius:20, height:30, width:30, marginTop:10, elevation:3}} onPress = {()=>{setCurrentBucket(bucket); setPopupType('are you sure'); setPopupSwitch(true)}} >
                            <Text style = {{fontSize:25, position:'absolute', alignSelf:'center', transform:[{translateY:-7}]}} >{'x'}</Text>
                        </View>
                    </View>
                    <View testID='editBucketPanel' style={{backgroundColor:'yellow', height:80, borderWidth:0, borderColor:'black',borderStyle:'solid',zIndex:1,elevation:1, transform:[{translateY:-1}]}}>
                    <View testID='editNameButton'  style={{backgroundColor:'white', width:60, height:60, position:'absolute', left:10, justifyContent:'center', borderRadius:40, top:9, elevation:2}}>
                        <Text style={{fontSize:30,  textAlign:'center'}} >{'\u270f'}</Text>
                    </View>
                    <View testID='editColorButton'  style={{backgroundColor:'white', width:60, height:60, position:'absolute', left:80, justifyContent:'center', borderRadius:40, top:9,  elevation:2}}>
                        <Text style={{fontSize:30,  textAlign:'center', color:'yellow', fontWeight:'bold', textShadowColor:'black', textShadowRadius:2}}>{'\u25a0'}</Text>
                    </View>
                    <View testID='plusButton'  style={{backgroundColor:'white', width:60, height:60, position:'absolute', right:80, justifyContent:'center', borderRadius:40, top:9,  elevation:2}}>
                         <Text style={{fontSize:30,  textAlign:'center'}}>{'\u2795'}</Text>
                    </View>
                    <View testID='minusButton'  style={{backgroundColor:'white', width:60, height:60, position:'absolute', right:10, justifyContent:'center', borderRadius:40, top:9,  elevation:2}}>
                            <Text style={{fontSize:30,  textAlign:'center'}}>{'\u2796'}</Text>
                    </View>
                </View>
                    </View>
                <View  style={{height:60, width:60, borderRadius:30, backgroundColor:'lightblue', justifyContent:'space-between', elevation:3, position:'absolute', bottom:100, right:30 }}>
                        <Text style={{fontSize:38, textAlign:'center'}}>{'\u2795'}</Text>
                </View>
                <View style={{position:'absolute', bottom:30, width:'100%'}}>
                    <Button title='-->   Continue   -->' onPress={()=>setPage('Buckets 8')}/>
                </View>
                </View> 
        )
    }
    else if(page === 'Buckets 8'){
        return(
            <View style={{height:'100%'}}>
                <View>
                    <View style = {{height:50, alignItems:'center', marginTop:'5%', zIndex:1, marginRight:5, marginLeft:5}}>
                        <Text style = {{fontSize:20, textAlign:'center'}}>Pressing this button allows you to add money to the bucket.</Text>
                    </View>
                    <Text style={{position:'absolute', fontSize:50, color:'black', top:450, left:270, elevation:5, transform:[{rotateZ:'-90deg'}]}}>&#10146;</Text>
                    <Text/>
                    <View key='total-cash-in-buckets' style = {{width:'100%', backgroundColor:'firebrick', borderStyle:'solid', borderColor:'black', borderWidth:1, height:100, justifyContent:'center'}}>
                        <Text style = {{fontSize:20, marginLeft:10, fontWeight:'bold'}}>Total Cash in Buckets</Text>
                        <Text style = {{position:'absolute', right:0, fontSize:20, marginRight:10, fontWeight:'bold'}}>$400</Text>
                    </View>
                    <View key='total-cash-left-this-week' style = {{width:'100%', backgroundColor:'indianred', borderStyle:'solid', borderColor:'black', borderWidth:1, height:100, justifyContent:'center'}}>
                        <Text style = {{fontSize:20, marginLeft:10, fontWeight:'bold'}}>Total Cash Left This Week</Text>
                        <Text style = {{position:'absolute', right:0, fontSize:20, marginRight:10, fontWeight:'bold'}}>$103</Text>
                    </View>
                    <View key='savings' style = {{width:'100%', backgroundColor:'yellow', borderStyle:'solid', borderColor:'black', borderWidth:1, height:100, justifyContent:'center'}}>
                        <Text style = {{fontSize:20, marginLeft:40, zIndex:2,}}>Savings</Text>
                        <Text style = {{position:'absolute', right:0, fontSize:20, marginRight:10, fontWeight:'bold'}}>$400</Text>
                        <View style = {{position:'absolute', marginLeft:5, backgroundColor:'red', borderRadius:20, height:30, width:30, marginTop:10, elevation:3}} onPress = {()=>{setCurrentBucket(bucket); setPopupType('are you sure'); setPopupSwitch(true)}} >
                            <Text style = {{fontSize:25, position:'absolute', alignSelf:'center', transform:[{translateY:-7}]}} >{'x'}</Text>
                        </View>
                    </View>
                    <View testID='editBucketPanel' style={{backgroundColor:'yellow', height:80, borderWidth:0, borderColor:'black',borderStyle:'solid',zIndex:1,elevation:1, transform:[{translateY:-1}]}}>
                    <View testID='editNameButton'  style={{backgroundColor:'white', width:60, height:60, position:'absolute', left:10, justifyContent:'center', borderRadius:40, top:9, elevation:2}}>
                        <Text style={{fontSize:30,  textAlign:'center'}} >{'\u270f'}</Text>
                    </View>
                    <View testID='editColorButton'  style={{backgroundColor:'white', width:60, height:60, position:'absolute', left:80, justifyContent:'center', borderRadius:40, top:9,  elevation:2}}>
                        <Text style={{fontSize:30,  textAlign:'center', color:'yellow', fontWeight:'bold', textShadowColor:'black', textShadowRadius:2}}>{'\u25a0'}</Text>
                    </View>
                    <View testID='plusButton'  style={{backgroundColor:'white', width:60, height:60, position:'absolute', right:80, justifyContent:'center', borderRadius:40, top:9,  elevation:2}}>
                         <Text style={{fontSize:30,  textAlign:'center'}}>{'\u2795'}</Text>
                    </View>
                    <View testID='minusButton'  style={{backgroundColor:'white', width:60, height:60, position:'absolute', right:10, justifyContent:'center', borderRadius:40, top:9,  elevation:2}}>
                            <Text style={{fontSize:30,  textAlign:'center'}}>{'\u2796'}</Text>
                    </View>
                </View>
                    </View>
                <View  style={{height:60, width:60, borderRadius:30, backgroundColor:'lightblue', justifyContent:'space-between', elevation:3, position:'absolute', bottom:100, right:30 }}>
                        <Text style={{fontSize:38, textAlign:'center'}}>{'\u2795'}</Text>
                </View>
                <View style={{position:'absolute', bottom:30, width:'100%'}}>
                    <Button title='-->   Continue   -->' onPress={()=>setPage('Buckets 9')}/>
                </View>
                </View> 
        )
    }
    else if(page === 'Buckets 9'){
        return(
            <View style={{height:'100%'}}>
                <View>
                    <View style = {{height:50, alignItems:'center', marginTop:'5%', zIndex:1, marginRight:5, marginLeft:5}}>
                        <Text style = {{fontSize:20, textAlign:'center'}}>Pressing this button allows you to subtract money from the bucket.</Text>
                    </View>
                    <Text style={{position:'absolute', fontSize:50, color:'black', top:450, left:340, elevation:5, transform:[{rotateZ:'-90deg'}]}}>&#10146;</Text>
                    <Text/>
                    <View key='total-cash-in-buckets' style = {{width:'100%', backgroundColor:'firebrick', borderStyle:'solid', borderColor:'black', borderWidth:1, height:100, justifyContent:'center'}}>
                        <Text style = {{fontSize:20, marginLeft:10, fontWeight:'bold'}}>Total Cash in Buckets</Text>
                        <Text style = {{position:'absolute', right:0, fontSize:20, marginRight:10, fontWeight:'bold'}}>$400</Text>
                    </View>
                    <View key='total-cash-left-this-week' style = {{width:'100%', backgroundColor:'indianred', borderStyle:'solid', borderColor:'black', borderWidth:1, height:100, justifyContent:'center'}}>
                        <Text style = {{fontSize:20, marginLeft:10, fontWeight:'bold'}}>Total Cash Left This Week</Text>
                        <Text style = {{position:'absolute', right:0, fontSize:20, marginRight:10, fontWeight:'bold'}}>$103</Text>
                    </View>
                    <View key='savings' style = {{width:'100%', backgroundColor:'yellow', borderStyle:'solid', borderColor:'black', borderWidth:1, height:100, justifyContent:'center'}}>
                        <Text style = {{fontSize:20, marginLeft:40, zIndex:2,}}>Savings</Text>
                        <Text style = {{position:'absolute', right:0, fontSize:20, marginRight:10, fontWeight:'bold'}}>$400</Text>
                        <View style = {{position:'absolute', marginLeft:5, backgroundColor:'red', borderRadius:20, height:30, width:30, marginTop:10, elevation:3}} onPress = {()=>{setCurrentBucket(bucket); setPopupType('are you sure'); setPopupSwitch(true)}} >
                            <Text style = {{fontSize:25, position:'absolute', alignSelf:'center', transform:[{translateY:-7}]}} >{'x'}</Text>
                        </View>
                    </View>
                    <View testID='editBucketPanel' style={{backgroundColor:'yellow', height:80, borderWidth:0, borderColor:'black',borderStyle:'solid',zIndex:1,elevation:1, transform:[{translateY:-1}]}}>
                    <View testID='editNameButton'  style={{backgroundColor:'white', width:60, height:60, position:'absolute', left:10, justifyContent:'center', borderRadius:40, top:9, elevation:2}}>
                        <Text style={{fontSize:30,  textAlign:'center'}} >{'\u270f'}</Text>
                    </View>
                    <View testID='editColorButton'  style={{backgroundColor:'white', width:60, height:60, position:'absolute', left:80, justifyContent:'center', borderRadius:40, top:9,  elevation:2}}>
                        <Text style={{fontSize:30,  textAlign:'center', color:'yellow', fontWeight:'bold', textShadowColor:'black', textShadowRadius:2}}>{'\u25a0'}</Text>
                    </View>
                    <View testID='plusButton'  style={{backgroundColor:'white', width:60, height:60, position:'absolute', right:80, justifyContent:'center', borderRadius:40, top:9,  elevation:2}}>
                         <Text style={{fontSize:30,  textAlign:'center'}}>{'\u2795'}</Text>
                    </View>
                    <View testID='minusButton'  style={{backgroundColor:'white', width:60, height:60, position:'absolute', right:10, justifyContent:'center', borderRadius:40, top:9,  elevation:2}}>
                            <Text style={{fontSize:30,  textAlign:'center'}}>{'\u2796'}</Text>
                    </View>
                </View>
                    </View>
                <View  style={{height:60, width:60, borderRadius:30, backgroundColor:'lightblue', justifyContent:'space-between', elevation:3, position:'absolute', bottom:100, right:30 }}>
                        <Text style={{fontSize:38, textAlign:'center'}}>{'\u2795'}</Text>
                </View>
                <View style={{position:'absolute', bottom:30, width:'100%'}}>
                    <Button title='-->   Continue   -->' onPress={()=>setPage('Weekly Progress')}/>
                </View>
                </View> 
        )
    }
    else if(page === 'Weekly Progress'){
        return(
        <View>
            <View style = {{height:50, alignItems:'center', marginTop:'10%'}}>
                <Text style = {{fontSize:20}}>This is the Weekly Progress Page!</Text>
            </View>
            
            <View style = {{width:'100%',height:'37%',backgroundColor:'lightblue',justifyContent:"space-between",paddingTop:30,paddingBottom:50,borderWidth:1,borderColor:'black',borderStyle:'solid'}}>
                <View>
                    <Text style = {{fontWeight:'bold', fontSize:20, textAlign:'center'}}>Needs</Text>
                    <Text style = {{position:'absolute', right:140, fontSize:20}} >{'\u2630'}</Text>
                </View>
                <View>
                    <Text style={{fontSize:18,left:5}}>Total Budgeted:</Text>
                    <Text style = {{position:'absolute',right:90,fontSize:18}}>$100</Text>  
                </View>
                <View>
                    <Text style={{fontSize:18,left:5}}>Expenses:</Text>
                    <Text style = {{position:'absolute',right:5,fontSize:18}}>$45</Text>
                </View>
                <View>
                    <Text style={{fontSize:18,left:5}}>Remaining:</Text>
                    <Text style = {{position:'absolute',right:90,fontSize:18}}>$55</Text>
                </View>
            </View>
            <View style = {{width:'100%',height:'37%',backgroundColor:'lightgreen',justifyContent:"space-between",paddingTop:30,paddingBottom:50,borderWidth:1,borderColor:'black',borderStyle:'solid'}}>
                <View>
                    <Text style = {{fontWeight:'bold', fontSize:20, textAlign:'center'}}>Wants</Text>
                    <Text style = {{position:'absolute', right:140, fontSize:20}}>{'\u2630'}</Text>
                </View>
                <View>
                    <Text style={{fontSize:18,left:5}}>Total Budgeted:</Text>
                    <Text style = {{position:'absolute',right:90,fontSize:18}}>$85</Text> 
                </View>
                <View >
                    <Text style={{fontSize:18,left:5}}>Expenses:</Text>
                    <Text style = {{position:'absolute',right:5,fontSize:18}}>$37</Text>
                </View>
                <View>
                    <Text style={{fontSize:18,left:5}}>Remaining:</Text>
                    <Text style = {{position:'absolute',right:90,fontSize:18}}>$48</Text>
                </View>                
            </View>
            <Text />
            <View style = {{elevation:1}}>
                <Button disabled title = 'Start a new Week'/>
            </View>
            <View style={{position:'absolute', bottom:-40, width:'100%'}}>
                <Button title='-->   Continue   -->' onPress={()=>setPage('Weekly Progress 1')}/>
            </View>
        </View>
        )
    }
    else if(page === 'Weekly Progress 1'){
        return(
        <View>
            <View style = {{height:50, alignItems:'center', marginTop:'5%'}}>
                <Text style = {{fontSize:20, textAlign:'center'}}>Here you can see an overview of your needs and wants budgets for this week and how much you have left.</Text>
            </View>
            <Text></Text>
            <Text/>
            <View style = {{width:'100%',height:'37%',backgroundColor:'lightblue',justifyContent:"space-between",paddingTop:30,paddingBottom:50,borderWidth:1,borderColor:'black',borderStyle:'solid'}}>
                <View>
                    <Text style = {{fontWeight:'bold', fontSize:20, textAlign:'center'}}>Needs</Text>
                    <Text style = {{position:'absolute', right:140, fontSize:20}} >{'\u2630'}</Text>
                </View>
                <View>
                    <Text style={{fontSize:18,left:5}}>Total Budgeted:</Text>
                    <Text style = {{position:'absolute',right:90,fontSize:18}}>$100</Text>  
                </View>
                <View>
                    <Text style={{fontSize:18,left:5}}>Expenses:</Text>
                    <Text style = {{position:'absolute',right:5,fontSize:18}}>$45</Text>
                </View>
                <View>
                    <Text style={{fontSize:18,left:5}}>Remaining:</Text>
                    <Text style = {{position:'absolute',right:90,fontSize:18}}>$55</Text>
                </View>
            </View>
            <View style = {{width:'100%',height:'37%',backgroundColor:'lightgreen',justifyContent:"space-between",paddingTop:30,paddingBottom:50,borderWidth:1,borderColor:'black',borderStyle:'solid'}}>
                <View>
                    <Text style = {{fontWeight:'bold', fontSize:20, textAlign:'center'}}>Wants</Text>
                    <Text style = {{position:'absolute', right:140, fontSize:20}}>{'\u2630'}</Text>
                </View>
                <View>
                    <Text style={{fontSize:18,left:5}}>Total Budgeted:</Text>
                    <Text style = {{position:'absolute',right:90,fontSize:18}}>$85</Text> 
                </View>
                <View >
                    <Text style={{fontSize:18,left:5}}>Expenses:</Text>
                    <Text style = {{position:'absolute',right:5,fontSize:18}}>$37</Text>
                </View>
                <View>
                    <Text style={{fontSize:18,left:5}}>Remaining:</Text>
                    <Text style = {{position:'absolute',right:90,fontSize:18}}>$48</Text>
                </View>                
            </View>
            <Text />
            <View style = {{elevation:1}}>
                <Button disabled title = 'Start a new Week'/>
            </View>
            <View style={{position:'absolute', bottom:-40, width:'100%'}}>
                <Button title='-->   Continue   -->' onPress={()=>setPage('Weekly Progress 2')}/>
            </View>
        </View>
        )
    }
    else if(page === 'Weekly Progress 2'){
        return(
        <View>
            <View style = {{height:50, alignItems:'center', marginTop:'5%'}}>
                <Text style = {{fontSize:20, textAlign:'center'}}>Clicking here will allow you to set how much of the remaining balance is sent to your buckets at the end of the week.</Text>
            </View>
            <Text style={{position:'absolute', fontSize:50, color:'black', top:400, left:270, elevation:5, transform:[{rotateZ:'180deg'}]}}>&#10146;</Text>
            <Text style={{position:'absolute', fontSize:50, color:'black', top:130, left:270, elevation:5, transform:[{rotateZ:'180deg'}]}}>&#10146;</Text>
            <Text></Text>
            <Text/>
            <View style = {{width:'100%',height:'37%',backgroundColor:'lightblue',justifyContent:"space-between",paddingTop:30,paddingBottom:50,borderWidth:1,borderColor:'black',borderStyle:'solid'}}>
                <View>
                    <Text style = {{fontWeight:'bold', fontSize:20, textAlign:'center'}}>Needs</Text>
                    <Text style = {{position:'absolute', right:140, fontSize:20}} >{'\u2630'}</Text>
                </View>
                <View>
                    <Text style={{fontSize:18,left:5}}>Total Budgeted:</Text>
                    <Text style = {{position:'absolute',right:90,fontSize:18}}>$100</Text>  
                </View>
                <View>
                    <Text style={{fontSize:18,left:5}}>Expenses:</Text>
                    <Text style = {{position:'absolute',right:5,fontSize:18}}>$45</Text>
                </View>
                <View>
                    <Text style={{fontSize:18,left:5}}>Remaining:</Text>
                    <Text style = {{position:'absolute',right:90,fontSize:18}}>$55</Text>
                </View>
            </View>
            <View style = {{width:'100%',height:'37%',backgroundColor:'lightgreen',justifyContent:"space-between",paddingTop:30,paddingBottom:50,borderWidth:1,borderColor:'black',borderStyle:'solid'}}>
                <View>
                    <Text style = {{fontWeight:'bold', fontSize:20, textAlign:'center'}}>Wants</Text>
                    <Text style = {{position:'absolute', right:140, fontSize:20}}>{'\u2630'}</Text>
                </View>
                <View>
                    <Text style={{fontSize:18,left:5}}>Total Budgeted:</Text>
                    <Text style = {{position:'absolute',right:90,fontSize:18}}>$85</Text> 
                </View>
                <View >
                    <Text style={{fontSize:18,left:5}}>Expenses:</Text>
                    <Text style = {{position:'absolute',right:5,fontSize:18}}>$37</Text>
                </View>
                <View>
                    <Text style={{fontSize:18,left:5}}>Remaining:</Text>
                    <Text style = {{position:'absolute',right:90,fontSize:18}}>$48</Text>
                </View>                
            </View>
            <Text />
            <View style = {{elevation:1}}>
                <Button disabled title = 'Start a new Week'/>
            </View>
            <View style={{position:'absolute', bottom:-40, width:'100%'}}>
                <Button title='-->   Continue   -->' onPress={()=>setPage('Weekly Progress 3')}/>
            </View>
        </View>
        )
    }
    else if(page === 'Weekly Progress 3'){
        return(
        <View>
            <View style = {{height:50, alignItems:'center', marginTop:'5%'}}>
                <Text style = {{fontSize:20, textAlign:'center'}}>At the end of each week, click this button! It will send the remaining balances to the buckets that you set.</Text>
            </View>
            <Text style={{position:'absolute', fontSize:50, color:'black', top:610, left:180, elevation:5, transform:[{rotateZ:'90deg'}]}}>&#10146;</Text>
            <Text></Text>
            <Text/>
            <View style = {{width:'100%',height:'37%',backgroundColor:'lightblue',justifyContent:"space-between",paddingTop:30,paddingBottom:50,borderWidth:1,borderColor:'black',borderStyle:'solid'}}>
                <View>
                    <Text style = {{fontWeight:'bold', fontSize:20, textAlign:'center'}}>Needs</Text>
                    <Text style = {{position:'absolute', right:140, fontSize:20}} >{'\u2630'}</Text>
                </View>
                <View>
                    <Text style={{fontSize:18,left:5}}>Total Budgeted:</Text>
                    <Text style = {{position:'absolute',right:90,fontSize:18}}>$100</Text>  
                </View>
                <View>
                    <Text style={{fontSize:18,left:5}}>Expenses:</Text>
                    <Text style = {{position:'absolute',right:5,fontSize:18}}>$45</Text>
                </View>
                <View>
                    <Text style={{fontSize:18,left:5}}>Remaining:</Text>
                    <Text style = {{position:'absolute',right:90,fontSize:18}}>$55</Text>
                </View>
            </View>
            <View style = {{width:'100%',height:'37%',backgroundColor:'lightgreen',justifyContent:"space-between",paddingTop:30,paddingBottom:50,borderWidth:1,borderColor:'black',borderStyle:'solid'}}>
                <View>
                    <Text style = {{fontWeight:'bold', fontSize:20, textAlign:'center'}}>Wants</Text>
                    <Text style = {{position:'absolute', right:140, fontSize:20}}>{'\u2630'}</Text>
                </View>
                <View>
                    <Text style={{fontSize:18,left:5}}>Total Budgeted:</Text>
                    <Text style = {{position:'absolute',right:90,fontSize:18}}>$85</Text> 
                </View>
                <View >
                    <Text style={{fontSize:18,left:5}}>Expenses:</Text>
                    <Text style = {{position:'absolute',right:5,fontSize:18}}>$37</Text>
                </View>
                <View>
                    <Text style={{fontSize:18,left:5}}>Remaining:</Text>
                    <Text style = {{position:'absolute',right:90,fontSize:18}}>$48</Text>
                </View>                
            </View>
            <Text />
            <View style = {{elevation:1}}>
                <Button disabled title = 'Start a new Week'/>
            </View>
            <View style={{position:'absolute', bottom:-40, width:'100%'}}>
                <Button title='-->   Continue   -->' onPress={()=>setPage('Expense Overview')}/>
            </View>
        </View>
        )
    }
    else if (page === 'Expense Overview'){
        return(
            <View >
            <View style = {{height:50, alignItems:'center', marginTop:'10%'}}>
                <Text style = {{fontSize:20}}>This is the Expense Overview page!</Text>
            </View>
            <View style={{backgroundColor:'skyblue', padding:20, overflow:'scroll', height:'40%'}}>
                <Text style={{textAlign:'center', fontSize:25, left:-37}}>Fixed Monthly Expenses</Text>
                <View style={{position:'absolute', top:18, right:30, backgroundColor:'white', borderRadius:30,  elevation:2, width:45}} >
                    <Text style={{fontSize:30, textAlign:'center'}}>{'\u2795'}</Text>
                </View>
                
                <Text style = {{fontSize:18, textDecorationLine:'underline'}}>Needs:</Text>
                <View style={{ width:'100%', borderWidth:1}}>
                    <Text/>
                </View>
                <Text />
                <Text style = {{fontSize:18, textDecorationLine:'underline'}}>Wants:</Text>
                <View style={{ width:'100%', borderWidth:1}}>
                    <Text/>
                </View>
                
            </View>
            <View style = {{backgroundColor:'indianred', padding:20,height:'40%'}}>
                <Text style={{textAlign:'center', fontSize:25,  left:-50}}>This Week's Expenses</Text>
                <View style={{position:'absolute', top:18, right:30, backgroundColor:'white', borderRadius:30,  elevation:2, width:45}} >
                    <Text style={{fontSize:30, textAlign:'center'}}>{'\u2795'}</Text>
                </View>
                <Text style = {{fontSize:18, textDecorationLine:'underline'}}>Needs:</Text>
                <View style={{ width:'100%', borderWidth:1}}>
                    <Text/>
                </View>
                <Text />
                <Text style = {{fontSize:18, textDecorationLine:'underline'}}>Wants:</Text>
                <View style={{ width:'100%', borderWidth:1}}>
                    <Text/>
                </View>                
            </View>
            <View style={{position:'absolute', bottom:-40, width:'100%'}}>
                <Button title='-->   Continue   -->' onPress={()=>setPage('Expense Overview 2')}/>
            </View>
        </View>
        )
    }
    else if (page === 'Expense Overview 2'){
        return(
            <View >
            <View style = {{height:50, alignItems:'center', marginTop:'5%', marginLeft:5, marginRight:5}}>
                <Text style = {{fontSize:20, textAlign:'center'}}>Here you will find a list of your monthly fixed expenses as well as your expenses for this week.</Text>
            </View>
            <Text/>
            <Text/>
            <View style={{backgroundColor:'skyblue', padding:20, overflow:'scroll', height:'40%'}}>
                <Text style={{textAlign:'center', fontSize:25, left:-37}}>Fixed Monthly Expenses</Text>
                <View style={{position:'absolute', top:18, right:30, backgroundColor:'white', borderRadius:30,  elevation:2, width:45}} >
                    <Text style={{fontSize:30, textAlign:'center'}}>{'\u2795'}</Text>
                </View>
                
                <Text style = {{fontSize:18, textDecorationLine:'underline'}}>Needs:</Text>
                <View style={{ width:'100%', borderWidth:1}}>
                    <Text/>
                </View>
                <Text />
                <Text style = {{fontSize:18, textDecorationLine:'underline'}}>Wants:</Text>
                <View style={{ width:'100%', borderWidth:1}}>
                    <Text/>
                </View>
                
            </View>
            <View style = {{backgroundColor:'indianred', padding:20,height:'40%'}}>
                <Text style={{textAlign:'center', fontSize:25,  left:-50}}>This Week's Expenses</Text>
                <View style={{position:'absolute', top:18, right:30, backgroundColor:'white', borderRadius:30,  elevation:2, width:45}} >
                    <Text style={{fontSize:30, textAlign:'center'}}>{'\u2795'}</Text>
                </View>
                <Text style = {{fontSize:18, textDecorationLine:'underline'}}>Needs:</Text>
                <View style={{ width:'100%', borderWidth:1}}>
                    <Text/>
                </View>
                <Text />
                <Text style = {{fontSize:18, textDecorationLine:'underline'}}>Wants:</Text>
                <View style={{ width:'100%', borderWidth:1}}>
                    <Text/>
                </View>                
            </View>
            <View style={{position:'absolute', bottom:-40, width:'100%'}}>
                <Button title='-->   Continue   -->' onPress={()=>setPage('Expense Overview 3')}/>
            </View>
        </View>
        )
    }
    else if (page === 'Expense Overview 3'){
        return(
            <View >
            <View style = {{height:50, alignItems:'center', marginTop:'5%', marginLeft:5, marginRight:5}}>
                <Text style = {{fontSize:20, textAlign:'center'}}>Clicking these buttons will allow you to add an expense to the associated section.</Text>
            </View>
            <Text style={{position:'absolute', fontSize:50, color:'black', top:400, left:280, elevation:5}}>&#10146;</Text>
            <Text style={{position:'absolute', fontSize:50, color:'black', top:115, left:280, elevation:5}}>&#10146;</Text>
            <Text/>
            <Text/>
            <View style={{backgroundColor:'skyblue', padding:20, overflow:'scroll', height:'40%'}}>
                <Text style={{textAlign:'center', fontSize:25, left:-37}}>Fixed Monthly Expenses</Text>
                <View style={{position:'absolute', top:18, right:30, backgroundColor:'white', borderRadius:30,  elevation:2, width:45}} >
                    <Text style={{fontSize:30, textAlign:'center'}}>{'\u2795'}</Text>
                </View>
                
                <Text style = {{fontSize:18, textDecorationLine:'underline'}}>Needs:</Text>
                <View style={{ width:'100%', borderWidth:1}}>
                    <Text/>
                </View>
                <Text />
                <Text style = {{fontSize:18, textDecorationLine:'underline'}}>Wants:</Text>
                <View style={{ width:'100%', borderWidth:1}}>
                    <Text/>
                </View>
                
            </View>
            <View style = {{backgroundColor:'indianred', padding:20,height:'40%'}}>
                <Text style={{textAlign:'center', fontSize:25,  left:-50}}>This Week's Expenses</Text>
                <View style={{position:'absolute', top:18, right:30, backgroundColor:'white', borderRadius:30,  elevation:2, width:45}} >
                    <Text style={{fontSize:30, textAlign:'center'}}>{'\u2795'}</Text>
                </View>
                <Text style = {{fontSize:18, textDecorationLine:'underline'}}>Needs:</Text>
                <View style={{ width:'100%', borderWidth:1}}>
                    <Text/>
                </View>
                <Text />
                <Text style = {{fontSize:18, textDecorationLine:'underline'}}>Wants:</Text>
                <View style={{ width:'100%', borderWidth:1}}>
                    <Text/>
                </View>                
            </View>
            <View style={{position:'absolute', bottom:-40, width:'100%'}}>
                <Button title='-->   Continue   -->' onPress={()=>setPage('start')}/>
            </View>
        </View>
        )
    }
}