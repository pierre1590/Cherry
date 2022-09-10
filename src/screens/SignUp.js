import {useState,useContext} from 'react';
import {Text,StyleSheet,View,TextInput,ScrollView,Alert} from 'react-native'
import Button from '../components/UI/Button';
import {Formik} from 'formik';
import {AuthContext} from '../context/auth-context';
import * as Yup from 'yup';
import { createUser } from '../utils/auth';

const SignUpSchema = Yup.object().shape({
  email: Yup.string().email('Please enter valid email').required('Email is required'),
  password: Yup.string().min(6,({min}) => `Password must be at least ${min} characters`).required('Password is required'),
});



export const SignUp = ({navigation}) => {
    const [isAuthenticated, setIsAuthenticated] = useState(false);
  
    const authCtx = useContext(AuthContext);

    return (
      <>
      <ScrollView>
        <Formik
          initialValues={{ email: "", password: "" }}
          validationSchema={SignUpSchema}
          onSubmit={(values) => {
          setIsAuthenticated(true);
           createUser(values)
            .then(() => {
              const token = createUser(values);
              authCtx.authenticate(token);
            }).catch((err) => {
              setIsAuthenticated(false);
              console.error(err);
            }
            );
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
                style={styles.email}
                keyboardType="email-address"
                placeholder="Enter email..."
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
                name="password"
                secureTextEntry={true}
                placeholder="Enter password..."
                style={styles.password}
              />
              {errors.password && (
                <View style={styles.containerError}>
                  <Text style={styles.error}>{errors.password}</Text>
                </View>
              )}
              <View style={styles.buttonSignup}>
                <Button
                  mode='flat'
                  onPress={handleSubmit}
                  android_ripple={{ color: "#ccc" }}
                  disabled={!isValid }
                  style={styles.submit}
                >
                  Sign Up
                </Button>
              </View>
            </View>
           
          )}
        </Formik>

        <View style={styles.loginContainer}>
          <Text style={styles.textLogin}>Do you already have an account?</Text>
        </View>
        <Button
            onPress={() => {
              navigation.navigate("Login");
            }}
            mode='flat'
            style={styles.login}
            >
            Login
          </Button>
          </ScrollView>
      </>
    );
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    alignSelf: "center",
    marginTop: 10,
    
  },
  email: {
    borderWidth: 1,
    borderColor: "#000",
    borderRadius: 10,
    padding: 10,
    margin: 20,
    fontSize: 18,
    backgroundColor: "#fff",
  },
  labelEmail: {
    fontSize: 20,
    color: "#fff",
    marginLeft: 25,
    fontWeight: "bold",
  },
  labelPassword: {
    fontSize: 20,
    color: "#fff",
    marginLeft: 25,
    fontWeight: "bold",
  },
  password: {
    borderWidth: 1,
    borderColor: "#000",
    borderRadius: 10,
    padding: 10,
    margin: 20,
    fontSize: 18,
    backgroundColor: "#fff",
  },
  loginContainer: {
    justifyContent: "center",
    alignItems: "center",
    alignSelf: "center",
    width: "55%",
    marginTop: 15,
    backgroundColor: "#fff",
    borderRadius: 10,
  },
  buttonSignup: {
    width: "50%",
    alignSelf: "center",
  },
  image: {
    margin: 10,
    justifyContent: "center",
    alignItems: "center",
    alignSelf: "center",
    width: "34%",
    height: 150,
    backgroundColor: "#fff",
    borderRadius: 10,
  },
  textLogin: {
    color: "#000",
    fontSize: 15,
    fontWeight: "bold",
    marginTop: 10,
  },
  containerError: {
    marginTop: 5,
    marginBottom: 10,
    backgroundColor: "#fff",
    borderRadius: 10,
    width: "50%",
    padding: 5,
    justifyContent: "center",
    alignItems: "center",
    alignSelf: "center",
  },
  error: {
    fontSize: 15,
    color: "#f00",
    textAlign: "center",
    fontWeight: "bold",
  },
  login: {
    alignSelf: "center",
    elevation: 10,
    shadowColor: "#fff",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
  },
  submit: {
    fontSize: 20,
  }
});