import { Picker } from '@react-native-community/picker'
import React, { useState } from 'react'
import { Button, PickerIOSItem, ScrollView, Text, TextInput, TouchableWithoutFeedback, View } from 'react-native'





export default function PopupMessage({page, type, isVisibile, monthlyBudget, currentBucket, setPopupSwitch, addOrSubtract, setMonthlyBudget, expenseType}){

    const [amount, setAmount] = useState(0)
    const [bucketName, setBucketName] = useState('')
    const [bucketColor, setBucketColor] = useState('lightblue')
    const [description,setDescription] = useState('')
    const [expenseSubType, setExpenseSubType] = useState('needs')

    function addOrSubtractToBuckets(){

        const handleMath = (monthlyBudget, addOrSubtract, amount, currentBucket)=>{
            const tempMonthlyBudget = {...monthlyBudget}
            if(parseInt(amount)){
                if(addOrSubtract==='Add'){
                    tempMonthlyBudget.buckets[currentBucket][0] = parseInt(tempMonthlyBudget.buckets[currentBucket][0]) + parseInt(amount)
                }
                else{
                    tempMonthlyBudget.buckets[currentBucket][0] = parseInt(tempMonthlyBudget.buckets[currentBucket][0]) - parseInt(amount)
                }
            }
            else(alert('Invalid amount entered'))
            
            return tempMonthlyBudget
            
        }

        return(
            <View style={{backgroundColor:'white', height:400, width:'90%', position:'absolute', top:220, borderColor:'black', borderStyle:'solid', borderWidth:1, justifyContent:'space-between', alignSelf:'center', padding:20, elevation:10}}>
                <View>
                    <Text style={{textAlign:'center', fontSize:20}}>How much would you like to {addOrSubtract.toLowerCase()}?</Text>
                    <Text style={{textAlign:'center', fontSize:17}}>Bucket: {monthlyBudget.buckets[currentBucket][5]}</Text>
                </View>
                <View testID='currentAmount'>
                    <Text style={{textAlign:'center', fontSize:20}}>Current Amount</Text>
                    <Text style={{textAlign:'center', fontSize:20}}>${monthlyBudget.buckets[currentBucket][0]}</Text>
                </View>
                <View testID='amountToAdd'>
                    <Text style={{textAlign:'center', fontSize:20}}>Amount to {addOrSubtract}</Text>
                    <TextInput placeholder='Amount'  onChangeText={(e)=>setAmount(e)} style={{textAlign:'center', fontSize:20}}>{amount}</TextInput>
                </View>
                <View style={{width:'100%', height:'20%'}}>
                    <View style={{width:'40%', position:'absolute', left:0}}>
                        <Button title='Submit' onPress={()=>{setMonthlyBudget(handleMath(monthlyBudget,addOrSubtract,amount,currentBucket));setPopupSwitch(false)}} />
                    </View>
                    <View style = {{width:'40%', position:'absolute', right:0}}>
                        <Button title='Cancel' color='red' onPress={()=>setPopupSwitch(false)}/>
                    </View>                
                </View>
            </View>
        )
    }

    function changeBucketName(){

        function handlePress(){
            const tempMonthlyBudget={...monthlyBudget}
            tempMonthlyBudget.buckets[currentBucket][5] = bucketName
            return tempMonthlyBudget
        }
        

        return(
            <View style={{backgroundColor:'white', height:400, width:'90%', position:'absolute', top:220, borderColor:'black', borderStyle:'solid', borderWidth:1, justifyContent:'space-between', alignSelf:'center', padding:20, elevation:10}}>
                <View>
                    <Text style={{textAlign:'center', fontSize:20}}>What would you like your bucket to be called?</Text>
                </View>
                <View testID='currentAmount'>
                    <Text style={{textAlign:'center', fontSize:20}}>Current Name</Text>
                    <Text style={{textAlign:'center', fontSize:20}}>{monthlyBudget.buckets[currentBucket][5]}</Text>
                </View>
                <View testID='amountToAdd'>
                    <Text style={{textAlign:'center', fontSize:20}}>Desired Name</Text>
                    <TextInput placeholder={monthlyBudget.buckets[currentBucket][5]} value = {bucketName} onChangeText={(e)=>setBucketName(e)} style={{textAlign:'center', fontSize:20}}></TextInput>
                </View>
                <View style={{width:'100%', height:'20%'}}>
                    <View style={{width:'40%', position:'absolute', left:0}}>
                        <Button title='Submit' onPress={()=>{setMonthlyBudget(handlePress()),setPopupSwitch(false)}} />
                    </View>
                    <View style = {{width:'40%', position:'absolute', right:0}}>
                        <Button title='Cancel' color='red' onPress={()=>setPopupSwitch(false)}/>
                    </View>                
                </View>
            </View>
        )
    }

    function changeBucketColor(){

        const handlePress = () =>{
            var tempMonthlyBudget = monthlyBudget
            tempMonthlyBudget.buckets[currentBucket][1]=bucketColor.toLowerCase()
            return tempMonthlyBudget
        }

        return(
            <View style={{backgroundColor:'white', height:400, width:'90%', position:'absolute', top:220, borderColor:'black', borderStyle:'solid', borderWidth:1, justifyContent:'space-between', alignSelf:'center', padding:20, elevation:10}}>
                <View>
                    <Text style={{textAlign:'center', fontSize:20}}>What color would you like your bucket to be?</Text>
                    <Text style={{textAlign:'center', fontSize:17}}>Bucket: {monthlyBudget.buckets[currentBucket][5]}</Text>
                </View>
                <View testID='currentAmount'>
                    <Text style={{textAlign:'center', fontSize:20}}>Current Color</Text>
                    <Text style={{textAlign:'center', fontSize:20}}>{monthlyBudget.buckets[currentBucket][1]}</Text>
                    <View style={{height:20, width:20, backgroundColor:monthlyBudget.buckets[currentBucket][1], position:'absolute', bottom:'5%', right:'20%', borderWidth:1}}/>
                </View>
                <View testID='amountToAdd'>
                    <Text style={{textAlign:'center', fontSize:20}}>Desired Color</Text>
                    <Text style={{position:'absolute', left:'20%',top:2, backgroundColor:'lightblue', paddingTop:3, paddingBottom:3, paddingRight:10, paddingLeft:10, borderRadius:20}} onPress={()=>alert('Type in any HTML color names! If you don\'t know any, here are a few: lightblue, blue, red, greed, crimson, chocolate, cyan, deeppink, etc. The list goes on!')}>?</Text>
                    <TextInput placeholder={monthlyBudget.buckets[currentBucket][5]} value = {bucketColor} onChangeText={(e)=>setBucketColor(e)} style={{textAlign:'center', fontSize:20}}></TextInput>
                    <View style={{height:20, width:20, backgroundColor:bucketColor.toLowerCase(), position:'absolute', bottom:'5%', right:'20%', borderWidth:1}}/>
                </View>
                <View style={{width:'100%', height:'20%'}}>
                    <View style={{width:'40%', position:'absolute', left:0}}>
                        <Button title='Submit' onPress={()=>{setMonthlyBudget(handlePress()),setPopupSwitch(false)}} />
                    </View>
                    <View style = {{width:'40%', position:'absolute', right:0}}>
                        <Button title='Cancel' color='red' onPress={()=>setPopupSwitch(false)}/>
                    </View>                
                </View>
            </View>
        )
    }

    function addAnExpense(){

        const handlePress = ()=>{
            var tempMonthlyBudget = monthlyBudget
            if (expenseType==='Monthly'){
                tempMonthlyBudget.expenses[expenseSubType].push([description,parseFloat(amount)])
            }
            else{
                tempMonthlyBudget.weeklyExpenses[expenseSubType].push([description,parseFloat(amount)])
            }
            return tempMonthlyBudget
        }
        
        return (
            <View style={{backgroundColor:'white', height:400, width:'90%', position:'absolute', top:220, borderColor:'black', borderStyle:'solid', borderWidth:1, justifyContent:'space-between', alignSelf:'center', padding:20, elevation:10}}>
                <View>
                    <Text style={{textAlign:'center', fontSize:20}}>Add a {expenseType} Expense</Text>
        
                </View>
                <View testID='amountToAdd' style={{alignItems:'center'}}>
                    <Text style={{textAlign:'center', fontSize:20}}>Amount</Text>
                    <Text style={{position:'absolute', left:70,top:28, fontSize:25}}>$</Text>
                    <TextInput placeholder = 'Amount' onChangeText = {(e)=>setAmount(e)} style={{borderWidth:1, height:40, width:'40%', textAlign:'center'}}>{amount}</TextInput>
                </View>
                <View>
                    <Text style={{textAlign:'center', fontSize:20}}>Description</Text>
                    <TextInput placeholder='Description' onChangeText={(e)=>setDescription(e)} style={{borderWidth:1, height:40, padding:5}}>{description}</TextInput>
                </View>
                <View>
                <Text style={{textAlign:'center', fontSize:20}}>Expense Type</Text>
                <View style={{borderWidth:1}}>
                    <Picker selectedValue={expenseSubType} onValueChange={(itemValue)=>setExpenseSubType(itemValue)}>
                        <Picker.Item value='needs' label = 'Needs'/>
                        <Picker.Item value='wants' label = 'Wants'/>
                    </Picker>
                </View>
                </View>
                
                <View style={{width:'100%', height:'20%'}}>
                    <View style={{width:'40%', position:'absolute', left:0}}>
                        <Button title='Submit' onPress={()=>{setMonthlyBudget(handlePress()),setPopupSwitch(false)}} />
                    </View>
                    <View style = {{width:'40%', position:'absolute', right:0}}>
                        <Button title='Cancel' color='red' onPress={()=>setPopupSwitch(false)}/>
                    </View>                
                </View>
            </View>
        )
    }

    function changeResidualPercentages(){

        const monthlyBudgetBeforeChange = {...monthlyBudget}
        var potentialMonthlyBudget = {...monthlyBudget}

        function handleChange(e, bucket){
            const tempMonthlyBudget = {...monthlyBudget}
            tempMonthlyBudget.residualAllocations[expenseType][bucket] = parseFloat(e)
            potentialMonthlyBudget = tempMonthlyBudget
        }

        function handlePress(){
            var total = 0
            Object.keys(potentialMonthlyBudget.residualAllocations[expenseType]).map(item=>{
                total = total + parseFloat(potentialMonthlyBudget.residualAllocations[expenseType][item])
            })
            if (total>100||total<100){
                alert(`You percentages add up to ${total}. Make sure your percentages add up to 100!`)
                setMonthlyBudget(monthlyBudgetBeforeChange)
            }
            else{
                setMonthlyBudget(potentialMonthlyBudget)
                setPopupSwitch(false)
            }
        }




        function BucketList(){
            const tempMonthlyBudget = {...monthlyBudget}
            return(
                Object.keys(tempMonthlyBudget.buckets).map((bucket, key)=>{
                    return(
                        <View key ={key} style={{margin:15, borderBottomWidth:1}}>
                            <Text key = {`bucketName${key}`} style={{fontSize:18}}>{tempMonthlyBudget.buckets[bucket][5]}</Text>
                            <TextInput key = {`amount${key}`} onChangeText={e=>(handleChange(e, bucket))} style = {{fontSize:18, position:'absolute', right:18, textAlign:'right'}}>{tempMonthlyBudget.residualAllocations[expenseType][bucket]}</TextInput>
                            <Text key ={`percentSign${key}`} style = {{fontSize:18, position:'absolute', right:0}}>%</Text>
                        </View>
                    )
                })
            )
            
        }

        return (
            <View key='ChangeResidualPercentages' style={{backgroundColor:'white', height:400, width:'90%', position:'absolute', top:220, borderColor:'black', borderStyle:'solid', borderWidth:1, justifyContent:'space-between', alignSelf:'center', padding:20, elevation:10}}>
                <View key='HeaderPercentages'>
                    <Text style={{textAlign:'center', fontSize:20}}>Residual Weekly {expenseType[0].toUpperCase() + expenseType.substring(1)} Budget Distribution</Text>
                </View>
                <ScrollView key='PercentContainer' style = {{borderWidth:1, margin:10}}>
                    <BucketList/>
                </ScrollView>
                <View style={{width:'100%', height:'20%'}}>
                    <View style={{width:'40%', position:'absolute', left:0}}>
                        <Button title='Submit' onPress={()=>{handlePress()}} />
                    </View>
                    <View style = {{width:'40%', position:'absolute', right:0}}>
                        <Button title='Cancel' color='red' onPress={()=>setPopupSwitch(false)}/>
                    </View>                
                </View>
            </View>
        )
    }
    
    function doYouWantToDelete(){
        function handlePress(){
            const tempMonthlyBudget = {...monthlyBudget}
            delete tempMonthlyBudget.buckets[currentBucket]
            delete tempMonthlyBudget.residualAllocations.wants[currentBucket]
            delete tempMonthlyBudget.residualAllocations.needs[currentBucket]
            return tempMonthlyBudget
        }

        return (
            <View  style={{backgroundColor:'white', height:400, width:'90%', position:'absolute', top:220, borderColor:'black', borderStyle:'solid', borderWidth:1, justifyContent:'space-evenly', alignSelf:'center', padding:20, elevation:10}}>
                <View >
                    <Text style={{textAlign:'center', fontSize:30}}>Are You Sure You Want To Delete "{monthlyBudget.buckets[currentBucket][5]}"?</Text>
                </View>
                <View style={{width:'100%', height:'20%'}}>
                    <View style={{width:'40%', position:'absolute', left:0}}>
                        <Button title='Yes' onPress={()=>{setMonthlyBudget(handlePress()); setPopupSwitch(false)}} />
                    </View>
                    <View style = {{width:'40%', position:'absolute', right:0}}>
                        <Button title='Cancel' color='red' onPress={()=>setPopupSwitch(false)}/>
                    </View>                
                </View>
            </View>
        )
    }

    function addNewPaycheck(){
        var amount = 0
        var weeks = 0

        function calculateMonthlyRevenue(){
            const tempMonthlyBudget = {...monthlyBudget}
            var total = 0
            tempMonthlyBudget.paychecks.map(paycheck=>{
                total += ((parseFloat(paycheck[0])/parseFloat(paycheck[1]))*4)
            })
            total = total/tempMonthlyBudget.paychecks.length
            return total
        }

        const handlePress = ()=>{
            if(parseFloat(amount) && parseFloat(weeks)){
                const tempMonthlyBudget = {...monthlyBudget}
                tempMonthlyBudget.bankBalance = parseFloat(tempMonthlyBudget.bankBalance) + parseFloat(amount)
                if (tempMonthlyBudget.paychecks.length===5){
                    tempMonthlyBudget.paychecks.unshift([parseFloat(amount), weeks])
                    tempMonthlyBudget.paychecks.pop()
                }
                else{
                    tempMonthlyBudget.paychecks.unshift([parseFloat(amount), weeks])
                }
                tempMonthlyBudget.monthlyRevenue = calculateMonthlyRevenue()
    
                alert(`New Paycheck for $${amount} covering ${weeks} weeks has been added!`)
                setPopupSwitch(false)
                return tempMonthlyBudget
            }
            else{
                alert(`Something went wrong! Make sure the values you entered only contain numbers`)
                return monthlyBudget
            }
            
        }

        return(
            <View style={{backgroundColor:'white', height:400, width:'90%', position:'absolute', top:220, borderColor:'black', borderStyle:'solid', borderWidth:1, justifyContent:'space-between', alignSelf:'center', padding:20, elevation:10}}>
                <View>
                    <Text style={{textAlign:'center', fontSize:20}}>Add New Paycheck</Text>
                </View>
                <View>
                    <View style = {{margin:10}}>
                        <Text style = {{fontSize:20, textAlign:'center'}}>How much did you make?</Text>
                        <TextInput style = {{fontSize:20, textAlign:'center'}} placeholder='Amount' onChangeText = {e=>amount = e}>{amount}</TextInput>
                    </View>
                    <Text/>
                    <View style = {{margin:10}}>
                        <Text style = {{fontSize:20, textAlign:'center'}}>How many weeks does this check cover?</Text>
                        <TextInput style = {{fontSize:20, textAlign:'center'}} placeholder='No. of weeks' onChangeText = {e=>weeks = e}>{weeks}</TextInput>
                    </View>
                </View>
                <View style={{width:'100%', height:'20%'}}>
                    <View style={{width:'40%', position:'absolute', left:0}}>
                        <Button title='Submit' onPress={()=>{setMonthlyBudget(handlePress())}} />
                    </View>
                    <View style = {{width:'40%', position:'absolute', right:0}}>
                        <Button title='Cancel' color='red' onPress={()=>setPopupSwitch(false)}/>
                    </View>                
                </View>
            </View>
        )
    }
    
    function updateBankBalance(){
        var amount = 0
        const handlePress = ()=>{
            if (parseFloat(amount)){
                const tempMonthlyBudget = {...monthlyBudget}
                tempMonthlyBudget.bankBalance = parseFloat(amount)
                setPopupSwitch(false)
                return tempMonthlyBudget
            }
            else{
                alert('Please enter a valid amount.')
                return monthlyBudget
            }
            
        }

        return (
            <View style={{backgroundColor:'white', height:400, width:'90%', position:'absolute', top:220, borderColor:'black', borderStyle:'solid', borderWidth:1, justifyContent:'space-between', alignSelf:'center', padding:20, elevation:10}}>
                <View>
                    <Text style={{textAlign:'center', fontSize:30}}>Update Bank Balance</Text>
                </View>
                <View>
                    <Text style = {{textAlign:'center', fontSize:25}}>New Bank Balance</Text>
                    <Text/>
                    <Text/>
                    <TextInput keyboardType='number-pad' style = {{textAlign:'center', fontSize:25}} onChangeText = {e=>{amount=e}} placeholder = 'New Bank Balance'>{amount}</TextInput>
                </View>
                <Text/>
                <View style={{width:'100%', height:'20%'}}>
                    <View style={{width:'40%', position:'absolute', left:0}}>
                        <Button title='Submit' onPress={()=>{setMonthlyBudget(handlePress())}} />
                    </View>
                    <View style = {{width:'40%', position:'absolute', right:0}}>
                        <Button title='Cancel' color='red' onPress={()=>setPopupSwitch(false)}/>
                    </View>                
                </View>
            </View>
        )
    }

    function clearData(){
        function handlePress(){
            alert('Mercurous Data Cleared!')
            return(
                {
                    monthlyRevenue:0,
                    percentageNeeds:50,
                    percentageWants:30,
                    percentageSavings: 20,
                    expenses:{
                        needs:[
                           
                        ],
                        wants:[
                           
                        ]
                    },
                    residualAllocations:{
                      wants:{
                        Play:100,
                        Savings:0
                      },
                      needs:{
                        Play:0,
                        Savings:100
                      }
                    },
                    weeklyExpenses:{
                      needs:[],
                      wants:[],
                    },
                    buckets:{
                      Play:[0, 'lightblue', 'wants',0, 0, 'Play Bucket'],
                      Savings: [0, 'yellow', 'needs', 0, 0, 'Savings Bucket']
                    },
                    paychecks:[],
                    bankBalance:0
                }
            )
        }

        return (
            <View  style={{backgroundColor:'white', height:400, width:'90%', position:'absolute', top:220, borderColor:'black', borderStyle:'solid', borderWidth:1, justifyContent:'space-evenly', alignSelf:'center', padding:20, elevation:10}}>
                <View >
                    <Text style={{textAlign:'center', fontSize:30}}>Are You Sure You Want To Clear All Your Mercurous Data?</Text>
                </View>
                <View style={{width:'100%', height:'20%'}}>
                    <View style={{width:'40%', position:'absolute', left:0}}>
                        <Button title='Yes' onPress={()=>{setMonthlyBudget(handlePress()); setPopupSwitch(false)}} />
                    </View>
                    <View style = {{width:'40%', position:'absolute', right:0}}>
                        <Button title='Cancel' color='red' onPress={()=>setPopupSwitch(false)}/>
                    </View>                
                </View>
            </View>
        )
    }

    // An object of Arrays containing all the functions used in pop up messages.
    // Organized by which page the user would currently be on
    const allPopupMessageFuncs = {
        buckets:[['add to bucket',addOrSubtractToBuckets], ['change bucket name', changeBucketName], ['change bucket color', changeBucketColor], ['are you sure', doYouWantToDelete]],
        expenseList:[['add an expense', addAnExpense]],
        weeklyProgress:[['change percents', changeResidualPercentages]],
        monthlyBudget:[['add a paycheck', addNewPaycheck], ['update bank balance', updateBankBalance]],
        settings:[['clear data', clearData]]
                                

                                }

    // Return Statement
    if(isVisibile===true){
        return Object.keys(allPopupMessageFuncs).map(pageObj=>{
            if (pageObj===page){
                return allPopupMessageFuncs[pageObj].map(func=>{
                    if (func[0]===type){
                        return func[1](monthlyBudget, currentBucket, setPopupSwitch, addOrSubtract)
                    }
                    else  return null
                })
                
            }else return null
        })
    }
    else{
        return null
    }
        


}