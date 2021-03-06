
import React, { Component } from 'react';
import {Image, ScrollView,StatusBar,View,Text,StyleSheet} from 'react-native';
import { SearchBar } from 'react-native-elements';
import { Container,Drawer, List,ListItem,Header, Title,Thumbnail, Tab,Tabs, TabHeading, Content, Footer, FooterTab, Button, Left, Right, Body, Icon ,Fab} from 'native-base';
import { DrawerNavigator,StackNavigator,TabNavigator } from 'react-navigation';

import Ionicons from 'react-native-vector-icons/Ionicons'; // 4.4.2

//importing file for DrawerNavigator.
import ProfileScreen from './Components/Component1/ProfileScreen';
import ListScreen from './Components/Component1/ListScreen';
import SideBar from './Components/Component1/SideBar';
import MomentsScreen from './Components/Component1/MomentsScreen';
import HighlightsScreen from './Components/Component1/HighlightsScreen';

//importing file for TabNavigator.
import NotificationScreen from  "./Components/Component1/NotificationScreen.js";
import MessageScreen from  './Components/Component1/MessageScreen';
import SearchBarActivity from  './Components/Component1/SearchBarActivity';


//ForCard Component of HomeScreen.
import ForCard from './Components/Component1/ForCard';
 class HomeScreen extends React.Component{

   static navigationOptions = {
     drawerLabel: ()=> null,
       tabBarIcon:({ff00ff00}) => (
         <Image
        source={require('./images/ios7-home.png')}
        style={[styles.icon, {Color:ff00ff00}]}
      />

    ),
  };
  render() {


    return (
      <Container>
      <Fab

            direction="up"
            containerStyle={{ bottom:60}}
            style={{ backgroundColor: '#4286f4' }}
            position="bottomRight"
            >
            <Icon name="logo-twitter" />
        </Fab>


       <ScrollView>
       <ForCard/>
       <ForCard/>
       </ScrollView>

       <Footer >
           <FooterTab style={{backgroundColor:'#fff'}}>


             <Button light >

               <Text>ALL</Text>
             </Button>


             <Button light>

               <Text>MENTIONS</Text>
             </Button>


             <Button light>
               <Icon name="settings" />

             </Button>
           </FooterTab>
         </Footer>



      </Container>
              );
         }
      }

const styles = StyleSheet.create({
  icon: {
    width: 26,
    height: 26,
  },
});

//TabNavigator section.
const MainScreenNavigator = TabNavigator(
  {
    Home: { screen: HomeScreen },
    Search: { screen: SearchBarActivity,
              navigationOptions: {
                 headerTitle: <SearchBar round lightTheme
                                   placeholder='Search Twitter'
                                   containerStyle={{width: '100%', backgroundColor:'#fff'}}/>,


                 tabBarIcon:({tintColor}) => (
                   <Image
                  source={require('./images/ios7-search.png')}
                  style={[styles.icon, {tintColor: tintColor}]}
                />

              ),
            },
     },
    NotificationScreen: { screen: NotificationScreen,
      navigationOptions : {
          headerTitle: 'Notifications',
          tabBarIcon:({tintColor}) => (
            <Image
           source={require('./images/ios7-bell.png')}
           style={[styles.icon, {tintColor: tintColor}]}
         />

       ),
     },
     },
    Messages:{screen:MessageScreen,
      navigationOptions : {
          headerTitle: 'Messages',
          tabBarIcon:({tintColor}) => (
            <Image
           source={require('./images/android-mail.png')}
           style={[styles.icon, {tintColor: tintColor}]}
         />

       ),
     },
    }
  },
  {


  //  tabBarPosition: "bottom",

   animationEnabled: true,
   tabBarOptions: {
                       activeTintColor: '#428ff4',
                       inactiveTintColor:'#428ff4',
                       activeBackgroundColor:'#fff',
                       inactiveBackgroundColor: '#fff',
                       showIcon: true,
                       showLabel:false,
                       style: {
                                  backgroundColor: '#fff',
                              },
                   },




  }


);


          //StackNavigator is defined over here.
      const Stack = StackNavigator({
                      Home: {
                        screen:MainScreenNavigator,
                        navigationOptions:({navigation}) =>({
                          title:'Home',
                          headerLeft: <DrawerButton navigation={navigation} />,
                          headerStyle: {
                                              backgroundColor: '#fff',
                                              elevation:0,

                                        },
                        }),
                      },
              });


//Drawer portion.

const DrawerButton=({navigation})=>(
  <Button transparent
   onPress={() => navigation.navigate("DrawerOpen")}
  >
  <Thumbnail small source={{uri: 'http://www.menu-icons.com/glossy-menu-icons/glossy-menu-example.png'}} />
  </Button>
);



const RootDrawer = DrawerNavigator(
      {
        Home:{
          screen:Stack,
        },
              Profile: {
                screen: ProfileScreen,
                      },

              List: {
                screen: ListScreen,

              },

              Moments: {
                screen: MomentsScreen,

              },


              HighLights: {
                screen: HighlightsScreen,

              },



      },
          {
            drawerOpenRoute: 'DrawerOpen',
            drawerCloseRoute: 'DrawerClose',
            drawerToggleRoute: 'DrawerToggle',
            contentComponent: props => <SideBar {...props} />
          }

          );


export default RootDrawer;
            
