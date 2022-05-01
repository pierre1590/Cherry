import {useState} from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet,ImageBackground } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {Profile} from './screens/Profile';
import {Shop} from './screens/Shop';
import {Login} from './screens/Login';
import {SignUp} from './screens/SignUp';
import {Recipes} from './screens/Recipes';
import { About } from './screens/About';
import {Ionicons} from '@expo/vector-icons';
import * as SplashScreen from 'expo-splash-screen';




export default function App() {
  const [loggedIn, setLoggedIn] = useState(false);

  const Drawer = createDrawerNavigator();

  SplashScreen.preventAutoHideAsync();
  setTimeout(SplashScreen.hideAsync, 5000);



  return (
    <>
      <StatusBar style="light" />
      
      <ImageBackground
            source={require("./assets/img/cherries.png")}
            style={styles.backgroundImage}
          >
      <NavigationContainer>
        
        <Drawer.Navigator
          initialRouteName="SignUp"
          screenOptions={{
            headerStyle: {
              backgroundColor: "#f01",
              height: 70,
            },
            headerTintColor: "#fff",
            headerTitleStyle: {
              fontWeight: "bold",
            },
            drawerActiveBackgroundColor: "#fff",
            drawerStyle: {  
              backgroundColor: "#f01",
              opacity: 0.8,
              width: "92%",
              marginTop: 70,
            },
            drawerActiveTintColor: "#f00",
            drawerInactiveTintColor: "#fff",
            drawerLabelStyle: {
              fontWeight: "bold",
              fontSize: 18,
              marginHorizontal: 5,
              marginVertical: 3,
              
            },
            overlayColor: "rgba(0,0,0,0.3)",
            headerMode: "none",
            sceneContainerStyle: {
              backgroundColor: "transparent",
              opacity: 1,
            },
            
           
          }}
        >
         
            {/* if a person is loggedIn shows profile otherwise login or signup*/}
            {loggedIn ? (
              <Drawer.Screen
                name="Profile"
                component={Profile}
                options={{
                  title: "Profile",
                 
                  drawerIcon: ({ focused }) => (
                    <Ionicons
                      name="md-person"
                      size={25}
                      color={focused ? "#f21" : "#fff"}
                    />
                  ),
                  color: "#f21",
                }}
              />
            ) : (
              <>
                <Drawer.Screen
                  name="Login"
                  component={Login}
                  options={{
                    title: "Login",
                    drawerIcon: ({ focused }) => (
                      <Ionicons
                        name="md-enter"
                        size={25}
                        color={focused ? "#f21" : "#fff"}
                      />
                    ),
                  }}
                />
                <Drawer.Screen
                  name="SignUp"
                  component={SignUp}
                  options={{
                    title: "Sign Up",
                    drawerIcon: ({ focused }) => (
                      <Ionicons
                        name="md-person-add"
                        size={25}
                        color={focused ? "#f21" : "#fff"}
                      />
                    ),
                  }}
                />
              </>
            )}

            
            <Drawer.Screen
              name="About"
              component={About}
              options={{
                title: "About",
                drawerIcon: ({ focused }) => (
                  <Ionicons
                    name="md-information-circle-outline"
                    size={25}
                    color={focused ? "#f21" : "#fff"}
                  />
                ),
              }}
            />
            <Drawer.Screen
              name="Shop"
              component={Shop}
              options={{
                title: "Shop",
                drawerIcon: ({ focused }) => (
                  <Ionicons
                    name={focused ? "ios-cart" : "ios-cart"}
                    size={25}
                    color={focused ? "#f21" : "#fff"}
                  />
                ),
                headerRight: () => (
                  <Ionicons
                    name="md-cart"
                    size={25}
                    color="#fff"
                    style={{ marginRight: 45 }}
                  />
                ),
              }}
            />
            <Drawer.Screen 
              name='Recipes'
              component={Recipes}
              options={{
                title: 'Recipes',
                drawerIcon: ({ focused }) => (
                  <Ionicons
                    name={focused ? "ios-book" : "ios-book"}
                    size={25}
                    color={focused ? "#f21" : "#fff"}
                  />
                ),
              }}
            />
         
        </Drawer.Navigator>
      
      </NavigationContainer>

      </ImageBackground>
      
    </>
  );
}
       

const styles = StyleSheet.create({
  
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  backgroundImage: {
    resizeMode: "cover",
    opacity: 0.9,
    flex: 1,
  }
  
});
