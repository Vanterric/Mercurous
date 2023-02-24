import { StatusBar } from 'expo-status-bar';
import React, {useEffect, useState} from 'react';
import { StyleSheet, Text, View, Dimensions } from 'react-native';
import Buckets from './components/buckets/buckets';
import ExpenseOverview from './components/expense-overview/expenseOverview';
import IncurExpense from './components/incur-expense/incurExpense';
import MonthlyBudget from './components/monthly-budget/monthlyBudget'
import UpdateBudget from './components/update-budget/updateBudget';
import WeeklyProgress from './components/weekly-progress/weeklyProgress'
import AsyncStorage from '@react-native-async-storage/async-storage'
import Tutorial from './components/Tutorial/tutorialMainPage';
import Settings from './components/Settings/settings';
import Companions from './components/companions/companions';



const deviceHeight = Dimensions.get('window').height
const deviceWidth = Dimensions.get('window').width


export default function App() {
  const [monthlyBudget,setMonthlyBudget] = useState({
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
      Play:[100, 'lightblue', 'wants',0, 0, 'Play Bucket'],
      Savings: [100, 'yellow', 'needs', 0, 0, 'Savings Bucket']
    },
    paychecks:[],
    bankBalance:0
})

  async function loadFromBrowser(){
    let data = await AsyncStorage.getItem('monthlyBudget');
    let companionData = await AsyncStorage.getItem('companions')
    if(data){
      setMonthlyBudget(JSON.parse(data));
    }
    if(companionData){
      setCompanions(JSON.parse(companionData))
    }
  }

  

  useEffect(()=>{
    /* AsyncStorage.clear() */
    loadFromBrowser()
  },[])

 

  const [menuVisibility, setMenuVisibility] = useState(false)
  const [currentPage, setCurrentPage] = useState('Monthly Budget')
  const [monthlyRevenue, setMonthlyRevenue] = useState(monthlyBudget.monthlyRevenue) 
  const [yearlyRevenue,setYearlyRevenue] = useState(monthlyRevenue) 
  const [popupSwitch,setPopupSwitch] = useState(false)
  const [tutorialPage, setTutorialPage] = useState('start')
  const [companionFormVisibility, setCompanionFormVisibility] = useState(false)
  const [companionNoteVisibility, setCompanionNoteVisibility] = useState(false)

  // index/field : 0/firstName, 1/lastName, 2/birthMonth, 3/birthDay, 4/birthYear, 5/homeCity, 6/homeState, 7/notes, 8/quickToolHeight, 9/lastContacted, 10/profilePhoto, 11[0]/upVotes, 11[1]/downVotes
  const [companions, setCompanions] = useState([['Derrick', 'Gallegos', 'November', 19, 1994, 'Weston', 'FL',[['9/19/21', 'This is the notes section. It is structured to be like diary entries. You type the entry, the app logs what you write and when you write it, so you can refer to your notes after or prior to meeting someone!']],0, '10/6/2020', 'https://scontent-mia3-2.xx.fbcdn.net/v/t1.6435-9/58462527_10218572584245187_636255046480166912_n.jpg?_nc_cat=105&ccb=1-5&_nc_sid=09cbfe&_nc_ohc=u7-T1xkUZ_4AX81Je5y&tn=atZ4gdLyHstgwhzJ&_nc_ht=scontent-mia3-2.xx&oh=25e447ea70644192d28fecc5498dd4aa&oe=61846A9A',[0,0]],['Brandon', 'Gallegos', 'October', 2, 1999, 'Weston', 'FL',[],0, '3/1/2019', 'https://scontent-mia3-1.xx.fbcdn.net/v/t1.6435-9/106231575_116556150112923_4836629516971243102_n.jpg?_nc_cat=101&ccb=1-5&_nc_sid=09cbfe&_nc_ohc=z4tOInWobZ0AX8fQlrh&_nc_ht=scontent-mia3-1.xx&oh=2f6ab03afbc18300e637babc5b653c38&oe=6182A305', [0,0]],['Sara', 'Margolis', 'January', 31, 1997, 'Weston', 'FL',[],0, '7/19/2021', 'https://scontent-mia3-2.xx.fbcdn.net/v/t1.6435-9/123223371_773223326589880_3078838121182073607_n.jpg?_nc_cat=102&ccb=1-5&_nc_sid=09cbfe&_nc_ohc=_wi0vjHgTqQAX-8vMSO&_nc_ht=scontent-mia3-2.xx&oh=ffe124d28038e883d87e199eecb04058&oe=6182D5E3', [0, 0]]])
  const [chosenCompanion, setChosenCompanion] = useState(0)
  const logo = require('./assets/mercurousLogo.jpg')
  const [image, setImage] = useState('https://www.seekpng.com/png/detail/847-8474751_download-empty-profile.png');
  const [companionSortCriteria, setCompanionSortCriteria] = useState({direction:'descending', criteria:'First Name'})

  const styles = StyleSheet.create({
    menu:{
        backgroundColor:'white',
        height:deviceHeight,
        top:'5%',
        width:"70%",
        position:'absolute',
        borderStyle:'solid',
        borderColor:'black',
        elevation:10,
        opacity:1
    },
    monthlyRevenue: {
        backgroundColor:'red',
        width: deviceWidth,
        borderStyle:'solid',
        borderWidth:1,
        borderColor:'black',
        height: (deviceHeight*.9)/9,
        justifyContent:'center'
    },
    amount:{
        right:0,
        position:'absolute',
        transform:[{translateX:-30}],
        fontSize:deviceHeight/40
    },
    label:{
        transform:[{translateX:30}],
        fontSize:deviceHeight/40
    },
    heading:{
        fontSize:deviceHeight/40,
        fontWeight:'bold'
    },
    percentages:{
        backgroundColor:'yellow',
        width: deviceWidth,
        borderStyle:'solid',
        borderWidth:1,
        borderColor:'black',
        height: 4*(deviceHeight*.9)/9,
        justifyContent:'space-around'
    },
    expenseTotals:{
        backgroundColor:'lightgreen',
        width: deviceWidth,
        borderStyle:'solid',
        borderWidth:1,
        borderColor:'black',
        height: 3*(deviceHeight*.9)/9,
        justifyContent:'space-around'
    },
    goingToSavings:{
        backgroundColor:'lightblue',
        width: deviceWidth,
        borderStyle:'solid',
        borderWidth:1,
        borderColor:'black',
        height: (deviceHeight*.9)/9,
        zIndex:1,
        justifyContent:'center'
    },
    screenShadow:{
        backgroundColor:'black',
        opacity:.5,
        height:deviceHeight,
        top:'5%',
        width:"100%",
        elevation:7,
    }
  });

  if (currentPage === 'Monthly Budget'){
    return (
      <View>
        <MonthlyBudget monthlyBudget={monthlyBudget} menuVisibility={menuVisibility} setMenuVisibility={setMenuVisibility} setCurrentPage = {setCurrentPage} currentPage = {currentPage} logo={logo} popupSwitch={popupSwitch} setPopupSwitch={setPopupSwitch} setMonthlyBudget = {setMonthlyBudget} styles={styles}/>
        <StatusBar style="auto" />
      </View>
    );
  }
  else if (currentPage === 'Update Budget'){
    return(
      <View>
        <UpdateBudget menuVisibility = {menuVisibility} setMenuVisibility = {setMenuVisibility} setCurrentPage={setCurrentPage} currentPage={currentPage} logo={logo} monthlyBudget={monthlyBudget} setMonthlyBudget = {setMonthlyBudget} monthlyRevenue = {monthlyRevenue} setMonthlyRevenue = {setMonthlyRevenue} yearlyRevenue = {yearlyRevenue} setYearlyRevenue = {setYearlyRevenue} popupSwitch={popupSwitch} setPopupSwitch={setPopupSwitch} styles={styles}/>
        <StatusBar style="auto" />
      </View>
    )
  }
  else if (currentPage === 'Weekly Progress'){
    return(
      <View>
        <WeeklyProgress menuVisibility = {menuVisibility} setMenuVisibility = {setMenuVisibility} setCurrentPage={setCurrentPage} currentPage={currentPage} logo={logo} monthlyBudget={monthlyBudget} setMonthlyBudget = {setMonthlyBudget} monthlyRevenue = {monthlyRevenue} setMonthlyRevenue = {setMonthlyRevenue} yearlyRevenue = {yearlyRevenue} setYearlyRevenue = {setYearlyRevenue} popupSwitch={popupSwitch} setPopupSwitch={setPopupSwitch} styles={styles}/>
        <StatusBar style="auto" />
      </View>
    )
  }
  else if (currentPage === 'Buckets'){
    return(
      <View>
        <Buckets menuVisibility = {menuVisibility} setMenuVisibility = {setMenuVisibility} setCurrentPage={setCurrentPage} currentPage={currentPage} logo={logo} monthlyBudget={monthlyBudget} setMonthlyBudget = {setMonthlyBudget} monthlyRevenue = {monthlyRevenue} setMonthlyRevenue = {setMonthlyRevenue} yearlyRevenue = {yearlyRevenue} setYearlyRevenue = {setYearlyRevenue} popupSwitch={popupSwitch} setPopupSwitch={setPopupSwitch} styles={styles}/>
        <StatusBar style="auto" />
      </View>
    )
  }
  else if (currentPage === 'Companions'){
    return(
      <View>
        <Companions menuVisibility = {menuVisibility} setMenuVisibility = {setMenuVisibility} setCurrentPage={setCurrentPage} currentPage={currentPage} logo={logo} monthlyBudget={monthlyBudget} setMonthlyBudget = {setMonthlyBudget} monthlyRevenue = {monthlyRevenue} setMonthlyRevenue = {setMonthlyRevenue} yearlyRevenue = {yearlyRevenue} setYearlyRevenue = {setYearlyRevenue} popupSwitch={popupSwitch} setPopupSwitch={setPopupSwitch} styles={styles} companionFormVisibility = {companionFormVisibility} setCompanionFormVisibility={setCompanionFormVisibility} companions = {companions} setCompanions = {setCompanions} companionNoteVisibility = {companionNoteVisibility} setCompanionNoteVisibility = {setCompanionNoteVisibility} chosenCompanion = {chosenCompanion} setChosenCompanion = {setChosenCompanion} image = {image} setImage = {setImage} setCompanionSortCriteria = {setCompanionSortCriteria} companionSortCriteria = {companionSortCriteria}/>
        <StatusBar style="auto" />
      </View>
    )
  }
  else if (currentPage === 'Incur Expense'){
    return(
      <View>
        <IncurExpense menuVisibility = {menuVisibility} setMenuVisibility = {setMenuVisibility} setCurrentPage={setCurrentPage} currentPage={currentPage} logo={logo} monthlyBudget={monthlyBudget} setMonthlyBudget = {setMonthlyBudget} monthlyRevenue = {monthlyRevenue} setMonthlyRevenue = {setMonthlyRevenue} yearlyRevenue = {yearlyRevenue} setYearlyRevenue = {setYearlyRevenue} popupSwitch={popupSwitch} setPopupSwitch={setPopupSwitch} styles={styles}/>
        <StatusBar style="auto" />
      </View>
    )
  }
  else if (currentPage === 'Expense Overview'){
    return(
      <View>
        <ExpenseOverview menuVisibility = {menuVisibility} setMenuVisibility = {setMenuVisibility} setCurrentPage={setCurrentPage} currentPage={currentPage} logo={logo} monthlyBudget={monthlyBudget} setMonthlyBudget = {setMonthlyBudget} monthlyRevenue = {monthlyRevenue} setMonthlyRevenue = {setMonthlyRevenue} yearlyRevenue = {yearlyRevenue} setYearlyRevenue = {setYearlyRevenue} popupSwitch={popupSwitch} setPopupSwitch={setPopupSwitch} styles={styles}/>
        <StatusBar style="auto" />
      </View>
    )
  }
  else if(currentPage === 'Settings'){
    return(
      <View>
        <Settings menuVisibility = {menuVisibility} setMenuVisibility = {setMenuVisibility} setCurrentPage={setCurrentPage} currentPage={currentPage} logo={logo} monthlyBudget={monthlyBudget} setMonthlyBudget = {setMonthlyBudget} monthlyRevenue = {monthlyRevenue} setMonthlyRevenue = {setMonthlyRevenue} yearlyRevenue = {yearlyRevenue} setYearlyRevenue = {setYearlyRevenue} popupSwitch={popupSwitch} setPopupSwitch={setPopupSwitch} styles={styles} />
        <StatusBar style="auto" />
      </View>
    )
  }
  else{
    return(
      <View>
        <Tutorial setCurrentPage = {setCurrentPage} page={tutorialPage} setPage={setTutorialPage}/>
      </View>
    )
  }
}


