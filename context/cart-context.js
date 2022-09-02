import {createContext,useState} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

export const CartContext = createContext({
    cart: [],
    setCart: (cart) => {},
    addToCart: (item) => {},
    removeFromCart: (item) => {},
    clearCart: () => {},
});

export const  CartContextProvider = ({children}) => {
    const [cart, setCart] = useState([]);

    const addToCart = async (item) => {
        const newCart = [...cart, item];
        setCart(newCart);
        try{
            await AsyncStorage.setItem('cart', JSON.stringify(newCart));
        } catch(err){
            console.log(err);
        }
    }

    const removeFromCart = async (item) => {
        const newCart = cart.filter((i) => i.id !== item.id);
        setCart(newCart);
        try{
            await AsyncStorage.setItem('cart', JSON.stringify(newCart));
        } catch(err){
            console.log(err);
        }
    }

    const clearCart = async () => {
        setCart([]);
        try{
            await AsyncStorage.removeItem('cart');
        } catch(err){
            console.log(err);
        }
    }

    const value = {
        cart,
        setCart,
        addToCart,
        removeFromCart,
        clearCart,
    };

    return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}

