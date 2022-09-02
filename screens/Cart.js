// Cart Page
import React, {useContext,useEffect,useState} from 'react';
import { StyleSheet, Text, View, Image, FlatList } from 'react-native';
import { AuthContext } from '../context/auth-context';
import { CartContext } from '../context/cart-context';
import { Data } from '../data';
import {Button} from '../components/UI/Button';


export const Cart = () => {

    const crtCtx = useContext(CartContext);
    const {cart} = crtCtx;
    const [products, setProducts] = useState([]);
    const [total, setTotal] = useState(0);
    const [totalItems, setTotalItems] = useState(0);
    const [totalPrice, setTotalPrice] = useState(0);
    const [totalPriceItems, setTotalPriceItems] = useState(0);
  
    useEffect(() => {
        //Convert Data.js to a javascript object
        const item = Object.values(Data);
        setProducts(item);
        }, []);

    const addToCart = (cart) => {
        crtCtx.addToCart(cart);
        setTotalItems(totalItems + 1);
        setTotalPriceItems(totalPriceItems + cart.price);
    }

    const removeFromCart = (cart) => {
        crtCtx.removeFromCart(cart);
        setTotalItems(totalItems - 1);
        setTotalPriceItems(totalPriceItems - cart.price);
    }

    const clearCart = (cart) => {
        crtCtx.clearCart(cart);
        setTotalItems(0);
        setTotalPriceItems(0);
    }


    return (
        <>
        <View>
        {crtCtx.cart.length > 0 ? (
            <FlatList
                data={crtCtx.cart}
                renderItem={({ item }) => (
                    <View style={styles.containerCard}>
                        <Text style={styles.title}>{item.name}</Text>
                        <Text style={styles.price}>{item.price}</Text>
                        <Image
                            style={styles.img}
                            source={require('../assets/img/pelatau.jpg')}
                        />
                        <Button style={styles.btnAddToCart} onPress={removeFromCart}>
                            <Text style={styles.buttonText}>Remove from cart</Text>
                        </Button>
                    </View>
                )}
                keyExtractor={(item) => item.id}
            />
        ) : (
            <Text style={styles.text}>Your cart is empty</Text>
        )}
        </View>
        </>
    );
}

const styles = StyleSheet.create({
    containerCard: {
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        margin: 10,
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
        fontSize: 20,
        fontWeight: 'bold',
        marginBottom: 10,
    },
    price: {
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 10,
    },
    img: {
        width: 100,
        height: 100,
        marginBottom: 10,
    },
    btnContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '100%',
    },
    btnAddToCart: {
        width: '50%',
        height: 40,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#fff',
        borderRadius: 10,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.8,
        shadowRadius: 2,
        elevation: 5,
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
    }
});