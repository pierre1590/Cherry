import {useState,useEffect,useContext} from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet,ImageBackground,Alert, View } from 'react-native';
import { NavigationContainer,useNavigation } from '@react-navigation/native';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {Products} from './screens/Products';
import {Login} from './screens/Login';
import {SignUp} from './screens/SignUp';
import {Recipes} from './screens/Recipes';
import { About } from './screens/About';
import {Cart} from './screens/Cart';
import {Ionicons} from '@expo/vector-icons';
import AuthContextProvider,{AuthContext} from './context/auth-context';
import CartContextProvider,{CartContext} from './context/cart-context';
import AsyncStorage from '@react-native-async-storage/async-storage';
import AppLoading from 'expo-app-loading';



const Drawer = createDrawerNavigator();



  function AuthStack() {
    return (
      <Drawer.Navigator
          initialRouteName="SignUp"
          screenOptions={{
            headerStyle: {
              backgroundColor: "#f01",
              borderBottomLeftRadius: 30,
              borderBottomRightRadius: 30,
              height:85,
            },
            headerTintColor: "#fff",
            headerTitleStyle: {
              fontWeight: "bold",
              fontSize:25,
            },
            drawerActiveBackgroundColor: "#fff",
            drawerStyle: {  
              backgroundColor: "#f01",
              opacity: 0.8,
              marginTop: 70,
              borderTopRightRadius:20,
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
          <Drawer.Screen
        name="Login"
        component={Login}
        options={{
          title: "Login",
          drawerIcon: ({ focused }) => (
            <Ionicons
              name="md-enter"
              size={25}
              color={focused ? "#f21" : "#fff"} />
          ),
        }} />
        <Drawer.Screen
          name="SignUp"
          component={SignUp}
          options={{
            title: "Sign Up",
            drawerIcon: ({ focused }) => (
              <Ionicons
                name="md-person-add"
                size={25}
                color={focused ? "#f21" : "#fff"} />
            ),
          }} />
          <Drawer.Screen
          name="About"
          component={About}
          options={{
            title: "About",
            drawerIcon: ({ focused }) => (
              <Ionicons
                name="md-information-circle-outline"
                size={25}
                color={focused ? "#f21" : "#fff"} />
            ),
          }} />
          <Drawer.Screen
          name="Products"
          component={Products}
          options={{
            title: "Products",
            drawerIcon: ({ focused }) => (
              <Ionicons
                name={focused ? "list-circle" : "list-circle"}
                size={25}
                color={focused ? "#f21" : "#fff"} />
            ),
           
          }} 
          />
        </Drawer.Navigator>
    );
 }    


 function AuthenticatedStack() {
 const authCtx = useContext(AuthContext);
 const crtCtx = useContext(CartContext);

 const {cart} = crtCtx;
 
 
   


 const {navigate} = useNavigation();
 
  return (
    
      <Drawer.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: "#f01",
          borderBottomLeftRadius: 20,
          borderBottomRightRadius: 20,
        },
        headerTintColor: "#fff",
        headerTitleStyle: {
          fontWeight: "bold",
          fontSize: 25,
        },
        drawerActiveBackgroundColor: "#fff",
        drawerStyle: {
          backgroundColor: "#f01",
          opacity: 0.8,
          width: "72%",
          marginTop: 70,
          borderTopRightRadius: 20,
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
        //headerRight with two icons
        headerRight: () => (
          <View style={{ flexDirection: "row" }}>
          {cart.length > 0  ? (
            <Ionicons
              name="md-cart"
              size={25}
              color="#fff"
              style={{ marginRight: 15 }}
              onPress={() => {
                navigate("Cart");
              }}
            />
          
         ):(
            <Ionicons
              name="md-cart"
              size={25}
              color="#fff"
              style={{ marginRight: 15 }}
              onPress={() => {
                Alert.alert("Your cart is empty");
              }}
            />
          )}

            <Ionicons
              name="log-out"
              size={25}
              color="#fff"
              style={{ marginRight: 30 }}
              onPress={() => {
                Alert.alert("Logout", "Are you sure you want to logout?", [
                  {
                    text: "Cancel",
                    style: "cancel",
                  },
                  {
                    text: "OK",
                    onPress: () => authCtx.logout(),
                  },
                ]);
              }}
            />
          </View>
        ),
      }}
      initialRouteName="Profile"
    >

      
    
      <Drawer.Screen
        name="Products"
        component={Products}
        options={{
          title: "Products",
          drawerIcon: ({ focused }) => (
            <Ionicons
              name={focused ? "list-circle" : "list-circle"}
              size={25}
              color={focused ? "#f21" : "#fff"}
            />
          ),
        }}
      />
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
        name="Recipes"
        component={Recipes}
        options={{
          title: "Recipes",
          drawerIcon: ({ focused }) => (
            <Ionicons
              name="md-book-outline"
              size={25}
              color={focused ? "#f21" : "#fff"}
            />
          ),
        }}
      />
      <Drawer.Screen
        name="Cart"
        component={Cart}
        options={{
          title: "Cart",
          drawerIcon: ({ focused }) => (
            <Ionicons
              name="md-cart"
              size={25}
              color={focused ? "#f21" : "#fff"}
            />
          ),
        }}
      />
    </Drawer.Navigator>
  );
}
  

   
   

 function Navigation() {
  const authCtx = useContext(AuthContext);
  
  return (
    <>
    <NavigationContainer>
      {!authCtx.isAuthenticated && <AuthStack />}
      {authCtx.isAuthenticated && <AuthenticatedStack />}
    </NavigationContainer>
    </>
  );
} 


function Root() {
  const [isTryingLogin, setIsTryingLogin] = useState(true);

  const authCtx = useContext(AuthContext);
 

  useEffect(() => {
    async function fetchToken() {
      const storedToken = await  AsyncStorage.getItem('token');
      
      if (storedToken) {
        authCtx.authenticate(storedToken);
      }
      setIsTryingLogin(false);
    }
    
    fetchToken();
  }, []);

 



  if (isTryingLogin) {
    return <AppLoading />;
  } else {
    return <Navigation />;
  }
}




  export default function App() {
      

  return (
    <>
      <StatusBar style="light" />

      <ImageBackground
        source={require("./assets/img/cherries.png")}
        style={styles.backgroundImage}
      >
        <AuthContextProvider>
          <CartContextProvider>
            <Root />
          </CartContextProvider>
        </AuthContextProvider>
      </ImageBackground>
    </>
  );
}

       

const styles = StyleSheet.create({
  backgroundImage: {
    resizeMode: "cover",
    opacity: 0.9,
    flex: 1,
  } 
});
  
 
