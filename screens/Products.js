import React, {useContext,useState,useEffect} from 'react';
import { Data } from '../data';
import {FlatList,Text,View,StyleSheet,Image, Alert} from 'react-native';
import {AuthContext} from '../context/auth-context';
import Button from '../components/UI/Button';
import { CartContext } from '../context/cart-context';



export const Products = () => {
  const authCtx = useContext(AuthContext);

  const crtCtx = useContext(CartContext);
  const { cart, addToCart } = crtCtx;

  const [products, setProducts] = useState([]);

  useEffect(() => {
    //Convert Data.js to a javascript object
    const item = Object.values(Data);
    setProducts(item);
  }, []);

  const addToCartHandler = (item) => {
    Alert.alert(
      "Add to Cart",
      `Are you sure you want to add " ${item.name} " to your cart?`,
      [
        {
          text: "Cancel",
          style: "cancel",
        },
        {
          text: "OK",
          onPress: () => addToCart(item),
        },
      ]
    );
  };

  return (
    <>
      {/*If user is authenticated  and add to cart with context cart*/}
      {authCtx.isAuthenticated ? (
        <FlatList
          data={products}
          renderItem={({ item, index }) => (
            <View style={styles.containerCard} key={index}>
              <Text style={styles.title}>{item.name}</Text>
              <Text style={styles.price}>{item.price}</Text>
              <Image
                style={styles.img}
                source={require("../assets/img/pelatau.jpg")}
              />
              <Button
                style={styles.btnAddToCart}
                onPress={() => addToCartHandler(item)}
              >
                <Text style={styles.buttonText}>Add to cart</Text>
              </Button>
            </View>
          )}
        />
      ) : (
        <FlatList
          data={products}
          renderItem={({ item, index }) => (
            <View style={styles.containerCard} key={index}>
              <Text style={styles.title}>{item.name}</Text>
              <Text style={styles.price}>{item.price}</Text>
              <Image
                style={styles.img}
                source={require("../assets/img/pelatau.jpg")}
              />
            </View>
          )}
        />
      )}
    </>
  );
};

const styles = StyleSheet.create({
  containerCard: {
    marginTop: 35,
    marginBottom: 50,
    width: "60%",
    justifyContent: "center",
    alignItems: "center",
    alignSelf: "center",
    borderRadius: 25,
    backgroundColor: "#fff",
    margin: 10,
    height: "auto",
    elevation: 10,
    shadowColor: "#0f1",
    shadowOffset: { width: 4, height: 3 },
    shadowOpacity: 0.8,
    shadowRadius: 2,
  },
  title: {
    fontSize: 25,
    fontWeight: "bold",
    color: "#f00",
    textAlign: "center",
    marginTop: 10,
  },
  img: {
    width: "50%",
    height: 100,
    marginBottom: 10,
    marginTop: 5,
    borderRadius: 20,
  },
  price: {
    fontSize: 22,
    fontWeight: "bold",
    color: "#f00",
    textAlign: "center",
    marginTop: 5,
    marginBottom: 10,
  },
  btnAddToCart: {
    marginBottom: 10,
    borderRadius: 20,
  },
});
