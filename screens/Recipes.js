import React, {useEffect, useState} from 'react'
import { Card } from '../components/UI/Card'
import { View, StyleSheet, Text, FlatList, Image,Linking} from 'react-native'
import Button from '../components/UI/Button'
import {Data} from '../recipe'

export const Recipes = () => {
    const [recipes, setRecipes] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState();
    
    useEffect(() => {
      //Convert Data.js to a javascript object
      const item = Object.values(Data);
      setRecipes(item);
    }, []);
  


   
    return (
        <>
            <FlatList
                data={recipes}
                keyExtractor={item => item.id}
                renderItem={({item}) => (
                    <Card>
                       <View style={styles.container}>
                           <View style={styles.textContainer}>
                              <Text style={styles.title}>{item.title}</Text>
                           </View>
                            <View>
                              <Image style={styles.image} source={{uri: item.image}}/>
                            </View>
                            <View style={styles.textContainer}>
                                <Text style={styles.text}>Ready in {item.readyInMinutes} minutes</Text>
                                <Text style={styles.text}>Servings {item.servings}</Text>
                            </View>
                            <View style={styles.buttonContainer}>
                                <Button onPress={() => Linking.openURL(item.sourceUrl)}>View Recipe</Button>
                            </View>
                       </View>
                    </Card>
                )}
            />

        </>     
    )
};



const styles = StyleSheet.create({
   
    container: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        marginVertical: 20,
        marginHorizontal: 20,
    },
    image: {
        width: 150,
        height: 158,
        borderRadius: 15,
    },
    textContainer: {
      marginVertical: 10,
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      padding: 10,
    },
    title: {
        fontSize: 25,
        fontWeight: 'bold',
        textAlign: 'center',
    },
    text: {
        marginVertical: 5,
        fontSize: 18,
        textAlign: 'center',
    },
    buttonContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        padding: 10,
    },
});



