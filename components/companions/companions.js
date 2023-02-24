import React, { useEffect, useState } from 'react';
import { Button, Image, ScrollView, StyleSheet, Text, TextInput, TouchableNativeFeedback, TouchableOpacity, TouchableOpacityComponent, TouchableWithoutFeedback, TouchableWithoutFeedbackBase, View} from 'react-native';
import Menu from '../menu/menu';
import * as ImagePicker from 'expo-image-picker';
import AsyncStorage from '@react-native-async-storage/async-storage';



export default function Companions({menuVisibility,setMenuVisibility, setCurrentPage, currentPage, logo, monthlyBudget, setMonthlyBudget, popupSwitch, setPopupSwitch, styles, companionFormVisibility, setCompanionFormVisibility, companions, setCompanions, companionNoteVisibility, setCompanionNoteVisibility, chosenCompanion, setChosenCompanion, image, setImage, setCompanionSortCriteria, companionSortCriteria }){

    
    async function saveToBrowser (){
        
        await AsyncStorage.setItem('companions',JSON.stringify(companions))
      }
    
    
    

    const CompanionNotes = ()=>{
        var newNote = [new Date(),'']
        const ListNotes = () =>{

            

            const tempCompanions = [...companions]
            return tempCompanions[chosenCompanion][7].map((item, key)=>{
                return(
                    <View key = {key} style = {{width:'90%', height:100, backgroundColor:'white', left:20, flexDirection:'row', marginTop:10, marginBottom:10}}>
                                <View style = {{width:'30%', height:100, backgroundColor:'white', justifyContent:'space-around'}}>
                                    <Text style = {{textAlign:'center', fontSize:15}}>
                                        {item[0]}
                                    </Text>
                                </View>
                                <ScrollView style = {{ width:'70%', height:100, backgroundColor:'white', padding:6}} nestedScrollEnabled={true}>
                                    <View style={{justifyContent:'center', minHeight:90, paddingBottom:10,}}>
                                        <Text>
                                        {item[1]}    
                                        </Text>
                                    </View>
                                </ScrollView>
                            </View>
                )
            })
            
        }

        if(companionNoteVisibility){
            return(
                <View style={{position:'absolute', height:'100%', width:'100%', backgroundColor:'white'}}>
                    <TouchableOpacity style={{position:'absolute', right:20, top:40, zIndex:1000}} onPress={()=>setCompanionNoteVisibility(false)}>
                        <Text style = {{fontSize:20}}>X</Text>
                    </TouchableOpacity>
                    <View style = {{top:0, backgroundColor:'white', width:'100%', position:'absolute',height:170, borderBottomWidth:1, borderBottomColor:'lightgrey'}}>
                        <Image style={{height:100, width:110, backgroundColor:'white', marginLeft:5, top:40, position:'absolute'}} source = {{uri:companions[chosenCompanion][10]}}/>
                        <Text style = {{position:'absolute', top:70, fontSize:30, left:'35%'}}>{companions[chosenCompanion][0] + " " + companions[chosenCompanion][1]}</Text>
                        <Text style = {{position:'absolute', top:110, fontSize:16, left:'35.5%'}}>Last Contacted: {companions[chosenCompanion][9]}</Text>
                        </View>
                    <ScrollView style = {{width:'100%', height:'80%', backgroundColor:'white', position:'absolute', top:150}}>
                        <ListNotes/>  
                    </ScrollView>
                    <View style = {{position:'absolute', bottom:0, width:'100%', height:50, borderWidth:1, borderColor:'lightgrey', justifyContent:'center', backgroundColor:'white'}}>
                        <TextInput style = {{fontSize:20, marginLeft:10}} onSubmitEditing = {()=>addNoteToCompanion(newNote[0].getMonth()+1, newNote[0].getDate(), newNote[0].getFullYear(), newNote[1], newNote[0].getHours(), newNote[0].getMinutes())} onChangeText={text=>newNote[1] = text} placeholder={'Type a note...'}></TextInput>
                    </View>
                    
                </View>
            )
        }
        else{
            return null
        }
    }

    const addCompanion = () =>{
        setCompanionFormVisibility(true)
    }

    const addCompanionToState = (fn,ln,m,d,y,city,state, tempCompanions, imgsrc) =>{
        const now = new Date()
        tempCompanions.push([fn, ln, m, d, y,city, state,[],0, ((now.getMonth()+1).toString()+'/'+now.getDate()+'/'+now.getFullYear()), imgsrc, [0, 0]])
        setCompanions(tempCompanions)
        setCompanionFormVisibility(false)

    }

    const addNoteToCompanion = (month, day, year, note, hours, minutes) =>{

        if(minutes<10){
            minutes= '0' + minutes
        }

        if(hours>12){
            hours = hours - 12
            minutes +=' PM'
        }
        else{
            minutes +=' AM'
        }
        const tempCompanions = [...companions]
        tempCompanions[chosenCompanion][7].push([month + '/' + day + '/' + year + '\n' + hours + ":" + minutes, note])
        setCompanions(tempCompanions)
    }

    const AddACompanionForm = () =>{

        useEffect(() => {
            (async () => {
            if (Platform.OS !== 'web') {
                const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
                if (status !== 'granted') {
                alert('Sorry, we need camera roll permissions to make this work!');
                }
            }
            })();
        }, []);

        const pickImage = async () => {
            let result = await ImagePicker.launchImageLibraryAsync({
              mediaTypes: ImagePicker.MediaTypeOptions.All,
              allowsEditing: true,
              aspect: [4, 3],
              quality: 1,
            });
        
            if (!result.cancelled) {
              setImage(result.uri);
            }
          };


        if (companionFormVisibility){

            const tempCompanions = [...companions]
            

            var fn= ''
            var ln= ''
            var m = 'January'
            var d = 0
            var y = 0
            var city = ''
            var state = ''
            return(
                <ScrollView style = {{backgroundColor:'white', height:'100%', width:'100%', elevation:10, position:'absolute', top:90}}>
                    <Text style={{position:'absolute', top:20, right:20, fontSize:20}} onPress={()=>setCompanionFormVisibility(false)}>x</Text>
                    <Text style={{fontSize:25, textAlignVertical:'center', textAlign:'center', marginTop:50}}>Add a Companion</Text>
                    <TouchableOpacity onPress={()=>pickImage()}>
                        <Image style={{height:80, width:80, backgroundColor:'white', alignSelf:'center', marginTop:50, marginBottom:50}} source = {{uri:image}}/>
                    </TouchableOpacity>
                    <View style = {{marginTop:30}}>
                        <Text style={{ position:'absolute', fontSize:18, marginLeft:10}}>First Name</Text>
                        <TextInput style = {{borderWidth:1, width: 250, height:30, fontSize:19, marginLeft:150}} onChangeText={(text)=>fn=text}></TextInput> 
                    </View>   
                    <View style = {{marginTop:60}}>
                        <Text style={{ position:'absolute', fontSize:18, marginLeft:10}}>Last Name</Text>
                        <TextInput style = {{borderWidth:1, width: 250, height:30, fontSize:18, marginLeft:150}} onChangeText={(text)=>ln=text}></TextInput> 
                    </View>
                    <TouchableOpacity style={{backgroundColor:'lightblue', width:200, height:75, marginTop:100, marginBottom:100, justifyContent:'center', alignSelf:'center'}} onPress = {()=>addCompanionToState(fn,ln,m,d,y,city,state, tempCompanions, image)}>
                        <Text style = {{fontSize:20, textAlign:'center'}}>Add Companion</Text>
                    </TouchableOpacity>
                    
                </ScrollView>
            )
        }
        else{
            return null
        }
        
    }

    function handleToggle (setCompanions, tempCompanions){
        setCompanions(tempCompanions)
    }

    function toggleCompanion (companions, key, setCompanions){
        setCompanions(companions)
        const tempCompanions = [...companions]
        tempCompanions[key][8] = tempCompanions[key][8]===0? 100 : 0
        handleToggle(setCompanions, tempCompanions)
    }

    const sortCriteria = ['First Name', 'Last Name', 'Last Contacted']
    var key = sortCriteria.indexOf(companionSortCriteria.criteria)

    function sortCompanions (direction, criteria){
        const tempCompanions = [...companions]
        
        tempCompanions.sort((a,b)=>{
            if(criteria=='First Name'){
                if(a[0].toUpperCase() < b[0].toUpperCase()){
                    if (direction=='ascending'){
                        return 1;
                    }
                    else{
                        return -1;
                    }
                }
                else if (a[0].toUpperCase()>b[0].toUpperCase()){
                    if (direction=='ascending'){
                        return -1;
                    }
                    else{
                        return 1
                    }
                }
                else{
                    return 0
                }
            }
            else if (criteria=='Last Name'){
                if(a[1].toUpperCase() < b[1].toUpperCase()){
                    if (direction=='ascending'){
                        return 1;
                    }
                    else{
                        return -1;
                    }
                }
                else if (a[1].toUpperCase()>b[1].toUpperCase()){
                    if (direction=='ascending'){
                        return -1;
                    }
                    else{
                        return 1
                    }
                }
                else{
                    return 0
                }
            }
            else if (criteria=='Last Contacted'){

                const [whichIsNewer] = calculateDateDifference(a,b)

                if(whichIsNewer == 'a'){
                    if (direction=='ascending'){
                        return 1;
                    }
                    else{
                        return -1;
                    }
                }
                else if (whichIsNewer == 'b'){
                    if (direction=='ascending'){
                        return -1;
                    }
                    else{
                        return 1
                    }
                }
                else{
                    return 0
                }
            }
            }
        )
        setCompanionSortCriteria({direction:direction, criteria:criteria})
        setCompanions(tempCompanions)
        
        
    }

    const calculateDateDifference = (a,b)=>{

        const aList = a[9].split('/');
        const bList = b[9].split('/');


        if (aList[2]>bList[2]){
            return 'a'
        }
        else if (bList[2]>aList[2]){
            return 'b'
        }
        else if (aList[0]>bList[1]){
            return 'a'
        }
        else if (bList[0]>aList[1]){
            return 'b'
        }
        else if (aList[1]>bList[0]){
            return 'a'
        }
        else {
            return 'b'
        }
        

    }

    const RelationshipBar = ({up, down, lastContacted}) =>{

        

        var agreeability = 50 + up - down

        agreeability = agreeability > 100 ? 100 : agreeability < 0 ? 0 : agreeability

        lastContacted = lastContacted.split('/')
        const todaysDate = new Date()
        const year = todaysDate.getFullYear()
        const month = todaysDate.getMonth()+1
        const day = todaysDate.getDate()
        const timeSinceLastContacted = ((parseInt(year)-parseInt(lastContacted[2]))*365) + ((parseInt(month)-parseInt(lastContacted[0]))*30) + ((parseInt(day)-parseInt(lastContacted[1])))

        const recency = parseInt(timeSinceLastContacted) < 1 ? 100 : parseInt(timeSinceLastContacted) < 7 ? 90 : parseInt(timeSinceLastContacted) < 30 ? 75 : parseInt(timeSinceLastContacted) < 180 ? 50 : parseInt(timeSinceLastContacted) < 360 ? 25 : parseInt(timeSinceLastContacted) < 720 ? 10 : parseInt(timeSinceLastContacted) < 1800 ? 5 : 0
        
        var familiarity = (up + down)*5 - timeSinceLastContacted 

        familiarity = familiarity > 100 ? 100 : familiarity < 0 ? 0 : familiarity
        

        const score = (familiarity + (agreeability*5) + recency)/7
        const bar = new Array(parseInt(score))
        const color = score>95?'#00F5FF':score>75?'#00A1FF': score>50?'#3ADD15': score>25?'#EEA50B':score>5?'#D59818':'red'
        for(var i = 0; i<parseInt(score); i++){
            bar[i] = i
        }
        
        return (
            bar.map(number=>{
                return(
                <View style = {{width:'1%', height:'100%', backgroundColor:color, margin:0}}></View>
            )
        }))
    }

    const handleUp = (key) =>{
        const tempCompanions = [...companions]
        const now = new Date()
        tempCompanions[key][9] = (now.getMonth()+1).toString() + '/' + now.getDate() + '/' + now.getFullYear()
        tempCompanions[key][11][0] += 1
        setCompanions(tempCompanions)
    }
    const handleDown = (key) =>{
        const tempCompanions = [...companions]
        const now = new Date()
        tempCompanions[key][9] = (now.getMonth()+1).toString() + '/' + now.getDate() + '/' + now.getFullYear()
        tempCompanions[key][11][1] += 1
        setCompanions(tempCompanions)
    }
    const handleDelete = (key) =>{
        const tempCompanions = [...companions]
        tempCompanions.splice(key,1)
        setCompanions(tempCompanions)
    }

    


    const ListCompanions = ({companions, setCompanions}) => {

        
        saveToBrowser()
        return(
            companions.map((companion,key)=>{
                return(
                    <View>
                        <View key = {key} style={{height:100, width:'100%', backgroundColor:'indianred', borderColor:'black', borderWidth:1, marginTop:4}}>
                            <TouchableOpacity key={key} style = {{height:'100%', width:'100%'}} onPress={()=>toggleCompanion(companions, key, setCompanions)}>
                                <Text style = {{fontSize:18, marginLeft:100, marginTop:10, marginBottom:10}}>{companion[0].toString()} {companion[1].toString()}</Text>
                                <Text style = {{fontSize:15, marginLeft:100, marginTop:-4}}>{'Last Contacted: ' + companion[9]}</Text>
                                <View style = {{borderWidth:1, width:'60%', marginLeft:100, marginTop:10, height:10, backgroundColor:'lightgrey', flexDirection:'row'}}>
                                    <RelationshipBar up = {companion[11][0]} down = {companion[11][1]} lastContacted = {companion[9]}/>
                                </View>
                            </TouchableOpacity>
                            <Image style={{height:80, width:80, backgroundColor:'white', marginLeft:5, marginTop:9, position:'absolute'}} source = {{uri:companion[10]}}/>
                        </View>
                        <View style = {{height:companion[8], width:'100%', backgroundColor:'indianred', borderWidth:1}}>
                            <TouchableOpacity testID='editProfileButton'  style={{backgroundColor:'white', width:60, height:60, position:'absolute', left:10, justifyContent:'center', borderRadius:40, top:15, elevation:2}}>
                                <Text style={{fontSize:30,  textAlign:'center'}} >&#x1f464;</Text>
                            </TouchableOpacity>
                            <TouchableOpacity testID='editNoteButton' onPress = {()=>{setChosenCompanion(key);setCompanionNoteVisibility(true)}} style={{backgroundColor:'white', width:60, height:60, position:'absolute', left:100, justifyContent:'center', borderRadius:40, top:15,  elevation:2}}>
                                <Text style={{fontSize:30,  textAlign:'center'}}>&#x1f4dd;</Text>
                            </TouchableOpacity>
                            <TouchableOpacity testID='upButton' onPress = {()=>handleUp(key)}  style={{backgroundColor:'white', width:60, height:60, position:'absolute', right:100, justifyContent:'center', borderRadius:40, top:15, elevation:2}}>
                                <Text style={{fontSize:30,  textAlign:'center'}} >&#128077;</Text>
                            </TouchableOpacity>
                            <TouchableOpacity testID='downButton' onPress = {()=>handleDown(key)}  style={{backgroundColor:'white', width:60, height:60, position:'absolute', right:10, justifyContent:'center', borderRadius:40, top:15, elevation:2}}>
                                <Text style={{fontSize:30,  textAlign:'center'}} >&#128078;</Text>
                            </TouchableOpacity>
                            <TouchableOpacity onPress = {()=>handleDelete(key)} style = {{position:'absolute', marginLeft:5, backgroundColor:'red', borderRadius:20, height:30, width:30, marginTop:25, elevation:3, right:'46.5%', top:'9%'}}  >
                                <Text style = {{fontSize:25, position:'absolute', alignSelf:'center', transform:[{translateY:-7}]}} >{'x'}</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                    
                )      
            })
            
        )
    }
    
    return(
        <View style={{height:'100%'}}>
            <View style = {{height:50, alignItems:'center', marginTop:'10%', zIndex:1}}>
                    <Text style = {{fontSize:20}}>Mercurous</Text>
                    <Text style = {{position:'absolute', left:5, fontSize:20}} onPress = {()=>setMenuVisibility(!menuVisibility)}>{'\u2630'}</Text>
            </View>
            <View style = {{width:'100%', height:'5%', backgroundColor:'#E2BAB7', flexDirection:'row', alignItems:'center'}}>
                <Text style = {{color:'#460702', marginLeft:'2%', fontSize:15, }}>Sort By: </Text>
                <TouchableOpacity style = {{marginLeft:2}} onPress={()=>{sortCriteria[key+1] ? sortCompanions(companionSortCriteria.direction, sortCriteria[key+1]): sortCompanions(companionSortCriteria.direction, sortCriteria[0])}}>
                    <Text style = {{color:'#951910', fontSize:15, fontWeight:'bold'}} >{companionSortCriteria.criteria}</Text>
                </TouchableOpacity>
                <TouchableOpacity style = {{marginLeft:10}} onPress = {()=>{companionSortCriteria.direction == 'ascending'? sortCompanions('descending',companionSortCriteria.criteria): sortCompanions('ascending',companionSortCriteria.criteria)}}>
                    <Text style = {{color:'#951910', fontSize:20, fontWeight:'bold'}}>{companionSortCriteria.direction=='ascending'? '\u21e1' : '\u21e3' }</Text>
                </TouchableOpacity>
                <TouchableOpacity  style={{ justifyContent:'space-between', elevation:0, position:'absolute',right:"2%"}}  onPress={addCompanion}>
                <Text style={{fontSize:20, textAlign:'center'}}>{'\u2795'}</Text>
            </TouchableOpacity>
            </View>
            <ScrollView>
                <ListCompanions companions={companions} setCompanions = {setCompanions}/>
            </ScrollView>
            
            <AddACompanionForm/>
            <CompanionNotes/>
            <Menu visibility = {menuVisibility} setVisibility = {setMenuVisibility} setCurrentPage = {setCurrentPage} currentPage = {currentPage} logo={logo} styles={styles}/>
        </View>
        
    )
}