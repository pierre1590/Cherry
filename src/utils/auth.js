import axios from 'axios';
import {Alert} from 'react-native';
import {API_KEY} from '@env';


//Function authenticate with async/await and try/catch and if the user is authenticated, return the token otherwise return the login screen
const authenticate = async (mode, email, password) => {

   
   
    const url = `https://identitytoolkit.googleapis.com/v1/accounts:${mode}?key=${API_KEY}`;
  
    if (mode !== 'signUp' && mode !== 'signInWithPassword') {
        Alert.alert('Invalid mode!');
        return;
    }

    try {
        const response = await axios.post(url, {
            email: email,
            password: password,
            returnSecureToken: true
        });
       Alert.alert('Authentication successful!');
       return response.data.idToken;
    } catch (error) {
        throw new Error(error.response.data.error.message);
    }
};





export const createUser = async({email, password}) => {
await authenticate('signUp', email, password);
}


export const signIn = async({email, password}) => {
    await authenticate('signInWithPassword', email, password);
};
