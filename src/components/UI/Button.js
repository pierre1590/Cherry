import { Pressable, StyleSheet, Text, View } from 'react-native';


function Button({ children, onPress, mode, style }) {
  return (
    <View style={style}>
      <Pressable
        onPress={onPress}
        style={({ pressed }) => pressed && styles.pressed}
      >
        <View style={[styles.button, mode === 'flat' && styles.flat]}>
          <Text style={[styles.buttonText, mode === 'flat' && styles.flatText]}>
            {children}
          </Text>
        </View>
      </Pressable>
    </View>
  );
}

export default Button;

const styles = StyleSheet.create({
  button: {
    borderRadius: 4,
    padding: 8,
    backgroundColor: '#f04',
  },
  flat: {
    backgroundColor: 'transparent',
  },
  buttonText: {
    color: '#fff',
    textAlign: 'center',
    fontSize: 20,
    fontWeight: 'bold',
    backgroundColor: '#f04',
    padding: 2,
  },
  flatText: {
    color: '#fff',
  },
  pressed: {
    opacity: 0.75,
    backgroundColor: '#f00',
    borderRadius: 4,
  },
});
