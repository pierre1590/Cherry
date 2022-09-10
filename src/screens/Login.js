import { useState,useContext } from 'react';
import {Text,StyleSheet,View,TextInput} from 'react-native';
import Button from '../components/UI/Button';
import {Formik} from 'formik';
import * as Yup from 'yup';
import { signIn } from '../utils/auth';
import { AuthContext } from '../context/auth-context';


const LoginSchema = Yup.object().shape({
    email: Yup.string().email('Please enter valid email').required('Email is required').lowercase(),
    password: Yup.string().min(6,({min}) => `Password must be at least ${min} characters`).required('Password is required'),
});



export const Login = ({navigation}) => {
    const [isAuthenticated, setAuthenticated] = useState(false);

    const authCtx = useContext(AuthContext);
    
 

    return (
      <>
        <Formik
          initialValues={{ email: "", password: "" }}
          validationSchema={LoginSchema}
          onSubmit={(values) => {
            setAuthenticated(true);
            signIn(values)
            .then(() => {
              const token = signIn(values);
              authCtx.authenticate(token);
            })
            .catch((err) => {
              setAuthenticated(false);
            console.error(err);
            });
          }}
        >
          {({
            handleChange,
            handleBlur,
            handleSubmit,
            values,
            errors,
            isValid,
          }) => (
            <View style={styles.container}>
              <Text style={styles.labelEmail}>E-mail</Text>
              <TextInput
                onChangeText={handleChange("email")}
                onBlur={handleBlur("email")}
                value={values.email}
                keyboardType="email-address"
                placeholder="Enter email..."
                style={styles.email}
                name="email"
              />
              {errors.email && (
                <View style={styles.containerError}>
                  <Text style={styles.error}>{errors.email}</Text>
                </View>
              )}
              <Text style={styles.labelPassword}>Password</Text>
              <TextInput
                onChangeText={handleChange("password")}
                onBlur={handleBlur("password")}
                value={values.password}
                secureTextEntry={true}
                placeholder="Enter password..."
                style={styles.password}
                name="password"
              />
              {errors.password && (
                <View style={styles.containerError}>
                  <Text style={styles.error}>{errors.password}</Text>
                </View>
              )}
              <View style={styles.buttonLogin}>
                <Button
                  mode='flat'
                  onPress={handleSubmit}
                  android_ripple={{ color: "#ccc" }}
                  style={styles.submit}
                  disabled={!isValid }
                >
                  Login
                </Button>
              </View>
            </View>
          )}
        </Formik>

        <View style={styles.newCustomer}>
          <Text style={styles.textNewCustomer}>Don't have an account?</Text>
        </View>
        <Button
            android_ripple={{ color: "#ccc" }}
            style={styles.signup}
            onPress={() => {
              navigation.navigate("SignUp");
            }}
            mode='flat'
          >
            Sign Up
          </Button>
      </>
    );
}

const styles = StyleSheet.create({
    container:{
        width:'100%',
        alignSelf:'center',
        marginTop:30,
        
    },
   email: {
        borderWidth: 1,
        borderColor: '#000',
        borderRadius: 10,
        padding: 15,
        margin: 20,
        fontSize:18,
        backgroundColor: '#fff',
    },
    labelEmail: {
        fontSize: 20,
        color: '#fff',
        marginLeft: 25,
        fontWeight: 'bold',
    },
    labelPassword: {
      fontSize: 20,
      color: '#fff',
      marginLeft: 25,
      fontWeight: 'bold',
    },
    password: {
        borderWidth: 1,
        borderColor: '#000',
        borderRadius: 10,
        padding: 15,
        margin: 20,
        fontSize: 18,
        backgroundColor: '#fff'
    },
    newCustomer:{
      justifyContent:'center',
      alignItems:'center',
      alignSelf: 'center',
      width: '55%',
      marginTop: 15,
      backgroundColor: '#fff',
      borderRadius: 10,
    },
    textNewCustomer:{
      color: "#000",
      fontSize:15,
      fontWeight: 'bold',
      marginTop: 10,
    },
    signup:{
        alignSelf: 'center',
        elevation: 10,
        shadowColor: '#fff',
        shadowOffset: {
            width: 0,
            height: 2
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,

    },
    buttonLogin:{
        width:'50%',
        alignSelf:'center',
        marginTop: 3,

    },
    containerError:{
      marginTop: 5,
      marginBottom: 10,
      backgroundColor:'#fff',
      borderRadius: 10,
      width: '50%',
      padding: 5,
      justifyContent: 'center',
      alignItems: 'center',
      alignSelf: 'center',
    },
    error:{
     fontSize: 15,
     color: "#f00", 
     textAlign: "center", 
     fontWeight: "bold",
    }
 
})