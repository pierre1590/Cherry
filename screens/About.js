import React from 'react'
import { View,Text, StyleSheet, Linking} from 'react-native'
import MapView, {Marker} from 'react-native-maps';
import {Ionicons} from '@expo/vector-icons';


export const About = () => {
  return (
    <>
      <View style={styles.container}>
        <Text style={styles.text}>
          We are a small farm in the south-east of Bari that produces cherries
          in the period May - June.
        </Text>
      </View>
      <View style={styles.containerMap}>
        <MapView
          style={styles.map}
          region={{
            latitude: 40.9183,
            longitude: 17.022,
            latitudeDelta: 0.0922,
            longitudeDelta: 0.0421,
          }}
        >
          <Marker
            coordinate={{ latitude: 40.9183, longitude: 17.022 }}
            title="Our farm"
          />
        </MapView>
      </View>
      <View style={styles.contacts}>
        <Text style={styles.textContact}>Contact:</Text>
        <View style={styles.contactEmail}>
          <Ionicons name="mail" size={24} color="#fff" />
          <Text style={styles.contactText}>E-mail: </Text>
          <Text
            style={styles.textContactEmail}
            onPress={() => Linking.openURL("mailto:piero.sa@icloud.com")}
          >
          {' '}
            Piero Sabino
          </Text>
        </View>
        <View style={styles.contactPhone}>
          <Ionicons name="call" size={24} color="#fff" />
          <Text style={styles.contactText}>Phone:</Text>
          <Text
            style={styles.textContactPhone}
            onPress={() => Linking.openURL("tel:+39 3395997631")}
          >
          {' '}
            +39 3395997631
          </Text>
        </View>
      </View>
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
       fontSize: 20,
       color: '#f00',
    },
    
    containerMap: {
      marginTop: 30,
      height: 300,
      width: 300,
      alignSelf: 'center',
      justifyContent: 'center',
      alignItems: 'center',
    },
    map: {
      ...StyleSheet.absoluteFillObject,
      borderRadius: 30,
    },
    contacts: {
      marginTop: 5,
      marginBottom: 25,
      alignItems: 'center',
      justifyContent: 'center',
      alignSelf: 'center',
      padding: 10,
     
    },
    textContact: {
      textAlign: 'center',
      fontSize: 30,
      fontWeight: 'bold',
      color: '#fff',
      padding: 10,
      marginTop: 20,
    },
    textContactEmail: {
      color: '#fff',
      fontSize: 22,
      fontWeight: 'bold',
      textDecorationLine: 'underline',
    },
    textContactPhone: {
      color: '#fff',
      fontSize: 22,
      fontWeight: 'bold',
      textDecorationLine: 'underline',
    },
    contactEmail: {
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center',
    },
    contactPhone: {
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center',
      marginTop: 10,
    },
    contactText:{
      color: '#fff',
      fontSize: 20,
    }
  })