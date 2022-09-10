import React, {useEffect, useState} from 'react'
import { Card } from '../components/UI/Card'
import { View, StyleSheet, Text, FlatList, Image,ScrollView} from 'react-native'

import {getRecipe} from '../apiUtil/apiRecipe'


export const Recipes = () => {
    const [recipes, setRecipes] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState();

    
    
   useEffect(() => {
        const fetchRecipes = async () => {
            setLoading(true);
            try {
                const response = await getRecipe();
                setRecipes(response);
            } catch (error) {
                setError(error.message);
            }
            setLoading(false);
        }
        fetchRecipes();
    }, []);
   
        
    

   
    return (
        <>
            <FlatList
                data={recipes}
                keyExtractor={item => item.id}
                renderItem={({item}) => (
                    <Card>
                        <View style={styles.container}>
                        <Text style={styles.title}>{item.title}</Text>
                            <Image style={styles.image} source={{uri: item.image}} />
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
        alignSelf: 'center',
    },
    textContainer: {
      marginVertical: 10,
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      padding: 10,
    },
    title: {
        marginBottom: 10,
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
    ingredients: {
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        padding: 10,
    }
});



