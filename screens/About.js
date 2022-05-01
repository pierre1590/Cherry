import React from 'react'
import { View,Text, StyleSheet,Image,ScrollView} from 'react-native'

export const About = () => {
  return (
    <>
      <View style={styles.container}>
        <Text style={styles.text}>
          We are a small farm that produces cherries from the south-east of
          Bari.
        </Text>
      </View>
      <ScrollView>
        <Image  
            style={styles.photo}
            source={require('../assets/img/cherries-trees.jpg')}
        />

        <Image
            style={styles.photo}
            source={require('../assets/img/cherries-trees.jpg')}
        />
        <Image
            style={styles.photo}
            source={require('../assets/img/albero_ciliegie.jpg')}
        />
     </ScrollView>
    </>
  );
}

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        justifyContent: 'center',
        alignSelf: 'center',
        width: '90%',
        borderRadius: 10,
        backgroundColor: '#fff',
        marginTop: 20,
        padding: 10,
    },
    text: {
       textAlign: 'justify',
       fontWeight: 'bold',
       fontSize: 20,
       color: '#f00',
    },
    photo:{
        width: '100%',
        height: 190,
        width:  280,
        alignSelf: 'center',
        marginTop: 20,
        marginBottom: 15,
        borderRadius: 15,
        shadowOffset: { width: 4, height: 6 },
        shadowColor: '#0b7',
        shadowOpacity: 0.8,
        shadowRadius: 2,
    } 
})