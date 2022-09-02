import React from 'react'
import {Text, TextInput, View,StyleSheet} from 'react-native'



export const Profile = ({values}) => {
    


  return (
    <>
      <View style={styles.container}>
        <Text style={styles.labelEmail}>E-mail</Text>
        <TextInput style={styles.email}  name="email" />
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container:{
    flex: 1,
    marginTop: 40,
  },
  labelEmail: {
    fontSize: 20,
    color: "#fff",
    marginLeft: 25,
    fontWeight: "bold",
  },
  email: {
    borderWidth: 1,
    borderColor: "#000",
    borderRadius: 10,
    padding: 10,
    margin: 10,
    fontSize: 18,
    backgroundColor: "#fff",
  },
})
