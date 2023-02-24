import React from 'react';
import { Image as NativeImage, Text, View, Dimensions, TouchableOpacity } from 'react-native';
import email from 'react-native-email'


export default function Menu({visibility, setVisibility, currentPage, setCurrentPage, logo, styles}){

    const monthlyBudgetColor = currentPage === 'Monthly Budget' ? ['grey', 'white']:['white','black']
    const updateBudgetColor = currentPage === 'Update Budget' ? ['grey', 'white']:['white','black']
    const weeklyProgressColor = currentPage === 'Weekly Progress' ? ['grey', 'white']:['white','black']
    const bucketsColor = currentPage === 'Buckets' ? ['grey', 'white']:['white','black']
    const incurExpenseColor = currentPage === 'Incur Expense' ? ['grey', 'white']:['white','black']
    const expenseOverviewColor = currentPage === 'Expense Overview' ? ['grey', 'white']:['white','black']
    const settingsColor = currentPage === 'Settings' ? ['grey', 'white']:['white','black']
    const companionsColor = currentPage === 'Companions' ? ['grey', 'white']:['white','black']
    const deviceHeight = Dimensions.get('window').height
    const deviceWidth = Dimensions.get('window').width

    const handleEmail = ()=>{
        const to = 'starrstreetmedia@gmail.com'
        email(to, {
            cc: 'derrick@starrstreetmedia.com',
            subject: '[Mecurous] Problem/Suggestion'
        }).catch(console.error)
    }

    
   


    if(visibility===true){
        return(
            <View style = {{width:deviceWidth, height:deviceHeight, position:'absolute', elevation:1}}>
                <Text style={styles.screenShadow} onPress={()=>{setVisibility(false)}}/>
                <View style = {styles.menu} >
                    <NativeImage source={logo} style={{transform:[{scale:.6}],width:'100%', height:'30%', marginTop:-30}}/>
                    <View style={{marginTop:-30}}>
                        <View key='Communication'>
                            <Text style = {{marginLeft:10, fontSize:20, textDecorationLine:'underline', marginBottom:5, marginTop:5}}>Social</Text>
                            <View style = {{backgroundColor:companionsColor[0], justifyContent:'center', height:50}}>
                                <Text style = {{fontSize:25, color:companionsColor[1], marginLeft:10}} onPress = {()=>{setVisibility(false);setCurrentPage('Companions')}}>&#128101;  Companions</Text>
                            </View>
                        </View>
                        
                        <Text style = {{borderBottomWidth:1, borderBottomColor:'lightgray', width:'100%'}}></Text>
                        <View key = 'Finance'>
                            <Text style = {{marginLeft:10, fontSize:20, textDecorationLine:'underline', marginBottom:5, marginTop:5}}>Financial</Text>
                            <View style = {{backgroundColor:monthlyBudgetColor[0], justifyContent:'center', height:50}}>
                                <Text style = {{fontSize:25, color:monthlyBudgetColor[1], marginLeft:10}} onPress = {()=>{setVisibility(false);setCurrentPage('Monthly Budget')}}>&#128184;  Monthly Budget</Text>
                            </View>
                            <View style = {{backgroundColor:weeklyProgressColor[0], justifyContent:'center', height:50}}>
                                <Text style = {{fontSize:25, color:weeklyProgressColor[1], marginLeft:10}} onPress = {()=>{setVisibility(false);setCurrentPage('Weekly Progress')}}>&#128201;  Weekly Progress</Text>
                            </View>
                            <View style = {{backgroundColor:expenseOverviewColor[0], justifyContent:'center', height:50}}>
                                <Text style = {{fontSize:25, color:expenseOverviewColor[1], marginLeft:10}} onPress = {()=>{setVisibility(false);setCurrentPage('Expense Overview')}}>&#128200;  Expense Overview</Text>
                            </View>
                            <View style = {{backgroundColor:bucketsColor[0], justifyContent:'center', height:50}}>
                                <Text style = {{fontSize:25, color:bucketsColor[1], marginLeft:10}} onPress = {()=>{setVisibility(false);setCurrentPage('Buckets')}}>&#x1F4B0;  Buckets</Text>
                            </View>
                        </View>
                        
                        <Text style = {{borderBottomWidth:1, borderBottomColor:'lightgray', width:'100%'}}></Text>
                        <Text/>
                        <View style = {{backgroundColor:'white', justifyContent:'center', height:50}}>
                            <Text style = {{fontSize:25, color:'black', marginLeft:10}}  onPress = {()=>{setVisibility(false);setCurrentPage('Tutorial')}}>&#128242;  Watch Tutorial</Text>
                        </View>
                        <View style = {{backgroundColor:settingsColor[0], justifyContent:'center', height:50}}>
                            <Text style = {{fontSize:25, color:settingsColor[1], marginLeft:10}}  onPress = {()=>{setVisibility(false);setCurrentPage('Settings')}}>&#9881;  Settings</Text>
                        </View>
                        <Text style = {{height:'30%'}}/>
                        <TouchableOpacity style = {{margin:5}} onPress={()=>handleEmail()}>
                            <Text style = {{fontSize:12, textAlign:'center'}}>Have a problem or suggestion?</Text>
                            <Text style = {{fontSize:12, textAlign:'center'}}>Click here to let us know!</Text>
                        </TouchableOpacity>
                    </View>
                </View>  
            </View>
                       
        )
    }
    else{
        return null
    }
}