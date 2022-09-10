// Cart Page
import React, {useContext,useEffect,useState} from 'react';
import { StyleSheet, Text, View, Image, FlatList,Alert } from 'react-native';
import { CartContext } from '../context/cart-context';
import { useNavigation } from '@react-navigation/native';
import { Data } from '../data';
import Button from '../components/UI/Button';


export const Cart = () => {

    const crtCtx = useContext(CartContext);
    const {cart,removeFromCart,clearCart} = crtCtx;
    const [products, setProducts] = useState([]);
    

    
    const {navigate} = useNavigation();
    
    
    useEffect(() => {
        //Convert Data.js to a javascript object
        const item = Object.values(Data);
        setProducts(item);
        }, []);

       





    const removeFromCartHandler = (item) => {
        removeFromCart(item);
    };

    const clearCartHandler = () => {
        clearCart();
    };

    const successHandler = () => {
    Alert.alert(
            'Success',
            'Your order has been placed successfully.\nIt will come soon.\nThank you for shopping with us.',
            [
                {
                    text: 'OK',
                    onPress: () => {clearCartHandler(),navigate("Products")},
                },
            ],
        );
    };

   

    const checkoutHandler = () => {
      Alert.alert(
        'Checkout',
        `Are you sure you want to checkout?`,
        [
          {
            text: 'Cancel',
            style: 'cancel',
          },
          {
            text: 'OK',
            onPress: () => successHandler(),
          },
        ],
      );
    };

    const checkoutFailed = () => {
      Alert.alert(
        'Checkout Failed',
        'Your cart is empty.\nPlease add some products to your cart.',
        [
          {
            text: 'Products',
            onPress: () => navigate("Products"),
          },
        ],
      );
    };

      

    return (
      <>
        {cart.length > 0 ? (
          <FlatList
            data={cart}
            renderItem={({ item, index }) => (
              <View style={styles.containerCard} key={index}>
                <View>
                  <Image
                    style={styles.img}
                    source={require("../assets/img/pelatau.jpg")}
                  />
                </View>
                <View>
                  <Text style={styles.title}>{item.name}</Text>
                  <Text style={styles.price}>{item.price}</Text>
                </View>
                <View>
                  <Button
                    style={styles.btnRemoveToCart}
                    onPress={() => removeFromCartHandler(item)}
                  >
                    <Text style={styles.textRemove}>X</Text>
                  </Button>
                </View>
              </View>
            )}
            keyExtractor={(item) => item.id}
          />
        ) : (
          <View>
            <Text style={styles.titleEmpty}>Your cart is empty</Text>
          </View>
        )}
        <View style={styles.container}>
          <Text style={styles.totalItems}>Total Items:  {cart.length} </Text>
          <Text style={styles.totalPrice}>
            Total Price:{" "} € {" "}
            {cart.reduce((a, b) => a + parseFloat(b.price), 0).toFixed(2)} 
          </Text>
          <View style={styles.btnContainer}>
            <Button
              style={styles.btnAddToCart}
              onPress={() => clearCartHandler()}
            >
              <Text style={styles.buttonText}>Clear Cart</Text>
            </Button>
          {cart.length === 0 ? ( 
            <Button
              style={styles.btnCheckout}
              onPress={() => checkoutFailed()}
            >
              <Text style={styles.buttonText}>Checkout</Text>
            </Button>
            ) : (
              <Button
              style={styles.btnCheckout}
              onPress={() => checkoutHandler()}
            >
              <Text style={styles.buttonText}>Checkout</Text>
            </Button>
            ) }
          </View>
        </View>
      </>
    );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    width: '90%',
    padding: 10,
    borderBottomRightRadius:40,
    borderBottomLeftRadius: 40,
    borderTopLeftRadius: 5,
    borderTopRightRadius: 5,
    marginTop:'auto',
    marginBottom: 20,
    marginHorizontal: 20,
  },
  containerCart: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
   
  },
    containerCard: {
        flex: 1,
        width: '90%',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: 5,
        marginVertical: 15,
        marginHorizontal: 20,
        padding: 10,
        backgroundColor: '#fff',
        borderRadius: 10,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.8,
        shadowRadius: 2,
        elevation: 5,
    },
    title: {
        color: '#f00',
        fontSize: 22,
        fontWeight: 'bold',
        marginBottom: 10,
    },
    price: {
        color: '#f00',
        fontSize: 20,
        fontWeight: 'bold',
        marginBottom: 10,
        textAlign: 'center',
    },
    img: {
        width: 100,
        height: 100,
        marginBottom: 5,
    },
    btnContainer: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        width: '100%',
        marginBottom: 5,
    },
    
    buttonText: {
        fontSize: 18,
        fontWeight: 'bold',
    },
    text: {
        fontSize: 40,
        fontWeight: 'bold',
        textAlign: 'center',
        marginTop: 170,
        color: '#fff',
    },
    total: {
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 10,
    },
    titleEmpty: {
        fontSize: 35,
        fontWeight: 'bold',
        textAlign: 'center',
        color: '#fff',
        marginTop: 50,
    },
   
    containerTitlePrice: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '100%',
        marginBottom: 10,
    },
    btnRemoveToCart: {
        width: 30,
        height: 40,
        fontSize: 20,
        color: '#fff',
        borderRadius: 50,
    },
    textRemove:{
        fontSize: 15,
        fontWeight: 'bold',
        textAlign: 'center',
        color: '#fff',
    },
    totalItems:{
      color: '#f00',
      fontSize: 22,
      fontWeight: 'bold',
      marginBottom: 10,
    },
    totalPrice:{
      color: '#f00',
      fontSize: 22,
      fontWeight: 'bold',
      marginBottom: 10,
    },
});