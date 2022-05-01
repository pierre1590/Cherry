import React, {useState} from 'react'
import { Card } from '../components/UI/Card'
import { View, StyleSheet, Text, ScrollView, Image,} from 'react-native'
import Button from '../components/UI/Button'

export const Recipes = () => {
const[modalVisible, setModalVisible] = useState(false)

    return (
      <View style={styles.container}>
        <ScrollView>
          <Card>
            <Text style={styles.title}>Recipe</Text>
            <Image />
            <Text>Description</Text>
           {/*Create a Button to open the website of the recipe */}
            <Button onPress={() => setModalVisible(true)}>
            Details...
            </Button>

          </Card>
         
        </ScrollView>
      </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
})




